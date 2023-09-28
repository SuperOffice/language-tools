import fetch from "node-fetch";
import { authenticationContext } from "../Helpers/tokenHelper";

interface ResponseData {
    // Define the shape of your expected response data here
    // For example:
    // someKey: string;
}

export async function fetchFromWebApi(): Promise<ResponseData> {
    if (!authenticationContext) {
        throw new Error("authenticationContext not set!");
    }

    const webapiUrl = authenticationContext.webapiUrl;
    if (!webapiUrl) {
        throw new Error("webapiUrl is not set in the authenticationContext!");
    }

    const response = await fetch(`${webapiUrl}v1/Script/`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authenticationContext.accessToken}`,
            Accept: 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch from Web API: ${response.statusText}`);
    }

    const data: any = await response.json();
    console.log(data);
    return data;
}
