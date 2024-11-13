import { Uri } from "vscode";
import { AuthFlow, Endpoints } from "../constants";
import { IHttpHandler } from "../handlers/httpHandler";
import { ExecuteScriptResponse, ScriptEntity, Scripts, State, SuperOfficeAuthenticationSession } from "../types/index";
import { IFileSystemService } from "./fileSystemService";

export interface IHttpService {
    getTenantStateAsync(environment: typeof AuthFlow.ENVIRONMENT[number], contextIdentifier: string): Promise<State>
    getScriptListAsync(session: SuperOfficeAuthenticationSession): Promise<Scripts>
    getScriptEntityAsync(session: SuperOfficeAuthenticationSession, uniqueIdentifier: string): Promise<ScriptEntity>
    executeScriptAsync(session: SuperOfficeAuthenticationSession, script: string): Promise<ExecuteScriptResponse>
    downloadScriptAsync(session: SuperOfficeAuthenticationSession, uniqueIdentifier: string): Promise<Uri>
}

export class HttpService implements IHttpService {

    constructor(private httpHandler: IHttpHandler, private fileSystemService: IFileSystemService) { }

    async getTenantStateAsync(environment: typeof AuthFlow.ENVIRONMENT[number], contextIdentifier: string): Promise<State> {
        try {
            return await this.httpHandler.get<State>(AuthFlow.getStateUrl(environment, contextIdentifier));
        }
        catch {
            throw new Error('Error getting state for ' + contextIdentifier);
        }
    }

    async getScriptListAsync(session: SuperOfficeAuthenticationSession): Promise<Scripts> {
        try {
            return await this.httpHandler.get<Scripts>(`${session.webApiUri}${Endpoints.SCRIPT_URI}`, 
                { 
                    Authorization: `Bearer ${session.accessToken}`,
                    'Accept': 'application/json' 
                }
            );
        }
        catch(error) {
            throw new Error('Error getting All Script info: ' + error);
        }
    }

    async getScriptEntityAsync(session: SuperOfficeAuthenticationSession, uniqueIdentifier: string): Promise<ScriptEntity> {
        try {
            return await this.httpHandler.get<ScriptEntity>(`${session.webApiUri}${Endpoints.SCRIPT_URI}${uniqueIdentifier}`, 
                { 
                    Authorization: `Bearer ${session.accessToken}`,
                    'Accept': 'application/json' 
                }
            );
        }
        catch(error) {
            throw new Error('Error getting script with : ' + error);
        }
    }

    async executeScriptAsync(session: SuperOfficeAuthenticationSession, script: string): Promise<ExecuteScriptResponse> {
        try {
            return await this.httpHandler.post<ExecuteScriptResponse>(
                `${session.webApiUri}${Endpoints.EXECUTESCRIPT_ENDPOINT_URI}`, 
                { 
                    script: script,
                    parameters: {
                        "parameters1": "mandatory"
                    }
                },
                { 
                    Authorization: `Bearer ${session.accessToken}`,
                    'Accept': 'application/json' 
                }
            );
        }
        catch(error) {
            throw new Error('Error executing script with : ' + error);
        }
    }

    async downloadScriptAsync(session: SuperOfficeAuthenticationSession, uniqueIdentifier: string): Promise<Uri> {
        try {
            const scriptEntity = await this.getScriptEntityAsync(session, uniqueIdentifier);
            return await this.fileSystemService.writeScriptToFile(scriptEntity);
        }
        catch(error) {
            throw new Error('Error downloading script with : ' + error);
        }
    }
}
