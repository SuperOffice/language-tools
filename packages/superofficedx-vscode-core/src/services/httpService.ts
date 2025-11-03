import { Uri } from "vscode";
import { IHttpHandler } from "../handlers";
import { DynamicScriptOdata, ExecuteScriptResponse, Hierarchy, ScriptEntity, Scripts, State, SuperOfficeAuthenticationSession, UserClaims } from "../types/index";
import { IFileSystemService } from "./fileSystemService";

export interface IHttpService {
    getTenantState(claims: UserClaims): Promise<State>;
    getScriptList(session: SuperOfficeAuthenticationSession): Promise<Scripts>;
    getCrmScriptEntity(session: SuperOfficeAuthenticationSession, ejscriptId: number): Promise<ScriptEntity>;
    executeScript(session: SuperOfficeAuthenticationSession, script: string): Promise<ExecuteScriptResponse>;
    downloadScript(session: SuperOfficeAuthenticationSession, ejscriptId: number): Promise<Uri>;
    getDynamicScriptInfo(session: SuperOfficeAuthenticationSession, ejscriptId: number): Promise<DynamicScriptOdata>;
    patchScript(session: SuperOfficeAuthenticationSession, fileUri: Uri, ejscriptId: number): Promise<ScriptEntity>;
    getHierarchy(session: SuperOfficeAuthenticationSession): Promise<Hierarchy[]>;
    createScript(session: SuperOfficeAuthenticationSession, fileUri: Uri, fileName: string): Promise<ScriptEntity>;
}

export class HttpService implements IHttpService {

    constructor(
        private readonly httpHandler: IHttpHandler,
        private readonly fileSystemService: IFileSystemService
    ) { }

    get scriptUri(): string {
        return '/v1/Script';
    }

    get getCrmScriptUri(): string {
        return `/v1/CRMScript`;
    }

    get executeScriptUri(): string {
        return '/v1/Agents/CRMScript/ExecuteScriptByString';
    }

    get hierarchyUri(): string {
        return '/v1/Hierarchy/Scripts';
    }

    private getDynamicUrl(ejscriptId: number): string {
        return `/v1/archive/dynamic?$select=ejscript.id,ejscript.type,ejscript.description,ejscript.include_id,ejscript.access_key,ejscript.unique_identifier&$filter=ejscript.id eq '${ejscriptId}'`;
    }



    // private getCrmScriptByEjscriptId(ejscriptId: number) {
    //     return `${this.getCrmScriptBaseUri}/${ejscriptId}`;
    // }

    // get getCrmScriptDefaultUri2(){
    //     return `${this.getCrmScriptBaseUri}/default`;
    // }

