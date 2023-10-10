import { httpAuthenticatedRequest } from "./httpService";
import { ExecuteScriptResponse, ScriptEntity, ScriptInfoArray } from "../types/types";
import { CONFIG_SCRIPTSERVICE } from '../config';
import * as https from 'https';

// Helper function for error checking and response extraction
const fetchAndCheck = async <T>(endpoint: string, method: https.RequestOptions["method"], errorMessagePrefix: string, body?: object): Promise<T> => {
    const response = await httpAuthenticatedRequest<T>(endpoint, method, body);
    if (!response.ok) {
        throw new Error(`${errorMessagePrefix}: ${response.statusText}`);
    }
    return response.body;
};

export const getAllScriptInfo = async (): Promise<ScriptInfoArray> => {
    return fetchAndCheck<ScriptInfoArray>(CONFIG_SCRIPTSERVICE.SCRIPT_ENDPOINT_URI, 'GET', 'Failed to get script info');
};

export const getScriptEntity = async (uniqueIdentifier: string): Promise<ScriptEntity> => {
    return fetchAndCheck<ScriptEntity>(`${CONFIG_SCRIPTSERVICE.SCRIPT_ENDPOINT_URI}${uniqueIdentifier}`, 'GET', 'Failed to get script entity');
};

export const executeScript = async (script: string): Promise<ExecuteScriptResponse> => {
    const payload = {
        script: script,
        parameters: {
            "parameters1": "mandatory"
        }
    };
    return fetchAndCheck<ExecuteScriptResponse>(CONFIG_SCRIPTSERVICE.EXECUTESCRIPT_ENDPOINT_URI, 'POST', 'Failed to execute script', payload);
};