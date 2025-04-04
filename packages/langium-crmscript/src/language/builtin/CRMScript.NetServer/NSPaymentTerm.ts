export const NSPaymentTerm = `/** 
The built-in payment terms list. Used by the SuperOffice Quote Connector to categorize quote versions.
*/
class NSPaymentTerm {
    /** 
    Gets the primary key (ID) for the NSPaymentTerm
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSPaymentTerm list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSPaymentTerm.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSPaymentTerm
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSPaymentTerm list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSPaymentTerm item.
    */
    Void SetValue(String value);
}`;