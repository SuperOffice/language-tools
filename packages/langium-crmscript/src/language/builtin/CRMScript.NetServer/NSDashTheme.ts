export const NSDashTheme = `/** 
Represents a dashboard theme configuration.
*/
class NSDashTheme {
    /** 
    Gets the name of the client(s) the theme is available to.
    */
    String GetClient();
    /** 
    Gets the JSON clob-formatted configuration.
    */
    String GetConfig();
    /** 
    Gets the dashboard theme ID.
    */
    Integer GetDashboardThemeId();
    /** 
    Gets the name of the dashboard theme.
    */
    String GetName();
    /** 
    Gets the rank order.
    */
    Integer GetRank();
    /** 
    Gets the style value (e.g., 'light' or 'dark').
    */
    String GetStyle();
    /** 
    Sets the name of the client(s) the theme is available to.
    */
    Void SetClient(String client);
    /** 
    Sets the JSON clob-formatted configuration.
    */
    Void SetConfig(String config);
    /** 
    Sets the dashboard theme ID.
    */
    Void SetDashboardThemeId(Integer id);
    /** 
    Sets the name of the dashboard theme.
    */
    Void SetName(String name);
    /** 
    Sets the rank order.
    */
    Void SetRank(Integer rank);
    /** 
    Sets the style value (e.g., 'light' or 'dark').
    */
    Void SetStyle(String style);
}`;