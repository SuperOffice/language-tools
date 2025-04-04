export const TimeZone = `/** 
Gives access to timezone info. Call the global function getLocalTimeZone() to get the object.
*/
class TimeZone {
    /** 
    This functions will give you the difference from GMT in hours and minutes.
    */
    String getTimeZone();
    /** 
    Difference from GMT in seconds.
    */
    Integer getTimeZoneSecs();
}`;