export const NSDash = `/** 
Carrier object for NSDash.
*/
class NSDash {
    /** 
    Associate who owns this dashboard.
    */
    Integer GetAssociateId();
    /** 
    How many columns there are in the dashboard.
    */
    Integer GetColumns();
    /** 
    Primary key of dashboard.
    */
    Integer GetDashboardId();
    /** 
    Detailed description of the dashboard.
    */
    String GetDescription();
    /** 
    Gets name the dashboard.
    */
    String GetName();
    /** 
    Returns 1 if pinned for all.
    */
    Integer GetPinForAll();
    /** 
    Returns array of references to the pinned associates.
    */
    Integer[] GetPinForAssociates();
    /** 
    Returns array of references to the pinned groups.
    */
    Integer[] GetPinForGroups();
    /** 
    Returns the theme for this dashboard.
    */
    NSDashTheme GetTheme();
    /** 
    Returns GUID identifying a default dashboard from SuperOffice.
    */
    String GetUniqueId();
    /** 
    Returns 1 if visible for all.
    */
    Integer GetVisibleForAll();
    /** 
    Returns array of references to the visible for associates.
    */
    Integer[] GetVisibleForAssociates();
    /** 
    Returns array of references to the visible for groups.
    */
    Integer[] GetVisibleForGroups();
    /** 
    Associate who owns this dashboard.
    */
    Void SetAssociateId(Integer associateId);
    /** 
    How many columns there are in the dashboard.
    */
    Void SetColumns(Integer cols);
    /** 
    Primary key of dashboard.
    */
    Void SetDashboardId(Integer dashId);
    /** 
    Detailed description of the dashboard.
    */
    Void SetDescription(String desc);
    /** 
    Sets name the dashboard.
    */
    Void SetName(String name);
    /** 
    Set to 1 if pinned for all.
    */
    Void SetPinForAll(Integer pinned);
    /** 
    Set an array of references to pinned associates.
    */
    Void SetPinForAssociates(Integer[] assocList);
    /** 
    Set an array of references to pinned groups.
    */
    Void SetPinForGroups(Integer[] groups);
    /** 
    Sets the theme for this dashboard.
    */
    Void SetTheme(NSDashTheme theme);
    /** 
    Sets GUID identifying a default dashboard from SuperOffice.
    */
    Void SetUniqueId(String guid);
    /** 
    Set to 1 if visible for all.
    */
    Void SetVisibleForAll(Integer visible);
    /** 
    Set an array of references to visible for associates.
    */
    Void SetVisibleForAssociates(Integer[] assocList);
    /** 
    Set an array of references to visible for groups.
    */
    Void SetVisibleForGroups(Integer[] groups);
}`;