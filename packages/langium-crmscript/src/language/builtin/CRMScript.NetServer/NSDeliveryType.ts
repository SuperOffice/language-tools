export const NSDeliveryType = `/** 
The built-in delivery types list. Used by the SuperOffice Quote Connector in quote versions.
*/
class NSDeliveryType {
    /** 
    Gets the primary key (ID) for the DeliveryType
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the DeliveryType list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the DeliveryType.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the DeliveryType
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the DeliveryType list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the DeliveryType item.
    */
    Void SetValue(String value);
}`;