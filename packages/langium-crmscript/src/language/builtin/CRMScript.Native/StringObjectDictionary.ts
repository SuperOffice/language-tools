export const StringObjectDictionary = `/** 
A StringObjectDictionary is a collection of key-value pairs. The key is a string and the value can be an integer, float, string, boolean or datetime.<p></p>
*/
class StringObjectDictionary {
    /** 
    Returns Integer value for key
    */
    Integer getInteger(String key);
    /** 
    Returns Float value for key
    */
    Float getFloat(String key);
    /** 
    Returns String value for key
    */
    String getString(String key);
    /** 
    Returns boolean value for key
    */
    Bool getBool(String key);
    /** 
    Returns value for key
    */
    DateTime getDateTime(String key);
    /** 
    Inserts or updates value for given key
    */
    Void insertInteger(String key, Integer value);
    /** 
    Inserts or updates value for given key
    */
    Void insertString(String key, String value);
    /** 
    Inserts or updates value for given key
    */
    Void insertFloat(String key, Float value);
    /** 
    Inserts or updates value for given key
    */
    Void insertBool(String key, Bool value);
    /** 
    Inserts or updates value for given key
    */
    Void insertDateTime(String key, DateTime value);
}`;