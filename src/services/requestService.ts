import fetch, { Response } from "node-fetch";
import { authenticationContext } from "./tokenService";
import { exchangeRefreshToken } from "./authService";
import { RequestParams } from "./types";

// export async function fetchRequest(endpoint: string, headers: { [key: string]: string }): Promise<Response> {
//     if (!authenticationContext) {
//         throw new Error("authenticationContext not set!");
//     }

//     const webapiUrl = authenticationContext.claims()['http://schemes.superoffice.net/identity/webapi_url'];
//     if (!webapiUrl) {
//         throw new Error("webapiUrl is not set in the authenticationContext!");
//     }

//     // Add Authorization header
//     const requestHeaders = {
//         ...headers,
//         /* eslint-disable-next-line @typescript-eslint/naming-convention */
//         Authorization: `Bearer ${authenticationContext.access_token}`
//     };

//     let response: Response;
//     try {
//         response = await fetch(`${webapiUrl}${endpoint}`, {
//             headers: requestHeaders
//         });

//         // Check if the response indicates an expired token
//         if (response.status === 401) {
//             // Attempt to refresh the token
//             await exchangeRefreshToken(authenticationContext);

//             // Retry the request with the new token
//             const newRequestHeaders = {
//                 ...headers,
//                 /* eslint-disable-next-line @typescript-eslint/naming-convention */
//                 Authorization: `Bearer ${authenticationContext.access_token}`
//             };
//             response = await fetch(`${webapiUrl}${endpoint}`, {
//                 headers: newRequestHeaders
//             });

//             if (response.status === 401) {
//                 throw new Error("Access denied: After refreshing the accessToken you are still unauthorized. You might not have the required permissions to access this endpoint.");
//             }
//         }
//     } catch (error) {
//         // This block will handle network-related errors, server not reachable, etc.
//         if (error instanceof Error) {
//             throw new Error("Network error occurred: " + error.message);
//         } else {
//             throw new Error("Network error occurred.");
//         }
//     }

//     if (!response.ok) {
//         throw new Error(`Failed to fetch from Web API: ${response.statusText}`);
//     }
//     return response;
// }

export async function fetchRequest(request: RequestParams): Promise<Response> {
    if (!authenticationContext) {
        throw new Error("authenticationContext not set!");
    }

    const webapiUrl = authenticationContext.claims()['http://schemes.superoffice.net/identity/webapi_url'];

    if (typeof webapiUrl !== 'string') {
        throw new Error("webapiUrl is not set in the authenticationContext or is not a string!");
    }

    // Add Authorization and possibly Content-Type header
    const requestHeaders: { [key: string]: string } = {
        ...request.headers,
        /* eslint-disable-next-line @typescript-eslint/naming-convention */
        Authorization: `Bearer ${authenticationContext.access_token}`
    };

    if (request.body) {
        requestHeaders["Content-Type"] = "application/json";   // Set Content-Type to JSON if there's a body
    }

    let response: Response;
    try {
        response = await executeRequest(webapiUrl, request.endpoint, request.method, requestHeaders, request.body && JSON.stringify(request.body));

        // Check if the response indicates an expired token
        if (response.status === 401) {
            // Attempt to refresh the token
            try {
                await exchangeRefreshToken(authenticationContext);
            }
            catch (err) {
                throw new Error("Failed to use refreshtoken.. you need to -re-authenticate");
            }
            // Retry the request with the new token
            const newRequestHeaders = {
                ...request.headers,
                /* eslint-disable-next-line @typescript-eslint/naming-convention */
                Authorization: `Bearer ${authenticationContext.access_token}`
            };

            response = await executeRequest(webapiUrl, request.endpoint, request.method, newRequestHeaders, request.body && JSON.stringify(request.body));

            if (response.status === 401) {
                throw new Error("Access denied: After refreshing the accessToken you are still unauthorized. You might not have the required permissions to access this endpoint.");
            }
        }
    } catch (error) {
        // This block will handle network-related errors, server not reachable, etc.
        if (error instanceof Error) {
            throw new Error("Network error occurred: " + error.message);
        } else {
            throw new Error("Network error occurred.");
        }
    }

    if (!response.ok) {
        throw new Error(`Failed to fetch from Web API: ${response.statusText}`);
    }
    return response;
}

async function executeRequest(webapiUrl: string, endpoint: string, method: string, requestHeaders: { [key: string]: string }, body?: string) {
    return await fetch(`${webapiUrl}${endpoint}`, {
        method: method,
        headers: requestHeaders,
        body: body
    });
}




