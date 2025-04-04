export const SpmMessage = `/** 
Represent a message in the eMarketeer module. You can create or modify such objects, which later is used by the SpmShipment class to send such messages.
*/
class SpmMessage {
    /** 
    Saves an SpmMessage object. If this is a new SpmMessage object (no ID set), a new one will be created.
    */
    Integer save();
    /** 
    Sets the body version of the SpmMessage object (will correspond to the text/plain version in the outgoing email).
    */
    Void setBody(String body);
    /** 
    Sets the HTML body version of the SpmMessage object (will correspond to the text/html version in the outgoing email).
    */
    Void setBodyHtml(String htmlBody);
    /** 
    Sets the descriptive text of the SpmMessage.
    */
    Void setDescription(String description);
    /** 
    Sets the folder which this SpmMessage will be stored in.
    */
    Void setFolderId(Integer folderId);
    /** 
    If you need to include additional email headers, they should be added here. You have to format these yourself.
    */
    Void setHeader(String header);
    /** 
    Sets the subject of the SpmMessage object. Corresponds to the subject in the outgoing email.
    */
    Void setSubject(String subject);
}`;