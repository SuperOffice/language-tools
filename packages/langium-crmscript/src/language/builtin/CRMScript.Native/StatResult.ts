export const StatResult = `/** 
Used to access the results of a StatLib execution.
*/
class StatResult {
    /** 
    Checks if the current row is the first row for a given group.
    */
    Bool atGroupBegin(Integer column);
    /** 
    Checks if the current row is the last row for a given group.
    */
    Bool atGroupEnd(Integer column);
    /** 
    Returns a string with everything in the StatResult parser listed.
    */
    String dumpParser();
    /** 
    Checks if the internal iterator is past the last element.
    */
    Bool eof();
    /** 
    Returns the value for the given field at the current row.
    */
    String getField(Integer column);
    /** 
    Returns the value for the given field at the current row.
    */
    String getField(String field);
    /** 
    Moves the internal iterator to next element.
    */
    Bool next();
    /** 
    Rewinds the internal iterator.
    */
    Void rewind();
    /** 
    Returns a reference to a result set.
    */
    Integer saveAsResult(Integer column, Integer ownerId, Integer maxRows);
}`;