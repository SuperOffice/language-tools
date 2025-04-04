export const WeekSchedule = `/** 
This class is used to represent a week schedule - what hours a day are "active" for each day, etc.
*/
class WeekSchedule {
    /** 
    Adds a time span to the schedule.
    */
    DateTime addTimeSpan(DateTime start, TimeSpan add);
    /** 
    Returns difference between two DateTime as a TimeSpan.
    */
    TimeSpan getDifference(DateTime start, DateTime stop);
    /** 
    This function returns the start time (object) of "active" mode for Friday.
    */
    Time getFriStart();
    /** 
    This function returns the end time (object) of "active" mode for Friday.
    */
    Time getFriStop();
    /** 
    This function returns the start time (object) of "active" mode for Monday.
    */
    Time getMonStart();
    /** 
    This function returns the end time (object) of "active" mode for Monday.
    */
    Time getMonStop();
    /** 
    This function returns the dates that are closed, comma separated.
    */
    String getNonDates();
    /** 
    This function returns the start time (object) of "active" mode for Saturday.
    */
    Time getSatStart();
    /** 
    This function returns the end time (object) of "active" mode for Saturday.
    */
    Time getSatStop();
    /** 
    This function returns the start time (object) of "active" mode for Sunday.
    */
    Time getSunStart();
    /** 
    This function returns the end time (object) of "active" mode for Sunday.
    */
    Time getSunStop();
    /** 
    This function returns the start time (object) of "active" mode for Thursday.
    */
    Time getThuStart();
    /** 
    This function returns the end time (object) of "active" mode for Thursday.
    */
    Time getThuStop();
    /** 
    This function returns the start time (object) of "active" mode for Tuesday.
    */
    Time getTueStart();
    /** 
    This function returns the end time (object) of "active" mode for Tuesday.
    */
    Time getTueStop();
    /** 
    This function returns the start time (object) of "active" mode for Wednesday.
    */
    Time getWedStart();
    /** 
    This function returns the end time (object) of "active" mode for Wednesday.
    */
    Time getWedStop();
    /** 
    load a WeekSchedule object using the given priority's week schedule. Be aware that this method will clear all settings you may have on the WeekSchedule object.
    */
    Void loadFromPriority(Integer p_id);
    /** 
    This function sets the start time (object) of "active" mode for Friday.
    */
    Void setFriStart(Time t);
    /** 
    This function sets the end time (object) of "active" mode for Friday.
    */
    Void setFriStop(Time t);
    /** 
    This function sets the start time (object) of "active" mode for Monday.
    */
    Void setMonStart(Time t);
    /** 
    This function sets the end time (object) of "active" mode for Monday.
    */
    Void setMonStop(Time t);
    /** 
    This function sets the dates that are inactive.<p></p>
    Example date string: "1/10/2004,24/12". If the year is not specified, the date is inactive every year.
    */
    Void setNonDates(String dates);
    /** 
    This function sets the start time (object) of "active" mode for Saturday.
    */
    Void setSatStart(Time p_0);
    /** 
    This function sets the end time (object) of "active" mode for Saturday.
    */
    Void setSatStop(Time t);
    /** 
    This function sets the start time (object) of "active" mode for Sunday.
    */
    Void setSunStart(Time t);
    /** 
    This function sets the end time (object) of "active" mode for Sunday.
    */
    Void setSunStop(Time t);
    /** 
    This function sets the start time (object) of "active" mode for Thursday.
    */
    Void setThuStart(Time t);
    /** 
    This function sets the end time (object) of "active" mode for Thursday.
    */
    Void setThuStop(Time t);
    /** 
    This function sets the start time (object) of "active" mode for Tuesday.
    */
    Void setTueStart(Time p_0);
    /** 
    This function sets the end time (object) of "active" mode for Tuesday.
    */
    Void setTueStop(Time t);
    /** 
    This function sets the start time (object) of "active" mode for Wednesday.
    */
    Void setWedStart(Time t);
    /** 
    This function sets the end time (object) of "active" mode for Wednesday.
    */
    Void setWedStop(Time t);
}`;