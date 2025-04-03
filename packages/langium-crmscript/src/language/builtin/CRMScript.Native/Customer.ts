export const Customer = `
/** 
Represents a customer.
*/
class Customer {
    /** 
    Adds an email to a customer.
    */
    Void addEmail(String email, Integer extTable, Integer dbiAgentId);
    /** 
    Adds an email to a customer with the external sorting rank.
    */
    Void addEmail(String email, Integer externalRank, Integer extTable, Integer dbiAgentId);
    /** 
    Checks if the current user has access to the field.
    */
    Bool checkFieldRights(String field, String fieldRight);
    /** 
    Use this function to see if the current user has access to this customer.
    */
    Bool checkTableRights(String tableRight);
    /** 
    Finds an entry in the external database based on an email address.
    */
    Bool findExternallyFromEmail(String email);
    /** 
    Finds an entry in the external database based on an email address and an extTable ID to limit the search to one data source.
    */
    Bool findExternallyFromEmail(String email, Integer extTable);
    /** 
    Finds an external entry based on its primary key and table ID.
    */
    Integer findExternallyFromKey(Integer table, String key);
    /** 
    Finds a customer entry in the database based on the given agent ID and external key.
    */
    Integer findFromAgentAndKey(Integer agent, String key);
    /** 
    Finds an entry based on the cellphone.
    */
    Bool findFromCellphone(String cellphone);
    /** 
    Find a Customer instance based on the email address.
    */
    Bool findFromEmail(String email);
    /** 
    Returns the value of the given field of the customer.
    */
    String getValue(String colName);
    /** 
    Loads the customer with the given ID.
    */
    Bool load(Integer id);
    /** 
    Loads a customer based on agent id and external key.
    */
    Bool loadFromAgentAndKey(Integer agent, String key);
    /** 
    Creates a valid login session for the current customer.
    */
    Void login();
    /** 
    Logs out a customer.
    */
    Void logout();
    /** 
    Creates a salutation greeting the customer.
    */
    String makeSalutation();
    /** 
    Removes the email address from the customer.
    */
    Void removeEmail(String email);
    /** 
    Removes all external emails from a given source (extTable).
    */
    Void removeExternalEmails(Integer p_0, Integer p_1);
    /** 
    Saves a customer. If ID is set, the customer will be updated. Otherwise, a new customer entry will be created.
    */
    Integer save();
    /** 
    Saves a customer with the source key of the StoreAndProcess consent. If ID is set, the customer will be updated. Otherwise, a new customer entry will be created.
    */
    Integer save(String gdprSourceKey);
    /** 
    Sets the given field with the given value.
    */
    Void setValue(String field, String value);
    /** 
    Fills a Parser object with a Customer's values, including extra fields. The fields are prefixed with &quot;customer.&quot;.
    */
    Void toParser(Parser parser);
}
`;