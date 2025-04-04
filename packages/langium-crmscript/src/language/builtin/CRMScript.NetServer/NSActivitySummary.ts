export const NSActivitySummary = `/** 
Activity information summary - number of free and busy activities. Carrier object for ActivitySummary.
*/
class NSActivitySummary {
    /** 
    Returns the number of activities and tasks in the diary that are of type 'busy'.
    */
    Integer GetNumBusyActivities();
    /** 
    Returns the number of activities of the type 'free'.
    */
    Integer GetNumFreeActivities();
    /** 
    Checks how much of the active work-day that is booked in appointments.
    */
    Integer GetPercentageBusy();
    /** 
    Sets the number of activities and tasks in the diary that are of type 'busy'.
    */
    Void SetNumBusyActivities(Integer numBusyActivities);
    /** 
    Sets the number of activities of the type 'free'.
    */
    Void SetNumFreeActivities(Integer numFreeActivities);
    /** 
    Sets how much of the active work-day that is booked in appointments.
    */
    Void SetPercentageBusy(Integer percentageBusy);
}`;