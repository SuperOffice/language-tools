import { fetchRequest } from "./requestService";
import { ScriptEntity, ScriptResponseData } from "./types";

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
    const responseData: ScriptResponseData = await response.json();
    return responseData;
}

export async function getScriptEntity(uniqueIdentifier: string): Promise<ScriptEntity> {
    const response = await fetchRequest(`${SCRIPT_ENDPOINT_URI}${uniqueIdentifier}`, {
        method: 'GET',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Accept: MIME_TYPE_JSON
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch all scripts from Web API: ${response.statusText}`);
    }
    const responseData: ScriptEntity = await response.json();
    return responseData;
}