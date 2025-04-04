export const Email = `/** 
Class for representing and sending emails.
*/
class Email {
    /** 
    Adds an attachment to the email object.
    */
    String addAttachment(Integer attachmentId, Bool inline);
    /** 
    Sends the email.
    */
    Void send();
    /** 
    Sets the value of the given field in the email instance.<p></p>
    For multiple recipients, call setValue multiple times, once for each recipient.
    */
    Void setValue(String name, String value);
}`;