export const NSProjectType = `/** 
Carrier object for ProjectType.
*/
class NSProjectType {
    /** 
    Gets the primary key (ID) for the NSProjectType.
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSProjectType list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSProjectType.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSProjectType
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSProjectType list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSProjectType item.
    */
    Void SetValue(String value);
}`;