export const Float = `
/** 
A class for representing floating point numbers as objects. Floats are approximations of real numbers written with decimals. If you don't need to work with decimals, use the Integer data type.
*/
class Float {
    /** 
    Pass a value to copy into a new object.
    */
    constructor(Float value);
    /** 
    Pass an Integer and have it converted to a Float object.
    */
    constructor(Integer value);
    /** 
    Pass a String containing a number. The constructor will parse the text and create a Float object.
    */
    constructor(String value);
    /** 
    Create a new Float instance from a Long instance.
    */
    constructor(Long value);
    /** 
    Converts a float value to its string representation.<p></p>
    One of the most frequently used methods, typically when you are going to output something.
    */
    String toString(Integer decimals);
    /** 
    Converts a float value to its absolute value (the non-negative value of the number without regarding the sign).
    */
    Float abs();
    /** 
    Returns the Integer preceding the decimal separator. The floor of a Float is calculated by rounding downward to the nearest Integer.
    */
    Integer floor();
    /** 
    Returns the Integer approximation of the Float without any decimals. It is calculated by rounding to the nearest Integer.
    */
    Integer round();
    /** 
    Returns true if it has no value and false if it does.
    */
    Bool isNull();
}`;