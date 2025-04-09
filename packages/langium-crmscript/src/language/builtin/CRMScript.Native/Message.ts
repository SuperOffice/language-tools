export const Message = `/** 
Represents a Service ticket message.
*/
class Message {
    /** 
    Adds a header to the message. The headers will be shown at the view request page, listed at the message.
    */
    Void addHeader(String type, String value);
    /** 
    Convert any inline images in the message from (cid: to normal http).
    */
    Void convertInlineImages();
    /** 
    Returns an array of all the attachment IDs on the message.
    */
    Integer[] getAttachments();
    /** 
    Returns the value a column.
    */
    String getValue(String colName);
    /** 
    Loads the message with the given ID.
    */
    Bool load(Integer id);
    /** 
    Saves a message and returns the database ID.
    */
    Integer save();
    /** 
    Saves a message and returns the database ID.
    */
    Integer save(String log);
    /** 
    Saves a message and returns the database ID.
    */
    Integer save(String log, Bool noNewInfo);
    /** 
    Saves the email address of a single recipient of a message.
    */
    Void saveInvolved(String emailAddress);
    /** 
    Saves the email address of a single recipient of a message
    */
    Void saveInvolved(Vector emailAddresses);
    /** 
    Sends an email version of the message to the main contacts on the parent ticket.
    */
    Bool send(Vector to, Vector cc, Vector bcc);
    /** 
    Sends an email version of the message to the main contacts on the parent ticket. Merges with reply template in the settings of the submitted category ID.
    */
    Bool send(Vector to, Vector cc, Vector bcc, Integer categoryId);
    /** 
    Sends an email version of the message to the main contacts on the parent ticket using the given subject
    */
    Bool send(Vector to, Vector cc, Vector bcc, String subject);
    /** 
    Sends an email version of the message to the main contacts on the parent ticket using the given subject, and a given heading for the body part.
    */
    Bool send(Vector to, Vector cc, Vector bcc, String subject, String bodyHeading);
    /** 
    Posts message to Facebook
    */
    Void sendFacebook();
    /** 
    Sends an sms-version of the message to the numbers in the vector.
    */
    Bool sendSms(Vector to);
    /** 
    Connects the attachments to the message.
    */
    Void setAttachments(Vector ids);
    /** 
    Sets the value of column colName to the given value
    */
    Void setValue(String colName, String value);
    /** 
    This function loads many fields of the message to the input parser.
    */
    Void toParser(Parser parser);
}`;