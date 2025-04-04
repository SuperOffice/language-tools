export const NSFieldInfoShortText = `/** 
Short text string custom database field.
*/
class NSFieldInfoShortText {
    String[] GetChoices();
    String GetDefaultValue();
    String GetFormatMask();
    Bool GetIsHtml();
    Integer GetTextLength();
    Void SetChoices(String[] choices);
    Void SetDefaultValue(String defaultValue);
    Void SetFormatMask(String formatMask);
    Void SetIsHtml(Bool isHtml);
    Void SetTextLength(Integer textLength);
}`;