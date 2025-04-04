export const Byte = `/** 
Represents a byte. A byte can only contain integer values between 0 and 255. Large values will be masked.
*/
class Byte {
    /** 
    Pass a number to copy into a new object.
    */
    constructor(Integer value);
    /** 
    Convert the value of the current byte to a hexadecimal representation of the byte. For example, 10 will return "a", 11 will return "b", and so on.
    */
    String toHex();
    /** 
    Convert the value of the current byte to a hexadecimal representation of the byte with padding zeros. For example, 10 will return "a", 11 will return "b", and so on.
    */
    String toHex(Integer padding);
    /** 
    Converts a byte value to its string representation.
    */
    String toString();
    /** 
    Converts a byte value to its integer representation (0 - 255).
    */
    Integer toInteger();
    /** 
    Returns the boolean value of the Byte.
    */
    Bool toBool();
}`;