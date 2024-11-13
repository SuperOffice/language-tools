export const Core = {
    EXTENSION_NAME: 'superoffice.superofficedx-vscode-core',
} as const;

export const AuthProvider = {
    ID: 'superoffice',
    LABEL: 'SuperOffice',
    SUO_FILE_PATH: './.superoffice/.suo',
} as const;

export const AuthFlow = {
    ENVIRONMENT: ['sod', 'online'],
    getDiscoveryUrl: (environment: string) => 
        `https://${environment}.superoffice.com/login/.well-known/openid-configuration`,
    REDIRECT_URI: 'http://127.0.0.1:8000',
    CLIENT_ID: '1a5764a8090f136cc9d30f381626d5fa',
    getStateUrl: (environment: string, contextIdentifier: string) => 
        `https://${environment}.superoffice.com/api/state/${contextIdentifier}`,

} as const;


export const TreeView = {
    ID: 'superOfficeDX.scriptExplorer'
} as const;

// Commands
export const Commands = {
    START_NATIVE_APP_FLOW: 'superOfficeDX.startNativeAppFlow',
    VIEW_SCRIPT_DETAILS: 'superOfficeDX.viewScriptDetails',
    PREVIEW_SCRIPT: 'superOfficeDX.previewScript',
    DOWNLOAD_SCRIPT: 'superOfficeDX.downloadScript',
    DOWNLOAD_SCRIPT_FOLDER: 'superOfficeDX.downloadScriptFolder',
    EXECUTE_SCRIPT: 'superOfficeDX.executeScript',
    EXECUTE_SCRIPT_Locally: 'superOfficeDX.executeScriptLocally',
    VFS_SCHEME: 'vfs',
    LOGOUT: 'superOfficeDX.logout'
} as const;

export const Endpoints = {
    SCRIPT_URI: '/v1/Script/',
    EXECUTESCRIPT_ENDPOINT_URI: '/v1/Agents/CRMScript/ExecuteScriptByString'
}