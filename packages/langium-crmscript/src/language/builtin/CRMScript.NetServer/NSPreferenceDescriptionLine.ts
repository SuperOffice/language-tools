export const NSPreferenceDescriptionLine = `/** 
Preference description line, contains information about a single item in a preference description list.
*/
class NSPreferenceDescriptionLine {
    String GetDescription();
    Bool GetIsBuiltin();
    Integer GetPrefDescId();
    Integer GetPrefDescLineId();
    String GetPrefShowValue();
    String GetPrefValue();
    Void SetDescription(String description);
    Void SetIsBuiltin(Bool isBuiltin);
    Void SetPrefDescId(Integer prefDescId);
    Void SetPrefDescLineId(Integer prefDescLineId);
    Void SetPrefShowValue(String prefShowValue);
    Void SetPrefValue(String prefValue);
}`;