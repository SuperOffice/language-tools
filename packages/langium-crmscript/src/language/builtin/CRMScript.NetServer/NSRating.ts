export const NSRating = `/** 
Sale Stage with probability percent.
*/
class NSRating {
    /** 
    Gets the primary key (ID) for the NSRating
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSRating list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSRating.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSRating
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSRating list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSRating item.
    */
    Void SetValue(String value);
}`;