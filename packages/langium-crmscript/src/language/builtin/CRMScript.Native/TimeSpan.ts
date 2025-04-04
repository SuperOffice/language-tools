export const TimeSpan = `/** 
A class for representing a time span.
*/
class TimeSpan {
    /** 
    Adds the given number of days to the currently set time span.
    */
    Void addDay(Integer num);
    /** 
    Adds the given number of hours to the currently set time span.
    */
    Void addHour(Integer num);
    /** 
    Adds the given number of minutes to the currently set time span.
    */
    Void addMin(Integer num);
    /** 
    Adds the given number of seconds to the currently set time span.
    */
    Void addSec(Integer num);
    /** 
    Adds the given number of years to the currently set time span.
    */
    Void addYear(Integer num);
    /** 
    Returns the day field of the time span as an integer.
    */
    Integer getDay();
    /** 
    Returns the hour field of the time span as an integer.
    */
    Integer getHour();
    /** 
    Returns the minute field of the time span as an integer.
    */
    Integer getMin();
    /** 
    Returns the seconds field of the time span as an integer.
    */
    Void getSec();
    /** 
    Returns the year field of the time span as an integer.
    */
    Integer getYear();
    /** 
    Checks if this is a negative time span.
    */
    Bool isNegative();
    /** 
    Initializes a time span object.
    */
    Void set(Integer years, Integer days, Integer hours, Integer minutes, Integer seconds);
    /** 
    Positive time span is default, but if you add a negative number of years/days/hours/minutes/seconds, you may get a negative times pan.
    */
    Void setNegative(Bool negative);
    /** 
    Returns the time span as a number of days. A one year time span will return 365.
    */
    Integer toDays();
    /** 
    Returns the time span as a number of hours. A one day time span will return 24.
    */
    Integer toHours();
    /** 
    Returns the time span as a number of minutes. A one hour time span will return 60.
    */
    Integer toMinutes();
    /** 
    Returns the time span as a number of seconds. A one minute time span will return 60.
    */
    Integer toSeconds();
    /** 
    Returns the time span as a string representation, on given format and language.
    */
    String toString(Integer mode, Integer lang, Integer maxMode, Bool short);
}`;