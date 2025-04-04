export const NSActivityFilter = `/** 
Activity list filter information. Carrier object for ActivityFilter.
*/
class NSActivityFilter {
    /** 
    Returns the list of associates to filter on.
    */
    NSSelectableMDOListItem[] GetAssociateList();
    /** 
    Returns the date to filter from.
    */
    DateTime GetFromDate();
    /** 
    Returns the list of future date selections.
    */
    NSMDOListItem[] GetFutureDateList();
    /** 
    Returns the list of groups to filter on.
    */
    NSSelectableMDOListItem[] GetGroupList();
    /** 
    Returns the date to filter to.
    */
    DateTime GetToDate();
    /** 
    Sets the list of associates to filter on.
    */
    Void SetAssociateList(NSSelectableMDOListItem[] associateList);
    /** 
    Sets the date to filter from.
    */
    Void SetFromDate(DateTime fromDate);
    /** 
    Sets the list of future date selections.
    */
    Void SetFutureDateList(NSMDOListItem[] futureDateList);
    /** 
    Sets the list of groups to filter on.
    */
    Void SetGroupList(NSSelectableMDOListItem[] groupList);
    /** 
    Sets the date to filter to.
    */
    Void SetToDate(DateTime toDate);
}`;