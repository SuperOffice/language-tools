export const AppointmentSlicer = `/** 
Slices appointments into single entities that are within a single day. This class is essential when having calender data (with entries possibly spanning several days), which you would like to display in the calender control (which only accepts data for single days).
*/
class AppointmentSlicer {
    /** 
    Adds an appointment to the class.
    */
    undefined addAppointment(Integer id, DateTime title, DateTime start, String stop);
    /** 
    Clears all the added appointments from the instance.
    */
    Void clear();
    /** 
    Returns true if the internal iterator is past the appointments for the chosen day; otherwise, false.
    */
    Bool eof();
    /** 
    Returns the accumulated load for a given day.
    */
    Integer getLoadForDay(Date day, Time start, Time stop, Integer max);
    /** 
    Returns the value for the given field for the appointment pointed to by the internal iterator.
    */
    String getValue(String field);
    /** 
    Moves the internal iterator to next appointment in the same day.<p></p>
    Returns false if <code>eof()</code>; otherwise, true.
    */
    Bool next();
    /** 
    Sets the internal iterator to the given date.
    */
    Void setActiveDate(Date date);
}`;