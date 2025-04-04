export const License = `/** 
Deprecated in 7.1.
*/
class License {
    /** 
    Deprecated in 7.1.
    */
    constructor(String host, String license);
    /** 
    Deprecated in 7.1.<p></p>
    Gets info about license key. Checks if its legal and print hostname and modules.
    */
    String getInfo();
    /** 
    Deprecated in 7.1.<p></p>
    Checks if the license key is valid and returns the reason as a string.
    */
    String getReasonInvalid();
    /** 
    Deprecated in 7.1.<p></p>
    Extracts a value from the license key.
    */
    String getValue(String name);
    /** 
    Deprecated in 7.1.<p></p>
    Determines if a license key is legal or not.
    */
    Bool legalKey();
    /** 
    Deprecated in 7.1.<p></p>
    Fills a Parser object with License values.
    */
    Void toParser(Parser parser);
}`;