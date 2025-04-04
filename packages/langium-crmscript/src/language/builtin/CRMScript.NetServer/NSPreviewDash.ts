export const NSPreviewDash = `/** 
Represents a preview of a dashboard.
*/
class NSPreviewDash {
    /** 
    Gets the primary key ID of the dashboard.
    */
    Integer GetDashboardId();
    /** 
    Sets the primary key ID for the dashboard.
    */
    Void SetDashboardId(Integer dashboardId);
    /** 
    Gets the detailed description of the dashboard.
    */
    String GetDescription();
    /** 
    Sets a detailed description for the dashboard.
    */
    Void SetDescription(String description);
    /** 
    Gets the name of the dashboard.
    */
    String GetName();
    /** 
    Sets the name of the dashboard.
    */
    Void SetName(String name);
    /** 
    Gets the full name of the dashboard owner.
    */
    String GetOwnedByFullName();
    /** 
    Sets the full name of the dashboard owner.
    */
    Void SetOwnedByFullName(String ownerFullName);
    /** 
    Gets the registration date of the dashboard.
    */
    DateTime GetRegistered();
    /** 
    Sets the registration date for the dashboard.
    */
    Void SetRegistered(DateTime registeredDate);
    /** 
    Gets the dashboard tiles.
    */
    NSPreviewDashTile[] GetTiles();
    /** 
    Sets the dashboard tiles.
    */
    Void SetTiles(NSPreviewDashTile[] tiles);
}`;