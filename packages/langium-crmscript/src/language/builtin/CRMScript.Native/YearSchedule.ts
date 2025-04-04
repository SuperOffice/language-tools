export const YearSchedule = `/** 
This class is used to represent a year schedule. A year can be composed of several WeekSchedules.
*/
class YearSchedule {
    /** 
    This function adds a time span to the current year schedule.
    */
    DateTime addTimeSpan(DateTime dt, TimeSpan sp);
    /** 
    This function adds a week schedule to the year schedule.
    */
    Void addWS(WeekSchedule ws, Integer mStop, Integer dStop);
    /** 
    Gets difference between two given times. The function returns a timespan.<p></p>
    Counting will skip inactive periodes, defined by the different weekschedules that may be crossed.
    */
    TimeSpan getDifference(DateTime from, DateTime to);
}`;