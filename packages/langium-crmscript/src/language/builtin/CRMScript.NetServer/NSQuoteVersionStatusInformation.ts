export const NSQuoteVersionStatusInformation = `/** 
Information about possible button actions for the quote version dialog.
*/
class NSQuoteVersionStatusInformation {
    /** 
    Checks for errors on quote lines, alternatives and the version itself.
    */
    String GetDisplayMessage();
    /** 
    Checks for errors on quote lines, alternatives and the version itself.
    */
    String GetDisplayTooltip();
    String GetIconHint();
    Integer GetStatus();
    /** 
    Checks for errors on quote lines, alternatives and the version itself.
    */
    Void SetDisplayMessage(String displayMessage);
    /** 
    Checks for errors on quote lines, alternatives and the version itself.
    */
    Void SetDisplayTooltip(String displayTooltip);
    Void SetIconHint(String iconHint);
    Void SetStatus(Integer status);
}`;