export const Cache = `/** 
Cache to often used db tables and structures and retrieve them in a useful and structured fashion
*/
class Cache {
    /** 
    Checks if there are no more fields in the result.
    */
    Bool eof();
    /** 
    Sets the iterator variable to the first field in the field set.
    */
    Bool first();
    /** 
    This function will return data from a cached table.
    */
    String getData(String tableId);
    /** 
    Returns a subset of the data for a cached table based on a filter, where a field must have a given value.
    */
    String getDataSubset(String tableId, String filterField, String filterValue);
    /** 
    Returns a row of fields.
    */
    Map getRow();
    /** 
    Sets the iterator to the next field.
    */
    Bool next();
    /** 
    Sorts the cached data by given field in given order.
    */
    undefined sort(String field, Bool order);
}`;