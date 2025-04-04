export const DbConverter = `/** 
This class is only allowed in a ConverterApp context. Any attempts of using this in any other contexts will yield an exception.
*/
class DbConverter {
    /** 
    Returns true if the iterator has passed the last element, and thus is at the end of the file.
    */
    Bool eof();
    /** 
    Returns entire row of fields.
    */
    Map getRow();
    /** 
    Moves the iterator to the next element.
    */
    Bool next();
    Void readBatch(String p_0, Integer p_1, Integer p_2, Integer p_3, Integer p_4);
    Void setSourceConnection(String p_0, String p_1, String p_2, String p_3, String p_4);
    /** 
    This function will update a table row that's already integrated with CRM. It only writes rows that aren't integrated.
    */
    Void update(String table, Map row, Map fieldMapping);
    /** 
    Writes a table row.
    */
    Void rite(String table, Map row);
}`;