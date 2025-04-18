import { Client, ClientMetadata, generators, Issuer, TokenSet } from 'openid-client';
import { AuthFlow } from '../constants';
import * as http from 'http';

export interface IAuthenticationService {
    generateAuthorizeUrl(environment: typeof AuthFlow.ENVIRONMENT[number]): Promise<string>;
    startServer(timeout: number): Promise<TokenSet>;
}

export class AuthenticationService implements IAuthenticationService {
    private issuer: Issuer | undefined;
    private client: Client | undefined;
    private server: http.Server | null = null;
    private codeVerifier: string | null = null;
    private parsedUri: URL = new URL(AuthFlow.REDIRECT_URI);

    public async generateAuthorizeUrl(environment: typeof AuthFlow.ENVIRONMENT[number]): Promise<string> {
        try {
            this.issuer = await Issuer.discover(AuthFlow.getDiscoveryUrl(environment));
            const clientMetadata: ClientMetadata = {
                client_id: process.env.CLIENT_ID || AuthFlow.CLIENT_ID,
                redirect_uri: process.env.REDIRECT_URI || AuthFlow.REDIRECT_URI,
                response_types: ['code'],
                token_endpoint_auth_method: 'none',
            };

            this.client = new this.issuer.Client(clientMetadata);
            const state = generators.state();
            this.codeVerifier = generators.codeVerifier();
            const codeChallenge = generators.codeChallenge(this.codeVerifier);

            return this.client.authorizationUrl({
                scope: 'openid',
                state,
                code_challenge: codeChallenge,
                code_challenge_method: 'S256',
            });
        } catch (error) {
            throw new Error("Error generating authorization URL: " + (error instanceof Error ? error.message : String(error)));
        }
    }

    public async startServer(timeout: number): Promise<TokenSet> {
        return new Promise<TokenSet>((resolve, reject) => {
            if (this.server) return reject(new Error('Server already started'));
    
            this.server = http.createServer(async (req, res) => {
                try {
                    if (!req.url) {
                        throw new Error('Request URL not provided during authentication callback.');
                    }
    
                    const url = new URL(req.url, `http://${this.parsedUri.hostname}:${this.parsedUri.port}`);
                    
                    if (url.pathname === '/favicon.ico') {
                        res.writeHead(204); // Respond with "No Content" for favicon requests
                        return res.end();
                    }
    
                    if (url.pathname !== '/') {
                        throw new Error('Invalid callback path.');
                    }
    
                    const authorizationCode = url.searchParams.get('code');
                    if (!authorizationCode) {
                        throw new Error('Callback does not contain a code.');
                    }
    
                    // Send a confirmation page to the browser
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(`
                        <html>
                        <body>
                            <h1>Authentication Successful!</h1>
                            <p>You can close this tab and return to Visual Studio Code.</p>
                        </body>
                        </html>
                    `);
    
                    // Exchange the authorization code for a token
                    const token = await this.exchangeAuthorizationCode(authorizationCode);
                    resolve(token);
                } catch (error) {
                    // Send error feedback to the browser if possible
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end(`
                        <html>
                        <body>
                            <h1>Authentication Failed</h1>
                            <p>${(error as Error).message}</p>
                        </body>
                        </html>
                    `);
                    reject(error);
                } finally {
                    this.closeServer();
                }
            });
    
            this.server.on('error', (error) => {
                reject(new Error(`Server error: ${error.message}`));
                this.closeServer();
            });
    
            this.server.listen(parseInt(this.parsedUri.port, 10), this.parsedUri.hostname, () => {
                console.log(`Server listening on ${this.parsedUri.hostname}:${this.parsedUri.port}`);
            });
    
            // Timeout to reject the promise if no callback is received within the specified time
            setTimeout(() => {
                reject(new Error('Authorization timed out'));
                this.closeServer();
            }, timeout);
        });
    }

    private async exchangeAuthorizationCode(authorizationCode: string): Promise<TokenSet> {
        if (!this.client || !this.codeVerifier) {
            throw new Error("Client or codeVerifier not initialized");
        }

        try {
            const token = await this.client.callback(
                AuthFlow.REDIRECT_URI,
                { code: authorizationCode },
                { code_verifier: this.codeVerifier }
            ) as TokenSet;
            this.codeVerifier = null; // Clear code verifier after use
            return token;
        } catch (error) {
            throw new Error("Error obtaining token: " + (error instanceof Error ? error.message : String(error)));
        }
    }

    private closeServer(): void {
        if (this.server) {
            this.server.close();
            this.server = null;
        }
    }
}
