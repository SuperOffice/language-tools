import { Client, ClientMetadata, generators, Issuer, TokenSet } from 'openid-client';
import { AuthFlow } from '../constants';
import * as vscode from 'vscode';
import * as http from 'http';

export interface IAuthenticationService {
    /**
     * Initiates the authentication process and retrieves a session.
     * @returns A promise that resolves to a user session.
     */
    authenticate(environment: typeof AuthFlow.ENVIRONMENT[number]): Promise<TokenSet>;
  }
  

export class AuthenticationService implements IAuthenticationService {

    private issuer: Issuer | undefined;
    private client: Client | undefined;
    private server: http.Server | null = null;
    private codeVerifier: string | null = null;
    private parsedUri: URL = new URL(AuthFlow.REDIRECT_URI);

    public async authenticate(environment: typeof AuthFlow.ENVIRONMENT[number]): Promise<TokenSet> {
        try {
            const url = await this.generateAuthorizeUrl(environment);
            
            await vscode.env.openExternal(vscode.Uri.parse(url));
            
            // Start the HTTP server to listen for the callback
            return await this.startServer();

        } catch (error) {
            this.handleAuthorizeRequestError(error);
            throw error;
        }
    }

    private async generateAuthorizeUrl(environment: typeof AuthFlow.ENVIRONMENT[number]): Promise<string> {   
       this.issuer = await Issuer.discover(AuthFlow.getDiscoveryUrl(environment));

        const clientMetadata: ClientMetadata = {
            client_id: process.env.CLIENT_ID || AuthFlow.CLIENT_ID,
            redirect_uri: process.env.REDIRECT_URI || AuthFlow.REDIRECT_URI,
            response_types: ['code'], 
            token_endpoint_auth_method: 'none'
        }

        this.client = new this.issuer.Client(clientMetadata);
        const state = generators.state();
        this.codeVerifier = generators.codeVerifier();
        const codeChallenge = generators.codeChallenge(this.codeVerifier);
    
        const url = this.client.authorizationUrl({
            scope: 'openid',
            state,
            code_challenge: codeChallenge, 
            code_challenge_method: 'S256'
        });

        return url;
    }

    private async startServer(): Promise<TokenSet> {
        return new Promise<TokenSet>((resolve, reject) => {
            if (this.server) return reject(new Error('Server already started'));
    
            this.server = http.createServer(async (req, res) => {
                if (!req.url) {
                    res.end('Request URL not provided during authentication callback.');
                    return reject(new Error('Request URL not provided during authentication callback.'));
                }
                
                
                const query = new URLSearchParams(req.url.split('?')[1]);

                // Display a user-friendly page with optional redirection
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                    <body>
                        <h1>Authentication successful!</h1>
                        <p>You can close this tab and return to Visual Studio Code.</p>
                    </body>
                    </html>
                `);

                const authorizationCode = query.get('code');
                if (!authorizationCode) {
                    res.end('Callback does not contain a code.');
                    return reject(new Error('Callback does not contain a code.'));
                }
                   try {
                    const token = await this.exchangeAuthorizationCode(authorizationCode as string);
                    resolve(token);
                } catch (error) {
                    reject(error);
                } finally {
                    this.server?.close();
                    this.server = null;
                }
            });
    
            this.server.on('error', reject);
            
            // Start server
            this.server.listen(parseInt(this.parsedUri.port, 10), this.parsedUri.hostname, () => {
                console.log(`Server listening on ${this.parsedUri.hostname}:${this.parsedUri.port}`);
            });
    
            // Timeout to prevent indefinite waiting
            setTimeout(() => {
                reject(new Error('Authorization timed out'));
            }, 30000);
        });
    }

    private async exchangeAuthorizationCode(authorizationCode: string): Promise<TokenSet> {
        if (!this.issuer) {
            throw new Error("Issuer not initialized");
        }
        
        try {
            if(this.client && this.codeVerifier) {
                return await this.client.callback(AuthFlow.REDIRECT_URI, { code: authorizationCode }, { code_verifier: this.codeVerifier }) as TokenSet;
            }
            else {
                throw new Error("Client or codeVerifier not initialized");
            }
        } 
        catch (error) {
            if (error instanceof Error) {
                throw new Error("Error obtaining token: " + error.message);
            } else {
                throw new Error("Error obtaining token: " + String(error));
            }
        }
    }

    private handleAuthorizeRequestError(error: unknown): void {
        if (error instanceof Error) {
            vscode.window.showErrorMessage('Failed to open URL: ' + error.message);
        } else {
            console.error(error);
        }
    }
}    