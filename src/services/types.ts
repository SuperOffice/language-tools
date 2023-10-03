/* eslint-disable @typescript-eslint/naming-convention */
interface ApiResponseData {
    "odata.metadata": string;
    "odata.nextLink": null | string;  // Assuming the value can sometimes be a string
}

export interface ScriptInfo {
    PrimaryKey: string;
    EntityName: string;
    hierarchyId: number;
    hierarchyFullname: string;
    hierarchyName: string;
    hierarchyParentId: number;
    hierarchyFullpathIds: number[];
    ejscriptId: number;
    name: string;
    description: string;
    includeId: string;
    accessKey: string;
    htmlOutput: boolean;
    extraMenuId: number;
    uniqueIdentifier: string;
    registeredBy: string;
    registeredDate: string;  // You might want to consider using Date if you're going to parse and use this as a date
    path: string;
    updatedBy: string;
    updatedDate: string; // Similarly, consider using Date here as well
    screenChooserId: number;
    screenType: string;
    enabled: boolean;
}

export interface ScriptEntity {
    UniqueIdentifier: string;
    Name: string;
    Description: string;
    IncludeId: string;
    Source: string;
    Registered: string;
    RegisteredBy: string;
    Updated: string;
    UpdatedBy: string;
    Path: string;
    TableRight: null;
    FieldProperties: Record<string, unknown>;
}

export interface ScriptResponseData extends ApiResponseData {
    value: ScriptInfo[];
}

export interface RequestParams {
    endpoint: string;
    headers: { [key: string]: string };
    method: 'GET' | 'POST';
    body?: RequestBody;
}

interface RequestBody {
    Script: string;
    Parameters?: {
        Parameters1: string;
    };
    EventData?: null;
}

export interface ExecuteScriptResponse {
    Output: string;
    Parameters: {
        Parameters1: string;
        Parameters2: string;
    };
    Trace: string;
    Eventdata: null; // If Eventdata can be of other types, replace 'null' with the appropriate type or types
    Success: boolean;
    ErrorInformation: null | string; // I'm assuming ErrorInformation can be a string, adjust as needed
    TableRight: null | string; // Adjust type based on the possible values of 'TableRight'
    FieldProperties: {
        [key: string]: {
            FieldRight: null | string; // Adjust type based on the possible values of 'FieldRight'
            FieldType: string;
            FieldLength: number;
        }
    };
}