export const NSQuoteLineConfiguration = `/** 
Contains information about which configuration fields that is visible in the GUI. Read only and mandatory fields are also specified.
*/
class NSQuoteLineConfiguration {
    Bool GetEditable();
    String GetFieldName();
    Bool GetInUse();
    String GetLabel();
    Bool GetMandatory();
    Integer GetQuoteLineConfigurationId();
    Integer GetRank();
    Bool GetRestrictEdit();
    String GetTooltip();
    Void SetEditable(Bool editable);
    Void SetFieldName(String fieldName);
    Void SetInUse(Bool inUse);
    Void SetLabel(String label);
    Void SetMandatory(Bool mandatory);
    Void SetQuoteLineConfigurationId(Integer quoteLineConfigurationId);
    Void SetRank(Integer rank);
    Void SetRestrictEdit(Bool restrictEdit);
    Void SetTooltip(String tooltip);
}`;