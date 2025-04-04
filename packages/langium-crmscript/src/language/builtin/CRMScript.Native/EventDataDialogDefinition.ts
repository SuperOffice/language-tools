export const EventDataDialogDefinition = `/** 
Utility class to generate a dialog to use in CRMScript triggers.
*/
class EventDataDialogDefinition {
    /** 
    Adds a checkbox field with given label.
    */
    Void addCheckbox(String id, String label);
    /** 
    Adds a checkbox field with given label. Possible to set field as mandatory.
    */
    Void addCheckbox(String id, String label, Bool mandatory);
    /** 
    Adds a Date field with given label.
    */
    Void addDate(String id, String label);
    /** 
    Adds a Date field with given label and a default value.
    */
    Void addDate(String id, String label, Date default);
    /** 
    Adds a Date field with given label, default value, placeholder text. Possible to set field as mandatory.
    */
    Void addDate(String id, String label, Date default, String placeholder, Bool mandatory);
    /** 
    Adds a DateTime field with given label.
    */
    Void addDateTime(String id, String label);
    /** 
    Adds a DateTime field with given label and a default value.
    */
    Void addDateTime(String id, String label, DateTime default);
    /** 
    Adds a DateTime field with given label, default value, placeholder text. Possible to set field as mandatory.
    */
    Void addDateTime(String id, String label, DateTime default, String placeholder, Bool mandatory);
    /** 
    Adds a field to dialog.
    */
    Void addField(EventDataDialogField field);
    /** 
    Adds a Float field with given label.
    */
    Void addFloat(String id, String label);
    /** 
    Adds a Float field with given label and a default value.
    */
    Void addFloat(String id, String label, Float defaultValue);
    /** 
    Adds a Float field with given label, default value, placeholder text. Possible to set field as mandatory.
    */
    Void addFloat(String id, String label, Float defaultValue, String placeholder, Bool mandatory);
    /** 
    Adds a Integer field with given label.
    */
    Void addInteger(String id, String label);
    /** 
    Adds a Integer field with given label and a default value.
    */
    Void addInteger(String id, String label, Integer defaultValue);
    /** 
    Adds a Integer field with given label, default value, placeholder text. Possible to set field as mandatory.
    */
    Void addInteger(String id, String label, Integer defaultValue, String placeholder, Bool mandatory);
    /** 
    Adds a label field.
    */
    Void addLabel(String id, String label);
    /** 
    Adds a list field from listName with the given label.
    */
    Void addList(String id, String label, String listName);
    /** 
    Adds a list field from listname with given label and default value.
    */
    Void addList(String id, String label, String listName, Integer defaultValue);
    /** 
    Adds a list field from listname with given label, default value, placeholder text. Possible to set field as mandatory.
    */
    Void addList(String id, String label, String listName, Integer defaultValue, String placeholder, Bool mandatory);
    /** 
    Adds a list field from manually created list with given label, default value, placeholder text. Possible to set field as mandatory.
    */
    Void addList(String id, String label, String[] listItems, String defaultValue, String placeholder, Bool mandatory);
    /** 
    Adds a list field from listname with given label, default value, placeholder text. Possible to set additionalInfo supported by list and force list to be flat. Possible to set field as mandatory.
    */
    Void addList(String id, String label, String listName, Integer defaultValue, String placeholder, Bool mandatory, String additionalInfo, Bool forceFlatList);
    /** 
    Adds a text field with given label.
    */
    Void addText(String id, String label);
    /** 
    Adds a text field with given label and a default value.
    */
    Void addText(String id, String label, String defaultValue);
    /** 
    Adds a text field with given label, default value, placeholder text. Possible to set field as mandatory.
    */
    Void addText(String id, String label, String defaultValue, String placeholder, Bool mandatory);
    /** 
    Adds a Time field with given label.
    */
    Void addTime(String id, String label);
    /** 
    Adds a Time field with given label and a default value.
    */
    Void addTime(String id, String label, Time default);
    /** 
    Adds a Time field with given label, default value, placeholder text. Possible to set field as mandatory.
    */
    Void addTime(String id, String label, Time default, String placeholder, Bool mandatory);
    /** 
    Adds a TimeSpan field with given label.
    */
    Void addTimeSpan(String id, String label);
    /** 
    Adds a TimeSpan field with given label and a default value.
    */
    Void addTimeSpan(String id, String label, Integer default);
    /** 
    Adds a TimeSpan field with given label, default value, placeholder text. Possible to set field as mandatory.
    */
    Void addTimeSpan(String id, String label, Integer default, String placeholder, Bool mandatory);
    /** 
    Adds a TimeSpan field with given label, default value, placeholder text and which units to display. Possible to set field as mandatory.
    */
    Void addTimeSpan(String id, String label, Integer default, String placeholder, Bool mandatory, Bool allowBlank, Bool days, Bool hours, Bool minutes, Bool seconds);
    /** 
    Remove field with given name.
    */
    Void removeField(String id);
    /** 
    Returns true if execution is blocked on cancel.
    */
    Bool getBlockExecutionOnCancel();
    /** 
    Set if execution should be blocked on cancel.
    */
    Void setBlockExecutionOnCancel(Bool value);
    /** 
    Get height set on dialog.
    */
    Integer getHeight();
    /** 
    Set height of dialog.
    */
    Void setHeight(Integer height);
    /** 
    Returns type of icon on dialog
    */
    String getIcon();
    /** 
    Sets icon type on dialog.
    */
    Void setIcon(String value);
    /** 
    Returns body text with Markdown syntax.
    */
    String getMarkdown();
    /** 
    Sets body text using Markdown syntax on dialog. If specified this will take precedence over setText().
    */
    Void setMarkdown(String value);
    /** 
    Returns prefix set for fields dialog
    */
    String getPrefix();
    /** 
    Sets prefix for fields in dialog.
    */
    Void setPrefix(String value);
    /** 
    Returns body text on dialog
    */
    String getText();
    /** 
    Sets body text on dialog.
    */
    Void setText(String value);
    /** 
    Returns title on dialog
    */
    String getTitle();
    /** 
    Sets title on dialog.
    */
    Void setTitle(String value);
    /** 
    Returns what type of dialog
    */
    String getType();
    /** 
    Sets type of dialog.
    */
    Void setType(String type);
    /** 
    Get width set on dialog.
    */
    Integer getWidth();
    /** 
    Set width of dialog.
    */
    Void setWidth(Integer height);
    /** 
    Returns EventDataDialogDefinition as a JSON string.
    */
    String toJSONString();
}`;