export const NSPaymentType = `/** 
The built-in payment types list. Used by the SuperOffice Quote Connector in quote versions.
*/
class NSPaymentType {
    /** 
    Gets the primary key (ID) for the NSPaymentType
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSPaymentType list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSPaymentType.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSPaymentType
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSPaymentType list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSPaymentType item.
    */
    Void SetValue(String value);
}`;