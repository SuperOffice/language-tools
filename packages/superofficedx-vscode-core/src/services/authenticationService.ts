import * as http from 'http';
import * as path from 'path';
import * as fs from 'fs';
import { env, ProgressLocation, Uri, window } from 'vscode';
import { v4 as uuid } from 'uuid';
import * as crypto from 'crypto';
import { Token, UserClaims } from '../types';
import { promiseFromEvent } from '../utils';

const CLIENT_ID = `1a5764a8090f136cc9d30f381626d5fa`;
const CALLBACK_HOSTNAME = '127.0.0.1';
const CALLBACK_PORT = 8000;
const CALLBACK_URI = `http://${CALLBACK_HOSTNAME}:${CALLBACK_PORT}/callback`;

export interface IAuthenticationService {
    login(environment: string): Promise<Token>;
    getClaimsFromToken(token: string): UserClaims;
}

export class AuthenticationService implements IAuthenticationService {
    private server: http.Server | null = null;

    private _pendingStates: string[] = [];
    private _codeVerifiers = new Map<string, string>();
    private _scopes = new Map<string, string[]>();
    private _environment: string = "";

    /**
     * Load HTML template from resources folder
     */
    private loadHtmlTemplate(filename: string): string {
        try {
            const resourcesPath = path.join(__dirname, 'resources', filename);
            return fs.readFileSync(resourcesPath, 'utf8');
        } catch (error) {
            console.error(`Failed to load HTML template: ${filename}`, error);
            // Fallback to simple HTML
            if (filename.includes('success')) {
                return `
                    <html>
                    <body style="text-align: center; font-family: system-ui; padding: 50px;">
                        <h1 style="color: #28a745;">Authentication Successful!</h1>
                        <p>You can now close this tab and return to Visual Studio Code.</p>
                    </body>
                    </html>
                `;
            } else {
                return `
                    <html>
                    <body style="text-align: center; font-family: system-ui; padding: 50px;">
                        <h1 style="color: #dc3545;">Authentication Failed</h1>
                        <p>Please try again.</p>
                    </body>
                    </html>
                `;
            }
        }
    }

    /**
      * Log in to OpenId Connect
      */
    public async login(environment: string): Promise<Token> {
        this._environment = environment;

        return await window.withProgress<Token>({
            location: ProgressLocation.Notification,
            title: "Signing in to SuperOffice...",
            cancellable: true,

        }, async (_, token) => {

            const nonceId = uuid();

            const scopes = ['openid']

            const codeVerifier = this.toBase64UrlEncoding(crypto.randomBytes(32));
            const codeChallenge = this.toBase64UrlEncoding(this.sha256(codeVerifier));

            const callbackUri = await env.asExternalUri(Uri.parse(CALLBACK_URI));
            const callbackQuery = new URLSearchParams(callbackUri.query);
            const stateId = callbackQuery.get('state') || nonceId;

            this._pendingStates.push(stateId);
            this._codeVerifiers.set(stateId, codeVerifier);
            this._scopes.set(stateId, scopes);

            const searchParams = new URLSearchParams([
                ['response_type', "code"],
                ['client_id', CLIENT_ID],
                ['redirect_uri', CALLBACK_URI],
                ['state', stateId],
                ['scope', scopes.join(' ')],
                ['code_challenge_method', 'S256'],
                ['code_challenge', codeChallenge],
            ]);

            const uri = Uri.parse(`https://${this._environment}.superoffice.com/login/common/oauth/authorize?${searchParams.toString()}`);

            await env.openExternal(uri);

            try {
                return await Promise.race([
                    await this.callback(60000),
                    new Promise<string>((_, reject) => setTimeout(() => reject('Cancelled'), 60000)),
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    promiseFromEvent<any, any>(token.onCancellationRequested, (_, __, reject) => { reject('User Cancelled'); }).promise
                ])
            }
            finally {
                this._pendingStates = this._pendingStates.filter(n => n !== stateId);
            }
        });
    }

    private async callback(timeout: number): Promise<Token> {
        return new Promise<Token>((resolve, reject) => {
            if (this.server) return reject(new Error('Server already started'));

            this.server = http.createServer(async (req, res) => {
                try {

                    if (!req.url) {
                        throw new Error('Request URL not provided during authentication callback.');
                    }

                    const url = new URL(req.url, `http://${CALLBACK_HOSTNAME}:${CALLBACK_PORT}`);

                    if (url.pathname !== '/callback') {
                        throw new Error('Invalid callback path.');
                    }

                    const query = url.searchParams;
                    const code = query.get('code');
                    const stateId = query.get('state');

                    if (!code) {
                        reject(new Error('Callback does not contain a code.'));
                        return;
                    }
                    if (!stateId) {
                        reject(new Error('Callback does not contain a state.'));
                        return;
                    }

                    const codeVerifier = this._codeVerifiers.get(stateId);
                    if (!codeVerifier) {
                        reject(new Error('No code verifier'));
                        return;
                    }

                    // Check if it is a valid auth request started by the extension
                    if (!this._pendingStates.some(n => n === stateId)) {
                        reject(new Error('State not found'));
                        return;
                    }

                    const body = `client_id=${CLIENT_ID}&code=${code}&grant_type=authorization_code&redirect_uri=${CALLBACK_URI}&code_verifier=${codeVerifier}`;

                    const response = await fetch(`https://${this._environment}.superoffice.com/login/common/oauth/tokens`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "Accept": "application/json"
                        },
                        body
                    });

                    const tokenInformation = await response.json() as Token;

                    // Send a confirmation page to the browser
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(this.loadHtmlTemplate('auth-success.html'));
                    // res.end(`
                    //     <html>
                    //     <body>
                    //         <h1>Authentication Successful!</h1>
                    //         <p>You can close this tab and return to Visual Studio Code.</p>
                    //     </body>
                    //     </html>
                    // `);

                    resolve(tokenInformation);

                } catch (error) {
                    // Send error feedback to the browser if possible
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    const errorHtml = this.loadHtmlTemplate('auth-error.html')
                        .replace('{{ERROR_MESSAGE}}', (error as Error).message);
                    res.end(errorHtml);
                    reject(error);
                } finally {
                    this.closeServer();
                }
            });

            this.server.on('error', (error) => {
                reject(new Error(`Server error: ${error.message}`));
                this.closeServer();
            });

            this.server.listen(CALLBACK_PORT, CALLBACK_HOSTNAME, () => {
                console.log(`Server listening on ${CALLBACK_HOSTNAME}:${CALLBACK_PORT}`);
            });

            // Timeout to reject the promise if no callback is received within the specified time
            setTimeout(() => {
                reject(new Error('Authorization timed out'));
                this.closeServer();
            }, timeout);
        });
    }

    private closeServer(): void {
        if (this.server) {
            this.server.close();
            this.server = null;
        }
    }

    private toBase64UrlEncoding(buffer: Buffer): string {
        return buffer.toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');
    }

    private sha256(buffer: string | Uint8Array): Buffer {
        return crypto.createHash('sha256').update(buffer).digest();
    }

    public getClaimsFromToken(token: string): UserClaims {
        const arrayToken = token.split('.');
        const userClaims = JSON.parse(atob(arrayToken[1])) as UserClaims;
        return userClaims;
    }
}
