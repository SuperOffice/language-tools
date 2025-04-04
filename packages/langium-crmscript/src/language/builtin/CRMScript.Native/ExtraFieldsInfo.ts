export const ExtraFieldsInfo = `/** 
With this class, you can retrieve meta-information about an extra field.<p></p>
The class will only retrieve information, thus it is not possible to change an extra field from this class.
*/
class ExtraFieldsInfo {
    /** 
    Checks if there are no more fields in the result.
    */
    Bool eof();
    /** 
    Loads extra fields of the type given in the first parameter. If the type is an extra table relation, the second pointer is the ID of the extra table it points to.
    */
    Void getChildrenFields(Integer type, Integer extraTableTarget);
    /** 
    This is a helper function for getting company relation fields. It is equivalent to calling getChildrenFields(17, 0).
    */
    Void getCompanyChildrenFields();
    /** 
    This is a helper function for getting customer relation fields. It is equivalent to calling getChildrenFields(16, 0).
    */
    Void getCustomerChildrenFields();
    /** 
    Returns the display field of the current field.
    */
    String getDisplayField();
    /** 
    Gets extra fields related to the given table. Using this method will make it possible to access the information in the extra fields by using the other functions in the class.
    */
    Void getExtraFields(String table);
    /** 
    Returns the field name of the current field.
    */
    String getFieldName();
    /** 
    Returns the flags for the current extra field.<p></p>
    The flags can be accessed by wrapping the returned Integer in a FHBitSet.
    */
    Integer getFlags();
    /** 
    Returns the descriptive name (not the database name) of the current field.
    */
    String getName();
    /** 
    This function returns the value of the given parameter.
    */
    String getParam(String parameter);
    /** 
    Returns the name of the table the current field belongs to.
    */
    String getTableName();
    /** 
    This is a helper function for getting ticket relation fields. It is equivalent to calling getChildrenFields(18, 0).
    */
    Void getTicketChildrenFields();
    /** 
    This function moves to the next field in the result.
    */
    Void next();
}`;