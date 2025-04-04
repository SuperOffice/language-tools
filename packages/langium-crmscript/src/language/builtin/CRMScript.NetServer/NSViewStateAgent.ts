export const NSViewStateAgent = `/** 
User interface view state, history, currentXXX values.
*/
class NSViewStateAgent {
    /** 
    Deletes the history element
    */
    Void DeleteHistory(String historyName, Integer id);
    /** 
    Gets the current (most recent) value of the history list.
    */
    NSHistory GetCurrent(String historyName);
    /** 
    Returns all history items that belong to the currently logged in user
    */
    NSHistory[] GetHistories();
    /** 
    Returns the named history list that belong to the currently logged in user
    */
    NSHistory[] GetHistoriesByName(String historyName);
    /** 
    Returns the named history lists that belong to the currently logged in user
    */
    NSHistory[] GetHistoriesByNames(String[] historyNames);
    /** 
    Returns history data for the named entities and the given IDs, which may not directly correspond to the current history records in the database.<para/>Use this method if you know exactly which items you need, regardless of whether they are in the current history or not.<para/>The history in the database is not changed or even looked at by this method.
    */
    NSHistory[] GetHistoriesByNamesAndIds(NSHistoryRequest[] requests);
    /** 
    Gets an NSHistory object.
    */
    NSHistory GetHistory(Integer historyId);
    /** 
    Gets the logged-on user's preferred history list length. Will return the system preference if no user preferences are available.
    */
    Integer GetHistoryLengthPrefValue();
    /** 
    Returns the next current item. If no item exists a default value is returned.
    */
    NSHistory GetNextCurrent(String historyName, Integer id);
    /** 
    Returns the previous current item. If no item exists a default value is returned.
    */
    NSHistory GetPreviousCurrent(String historyName, Integer id);
    /** 
    Saves the current history item.
    */
    NSHistory SaveCurrent(NSHistory current);
    /** 
    Saves the history elements as the current value for their respective lists. If more than one item is submitted for the same list, they are added sequently, meaning that the last one is the most current.
    */
    NSHistory[] SaveCurrents(NSHistory[] currents);
    /** 
    Replaces the existing history-list for the currently logged-in user. All elements must belong to the same history list. If not they are ignored.
    */
    NSHistory[] SaveHistories(String historyName, NSHistory[] history);
    /** 
    Sets the logged-on user's preferred history list length.
    */
    Void SetHistoryLengthPrefValue(Integer length);
}`;