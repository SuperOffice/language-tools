export const NSArchiveListResult = `/** 
Header/Detail variant of archive result, with a Row Count plus the actual rows. Future extensions may include other header data on the same level as the RowCount.
*/
class NSArchiveListResult {
    Integer GetRowCount();
    NSArchiveListItem[] GetRows();
    Void SetRowCount(Integer rowCount);
    Void SetRows(NSArchiveListItem[] rows);
}`;