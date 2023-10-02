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

export type FileReadResult<T> = {
    data?: T;
    error?: string;
};

