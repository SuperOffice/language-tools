export const NSDashTileHtml = `/** 
Represents an HTML tile within a dashboard with language and HTML content settings.
*/
class NSDashTileHtml {
    /** 
    Gets the content language code for the HTML dashboard tile.
    */
    String GetLanguageCode();
    /** 
    Sets the content language code for the HTML dashboard tile.
    */
    Void SetLanguageCode(String languageCode);
    /** 
    Gets the HTML content of the dashboard tile.
    */
    String GetHtml();
    /** 
    Sets the HTML content for the dashboard tile.
    */
    Void SetHtml(String htmlContent);
}`;