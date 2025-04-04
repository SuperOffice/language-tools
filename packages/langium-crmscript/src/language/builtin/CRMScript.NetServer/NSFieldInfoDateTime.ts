export const NSFieldInfoDateTime = `/** 
Date + time custom database field.
*/
class NSFieldInfoDateTime {
    DateTime GetDefaultValue();
    Bool GetIsDefaultNow();
    Void SetDefaultValue(DateTime defaultValue);
    Void SetIsDefaultNow(Bool isDefaultNow);
}`;