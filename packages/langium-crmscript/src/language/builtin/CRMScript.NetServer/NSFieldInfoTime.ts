export const NSFieldInfoTime = `/** 
Time custom database field. Date value is ignored.
*/
class NSFieldInfoTime {
    DateTime GetDefaultValue();
    Bool GetIsDefaultNow();
    Void SetDefaultValue(yml defaultValue);
    Void SetIsDefaultNow(Bool isDefaultNow);
}`;