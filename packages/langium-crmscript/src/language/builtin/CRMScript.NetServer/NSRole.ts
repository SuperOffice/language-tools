export const NSRole = `/** 
Users role for role-based security.
*/
class NSRole {
    /** 
    Gets the primary key (ID) for the Role
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the Role list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the Role.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the Role
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the Role list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the Role item.
    */
    Void SetValue(String value);
}`;