export const NSFieldInfoTimeSpan = `/** 
Timespan custom database field. Number of minutes, represented as days/hours/minutes.
*/
class NSFieldInfoTimeSpan {
    Integer GetDefaultValue();
    Bool GetUseDays();
    Bool GetUseHours();
    Bool GetUseMinutes();
    Void SetDefaultValue(Integer defaultValue);
    Void SetUseDays(Bool useDays);
    Void SetUseHours(Bool useHours);
    Void SetUseMinutes(Bool useMinutes);
}`;