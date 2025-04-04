export const NSPosition = `/** 
Carrier object for Position.
*/
class NSPosition {
    /** 
    Gets the primary key (ID) for the NSPosition
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSPosition list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSPosition.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSPosition
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSPosition list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSPosition item.
    */
    Void SetValue(String value);
}`;