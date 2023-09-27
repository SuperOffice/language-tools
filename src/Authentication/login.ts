import * as vscode from 'vscode';
import { createServer, Server } from 'http';
import { parse } from 'url';
import { parse as parseQuery } from 'querystring';
import { storeTokenSet } from '../Helpers/tokenHelper';
const { Issuer, generators } = require('openid-client');

// Configuration variables
const redirectUri = process.env.REDIRECT_URI || 'http://127.0.0.1:8000';
const parsedUri = new URL(redirectUri);
const clientId = process.env.CLIENT_ID || '1a5764a8090f136cc9d30f381626d5fa';

const clientMetadata = {
    client_id: clientId,
    redirect_uri: redirectUri,
    response_types: ['code'], 
    token_endpoint_auth_method: 'none'
};

let superOfficeIssuer: any = null;
let server: Server | null = null;
let codeVerifier: string | null = null;

function getOpenIdConfigUrl(environment: string): string {
    return `https://${environment}.superoffice.com/login/.well-known/openid-configuration`;
}

export const superofficeLogin = async (): Promise<void> => {
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
    if (server) return;

    server = createServer(async (req, res) => {
        if (!req.url) return res.end('Request URL not provided during authentication callback.');

        const parsedUrl = parse(req.url);
        const parsedQuery = parseQuery(parsedUrl.query || '');

        if (!parsedQuery.code) return res.end('Callback does not contain a code.');

        const authorizationCode = Array.isArray(parsedQuery.code) ? parsedQuery.code[0] : parsedQuery.code;
        res.end('Received the callback. You may close this page.');

        server?.close();
        server = null;

        await getToken(authorizationCode);
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
    if (!['sod', 'online'].includes(environment)) throw new Error(`Invalid environment: ${environment}`);

    superOfficeIssuer = await Issuer.discover(getOpenIdConfigUrl(environment));
    const client = new superOfficeIssuer.Client(clientMetadata);
    const state = generators.state();

    codeVerifier = generators.codeVerifier();
    const codeChallenge = generators.codeChallenge(codeVerifier);

    const url = client.authorizationUrl({
        scope: 'openid',
        state,
        code_challenge: codeChallenge, 
        code_challenge_method: 'S256'
    });

    return url;
}

async function getToken(authorizationCode: string): Promise<void> {
    const client = new superOfficeIssuer.Client(clientMetadata);

    try {
        const tokenSet = await client.callback(redirectUri, { code: authorizationCode }, { code_verifier: codeVerifier });
        storeTokenSet(tokenSet);
    } catch (error) {
        console.error("Error obtaining token:", error);
    }
}
