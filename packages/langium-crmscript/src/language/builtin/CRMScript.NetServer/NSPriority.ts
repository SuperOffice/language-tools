export const NSPriority = `/** 
Carrier object for Priority
*/
class NSPriority {
    /** 
    Gets the primary key (ID) for the Priority
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the Priority list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the Priority.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the Priority
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the Priority list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the Priority item.
    */
    Void SetValue(String value);
}`;