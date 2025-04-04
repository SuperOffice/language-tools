export const Vector = `/** 
This class represents a Vector, in which you can add objects of the type String..
*/
class Vector {
    /** 
    Pass a number array to convert into a new object.
    */
    constructor(Integer[] value);
    /** 
    Parses a text into a vector. The fields in the string are separated by the given delimiter.
    */
    undefined parseString(String text, String delimiter);
    /** 
    Removes an element at the specified index.
    */
    undefined removeAt(Integer index);
    /** 
    Returns an element in the vector at the given position.
    */
    String get(Integer index);
    /** 
    Sets the value at the specified index.
    */
    undefined set(Integer index, String value);
    /** 
    Returns the size of the vector.
    */
    Integer size();
    /** 
    Convert a vector to an integer array.
    */
    Integer[] toIntegerArray();
    /** 
    Convert a vector to a string array.
    */
    String[] toStringArray();
    /** 
    Returns a string of all the elements in the vector, separated by the specified delimiter.
    */
    String buildString(String delimiter);
    /** 
    Pushes a string object to the end of the vector.
    */
    undefined pushBack(String element);
}`;