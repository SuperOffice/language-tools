export const NSFieldInfoBase = `/** 
Abstract basic information about database fields. May be custom or user-defined fields. The information can be used to build a user interface.
*/
class NSFieldInfoBase {
    String GetDescription();
    String GetDisplayName();
    String GetFieldName();
    Integer GetFieldType();
    Bool GetHideField();
    Bool GetHideLabel();
    Bool GetIsExternal();
    Bool GetIsIndexed();
    Bool GetIsMandatory();
    Bool GetIsReadOnly();
    Integer GetRank();
    String GetShortLabel();
    String GetTemplateVariableName();
    Void SetDescription(String description);
    Void SetDisplayName(String displayName);
    Void SetFieldName(String fieldName);
    Void SetFieldType(Integer fieldType);
    Void SetHideField(Bool hideField);
    Void SetHideLabel(Bool hideLabel);
    Void SetIsExternal(Bool isExternal);
    Void SetIsIndexed(Bool isIndexed);
    Void SetIsMandatory(Bool isMandatory);
    Void SetIsReadOnly(Bool isReadOnly);
    Void SetRank(Integer rank);
    Void SetShortLabel(String shortLabel);
    Void SetTemplateVariableName(String templateVariableName);
}`;