export const NSImportAgent = `/** 
This agent can be used to import data into the system.
*/
class NSImportAgent {
    /** 
    Creates a new empty import row with x count of values
    */
    NSImportLine CreateDefaultImportLine(Integer countColumns);
    /** 
    Populates the ImportLines and columnDefs based from ERP system
    */
    NSImportErpData CreateErpImportData(NSArchiveRestrictionInfo[] restriction, String[] columns, Integer connectionId, Integer erpActorType);
    /** 
    Previews the import
    */
    NSImportLine[] PreviewImport(NSImportLine[] importLines, String[] columnDefinition, String culture, String context);
    /** 
    Does the actual import
    */
    Integer[] SaveImport(NSImportLine[] importLines, String[] columnDefinition, Bool createSelection, String culture, String context);
}`;