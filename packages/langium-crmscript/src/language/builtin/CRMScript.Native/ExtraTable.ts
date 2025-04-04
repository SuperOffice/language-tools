export const ExtraTable = `/** 
A class to access extra tables and create, edit and delete entries.
*/
class ExtraTable {
    /** 
    Deletes the loaded object.
    */
    Void delete();
    /** 
    Returns the value of the given field for the currently loaded entry.
    */
    String getValue(String field);
    /** 
    Returns all the fields and values of the extraTable row as a Map.
    */
    Map getValues();
    /** 
    Loads the extra table entry with the given ID.
    */
    Bool load(Integer id);
    /** 
    Used for integrating data from external systems.
    */
    Bool loadFromAgentAndKey(Integer agent, String key);
    /** 
    Creates a new or updates an existing extra-tableSaves an extra table. If ID is set, the table will be updated. Otherwise, a new extra-table entry will be created.
    */
    Integer save();
    /** 
    Creates a new or updates an existing extra-tableSaves an extra table. If ID is set, the table will be updated. Otherwise, a new extra-table entry will be created.
    */
    Integer save(Bool reload);
    /** 
    Sets the value of a given field if it exists.
    */
    Void setValue(String field, String value);
}`;