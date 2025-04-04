export const NSStatisticsDataValue = `/** 
Contains a single data value in a data set, used by CS for Status Screen reports.
*/
class NSStatisticsDataValue {
    String GetDescription();
    String GetLabel();
    Float GetValue();
    Void SetDescription(String description);
    Void SetLabel(String label);
    Void SetValue(Float value);
}`;