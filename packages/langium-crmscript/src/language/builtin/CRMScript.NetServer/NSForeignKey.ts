export const NSForeignKey = `/** 
Carrier object for ForeignKey.
*/
class NSForeignKey {
    String GetCreatedBy();
    DateTime GetCreatedDate();
    String GetKey();
    Integer GetRecordId();
    String GetTableName();
    /** 
    Name of the person that last updated the foreign key
    */
    String GetUpdatedBy();
    DateTime GetUpdatedDate();
    String GetValue();
    Void SetCreatedBy(String createdBy);
    Void SetCreatedDate(DateTime createdDate);
    Void SetKey(String key);
    Void SetRecordId(Integer recordId);
    Void SetTableName(String tableName);
    Void SetUpdatedBy(String updatedBy);
    Void SetUpdatedDate(DateTime updatedDate);
    Void SetValue(String value);
}`;