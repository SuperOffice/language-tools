export const DateTime = `/** 
DateTime is a complex data type representing a timestamp with both date and time elements on ISO format YYYY-MM-DD. The default value is now.<p></p>
Before a Date is initialized, it has no value. This is commonly written as NULL, NUL, or NIL in other programming languages. CRMScript automatically initializes Date objects when declared to the current date. Thus this situation is uncommon.
*/
class DateTime {
    /** 
    Pass a value to copy into a new object.
    */
    constructor(DateTime value);
    /** 
    Specify all elements of a DateTime individually. It accepts 6 integer values, representing year, month (1-12), day-of-month (1-31), hour (0-23), minute (0-59), and second (0-59). The constructor automatically calculates the weekday.
    */
    constructor(Integer year, Integer month, Integer mday, Integer hour, Integer min, Integer sec);
    /** 
    Pass a String containing date and time. The constructor will parse the text and create a DateTime object. Formats:<p></p>
     YYYY-MM-DD HH:MM:SS;<p></p>
     YYYY-MM-DD HH:MM - automatically sets sec = 0;<p></p>
     YYYYMMDDHHMMSS - mysql.timestamp;<p></p>
     YYYY-MM-DD - automatically sets the time to 23:59:59 or 0:0:0 depending on endOfDay setting;<p></p>
     an empty string or "0" - sets stamp to Jan 1. 1970 00:00:00 and isNull();<p></p>
     YYYY-MM-DD HH:MM:SS:XXX
    */
    constructor(String value);
    /** 
    Converts a DateTime value to its string representation.<p></p>
    One of the most frequently used methods, typically when you are going to output something.
    */
    String toString();
    /** 
    A variant of toString() that takes a string with one or more formatting codes. You can also include white-space and punctuation marks.
    */
    String toString(String format);
    /** 
    A variant of toString() that takes a string with one or more formatting codes. You can also include white-space and punctuation marks.
    */
    String toString(String format, String months, String weekDays);
    /** 
    A variant of toString() that takes codes for mode and language as Integers and a boolean indicator for 12- or 24-hour clock.
    */
    String toString(Integer mode, Integer language, Bool 24HourMode);
    /** 
    Adjusts the currently set date with the given number of days.
    */
    DateTime addDay(Integer num);
    /** 
    Adjusts the currently set date with the given number of months.
    */
    DateTime addMonth(Integer num);
    /** 
    Adjusts the currently set date with the given number of years.
    */
    DateTime addYear(Integer num);
    /** 
    Adjusts the currently set date with the given number of hours.
    */
    DateTime addHour(Integer num);
    /** 
    Adjusts the currently set date with the given number of minutes.
    */
    DateTime addMin(Integer num);
    /** 
    Adjusts the currently set date with the given number of seconds.
    */
    DateTime addSec(Integer num);
    /** 
    Sets the time-part of a DateTime by passing a Time object.
    */
    DateTime setTime(Time theTime);
    /** 
    Returns the day of the month as an Integer [1-31].
    */
    Integer getMDay();
    /** 
    Returns the month as an Integer [1-12].
    */
    Integer getMonth();
    /** 
    Returns the number of the week as an Integer [1-53].
    */
    Integer getWeek();
    /** 
    Returns the day of the week as an Integer [0-6].
    */
    Integer getWeekDay();
    /** 
    Returns the year as an Integer.
    */
    Integer getYear();
    /** 
    Returns the time-portion as a Time object.
    */
    Time getTime();
    /** 
    Returns the date part of the DateTime
    */
    Date getDate();
    /** 
    Returns the difference in the number of seconds between 2 timestamps. The method subtracts the passed timestamp from the DateTime object you invoke diff() on.
    */
    Integer diff(DateTime value);
    /** 
    Sets the date and time to the number of the seconds since 01.01.1970 00:00:00.
    */
    DateTime setUnix(Integer number);
    /** 
    Returns the date and time to the number of the seconds since 01.01.1970 00:00:00.
    */
    Integer getUnix();
    /** 
    Returns true if it has no value and false if it does.
    */
    Bool isNull();
    /** 
    Moves the current DateTime to the start of the day, (00:00 o'clock). Returns a reference to itself.
    */
    DateTime moveToDayStart();
    /** 
    Moves the current DateTime to the start of the current hour. Returns a reference to itself.
    */
    DateTime moveToHourStart();
    /** 
    Moves the current DateTime to the first second in the current month. Returns a reference to itself.
    */
    DateTime moveToMonthStart();
    /** 
    Moves the current DateTime to the start of the current quarter (1. of January, 1. of April, 1. of July, or 1. of October). Returns a reference to itself.
    */
    DateTime moveToQuarterStart();
    /** 
    Moves the current DateTime back to 00:00:00 on monday in the current week. Returns a reference to itself.
    */
    DateTime moveToWeekStart();
    /** 
    Moves the current DateTime to the first second in the current year. Returns a reference to itself.
    */
    DateTime moveToYearStart();
    /** 
    Moves the current DateTime to the end of the day (23:59:59). Returns a reference to itself.
    */
    DateTime moveToDayEnd();
    /** 
    Moves the current DateTime to the end of the current hour. Returns a reference to itself.
    */
    DateTime moveToHourEnd();
    /** 
    Moves the current DateTime to the last second in the current month. Returns a reference to itself.
    */
    DateTime moveToMonthEnd();
    /** 
    Moves the current DateTime to the end of current quarter: 31. of Mars, 30. of June, 30 of September or 31. of December. Time is set to 23:59:59.  Returns a reference to itself.
    */
    DateTime moveToQuarterEnd();
    /** 
    Moves the current DateTime forward to 23:59:59 on Sunday of the current week. Returns a reference to itself.
    */
    DateTime moveToWeekEnd();
    /** 
    Moves the current DateTime to the last second in the current year. Returns a reference to itself.
    */
    DateTime moveToYearEnd();
}`;