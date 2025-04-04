export const NSPreference = `/** 
One preference item, which contains a specification (section/key), the raw string value, and the level at which this value was found.
*/
class NSPreference {
    String GetDisplayTooltip();
    Integer GetDisplayType();
    String GetDisplayValue();
    Integer GetLevel();
    Integer GetPrefDescId();
    String GetRawValue();
    NSPreferenceSpec GetSpecification();
    String GetTableName();
    NSTabOrder GetTabOrder();
    Integer GetTargetId();
    Integer GetUserPreferenceId();
    Void SetDisplayTooltip(String displayTooltip);
    Void SetDisplayType(Integer displayType);
    Void SetDisplayValue(String displayValue);
    Void SetLevel(Integer level);
    Void SetPrefDescId(Integer prefDescId);
    Void SetRawValue(String rawValue);
    Void SetSpecification(NSPreferenceSpec specification);
    Void SetTableName(String tableName);
    Void SetTabOrder(NSTabOrder tabOrder);
    Void SetTargetId(Integer targetId);
    Void SetUserPreferenceId(Integer userPreferenceId);
}`;