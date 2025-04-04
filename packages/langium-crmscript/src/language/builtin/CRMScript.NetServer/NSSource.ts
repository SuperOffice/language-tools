export const NSSource = `/** 
Source of a sale.
*/
class NSSource {
    /** 
    Gets the primary key (ID) for the Source
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the Source list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the Source.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the Source
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the Source list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the Source item.
    */
    Void SetValue(String value);
}`;