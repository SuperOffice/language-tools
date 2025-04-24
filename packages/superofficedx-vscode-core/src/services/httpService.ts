import { Uri } from "vscode";
import { IHttpHandler } from "../handlers/httpHandler";
import { DynamicScriptOdata, ExecuteScriptResponse, ScriptEntity, Scripts, State, SuperOfficeAuthenticationSession, UserClaims } from "../types/index";
import { IFileSystemService } from "./fileSystemService";

export interface IHttpService {
    getTenantState(claims: UserClaims): Promise<State>
    getScriptList(session: SuperOfficeAuthenticationSession): Promise<Scripts>
    getScriptEntity(session: SuperOfficeAuthenticationSession, uniqueIdentifier: string): Promise<ScriptEntity>
    executeScript(session: SuperOfficeAuthenticationSession, script: string): Promise<ExecuteScriptResponse>
    downloadScript(session: SuperOfficeAuthenticationSession, uniqueIdentifier: string): Promise<Uri>
    getDynamicScriptInfo(session: SuperOfficeAuthenticationSession, uniqueIdentifier: string): Promise<DynamicScriptOdata>
}

export class HttpService implements IHttpService {

    constructor(private httpHandler: IHttpHandler, private fileSystemService: IFileSystemService) { }

    get scriptUri() {
        return '/v1/Script/';
    }

    get executeScriptUri() {
        return '/v1/Agents/CRMScript/ExecuteScriptByString';
    }

    private getDynamicUrl(uniqueIdentifier: string) {
        return `/v1/archive/dynamic?$select=ejscript.id,ejscript.type,ejscript.description,ejscript.include_id,ejscript.access_key,ejscript.unique_identifier&$filter=ejscript.unique_identifier eq '${uniqueIdentifier}'`;
    }

    public async getTenantState(claims: UserClaims): Promise<State> {
        try {
            return await this.httpHandler.get<State>(`${claims.iss}/api/state/${claims["http://schemes.superoffice.net/identity/ctx"]}`)
        }
        catch {
            throw new Error('Error getting state for ' + claims["http://schemes.superoffice.net/identity/ctx"]);
        }
    }

    public async getScriptList(session: SuperOfficeAuthenticationSession): Promise<Scripts> {
        try {
            return await this.httpHandler.get<Scripts>(`${session.webApiUri}${this.scriptUri}`,
                {
                    Authorization: `Bearer ${session.accessToken}`,
                    'Accept': 'application/json'
                }
            );
        }
        catch (error) {
            throw new Error('Error getting All Script info: ' + error);
        }
    }

    public async getScriptEntity(session: SuperOfficeAuthenticationSession, uniqueIdentifier: string): Promise<ScriptEntity> {
        try {
            return await this.httpHandler.get<ScriptEntity>(`${session.webApiUri}${this.scriptUri}${uniqueIdentifier}`,
                {
                    Authorization: `Bearer ${session.accessToken}`,
                    'Accept': 'application/json'
                }
            );
        }
        catch (error) {
            throw new Error('Error getting script with : ' + error);
        }
    }

    public async executeScript(session: SuperOfficeAuthenticationSession, script: string): Promise<ExecuteScriptResponse> {
        try {
            return await this.httpHandler.post<ExecuteScriptResponse>(
                `${session.webApiUri}${this.executeScriptUri}`,
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
        catch (error) {
            throw new Error('Error executing script with : ' + error);
        }
    }

    public async downloadScript(session: SuperOfficeAuthenticationSession, uniqueIdentifier: string): Promise<Uri> {
        try {
            const scriptEntity = await this.getScriptEntity(session, uniqueIdentifier);

            // Workaround to get the ejscript.type.. should be returned in the scriptEntity in the future
            const dynamicScriptOdata = await this.getDynamicScriptInfo(session, uniqueIdentifier);
            scriptEntity.Type = dynamicScriptOdata.value[0]["ejscript.type"];
            //
            return await this.fileSystemService.writeScriptToFile(scriptEntity);
        }
        catch (error) {
            throw new Error('Error downloading script with : ' + error);
        }
    }

    public async getDynamicScriptInfo(session: SuperOfficeAuthenticationSession, uniqueIdentifier: string): Promise<DynamicScriptOdata> {
        try {
            const dynamicUri = this.getDynamicUrl(uniqueIdentifier);
            return await this.httpHandler.get<DynamicScriptOdata>(`${session.webApiUri}${dynamicUri}`,
                {
                    Authorization: `Bearer ${session.accessToken}`,
                    'Accept': 'application/json'
                }
            );
        }
        catch (error) {
            throw new Error('Error getting All Script info: ' + error);
        }
    }
}
