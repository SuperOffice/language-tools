export const NSImportErpData = `/** 
Used to import data into the system. Representing one entity that will be imported.
*/
class NSImportErpData {
    NSImportColumnInfo[] GetColumnInfos();
    NSImportLine[] GetImportLines();
    Void SetColumnInfos(NSImportColumnInfo[] columnInfos);
    Void SetImportLines(NSImportLine[] importLines);
}`;