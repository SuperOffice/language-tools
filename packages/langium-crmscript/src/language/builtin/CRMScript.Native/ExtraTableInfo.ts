export const ExtraTableInfo = `/** 
With this class you can retrieve meta information about an extra table. The class will only retrieve information, thus it is not possible to change an extra table from this class.
*/
class ExtraTableInfo {
    /** 
    Returns the flags for this extra table.
    */
    Integer getFlags();
    /** 
    Returns the ID of the extra table.
    */
    Integer getId();
    /** 
    Return the textual name of the extra table.
    */
    String getName();
    /** 
    Load the extra table with the given table name.
    */
    Void load(String tableName);
}`;