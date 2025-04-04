export const NSBusiness = `/** 
Carrier object for Business.
*/
class NSBusiness {
    /** 
    Gets the primary key (ID) for the NSBusiness
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the NSBusiness list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the NSBusiness.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSBusiness
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSBusiness list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSBusiness item.
    */
    Void SetValue(String value);
}`;