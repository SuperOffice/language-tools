export const EabEntry = `/** 
Reads and writes entries from the email address book. The class is also used when you want to synchronize the address book using DBI.
*/
class EabEntry {
    /** 
    Deletes the current address book entry from the database.
    */
    Void delete();
    /** 
    Gets the value of the given field in the EabEntry instance.
    */
    String getValue(String field);
    /** 
    Loads an entry from the address book with the specified ID.
    */
    Bool load(Integer id);
    /** 
    Used in conjunction with DBI. Load an entry with the specified key from the specified agent.
    */
    Bool loadFromAgentAndKey(Integer id, String key);
    /** 
    Saves the current address book entry. If you did not load an existing entry, a new entry will be created; otherwise, it will update the loaded entry.
    */
    Integer save();
    /** 
    Sets the value of the given field in the EabEntry instance.
    */
    Void setValue(String name, String value);
}`;