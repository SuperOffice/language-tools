export const NSFieldInfoRelation = `/** 
Relation to other table database field.
*/
class NSFieldInfoRelation {
    Integer GetDefaultValue();
    String GetMdoListName();
    String GetTargetLabel();
    String GetTargetTable();
    Bool GetUseDropDown();
    Void SetDefaultValue(Integer defaultValue);
    Void SetMdoListName(String mdoListName);
    Void SetTargetLabel(String targetLabel);
    Void SetTargetTable(String targetTable);
    Void SetUseDropDown(Bool useDropDown);
}`;