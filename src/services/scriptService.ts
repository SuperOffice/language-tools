import { fetchRequest } from "./requestService";
import { ScriptResponseData } from "./types";

const SCRIPT_ENDPOINT_URI: string = 'v1/Script/';
const MIME_TYPE_JSON = 'application/json';

export async function getAllScriptInfo(): Promise<ScriptResponseData> {
    const response = await fetchRequest(`${SCRIPT_ENDPOINT_URI}`, {
        method: 'GET',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Accept: MIME_TYPE_JSON
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch all scripts from Web API: ${response.statusText}`);
    }
    const scriptResponseData: ScriptResponseData = await response.json();
    return scriptResponseData;
}

export async function getScriptEntity(uniqueIdentifier: string): Promise<string> {
    const response = await fetchRequest(`${SCRIPT_ENDPOINT_URI}${uniqueIdentifier}`, {
        method: 'GET',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Accept: MIME_TYPE_JSON
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch all scripts from Web API: ${response.statusText}`);
    }
    return await response.text();
}