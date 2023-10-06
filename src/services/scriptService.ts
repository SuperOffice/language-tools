import { fetchRequest } from "./requestService";
import { ExecuteScriptResponse, RequestParams, ScriptEntity, ScriptResponseData } from "./types";
import { CONFIG_SCRIPTSERVICE } from '../config';

export async function getAllScriptInfo(): Promise<ScriptResponseData> {
    const request: RequestParams = {
        endpoint: CONFIG_SCRIPTSERVICE.SCRIPT_ENDPOINT_URI,
        headers: { // eslint-disable-next-line @typescript-eslint/naming-convention 
            Accept: CONFIG_SCRIPTSERVICE.MIME_TYPE_JSON
        },
        method: 'GET'
    };
    const response = await fetchRequest(request);

    if (!response.ok) {
        throw new Error(`Failed to fetch all scripts from Web API: ${response.statusText}`);
    }
    const responseData: ScriptResponseData = await response.json();
    return responseData;
}

export async function getScriptEntity(uniqueIdentifier: string): Promise<ScriptEntity> {
    const request: RequestParams = {
        endpoint: `${CONFIG_SCRIPTSERVICE.SCRIPT_ENDPOINT_URI}${uniqueIdentifier}`,
        headers: { // eslint-disable-next-line @typescript-eslint/naming-convention 
            Accept: CONFIG_SCRIPTSERVICE.MIME_TYPE_JSON
        },
        method: 'GET'
    };

    const response = await fetchRequest(request);

    if (!response.ok) {
        throw new Error(`Failed to fetch all scripts from Web API: ${response.statusText}`);
    }
    const responseData: ScriptEntity = await response.json();
    return responseData;
}

export async function executeScript(script: string): Promise<ExecuteScriptResponse>{
    const request: RequestParams = {
        endpoint: `${CONFIG_SCRIPTSERVICE.EXECUTESCRIPT_ENDPOINT_URI}`,
        headers: { // eslint-disable-next-line @typescript-eslint/naming-convention 
            Accept: CONFIG_SCRIPTSERVICE.MIME_TYPE_JSON
        },
        method: 'POST',
        body: {
            /* eslint-disable @typescript-eslint/naming-convention */
            Script: script,
            Parameters: {
                "Parameters1": "mandatory"
            }
            /* eslint-enable @typescript-eslint/naming-convention */
        }
    };
    const response = await fetchRequest(request);

    if (!response.ok) {
        throw new Error(`Failed to fetch all scripts from Web API: ${response.statusText}`);
    }
    const responseData: ExecuteScriptResponse = await response.json();
    return responseData;
}