export const NSChangedDataItem = `/** 
Table name/record ID pair used to refer to records.
*/
class NSChangedDataItem {
    Integer GetRecordId();
    String GetTablename();
    Void SetRecordId(Integer recordId);
    Void SetTablename(String tablename);
}`;