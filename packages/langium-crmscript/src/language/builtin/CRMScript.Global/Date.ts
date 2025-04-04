export const Date = `/** 
Date is a complex data type representing a day, month, and year on ISO format YYYY-MM-DD. The default value is now.<p></p>
Before a Date is initialized, it has no value. This is commonly written as NULL, NUL, or NIL in other programming languages. CRMScript automatically initializes Date objects when declared to the current date. Thus this situation is uncommon.
*/
class Date {
    /** 
    Pass a value to copy into a new object.
    */
    constructor(Date value);
    /** 
    Pass a String containing a date on format YYYY-MM-DD. The constructor will parse the text and create a Date object.
    */
    constructor(String value);
    /** 
    Converts a date value to its string representation, in ISO format.
    */
    String toString();
    /** 
    Adjusts the currently set date with the given number of days. The original object will be modified, and a copy is returned.
    */
    Date addDay(Integer num);
    /** 
    Adjusts the currently set date with the given number of months.
    */
    Date addMonth(Integer num);
    /** 
    Adjusts the currently set date with the given number of years.
    */
    Date addYear(Integer num);
    /** 
    Returns the day of the month as an Integer [1-31].
    */
    Integer getMDay();
    /** 
    Returns the month as an Integer [1-12].
    */
    Integer getMonth();
    /** 
    Returns the ISO number of the week as an Integer [1-53].
    */
    Integer getWeek();
    /** 
    Returns the ISO day of the week as an Integer [0-6].
    */
    Integer getWeekDay();
    /** 
    Returns the year as an Integer.
    */
    Integer getYear();
    /** 
    Returns true if it has no value and false if it does.
    */
    Bool isNull();
}`;