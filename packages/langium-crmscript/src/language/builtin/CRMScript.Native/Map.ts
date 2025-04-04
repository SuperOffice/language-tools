export const Map = `/** 
A map is a collection of key-value pairs. Both the key and the value are strings.<p></p>
The elements in a map are automatically sorted on their keys.<p></p>
The Map class supports two constructors. The default constructor accepts no parameters and initializes a Map with an empty key-value pair collection. The other constructor accepts a String.
*/
class Map {
    /** 
    The default constructor. Called with no parameters, it creates an empty Map.
    */
    constructor();
    /** 
    Pass a String containing key-value pairs separated by "\n" like this: "key=value\nkey=value\nkey=value,..."
    */
    constructor(String value);
    /** 
    Adds a new key-value pair to the map.
    */
    Map insert(String key, String value);
    /** 
    Checks if the map contains the given key.
    */
    Bool exists(String key);
    /** 
    Counts the elements in the map and returns that number.
    */
    Integer size();
    /** 
    Returns the value for the given key.
    */
    String get(String key);
    /** 
    Returns the key pointed to by the map iterator.
    */
    String getKey();
    /** 
    Returns the value pointed to by the map iterator.
    */
    String getVal();
    /** 
    Returns the fallback value if key does not exist.
    */
    String getWithFallback(String key, String fallback);
    /** 
    When working with numeric strings, you can increment values stored in the map. Provide the key to look up the element and the value to add to the currently stored value.
    */
    Void increaseValueForKey(String key, Integer value);
    /** 
    When working with numeric strings, you can increment values stored in the map. Provide the key to look up the element and the value to add to the currently stored value.
    */
    Void increaseValueForKey(String key, Float value);
    /** 
    Removes the element with the given key.
    */
    Void remove(String key);
    /** 
    Removes all elements from the map.
    */
    Void clear();
    /** 
    Returns true if the map iterator has moved past the end of the map, otherwise false.
    */
    Bool eof();
    /** 
    Rewinds the internal iterator to the 1st element. Returns false if the map is empty.
    */
    Bool first();
    /** 
    Moves the map iterator to next position. Returns false if eof().
    */
    Bool next();
    /** 
    Converts the Map to JSON.
    */
    String toJson();
    /** 
    Converts a JSON string to a map. Format: {"key": "value", "foo": "bar"}
    */
    Void fromJson(String json);
}`;