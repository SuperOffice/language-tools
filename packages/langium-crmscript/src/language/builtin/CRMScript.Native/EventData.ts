export const EventData = `/** 
Gives you access to contextual information in an event handler. For example, the name of a created company or the amount of a sale.<p></p>
You can also check EventData properties after the event handler has run, to for example display a message or prevent an entity from being saved.
*/
class EventData {
    /** 
    Checks whether the current event action has been blocked.
    */
    Bool getBlockExecution();
    /** 
    Returns the value of a specified input field (for example "ContactEntity.Department").
    */
    String getInputValue(String field);
    /** 
    Returns a Map containing all input values of the EventData object.
    */
    Map getInputValues();
    /** 
    Returns the message set in an EventData object.
    */
    String getMessage();
    /** 
    Returns the section EventData has navigated to.
    */
    String getNavigateTo();
    /** 
    Returns the value of a specified state field (custom field).
    */
    String getStateValue(String stateValue);
    /** 
    Returns a Map containing all state values of the EventData object (custom values).
    */
    Map getStateValues();
    /** 
    Returns the integer representing the event type.
    */
    Integer getType();
    /** 
    Prevent the current event action from being executed.
    */
    Void setBlockExecution(Bool value);
    /** 
    Displays a dialog box containing the specified message.
    */
    Void setMessage(String message);
    /** 
    Sets which page to load next. For example, "sale.main".
    */
    Void setNavigateTo(String url);
    /** 
    Sets the value of a specified output field (for example "ContactEntity.Department").
    */
    Void setOutputValue(String name, String value);
    /** 
    Sets a state value that can be accessed later, also by other EventData objects in the same script (custom value).
    */
    Void setStateValue(String stateName, String val);
    /** 
    A shorthand for calling setBlockExecution(true) and setMessage(message).<p></p>
    It allows you to block a save and set a response message in a single function call.
    */
    Void setValidationMessage(String message);
    /** 
    Triggers a dialog to handle user input.
    */
    Void showDialog(EventDataDialogDefinition dialog);
}`;