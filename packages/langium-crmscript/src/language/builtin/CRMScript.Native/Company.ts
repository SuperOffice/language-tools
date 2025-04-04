export const Company = `/** 
Represents a company.
*/
class Company {
    /** 
    Checks if the current user has access to the field.
    */
    Bool checkFieldRights(String field, String fieldRight);
    /** 
    Checks if the current user has access to this company.
    */
    Bool checkTableRights(String tableRight);
    /** 
    Find and load company object given a domain.
    */
    Bool findFromDomain(String domain);
    /** 
    Gets the formatted company address.
    */
    NSLocalizedField[][] getFormattedAddress();
    /** 
    Gets a String with the value of a given column.
    */
    String getValue(String colName);
    /** 
    Load object with values from company with given ID.
    */
    Bool load(Integer id);
    /** 
    Loads a company based on agent ID and external key.
    */
    Bool loadFromAgentAndKey(Integer agent, String key);
    /** 
    Saves the object and returns its ID.
    */
    Integer save();
    /** 
    Sets the formatted address for a company.
    */
    Void setFormattedAddress(NSLocalizedField[][] name);
    /** 
    Sets a value in a column of a company.
    */
    Void setValue(String colName, String value);
    /** 
    Puts a lot of fields into the input parser.
    */
    undefined toParser(Parser parser);
}`;