export const Ticket = `/** 
Class for representing an SuperOffice Service Ticket.
*/
class Ticket {
    /** 
    returns a String composed by the Mail tag, the ticketId and the title of the ticket
    */
    String buildEmailSubject();
    /** 
    This function does a check according to the ticket's priority and the input action. The effect of calling this function might be that the escalation stops, restarts or continues.
    */
    Void checkEscalating(Integer action);
    /** 
    Delegates a ticket to a user according to the rules on the category.<p></p>
    For this function to take effect, you have to call <code>Ticket.save()</code>.
    */
    Void delegate();
    /** 
    Delegates a ticket to a user according to the rules on the category. You can optionally specify a user ID not to delegate to.<p></p>
    For this function to take effect, you have to call <code>Ticket.save()</code>.
    */
    Void delegate(Integer notUser);
    /** 
    Returns a comma-separated list of the email-addresses of all customers that is not a connected customer to this ticket, but who has received a message on this ticket.
    */
    String getInvolvedOnly();
    /** 
    This function determines and returns the most appropriate from-address, when sending a mail-message on a ticket.
    */
    String getMailFrom();
    /** 
    This function returns the owner of the ticket printed as "Name" &lt;email-addr&gt;.
    */
    String getOwnerEmail();
    /** 
    This function returns the cellphone number of the owner of the ticket
    */
    String getOwnerSms();
    /** 
    Gets the value of given column name as a String
    */
    String getValue(String colName);
    /** 
    Load ticket with given id into this object, return true if successful, false otherwise.
    */
    Bool load(Integer id);
    /** 
    Writes a message to the ticket log. Used for logging changes and events on a ticket
    */
    Void log(String message);
    /** 
    Writes a message to the ticket log. Used for logging changes and events on a ticket
    */
    Void log(String who, String message);
    /** 
    This function sends a notify-email (a replyTemplate) to the owner of the ticket.
    To use for events like new ticket, new message on ticket etc.
    */
    Bool notifyEmail(Integer replyTemplateId);
    /** 
    Saves the ticket and returns the database ID of the stored ticket.
    */
    Integer save();
    /** 
    Saves the ticket and returns the database ID of the stored ticket.
    */
    Integer save(String log);
    /** 
    Saves the ticket and returns the database ID of the stored ticket.
    */
    Integer save(Bool setReadStatus, Bool doNotCheckEscalating);
    /** 
    Saves the ticket and returns the database ID of the stored ticket.
    */
    Integer save(String log, Bool setReadStatus, Bool doNotCheckEscalating);
    /** 
    Will send the given messages just like the forward ticket functionality in the GUI. The forwarded messages are separated by a line, and the comment is placed on top of the mail.
    */
    Bool sendMessages(String subject, StringMatrix recipients, Bool fromCust, String messages, Integer msgId, String comment);
    /** 
    Sets column colName to the given value.
    Obs: For this to actually affect the ticket, you will have to use the function save() after you have set all the values you want.
    */
    Void setValue(String colName, String value);
    /** 
    This function will fill the variable space of the Parser with all values of the ticket.
    As opposed to the function toParserRaw(), the String variables title and author are in html.
    */
    Void toParser(Parser theParser);
    /** 
    This function fills the Parser with the values of the ticket.
    As opposed to the function toParser() who set several of the String-values as html, all these variables will be in plain text.
    */
    Void toParserRaw(Parser theParser);
}`;