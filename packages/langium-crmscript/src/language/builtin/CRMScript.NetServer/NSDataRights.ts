export const NSDataRights = `/** 
Carrier object for DataRights.
*/
class NSDataRights {
    NSRelationToOwner[] GetColumnsInfo();
    NSDataRight[] GetRights();
    NSEntityName[] GetRowsInfo();
    Void SetColumnsInfo(NSRelationToOwner[] columnsInfo);
    Void SetRights(NSDataRight[][] rights);
    undefined SetRowsInfo(NSEntityName[] rowsInfo);
}`;