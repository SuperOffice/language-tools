export interface Hierarchy {
    HierarchyId: number;
    Domain: string;
    Name: string;
    Fullname: string;
    ParentId: number;
    Children: Hierarchy[]; // Recursive structure for nested children
    Registered: string; // ISO date string
    RegisteredAssociateId: number;
    Updated: string; // ISO date string
    UpdatedAssociateId: number;
    TableRight: TableRight;
    FieldProperties: Record<string, unknown> | null; // Adjust type if FieldProperties has a more specific structure
}

export interface TableRight {
    Mask: string;
    Reason: string;
}