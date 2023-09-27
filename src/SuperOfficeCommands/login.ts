import * as vscode from 'vscode';
import { createServer, Server } from 'http';
import { parse } from 'url';
import { parse as parseQuery } from 'querystring';
import { storeTokenSet } from '../Helpers/tokenHelper';
const { Issuer, generators } = require('openid-client');

//Variables
const redirectUri = process.env.REDIRECT_URI || 'http://127.0.0.1:8000';
const parsedUri = new URL(redirectUri);
const clientId = process.env.CLIENT_ID || '1a5764a8090f136cc9d30f381626d5fa';


let server: Server | null = null;
let codeVerifier: string | null = null;  // To hold our generated code verifier

export const superofficeLogin = async (): Promise<void> => {
    try {
        // Ask the user to select an environment
        const environment = await vscode.window.showQuickPick(['sod', 'online'], {
            placeHolder: 'Select an environment',
        });

        if (!environment) {  // If the user cancels the input box
            vscode.window.showInformationMessage('SuperOffice login cancelled');
            return;
        }

        await authorizeRequest(environment);
    } 
    catch (err) {
        console.error(err);
        vscode.window.showErrorMessage('An error occurred while trying to login to SuperOffice');
    }
};

const authorizeRequest = async (environment: string): Promise<boolean> => {
    try {
        startServer(environment);
        const url = await generateAuthorizeUrl(environment);
        await vscode.env.openExternal(vscode.Uri.parse(url));
        return true;
    } catch (error) {
        handleAuthorizeRequestError(error);
        return false;
    }
};

function startServer(environment: string): void {
    if (server){return;}; // If server exists, exit early

    server = createServer(async (req, res) => {
        if (!req.url) {
            return res.end('Request URL was not provided during SuperOffice authentication callback.');
        }

        const parsedUrl = parse(req.url);
        const parsedQuery = parseQuery(parsedUrl.query || '');

        if (!parsedQuery.code) {
            return res.end('Callback does not contain a code.');
        }

        const authorizationCode = Array.isArray(parsedQuery.code) ? parsedQuery.code[0] : parsedQuery.code;
        res.end('Received the callback. You may close this page.');
        server?.close(() => {
            console.log('Server stopped after receiving the callback.');
        });
        server = null;

        await getToken(authorizationCode, environment);
    });

    server.on('error', err => {
        console.error(`Server error: ${err.message}`);
    });

    // Start listening on port 8000
    server.listen(parseInt(parsedUri.port, 10), parsedUri.hostname, () => {
        console.log(`Server listening on ${redirectUri}`);
    });
}

function handleAuthorizeRequestError(error: any): void {
    if (error instanceof Error) {
        vscode.window.showErrorMessage('Failed to open URL: ' + error.message);
    } else {
        // Handle or log the error in some other way if it's not an instance of Error
        console.error(error);
    }
}

async function generateAuthorizeUrl(environment: string): Promise<string> {
    try {
        if (!['sod', 'online'].includes(environment)) {
            throw new Error(`Invalid environment provided: ${environment}`);
        }

        const superOfficeIssuer = await Issuer.discover('https://' + environment + '.superoffice.com/login/.well-known/openid-configuration');

        const clientMetadata = {
            client_id: clientId,
            redirect_uri: redirectUri,
            response_types: ['code'],
        };

        const client = new superOfficeIssuer.Client(clientMetadata);

        const state = generators.state();

        // 1. Generate a new PKCE code verifier and challenge
        codeVerifier = generators.codeVerifier();
        const codeChallenge = generators.codeChallenge(codeVerifier);

        const url = client.authorizationUrl({
            scope: 'openid',
            state,
            code_challenge: codeChallenge,
            code_challenge_method: 'S256',  // Use S256 method for the code challenge
        });

        return url;
    } catch (error) {
        console.error("An error occurred:", error);
        throw error;
    }
}

// Additional method to get tokens
async function getToken(authorizationCode: string, environment: string): Promise<void> {
    try {
        const superOfficeIssuer = await Issuer.discover('https://' + environment + '.superoffice.com/login/.well-known/openid-configuration');
        const clientMetadata = {
            client_id: clientId,
            redirect_uri: redirectUri,
            response_types: ['code'],
            token_endpoint_auth_method: 'none'
        };
        const client = new superOfficeIssuer.Client(clientMetadata);
        
        const tokenSet = await client.callback(redirectUri, { code: authorizationCode }, { code_verifier: codeVerifier });
        // Save tokens for your needs
        storeTokenSet(tokenSet);

    } catch (error) {
        console.error("Error getting the token:", error);
    }
}
