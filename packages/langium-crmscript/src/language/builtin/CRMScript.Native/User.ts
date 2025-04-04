export const User = `/** 
Class for representing a user.
*/
class User {
    /** 
    Gets the value of a given column.
    */
    String getValue(String colName);
    /** 
    Returns true if the user have at least the given access to the given ticket id. 
    */
    Bool hasTicketAccess(Integer ticketId, Integer accessLevel);
    /** 
    Returns true if the user is an administrator, false if not.
    */
    Bool isAdministrator();
    /** 
    Checks if a user is logged in or not.
    */
    Bool isLoggedIn(Integer origin);
    /** 
    Loads a user from the database
    */
    Bool load(Integer p_id);
    /** 
    Loads a user from an Agent with userId and the Agent's key.
    */
    Bool loadFromAgentAndKey(Integer id, String Key);
    /** 
    Saves a user object to the database, returns the ID of the user.
    */
    Integer save();
    /** 
    Sets a value in a given column.
    */
    Void setValue(String column, String value, String columns);
    /** 
    Loads a user and returns it to a given Parser.
    */
    Void toParser(Parser parser);
}`;