export const NSReason = `/** 
Reason for a lost sale.
*/
class NSReason {
    /** 
    Gets the primary key (ID) for the NSReason
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSReason list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSReason.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSReason
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSReason list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSReason item.
    */
    Void SetValue(String value);
}`;