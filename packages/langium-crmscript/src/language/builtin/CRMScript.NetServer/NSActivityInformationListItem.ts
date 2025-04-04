export const NSActivityInformationListItem = `/** 
Carrier object for ActivityInformationListItem.
*/
class NSActivityInformationListItem {
    /** 
    Returns the number of free and busy activities.
    */
    NSActivitySummary GetActivityInformation();
    /** 
    Returns the date that this item is valid for.
    */
    DateTime GetDate();
    /** 
    Sets the number of free and busy activities.
    */
    Void SetActivityInformation(NSActivitySummary activityInformation);
    /** 
    Sets the date that this item is valid for.
    */
    Void SetDate(DateTime date);
}`;