    // private getScriptByUniqueIdentifier(uniqueIdentifier: string) {
    //     return `${this.scriptBaseUri}/${uniqueIdentifier}`;
    // }

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
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                        'Accept': 'application/json'
                    }
                }
            );
        }
        catch (error) {
            throw new Error('Error getting All Script info: ' + error);
        }
    }

    public async getCrmScriptEntity(session: SuperOfficeAuthenticationSession, ejscriptId: number): Promise<ScriptEntity> {
        try {
            return await this.httpHandler.get<ScriptEntity>(`${session.webApiUri}${this.getCrmScriptUri}/${ejscriptId}`,
                {
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                        'Accept': 'application/json'
                    }
                }
            );
        }
        catch (error) {
            throw new Error('Error getting script with : ' + error);
        }
    }

    public async getScript(session: SuperOfficeAuthenticationSession, uniqueIdentifier: string): Promise<ScriptEntity> {
        try {
            return await this.httpHandler.get<ScriptEntity>(`${session.webApiUri}${this.scriptUri}/${uniqueIdentifier}`,
                {
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                        'Accept': 'application/json'
                    }
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
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                        'Accept': 'application/json'
                    }
                }
            );
        }
        catch (error) {
            throw new Error('Error executing script with : ' + error);
        }
    }

    public async downloadScript(session: SuperOfficeAuthenticationSession, ejscriptId: number): Promise<Uri> {
        try {
            const crmScriptEntity = await this.getCrmScriptEntity(session, ejscriptId);

            // Workaround to get the ejscript.type and path.... should be returned in the scriptEntity in the future
            const dynamicScriptOdata = await this.getDynamicScriptInfo(session, ejscriptId);
            const script = await this.getScript(session, crmScriptEntity.UniqueIdentifier)
            crmScriptEntity.Path = script.Path;

            crmScriptEntity.Type = dynamicScriptOdata.value[0]["ejscript.type"];
            //
            return await this.fileSystemService.writeScriptToFile(crmScriptEntity);
        }
        catch (error) {
            throw new Error('Error downloading script with : ' + error);
        }
    }

    public async getDynamicScriptInfo(session: SuperOfficeAuthenticationSession, ejscriptId: number): Promise<DynamicScriptOdata> {
        try {
            const dynamicUri = this.getDynamicUrl(ejscriptId);
            return await this.httpHandler.get<DynamicScriptOdata>(`${session.webApiUri}${dynamicUri}`,
                {
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                        'Accept': 'application/json'
                    }
                }
            );
        }
        catch (error) {
            throw new Error('Error getting All Script info: ' + error);
        }
    }

    public async patchScript(session: SuperOfficeAuthenticationSession, fileUri: Uri, ejscriptId: number): Promise<ScriptEntity> {
        try {

            const scriptContent = await this.fileSystemService.readScriptFile(fileUri);

            return await this.httpHandler.patch<ScriptEntity>(
                `${session.webApiUri}${this.getCrmScriptUri}/${ejscriptId}`,
                {
                    SourceCode: scriptContent,
                },
                {
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                        'Accept': 'application/json'
                    }
                }
            );
        }
        catch (error) {
            throw new Error('Error patching script: ' + error);
        }
    }

    public async getHierarchy(session: SuperOfficeAuthenticationSession): Promise<Hierarchy[]> {
        try {
            return await this.httpHandler.get<Hierarchy[]>(
                `${session.webApiUri}${this.hierarchyUri}`,
                {
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                        'Accept': 'application/json'
                    }
                }
            );
        }
        catch (error) {
            throw new Error('Error getting script with : ' + error);
        }
    }

    public async createScript(session: SuperOfficeAuthenticationSession, fileUri: Uri, fileName: string): Promise<ScriptEntity> {
        try {
            const scriptContent = await this.fileSystemService.readScriptFile(fileUri);
            if (scriptContent) {
                let defaultScript = await this.createDefaultScript(session);

                defaultScript = this.editDefaultScript(defaultScript, fileName, scriptContent);

                const result = await this.httpHandler.post<ScriptEntity>(
                    `${session.webApiUri}${this.getCrmScriptUri}`,
                    defaultScript,
                    {
                        headers: {
                            Authorization: `Bearer ${session.accessToken}`,
                            'Accept': 'application/json'
                        }
                    }
                );
                if (!result.ValidationResult.Valid) {
                    throw new Error('Validation of script failed : ' + result.ValidationResult.ErrorMessage);
                }
                else {
                    return result;
                }
            }
            throw new Error('scriptContent not found!');
        }
        catch (error) {
            throw new Error('Error creating script : ' + error);
        }
    }

    private async createDefaultScript(session: SuperOfficeAuthenticationSession): Promise<ScriptEntity> {
        try {
            return await this.httpHandler.get<ScriptEntity>(
                `${session.webApiUri}${this.getCrmScriptUri}/default`,
                {
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                        'Accept': 'application/json'
                    }
                }
            );
        }
        catch (error) {
            throw new Error('Error createDefaultScript() : ' + error);
        }
    }

    private editDefaultScript(defaultScript: ScriptEntity, fileName: string, scriptContent: string): ScriptEntity {
        defaultScript.IncludeId = fileName.split('.')[0];
        defaultScript.Name = fileName.split('.')[0];
        defaultScript.SourceCode = scriptContent;
        if (fileName.endsWith('.tsfso')) {
            // TODO: This currently has to be set to JavaScript, but this should be changed to be TypeScript in the future. It requires a change in the API, so we handle it like this for now.
            defaultScript.ScriptType = 'JavaScript';
        }
        return defaultScript;
    }
}
