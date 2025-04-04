export const StatLib = `/** 
Class for using the Service statistics library.
*/
class StatLib {
    /** 
    Adds an aggregate function to the specified group<p></p>
    An aggregate function is a function that is calculated for all values for a given column in a group. For example, the average response time for each category.
    */
    Void addAggregate(Integer groupColumn, Integer column, String name, String type, Integer decimals);
    /** 
    Adds an aggregate function to the specified group<p></p>
    An aggregate function is a function that is calculated for all values for a given column in a group. For example, the average response time for each category.
    */
    Void addAggregate(Integer groupColumn, Integer column, String name, String type, Integer decimals, Integer uniqueColumn);
    /** 
    Adds a callback. A callback is a PARSER-snippet that will be executed for the given column for each row.
    */
    Void addCallback(Integer column, String script);
    /** 
    Adds a group to the StatLib instance. A group is a subset of the results that have a common value for a given column. Aggregate values can be calculated for groups, for example, the average response time per category.
    */
    Void addGroup(Integer column, Bool desc);
    /** 
    Adds a group to the StatLib instance. A group is a subset of the results that have a common value for a given column. Aggregate values can be calculated for groups, for example, the average response time per category.
    */
    Void addGroup(Integer column, Bool desc, Bool compareAsNumber);
    /** 
    Calling this function will make the StatLib instance skip sorting the results in the groups.
    */
    Void dropOrder();
    /** 
    Runs the query and aggregations and stores the results in a Parser
    */
    Void execute(Parser parser);
    /** 
    Runs the query and aggregations and stores the results in a StatResult
    */
    Void execute(StatResult result);
    /** 
    Use the given GenericSearch entry as query (instead of SQL string).
    */
    Void setGenericSearch(GenericSearch gs);
    /** 
    Sets the name for the instance. The name is used to prefix the result in the Parser.
    */
    Void setName(String name);
    /** 
    Use the given SearchEngine entry as query (instead of SQL string).
    */
    Void setSearchEngine(SearchEngine se);
    /** 
    Sets the query for the instance. <strong>This method is not available in CRM Online.</strong>
    */
    Void setSql(String sqlStatement);
    /** 
    Use the given StringMatrix entry as query (instead of SQL string).
    */
    Void setStringMatrix(StringMatrix sm);
}`;