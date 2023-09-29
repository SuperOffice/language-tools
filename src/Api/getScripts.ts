import fetch, { Response } from "node-fetch";
import { authenticationContext } from "../Helpers/tokenHelper";
import { findScriptByPrimaryKey } from "../Helpers/documentHelper";

export interface ResponseData {
    "odata.metadata": string;
    "odata.nextLink": null | string;  // Assuming the value can sometimes be a string
    value: ScriptEntity[];
}

export interface ScriptEntity {
    PrimaryKey: string;
    EntityName: string;
    hierarchyId: number;
    hierarchyFullname: string;
    hierarchyName: string;
    hierarchyParentId: number;
    hierarchyFullpathIds: number[];
    ejscriptId: number;
    name: string;
    description: string;
    includeId: string;
    accessKey: string;
    htmlOutput: boolean;
    extraMenuId: number;
    uniqueIdentifier: string;
    registeredBy: string;
    registeredDate: string;  // You might want to consider using Date if you're going to parse and use this as a date
    path: string;
    updatedBy: string;
    updatedDate: string; // Similarly, consider using Date here as well
    screenChooserId: number;
    screenType: string;
    enabled: boolean;
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

    const data: ResponseData = await response.json();
    //await findScriptByPrimaryKey(data, "353");
    return data;
}

export async function fetchRequest(endpoint: string, headers: Map<string, string>): Promise<Response> {
    if (!authenticationContext) {
        throw new Error("authenticationContext not set!");
    }

    const webapiUrl = authenticationContext.webapiUrl;
    if (!webapiUrl) {
        throw new Error("webapiUrl is not set in the authenticationContext!");
    }

     // Convert the headers Map into an object
    const headersObject: { [key: string]: string } = {};
    headers.forEach((value, key) => {
        headersObject[key] = value;
    });

    // Merge the headersObject with the default headers
    const finalHeaders = {
        Authorization: `Bearer ${authenticationContext.accessToken}`,
        ...headersObject
    };

    const response = await fetch(`${webapiUrl}${endpoint}`, {
        method: 'GET',
        headers: finalHeaders
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch from Web API: ${response.statusText}`);
    }
    return response;
}
