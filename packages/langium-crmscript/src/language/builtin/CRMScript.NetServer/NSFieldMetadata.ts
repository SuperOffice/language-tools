export const NSFieldMetadata = `/** 
Used to populate the Admin configuration dialog for a connection. The call to the ERP Connector’s GetConfigurationFields method returns a list of fields and field types. The Admin client builds a dialog with these fields.
*/
class NSFieldMetadata {
    Integer GetAccess();
    String GetDefaultValue();
    String GetDisplayDescription();
    String GetDisplayName();
    String GetFieldKey();
    Integer GetFieldType();
    String GetListName();
    Integer GetMaxLength();
    Integer GetRank();
    Bool GetShowInSearch();
    Void SetAccess(Integer access);
    Void SetDefaultValue(String defaultValue);
    Void SetDisplayDescription(String displayDescription);
    Void SetDisplayName(String displayName);
    Void SetFieldKey(String fieldKey);
    Void SetFieldType(Integer fieldType);
    Void SetListName(String listName);
    Void SetMaxLength(Integer maxLength);
    Void SetRank(Integer rank);
    Void SetShowInSearch(Bool showInSearch);
}`;