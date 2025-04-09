export const Parser = `/** 
A template engine. A Parser instance can set template variable values, then parse a formatted string containing template variable placeholders to replace their values.
*/
class Parser {
    /** 
    Adds a variable and its value to the parser.
    */
    Void addVariable(String field, String value);
    /** 
    Parses a text and return the evaluated result from a RETURN statement inside the text.
    */
    String evaluateString(String stringToParse);
    /** 
    Returns the value at the given index with the given name from the Parser instance.
    */
    String getVariable(String name, Integer row);
    /** 
    Returns the number of values for the given variable in the Parser instance.
    */
    Integer getVariableCount(String name);
    /** 
    Parses a text and return the result.
    */
    String parseString(String stringToParse);
    /** 
    Sets the variable with the given name to the given value in the Parser instance.
    */
    Void setVariable(String name, String value);
    /** 
    Copies all values in the input parser to the original parser.
    */
    Void toParser(Parser parser);
}`;