import { AuthFlow, Endpoints } from "../constants";
import { IHttpHandler } from "../handlers/httpHandler";
import { ScriptEntity, Scripts, StateResponse, SuperOfficeAuthenticationSession } from "../types/types";

export interface IHttpService {
    getTenantStateAsync(environment: typeof AuthFlow.ENVIRONMENT[number], contextIdentifier: string): Promise<StateResponse>
    getScriptListAsync(session: SuperOfficeAuthenticationSession): Promise<Scripts>
    getScriptEntityAsync(session: SuperOfficeAuthenticationSession, uniqueIdentifier: string): Promise<ScriptEntity>
}

export class HttpService implements IHttpService {

    constructor(private httpHandler: IHttpHandler) { }

    async getTenantStateAsync(environment: typeof AuthFlow.ENVIRONMENT[number], contextIdentifier: string): Promise<StateResponse> {
        try {
            return await this.httpHandler.get<StateResponse>(AuthFlow.getStateUrl(environment, contextIdentifier));
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
}