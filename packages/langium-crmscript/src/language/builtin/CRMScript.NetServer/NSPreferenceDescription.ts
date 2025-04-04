export const NSPreferenceDescription = `/** 
Preference description, drives the Preference GUI. Maintenance client - controls all preferences in SuperOffice.
*/
class NSPreferenceDescription {
    Integer GetAccessFlags();
    String GetDescription();
    Bool GetIsBuiltin();
    String GetKey();
    Integer GetMaxLevel();
    Integer GetMaxValue();
    Integer GetMinLevel();
    Integer GetMinValue();
    String GetName();
    Integer GetPrefDescId();
    Integer GetRank();
    String GetRequiredLicense();
    String GetSection();
    String GetSubGroup();
    Integer GetSysMaxLevel();
    String GetTableName();
    Integer GetUserDefinedListId();
    Integer GetValueType();
    Void SetAccessFlags(Integer accessFlags);
    Void SetDescription(String description);
    Void SetIsBuiltin(Bool isBuiltin);
    Void SetKey(String key);
    Void SetMaxLevel(Integer maxLevel);
    Void SetMaxValue(Integer maxValue);
    Void SetMinLevel(Integer minLevel);
    Void SetMinValue(Integer minValue);
    Void SetName(String name);
    Void SetPrefDescId(Integer prefDescId);
    Void SetRank(Integer rank);
    Void SetRequiredLicense(String requiredLicense);
    Void SetSection(String section);
    Void SetSubGroup(String subGroup);
    Void SetSysMaxLevel(Integer sysMaxLevel);
    Void SetTableName(String tableName);
    Void SetUserDefinedListId(Integer userDefinedListId);
    Void SetValueType(Integer valueType);
}`;