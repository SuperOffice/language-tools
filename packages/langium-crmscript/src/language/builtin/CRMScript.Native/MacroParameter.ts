export const MacroParameter = `/** 
MacroParameter class
*/
class MacroParameter {
    /** 
    Initializes a new instance of the MacroParameter class.
    */
    constructor(String name, String type, Map controlConfig, String label, String description, Bool isOptional);
    /** 
    Initializes a new instance of the MacroParameter class.
    */
    constructor(String name, String type, Map controlConfig, String label, String description, Bool isOptional, String defaultValue, Bool defaultValueIsFixed);
    /** 
    Gets the optional control configuration values that influence how the input control behaves.
    */
    Map getControlConfig();
    /** 
    Returns a longer description of the parameter.
    */
    String getDescription();
    /** 
    Returns true if the value is fixed, and false if it is read from another task or the environment.
    */
    Bool getIsFixedValue();
    /** 
    Returns true if the value is optional, and false if it is mandatory.
    */
    Bool getIsOptional();
    /** 
    Returns the label for the parameter when displayed in a form.
    */
    String getLabel();
    /** 
    Returns the name of the parameter.
    */
    String getName();
    /** 
    Returns the source path of the object it is called from.
    */
    String getSourcePath();
    /** 
    Returns the type of the parameter.
    */
    String getType();
    /** 
    If the parameter is a fixed value, this function will return that value.
    */
    String getValue();
    /** 
    Sets the optional configuration values for the type. The configuration will influence how the input control behaves.
    */
    Void setControlConfig(Map values);
    /** 
    Sets a longer description of the parameter. This description can for instance be used in as help in a form.
    */
    Void setDescription(String description);
    /** 
    Sets whether or not the parameter is a fixed value.
    */
    Void setIsFixedValue(Bool isFixed);
    /** 
    Sets whether or not the parameter is optional.
    */
    Void setIsOptional(Bool isOptional);
    /** 
    Sets the label of the parameter when displayed in form.
    */
    Void setLabel(String label);
    /** 
    Sets the name of the parameter.
    */
    Void setName(String name);
    /** 
    Sets the parameter's source path.
    */
    Void setSourcePath(String path);
    /** 
    Sets the type of the parameter.
    */
    Void setType(String type);
    /** 
    Sets the value of the parameter, given that the parameter is a fixed value.
    */
    Void setValue(String value);
}`;