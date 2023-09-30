import * as vscode from 'vscode';
import { createServer, Server } from 'http';
import { parse } from 'url';
import { parse as parseQuery } from 'querystring';
import { setAuthenticationContext, setDebugAuthenticationContext, storeTokenSet } from './tokenService';
// eslint-disable-next-line @typescript-eslint/naming-convention
import { Issuer, TokenSet, generators } from 'openid-client';
import { readDataFromFile } from '../workspace/workspaceFileManager';
import { error } from 'console';

export const debug:boolean = true;

// Configuration variables
const redirectUri = process.env.REDIRECT_URI || 'http://127.0.0.1:8000';
const parsedUri = new URL(redirectUri);
const clientId = process.env.CLIENT_ID || '1a5764a8090f136cc9d30f381626d5fa';

/* eslint-disable @typescript-eslint/naming-convention */
const clientMetadata = {
    client_id: clientId,
    redirect_uri: redirectUri,
    response_types: ['code'], 
    token_endpoint_auth_method: 'none'
};
/* eslint-enable @typescript-eslint/naming-convention */

let superOfficeIssuer: any = null;
let server: Server | null = null;
let codeVerifier: string | null = null;

function getOpenIdConfigUrl(environment: string): string {
    return `https://${environment}.superoffice.com/login/.well-known/openid-configuration`;
}

export const superofficeLogin = async (): Promise<void> => {
    if(debug){
        const tokenSet = new TokenSet(await readDataFromFile('debug.json'));
        await setDebugAuthenticationContext(tokenSet);
    }
    else{
        const environment = await vscode.window.showQuickPick(['sod', 'online'], {
            placeHolder: 'Select an environment',
        });
    
        if (!environment) {
            vscode.window.showInformationMessage('SuperOffice login cancelled');
            return;
        }
    
        try {
            await authorizeRequest(environment);
        } catch (err) {
            console.error(err);
            vscode.window.showErrorMessage('An error occurred while trying to login to SuperOffice');
        }
    }
};

const authorizeRequest = async (environment: string): Promise<boolean> => {
    try {
        startServer();
        const url = await generateAuthorizeUrl(environment);
        await vscode.env.openExternal(vscode.Uri.parse(url));
        return true;
    } catch (error) {
        handleAuthorizeRequestError(error);
        return false;
    }
};

function startServer(): void {
    if (server) {return;}

    server = createServer(async (req, res) => {
        if (!req.url) {return res.end('Request URL not provided during authentication callback.');}

        const parsedUrl = parse(req.url);
        const parsedQuery = parseQuery(parsedUrl.query || '');

        if (!parsedQuery.code) {return res.end('Callback does not contain a code.');}

        const authorizationCode = Array.isArray(parsedQuery.code) ? parsedQuery.code[0] : parsedQuery.code;
        res.end('Received the callback. You may close this page.');

        server?.close();
        server = null;

        await getToken(authorizationCode);

        return;
    });

    server.on('error', err => console.error(`Server error: ${err.message}`));

    // Start server
    server.listen(parseInt(parsedUri.port, 10), parsedUri.hostname);
}

function handleAuthorizeRequestError(error: any): void {
    if (error instanceof Error) {
        vscode.window.showErrorMessage('Failed to open URL: ' + error.message);
    } else {
        console.error(error);
    }
}

async function generateAuthorizeUrl(environment: string): Promise<string> {
    if (!['sod', 'online'].includes(environment)) {throw new Error(`Invalid environment: ${environment}`);}

    superOfficeIssuer = await Issuer.discover(getOpenIdConfigUrl(environment));
    const client = new superOfficeIssuer.Client(clientMetadata);
    const state = generators.state();

    codeVerifier = generators.codeVerifier();
    const codeChallenge = generators.codeChallenge(codeVerifier);

    /* eslint-disable @typescript-eslint/naming-convention */
    const url = client.authorizationUrl({
        scope: 'openid',
        state,
        code_challenge: codeChallenge, 
        code_challenge_method: 'S256'
    });
    /* eslint-enable @typescript-eslint/naming-convention */
    return url;
}

async function getToken(authorizationCode: string): Promise<void> {
    if(!superOfficeIssuer){

    }
    const client = new superOfficeIssuer.Client(clientMetadata);
    try {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const tokenSet = await client.callback(redirectUri, { code: authorizationCode }, { code_verifier: codeVerifier }) as TokenSet;
        await storeTokenSet(tokenSet);
    } catch (error) {
        console.error("Error obtaining token:", error);
    }
}

export async function exchangeRefreshToken(authenticationContext: TokenSet): Promise<void> {
    if(!superOfficeIssuer){
        superOfficeIssuer = await Issuer.discover(`${authenticationContext.claims()['iss']}/login/.well-known/openid-configuration`);
    }
    const client = new superOfficeIssuer.Client(clientMetadata);
    try {
        const tokenSet = await client.refresh(authenticationContext.refresh_token);
        await setAuthenticationContext(tokenSet);
    } catch (err) {
        if (err instanceof Error) {
            throw new Error("Error refreshing token: " + err.message);
        } else {
            throw new Error("Error refreshing token: " + String(err));
        }
    }
}


