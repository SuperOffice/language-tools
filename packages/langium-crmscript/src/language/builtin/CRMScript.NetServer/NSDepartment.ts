export const NSDepartment = `/** 
Also known as User Group.*/
class NSDepartment {
    /** 
    Gets the primary key (ID) for the Department
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the Department list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the Department.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the Department
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the Department list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the Department item.
    */
    Void SetValue(String value);
}`;