export const JSONBuilder = `/** 
The JSONBuilder class simplifies building JSON hierarchies. The result will be a string in correct JSON format, with string values properly escaped. This class is useful for example in combination with the HTTP class to make REST-calls.
*/
class JSONBuilder {
    /** 
    Adds a boolean value to the current scope.
    */
    Void addBoolean(String key, Bool value);
    /** 
    Adds a float value to the current scope.
    */
    Void addFloat(String key, Float value);
    /** 
    Adds an integer value to the current scope.
    */
    Void addInteger(String key, Integer value);
    /** 
    Adds a string value to the current scope.
    */
    Void addString(String key, String value);
    /** 
    Pops all levels out to the root.
    */
    Void finalize();
    /** 
    Returns the JSON-formatted string that has been built by all push and add methods.
    */
    String getString();
    /** 
    Pops a level (closes an array or an object) in the JSONBuilder.
    */
    Void popLevel();
    /** 
    Adds an array to the JSONBuilder. Subsequent methods will add members inside the array.
    */
    Void pushArray(String array);
    /** 
    Adds an object to the JSONBuilder. Subsequent methods will add members inside the object.
    */
    Void pushObject(String object);
    /** 
    Sets whether the JSON should be pretty formatted or not.
    */
    Void setPrettyPrint(Integer indent);
}`;