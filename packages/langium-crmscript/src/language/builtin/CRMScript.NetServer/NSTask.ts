export const NSTask = `/** 
Type of an appointment.
*/
class NSTask {
    /** 
    Gets the primary key (ID) for the Task
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the Task list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the Task.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the Task
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the Task list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the Task item.
    */
    Void SetValue(String value);
}`;