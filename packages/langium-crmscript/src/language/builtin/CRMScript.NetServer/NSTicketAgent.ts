export const NSTicketAgent = `/** 
Agent used for Ticket functions.
*/
class NSTicketAgent {
    /** 
    Connects existing attachments with this TicketMessage. Can connect multiple attachments
    */
    Void AddAttachments(Integer ticketMessageEntityId, Integer[] attachmentIds);
    /** 
    Sets default values into a new NSAttachmentEntity.
    */
    NSAttachmentEntity CreateDefaultAttachmentEntity();
    /** 
    Sets default values into a new NSTicketEntity.
    */
    NSTicketEntity CreateDefaultTicketEntity();
    /** 
    Sets default values into a new NSTicketMessageEntity.
    */
    NSTicketMessageEntity CreateDefaultTicketMessageEntity();
    /** 
    Deletes a ticket
    */
    Void DeleteTicketEntity(Integer ticketEntityId);
    /** 
    Deletes a ticket message
    */
    Void DeleteTicketMessageEntity(Integer ticketMessageEntityId);
    /** 
    Gets an NSAttachmentEntity object.
    */
    NSAttachmentEntity GetAttachmentEntity(Integer attachmentEntityId);
    /** 
    Gets a list with meta data for all attached attachments
    */
    NSAttachmentEntity[] GetAttachmentInfo(Integer ticketMessageEntityId);
    /** 
    Gets the content of an attachment
    */
    NSStream GetAttachmentStream(Integer attachmentId);
    /** 
    Gets an NSTicket object.
    */
    NSTicket GetTicket(Integer ticketId);
    /** 
    Gets attachment infos for all attachments connected to messages in specified ticket
    */
    NSAttachmentEntity[] GetTicketAttachments(Integer ticketEntityId);
    /** 
    Gets an NSTicketEntity object.
    */
    NSTicketEntity GetTicketEntity(Integer ticketEntityId);
    /** 
    Gets an NSTicketMessage object.
    */
    NSTicketMessage GetTicketMessage(Integer ticketMessageId);
    /** 
    Gets an NSTicketMessageEntity object.
    */
    NSTicketMessageEntity GetTicketMessageEntity(Integer ticketMessageEntityId);
    /** 
    Gets multiple tickets
    */
    NSTicket[] GetTickets(Integer[] ticketIds);
    /** 
    Creates a plain text version of the html, suitable for email
    */
    String Html2Text(String content);
    /** 
    Notifies user agents about the creation of a new ticket
    */
    Void NotifyNewTicket(Integer ticketEntityId);
    /** 
    Notifies user agents about the creation of a new message on a ticket
    */
    Void NotifyNewTicketMessage(Integer ticketEntityId);
    /** 
    Removes harmful HTML tags and attributes from an email
    */
    String SanitizeMailContent(String content);
    /** 
    Removes harmful HTML tags and attributes from an email
    */
    String[] SanitizeMailContents(String[] contents);
    /** 
    Updates the existing NSAttachmentEntity or creates a new NSAttachmentEntity if the id parameter is 0
    */
    NSAttachmentEntity SaveAttachmentEntity(NSAttachmentEntity attachmentEntity);
    /** 
    Updates the existing NSTicketEntity or creates a new NSTicketEntity if the id parameter is 0
    */
    NSTicketEntity SaveTicketEntity(NSTicketEntity ticketEntity);
    /** 
    Updates the existing NSTicketMessageEntity or creates a new NSTicketMessageEntity if the id parameter is 0
    */
    NSTicketMessageEntity SaveTicketMessageEntity(NSTicketMessageEntity ticketMessageEntity);
    /** 
    Sends a message to recipients, e.g. by email or sms
    */
    Void SendTicketMessage(Integer ticketMessageEntityId, String[] to, String[] cc, String[] bcc, String subject, Integer replyTemplateId, String gdprSource);
    /** 
    Sets the important flag on or off for a ticket message
    */
    Void SetTicketMessageImportant(Integer ticketMessageId, Bool important);
    /** 
    Sets the ReadByOwner status for a ticket. It will only have an effect if the calling user is the same as the owner of the ticket
    */
    NSTicketEntity SetTicketReadByOwner(Integer ticketEntityId, Integer readStatus, Bool checkEscalating);
    /** 
    Uploads an attachment and returns the attachment ID
    */
    Integer UploadAttachment(Integer attachmentId, NSStream content);
}`;