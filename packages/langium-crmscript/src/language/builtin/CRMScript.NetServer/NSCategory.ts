export const NSCategory = `/** 
Carrier object for Category.
*/
class NSCategory {
    /** 
    Gets the primary key (ID) for the NSCategory.
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSCategory list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSCategory.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSCategory
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSCategory list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSCategory item.
    */
    Void SetValue(String value);
}`;