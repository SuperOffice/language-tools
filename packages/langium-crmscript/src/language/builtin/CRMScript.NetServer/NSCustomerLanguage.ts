export const NSCustomerLanguage = `/** 
Customer languages that customer center supports. Carrier object for CustomerLanguage.
*/
class NSCustomerLanguage {
    /** 
    Gets the primary key (ID) for the NSCustomerLanguage.
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSCustomerLanguage list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSCustomerLanguage.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSCustomerLanguage
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSCustomerLanguage list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSCustomerLanguage item.
    */
    Void SetValue(String value);
}`;