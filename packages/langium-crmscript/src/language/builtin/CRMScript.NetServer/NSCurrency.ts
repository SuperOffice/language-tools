export const NSCurrency = `/** 
Carrier object for Currency.
*/
class NSCurrency {
    /** 
    Gets the primary key (ID) for the NSCurrency
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSCurrency list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSCurrency.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSCurrency
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSCurrency list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSCurrency item.
    */
    Void SetValue(String value);
}`;