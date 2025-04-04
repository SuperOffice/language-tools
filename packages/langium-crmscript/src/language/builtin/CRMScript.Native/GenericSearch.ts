export const GenericSearch = `/** 
Obsolete. Use SearchEngine instead.<p></p>
Represents a generic database search. GenericSearch has less functionality for adding criteria than SearcEngine. The GenericSearch is originally made for searching and fetching data from the database. Thereby its name. GenericSearch is a tool for building up SQL queries, by adding fields and criteria.<p></p>
GenericSearch extends theSearchEngine class with options for how to list fields. Displayfields, datafields, idfields. The fields must be given as starttablename.fieldname, for example "ticket.title" For tables that have foreign keys to other tables, you can reach them with starttablename.fieldname.fieldname<p></p>
Make sure that all fields you use start with the same table, for example ticket, or else you will recieve a big join that you probably do not want.<p></p>
For many-to-many relations there is a special notation: table1.(table2-&gt;field2a).field2b Where field2a is field in table2 that has a foreign key to table1.
*/
class GenericSearch {
    /** 
    Adds a criteria between two database-fields to the database query.
    */
    Void addComparison(String field1, String compOperator, String field2, String rowOperator, Integer concatLevel);
    /** 
    Add search criteria to the search.
    */
    Void addCriteria(String field, String operator, String value, String andOr, Integer concatLevel);
    /** 
    Adds a field to the queryAdds a field to be selected to the database query.
    */
    Void addField(String field);
    /** 
    Adds a field to the queryAdds a field to be selected to the database query with a field mask.
    */
    Void addField(String field, Integer fieldMask);
    /** 
    Adds order on specified field, descending or ascending.
    */
    Void addOrder(String field, Bool asc);
    /** 
    Returns the number of rows in the result set.
    */
    Integer countRows();
    /** 
    Returns true if the result pointer has reached the end of result set, or false otherwise.
    */
    Bool eof();
    /** 
    Executes the query.
    */
    Void execute();
    /** 
    Sets the result pointer to point at the first row in the result set.
    */
    Bool first();
    /** 
    Retrieves the value of a field according to a field mask.
    */
    String get(String field, Integer fieldMask);
    /** 
    Retrieves the value of a field according to a field mask.
    */
    String get(Integer id, Integer fieldMask);
    /** 
    Sets the result set pointer to next row, returns </li></ul>
    */
    Bool next();
    /** 
    Sets what language to use when showing display fields.
    */
    Void setLanguage(Integer languageId);
    /** 
    Sets a limit of the number of rows that will be returned in the result set.
    */
    Void setLimit(Integer limit);
}`;