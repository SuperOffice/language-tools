export const NSProductCategory = `/** 
The built-in product category list. Used by the SuperOffice Quote Connector to categorize products.
*/
class NSProductCategory {
    /** 
    Gets the primary key (ID) for the NSProductCategory
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSProductCategory list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSProductCategory.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSProductCategory
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSProductCategory list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSProductCategory item.
    */
    Void SetValue(String value);
}`;