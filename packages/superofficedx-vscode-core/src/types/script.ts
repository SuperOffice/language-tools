interface ResponseOdataMetadata {
    "odata.metadata": string;
    "odata.nextLink": null | string;  // Assuming the value can sometimes be a string
}

export interface Scripts extends ResponseOdataMetadata {
    value: ScriptInfo[];
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
    type: number;
    registeredBy: string;
    registeredDate: Date; 
    updatedBy: string;
    updatedDate: Date;
    path: string;
    screenChooserId: number;
    screenType: string;
    enabled: boolean;
}

export interface DynamicScriptOdata {
    "odata.metadata": string;
    "odata.nextLink": null | string;
    value: DynamicScriptOdataValue[];
    
}
interface DynamicScriptOdataValue {
    PrimaryKey: string;
    EntityName: string;
    "ejscript.id": number;
    "ejscript.type": number;
    "ejscript.body": string;
}

export interface ScriptEntity {
    UniqueIdentifier: string;
    Name: string;
    Description: string;
    IncludeId: string;
    Source: string;
    SourceCode: string;
    ScriptType: string;
    Registered: Date;
    RegisteredBy: string;
    Updated: Date;
    UpdatedBy: string;
    Path: string;
    TableRight: null;
    FieldProperties: Record<string, unknown>;
    Type: number;
    ValidationResult: ValidationResult;
}

interface ValidationResult{
    Valid: boolean;
    ErrorMessage: string;
    LineNumber: number;
    ErrorInformation: ErrorInformation;
}

interface ErrorInformation {
    ErrorMessage: string;
    IncludeId: unknown;
    LineNumber: number;
    CharacterPosition: number;
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