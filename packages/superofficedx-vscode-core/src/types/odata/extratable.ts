import { ResponseOdataMetadata } from "./odataResponse";

export interface ExtraTable {
    PrimaryKey: string;
    EntityName: string;
    "extra_tables.(extra_fields->extra_table).field_name": string;
    "extra_tables.id": number;
    "extra_tables.table_name": string;
    "extra_tables.(extra_fields->extra_table).type": string;
    "extra_tables.(extra_fields->extra_table).description": string;
}

export interface ExtraTablesOdata extends ResponseOdataMetadata {
    value: ExtraTable[];
}
