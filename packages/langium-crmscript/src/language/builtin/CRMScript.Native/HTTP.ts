export const HTTP = `/** 
Used to retrieve the result of a URL.
*/
class HTTP {
    /** 
    Adds the binary data in the Service attachment specified to the body of the request.
    */
    Bool addAttachmentData(Integer attachmentId);
    /** 
    Adds the binary data to the body of the request.
    */
    Void addBinaryData(Byte[] binaryData);
    /** 
    Add the binary data in the document specified to the body of the request.
    */
    Bool addDocumentData(Integer documentId);
    /** 
    Adds a new header. The new header will be placed after other existing headers.
    */
    Void addHeader(String name, String value);
    /** 
    Supports both HTTP and HTTPS.
    */
    Byte[] delete(String url);
    /** 
    Supports both HTTP and HTTPS.
    */
    " deleteAsStream(String url);
    /** 
    Supports both HTTP and HTTPS.
    */
    Byte[] get(String url);
    /** 
    Supports both HTTP and HTTPS.
    */
    NSStream getAsStream(String url);
    /** 
    Retrieves debug output.
    */
    String getDebug();
    /** 
    Returns the last error message.
    */
    String getErrorMessage();
    /** 
    Gets a named HTTP header from the response of the HTTP request.
    */
    String getResponseHeader(String header);
    /** 
    Gets a map of all the headers from the HTTP response headers after making a HTTP call.
    */
    Map getResponseHeaders();
    /** 
    General function which returns various values from the instance.
    */
    String getValue(String name);
    /** 
    Checks if there was an error in the environment.
    */
    Bool hasError();
    /** 
    Opens a URL and returns the result as a Byte array.
    */
    Byte[] open(String url);
    /** 
    Opens a URL and returns the result as an NSStream.
    */
    " openAsStream(String url);
    /** 
    Supports both HTTP and HTTPS.
    */
    Byte[] patch(String url);
    /** 
    Supports both HTTP and HTTPS.
    */
    NSStream patchAsStream(String url);
    /** 
    Supports both HTTP and HTTPS.
    */
    Byte[] post(String url);
    /** 
    Supports both HTTP and HTTPS.
    */
    NSStream postAsStream(String url);
    /** 
    Supports both HTTP and HTTPS.
    */
    NSStream putAsStream(String url);
    /** 
    Turns debug mode on/off to record debug output.
    */
    Void setDebugMode(Bool debug);
    /** 
    Option function.
    */
    Void setOption(String name, String value);
    /** 
    Adds a CGI variable and its according value to the HTTP request.
    */
    Void setValue(String cgiVariable, String value);
}`;