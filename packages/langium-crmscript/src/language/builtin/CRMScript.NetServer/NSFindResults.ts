export const NSFindResults = `/** 
Result carrier for the Find operation. It contains a set of column specifications, and a set of row, where each row contains the columns. The row set is the result of carrying out some search operation.
*/
class NSFindResults {
    NSArchiveColumnInfo[] GetArchiveColumns();
    NSArchiveListItem[] GetArchiveRows();
    Integer GetRowCount();
    Void SetArchiveRows(NSArchiveListItem[] archiveRows);
    Void SetRowCount(Integer rowCount);
}`;