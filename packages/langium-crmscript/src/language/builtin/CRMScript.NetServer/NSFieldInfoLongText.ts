export const NSFieldInfoLongText = `/** 
Long Text custom database field.
*/
class NSFieldInfoLongText {
    String[] GetChoices();
    String GetDefaultValue();
    Bool GetIsHtml();
    Integer GetNumRows();
    Bool GetUseTextArea();
    Void SetChoices(String[] choices);
    Void SetDefaultValue(String defaultValue);
    Void SetIsHtml(Bool isHtml);
    Void SetNumRows(Integer numRows);
    Void SetUseTextArea(Bool useTextArea);
}`;