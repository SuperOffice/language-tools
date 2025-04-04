export const NSFieldInfoDate = `/** 
Date custom database field. Time component is ignored.
*/
class NSFieldInfoDate {
    DateTime GetDefaultValue();
    Bool GetIsDefaultNow();
    Void SetDefaultValue(DateTime defaultValue);
    Void SetIsDefaultNow(Bool isDefaultNow);
}`;