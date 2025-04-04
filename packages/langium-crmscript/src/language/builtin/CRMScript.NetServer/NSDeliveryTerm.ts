export const NSDeliveryTerm = `/** 
The built-in delivery terms list. Used by the SuperOffice Quote Connector in quote versions.
*/
class NSDeliveryTerm {
    /** 
    Gets the primary key (ID) for the NSDeliveryTerm
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSDeliveryTerm list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSDeliveryTerm.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSDeliveryTerm
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSDeliveryTerm list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSDeliveryTerm item.
    */
    Void SetValue(String value);
}`;