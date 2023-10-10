import { HttpRequestResponse } from "../types/types";
import * as https from 'https';
import { superofficeAuthenticationProvider } from "../extension";

export async function httpAuthenticatedRequest<T>(path: string, method: https.RequestOptions["method"], body?: object): Promise<HttpRequestResponse<T>> {
    let session = await superofficeAuthenticationProvider.getCurrentSession();
    if(!session){
        throw new Error("No session found");
    }

    const url = new URL(`${session.claims?.["http://schemes.superoffice.net/identity/webapi_url"]}${path}`);

    let headers: {[key: string]: string} = {
        accept: 'application/json',
        authorization: `Bearer ${session.accessToken}`
    };
    
    if (body) {
        headers['Content-Type'] = 'application/json';
    }

    let options: https.RequestOptions = {
        headers: headers,
        method: method,
        hostname: url.hostname,
        port: url.port ? parseInt(url.port) : 443,
        protocol: url.protocol,
        path: url.pathname
    };
    
    let requestBody = body ? JSON.stringify(body) : undefined; // Stringify only once

    try {
        let response = await executeRequest<T>(options, requestBody) as HttpRequestResponse<T>;

        // Check if the response indicates an expired token
        if (response.status === 401) {
            const oldToken = session.accessToken;
            session = await superofficeAuthenticationProvider.refreshAccessToken(session);

            if (oldToken === session.accessToken) {
                throw new Error("Failed to update access token.");
            }

            options = {
                ...options,
                headers: {
                   ...options.headers,
                   authorization: `Bearer ${session.accessToken}`
                }
             };
             
            response = await executeRequest(options, requestBody) as HttpRequestResponse<T>;

            if (response.status === 401) {
                throw new Error("Access denied: After refreshing the accessToken you are still unauthorized. You might not have the required permissions to access this endpoint.");
            }
        }

        return response;

    } catch (error) {
        // Check if the error is an instance of Error and then access its message property
        if (error instanceof Error) {
            if (error.message.includes("Failed to update access token") || error.message.includes("Access denied")) {
                throw error;
            }
    
            throw new Error("Network error occurred: " + error.message);
        } else {
            throw new Error("Network error occurred.");
        }
    }
}

export async function httpPublicRequest<T>(method: https.RequestOptions["method"], urlString: string, body?: object){
    const url = new URL(urlString);

    let requestOptions: https.RequestOptions = {
        headers: {
            accept: 'application/json',
        },
        hostname: url.hostname,
        port: url.port ? parseInt(url.port) : 443,
        protocol: url.protocol,
        path: url.pathname,
        method: method,
    };

    let requestBody = body ? JSON.stringify(body) : undefined; 

    try {
        return await executeRequest<T>(requestOptions, requestBody) as HttpRequestResponse<T>;
    }
    catch (error) 
{
    if (error instanceof Error) {
        throw error;
    } else {
        throw new Error(`${error}`);
    }
}

}

export async function executeRequest<T>(options: https.RequestOptions, body?: string): Promise<HttpRequestResponse<T>> {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    const responseObject: HttpRequestResponse<T> = {
                        status: res.statusCode!,
                        body: parsedData as T, // Type assertions
                        ok: res.statusCode! >= 200 && res.statusCode! < 300,
                        statusText: res.statusMessage ?? "defaultString"
                    };                    
                    resolve(responseObject);
                } catch (error) {
                    reject(new Error("Failed to parse response data."));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        if (body) {
            req.write(body);
        }

        req.end();
    });
}

