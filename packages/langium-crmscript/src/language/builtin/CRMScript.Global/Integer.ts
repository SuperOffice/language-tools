export const Integer = `/** 
Integers are positive and negative whole 32-bit unsigned numbers without decimals. If you need to work with decimals, use the Float data type.
*/
class Integer {
    /** 
    Pass a value to copy into a new object.
    */
    constructor(Integer value);
    /** 
    Pass a String containing a number. The constructor will parse the text and create an Integer object.
    */
    constructor(String value);
    /** 
    Converts a numeric value to its string representation.<p></p>
    One of the most frequently used methods, typically when you are going to output something.
    */
    String toString();
    /** 
    Converts a numeric value to its boolean representation. Returns false if the integer is zero, otherwise true.
    */
    Bool toBool();
    /** 
    Converts a numeric value to its absolute value (the non-negative value of the number without regarding the sign).<p></p>
    One of the most frequently used methods, typically when you are going to output something.
    */
    Integer abs();
    /** 
    Converts an Integer to a hexadecimal string.
    */
    String toHex();
    /** 
    Converts an Integer to a hexadecimal string.<p></p>
    Same as above except you write toHex(i) rather than i.toHex().
    */
    String toHex(Integer value);
    /** 
    Returns true if it has no value and false if it does.
    */
    Bool isNull();
}`;