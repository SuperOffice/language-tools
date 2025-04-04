export const NSQuoteVersionButtonState = `/** 
Information about possible button actions for the quote version dialog.
*/
class NSQuoteVersionButtonState {
    Integer GetAction();
    String GetDisplayText();
    Bool GetEnabled();
    String GetImageHint();
    String GetTooltipText();
    Void SetAction(Integer action);
    Void SetDisplayText(String displayText);
    Void SetEnabled(Bool enabled);
    Void SetImageHint(String imageHint);
    Void SetTooltipText(String tooltipText);
}`;