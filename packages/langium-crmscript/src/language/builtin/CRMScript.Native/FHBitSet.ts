export const FHBitSet = `/** 
Used to represent and manipulate a 32 bit bitset.
*/
class FHBitSet {
    /** 
    Checks if a specified bit is set.
    */
    Bool getBitNo(Integer number);
    /** 
    Initializes the bitset from an Integer.
    */
    Void set(Integer value);
    /** 
    Initializes the bitset from a String.
    */
    Void set(String rep);
    /** 
    Sets a specific bit.
    */
    Void setBitNo(Integer number, Bool val);
    /** 
    Returns the bitset as an integer.
    */
    Integer toInteger();
    /** 
    Returns an LSB (Least Significant Byte first) string representation of the bitset.
    */
    String toLsbString();
}`;