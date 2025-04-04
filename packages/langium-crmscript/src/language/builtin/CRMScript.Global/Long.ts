export const Long = `/** 
Longs are positive and negative whole 64-bit unsigned numbers without decimals. If you need to work with decimals, use the Float data type.
To represent a long number in the code as a literal, suffix it with an "L", for example, "Long l = 576460752303423488L;"*/
class Long {
    /** 
    Pass a value to copy into a new object.
    */
    constructor(Long value);
    /** 
    Pass a value to copy into a new object.
    */
    constructor(Integer value);
    /** 
    Converts a numeric value to its string representation.<p></p>
    One of the most frequently used methods, typically when you are going to output something.
    */
    String toString();
    /** 
    Returns true if it has no value and false if it does.
    */
    Bool isNull();
    /** 
    Returns the high 32-bit Integer of the Long.
    */
    Integer getHighInteger();
    /** 
    Returns the low 32-bit Integer of the Long.
    */
    Integer getLowInteger();
}`;