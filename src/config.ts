/* eslint-disable @typescript-eslint/naming-convention */
type CONFIG = {
    SUO_FILE_NAME: string;
};

export const CONFIG: CONFIG = { 
    SUO_FILE_NAME: '.suo' 
};

type ScriptServiceConfig = {
    SCRIPT_ENDPOINT_URI: string;
    MIME_TYPE_JSON: string;
    EXECUTESCRIPT_ENDPOINT_URI: string;
};

export const CONFIG_SCRIPTSERVICE: ScriptServiceConfig = {
    SCRIPT_ENDPOINT_URI: 'v1/Script/',
    MIME_TYPE_JSON: 'application/json',
    EXECUTESCRIPT_ENDPOINT_URI: 'v1/Agents/CRMScript/ExecuteScriptByString'
};
