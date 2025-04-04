export const Time = `/** 
A class for representing time as objects. Time is a complex data type representing the time of the day in hours, minutes, and seconds. The default value is now. ISO 8601 uses the 24-hour clock system. Format: hh:mm:ss
*/
class Time {
    /** 
    Pass a value to copy into a new object.
    */
    constructor(Time value);
    /** 
    Pass a String containing a timestamp on format HH:MM:SS. The constructor will parse the text and create a Time object.
    */
    constructor(String value);
    /** 
    Converts a Time value to its string representation.<p></p>
    One of the most frequently used methods, typically when you are going to output something.
    */
    String toString();
    /** 
    Overwrites the current time and sets hours to the given number [0-23].
    */
    undefined setHour(Integer hour);
    /** 
    Overwrites the current time and sets minutes to the given number [0-59].
    */
    undefined setMin(Integer min);
    /** 
    Overwrites the current time and sets seconds to the given number [0-59].
    */
    undefined setSec(Integer sec);
    /** 
    Returns the hour portion of the time as an Integer.
    */
    Integer getHour();
    /** 
    Returns the minutes portion of the time as an Integer.
    */
    Integer getMin();
    /** 
    Returns the seconds portion of the time as an Integer.
    */
    Integer getSec();
    /** 
    Returns true if it has no value and false if it does.
    */
    Bool isNull();
}`;