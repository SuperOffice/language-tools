export const NSReasonSold = `/** 
Reason for a successfully sold sale.
*/
class NSReasonSold {
    /** 
    Gets the primary key (ID) for the ReasonSold
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the ReasonSold list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the ReasonSold.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the ReasonSold
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the ReasonSold list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the ReasonSold item.
    */
    Void SetValue(String value);
}`;