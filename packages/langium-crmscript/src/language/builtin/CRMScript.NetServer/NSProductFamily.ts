export const NSProductFamily = `/** 
The built-in product family list. Used by the SuperOffice Quote Connector to categorize products.
*/
class NSProductFamily {
    /** 
    Gets the primary key (ID) for the NSProductFamily.
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSProductFamily list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSProductFamily.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSProductFamily
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSProductFamily list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSProductFamily item.
    */
    Void SetValue(String value);
}`;