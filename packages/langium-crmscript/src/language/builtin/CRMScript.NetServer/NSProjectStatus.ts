export const NSProjectStatus = `/** 
Carrier object for ProjectStatus.
*/
class NSProjectStatus {
    /** 
    Gets the primary key (ID) for the NSProjectStatus.
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSProjectStatus list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSProjectStatus.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSProjectStatus
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSProjectStatus list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSProjectStatus item.
    */
    Void SetValue(String value);
}`;