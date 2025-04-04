export const NSProductType = `/** 
The built-in product type list. Used by the SuperOffice Quote Connector to categorize products.
*/
class NSProductType {
    /** 
    Gets the primary key (ID) for the NSProductType.
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSProductType list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSProductType.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSProductType
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSProductType list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSProductType item.
    */
    Void SetValue(String value);
}`;