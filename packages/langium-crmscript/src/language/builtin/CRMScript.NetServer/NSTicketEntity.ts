export const NSTicketEntity = `/** 
Represents a service ticket.
*/
class NSTicketEntity {
    /** 
    When the ticket should be activated, if it is postponed.
    */
    DateTime GetActivate();
    /** 
    The alert level for the ticket. Matches the level value of the ticket_alert table.
    */
    Integer GetAlertLevel();
    /** 
    The datetime for when the ticket should jump to the next alert_level.
    */
    DateTime GetAlertTimeout();
    /** 
    A string representing the author of the ticket (same as author of first message).
    */
    String GetAuthor();
    Integer GetBaseStatus();
    /** 
    The ticket category entity which this ticket is connected to
    */
    NSTicketCategoryEntity GetCategory();
    /** 
    When the ticket was closed.
    */
    DateTime GetClosedAt();
    /** 
    If a ticket is connected to another ticket, this field is set to the ID of the 'master' ticket.
    */
    Integer GetConnectId();
    /** 
    When the ticket was created.
    */
    DateTime GetCreatedAt();
    /** 
    The associate who created this ticket
    */
    NSAssociate GetCreatedBy();
    /** 
    Gets the user-defined + extra fields on a TicketEntity as a map.
    */
    Map GetCustomFields();
    /** 
    Deadline for ticket.
    */
    DateTime GetDeadline();
    /** 
    Gets the extra fields on TicketEntity as a map.
    */
    Map GetExtraFields();
    /** 
    The datetime for when the ticket first was read by a user.
    */
    DateTime GetFirstReadByUser();
    /** 
    The from-address used when this ticket got created, e.g. by email
    */
    String GetFromAddress();
    /** 
    Bool indicating if this ticket has one or more attachments.
    */
    Bool GetHasAttachment();
    /** 
    The last time the ticket was modified.
    */
    DateTime GetLastChanged();
    NSTicketMessage[] GetMessages();
    /** 
    The total number of messages for this request.
    */
    Integer GetNumMessages();
    /** 
    The number of replies (messages) to the customer for this request.
    */
    Integer GetNumReplies();
    /** 
    What is the origin of this ticket
    */
    Integer GetOrigin();
    /** 
    The associate who owns this ticket
    */
    NSAssociate GetOwnedBy();
    /** 
    The primary person that this ticket is connected to
    */
    NSPerson GetPerson();
    /** 
    The ticket priority entity which this ticket is connected to
    */
    NSTicketPriorityEntity GetPriority();
    /** 
    The datetime for when the ticket was read by the customer.
    */
    DateTime GetReadByCustomer();
    /** 
    The datetime for when the ticket last was read by the owner.
    */
    DateTime GetReadByOwner();
    Integer GetReadStatus();
    /** 
    The total time (seconds) within 24x7 the ticket has been in a external waiting status (configurable), not including current state
    */
    Integer GetRealTimeSpentExternally();
    /** 
    The total time (seconds) within 24x7 the ticket has been in an open status (configurable), not including current state
    */
    Integer GetRealTimeSpentInternally();
    /** 
    The total time (seconds) within 24x7 hours the ticket has been in a queue status, not including current state
    */
    Integer GetRealTimeSpentQueue();
    /** 
    Same as time_to_close, but not calculated based on priority.
    */
    Integer GetRealTimeToClose();
    /** 
    Same as time_to_reply, but not calculated based on priority.
    */
    Integer GetRealTimeToReply();
    /** 
    The datetime for when the ticket was replied to. I.e. the first external message added to the ticket.
    */
    DateTime GetRepliedAt();
    /** 
    The secondary persons this ticket is connected to
    */
    NSPerson[] GetSecondaryPersons();
    Integer GetSlevel();
    /** 
    The ticket status entity which this ticket is connected to
    */
    NSTicketStatusEntity GetStatus();
    /** 
    An array containing the tags assigned to this request.
    */
    NSTag[] GetTags();
    /** 
    The primary key (auto-incremented)
    */
    Integer GetTicketId();
    /** 
    The total time (seconds) within the priority's office hours the ticket has been in a external waiting status (configurable), not including current state
    */
    Integer GetTimeSpentExternally();
    /** 
    The total time (seconds) within the priority's office hours the ticket has been in an open status (configurable), not including current state
    */
    Integer GetTimeSpentInternally();
    /** 
    The total time (seconds) within the priority's office hours the ticket has been in a queue status, not including current state
    */
    Integer GetTimeSpentQueue();
    /** 
    The time (minutes) between when the ticket was created and when it was closed. Calculated based on priority's timeframe.
    */
    Integer GetTimeToClose();
    /** 
    The time (minutes) between when the ticket was created and when it was replied to. Calculated based on priority's timeframe.
    */
    Integer GetTimeToReply();
    /** 
    The title of the ticket.
    */
    String GetTitle();
    /** 
    When the ticket should be activated, if it is postponed.
    */
    Void SetActivate(DateTime activate);
    /** 
    The alert level for the ticket. Matches the level value of the ticket_alert table.
    */
    Void SetAlertLevel(Integer alertLevel);
    /** 
    The datetime for when the ticket should jump to the next alert level.
    */
    Void SetAlertTimeout(DateTime alertTimeout);
    /** 
    A string representing the author of the ticket (same as author of first message).
    */
    Void SetAuthor(String author);
    Void SetBaseStatus(Integer baseStatus);
    Void SetCategory(NSTicketCategoryEntity category);
    Void SetClosedAt(DateTime closedAt);
    /** 
    If a ticket is connected to another ticket, this field is set to the ID of the 'master' ticket.
    */
    Void SetConnectId(Integer connectId);
    /** 
    When the ticket was created.
    */
    Void SetCreatedAt(DateTime createdAt);
    Void SetCreatedBy(NSAssociate createdBy);
    /** 
    Sets the user-defined and extra fields on a TicketEntity with a map.
    */
    Void SetCustomFields(Map udefs);
    Void SetDeadline(DateTime deadline);
    /** 
    Sets the extra field values on TicketEntity with a map.
    */
    Void SetExtraFields(Map extras);
    Void SetFirstReadByUser(DateTime firstReadByUser);
    /** 
    The from-address used when this ticket got created, e.g. by email
    */
    Void SetFromAddress(String fromAddress);
    /** 
    Bool indicating if this ticket has one or more attachments.
    */
    Void SetHasAttachment(Bool hasAttachment);
    Void SetLastChanged(DateTime lastChanged);
    Void SetMessages(NSTicketMessage[] messages);
    /** 
    The total number of messages for this request.
    */
    Void SetNumMessages(Integer numMessages);
    /** 
    The number of replies (messages) to the customer for this request.
    */
    Void SetNumReplies(Integer numReplies);
    Void SetOrigin(Integer origin);
    Void SetOwnedBy(NSAssociate ownedBy);
    /** 
    The primary person that this ticket is connected to
    */
    Void SetPerson(NSPerson person);
    /** 
    The ticket priority entity which this ticket is connected to
    */
    Void SetPriority(NSTicketPriorityEntity priority);
    Void SetReadByCustomer(DateTime readByCustomer);
    Void SetReadByOwner(DateTime readByOwner);
    Void SetReadStatus(Integer readStatus);
    /** 
    The total time (seconds) within 24x7 the ticket has been in a external waiting status (configurable), not including current state
    */
    Void SetRealTimeSpentExternally(Integer realTimeSpentExternally);
    /** 
    The total time (seconds) within 24x7 the ticket has been in an open status (configurable), not including current state
    */
    Void SetRealTimeSpentInternally(Integer realTimeSpentInternally);
    /** 
    The total time (seconds) within 24x7 hours the ticket has been in a queue status, not including current state
    */
    Void SetRealTimeSpentQueue(Integer realTimeSpentQueue);
    /** 
    Same as time_to_close, but not calculated based on priority.
    */
    Void SetRealTimeToClose(Integer realTimeToClose);
    /** 
    Same as time_to_reply, but not calculated based on priority.
    */
    Void SetRealTimeToReply(Integer realTimeToReply);
    /** 
    The datetime for when the ticket was replied to (when the first external message added to the ticket).
    */
    Void SetRepliedAt(DateTime repliedAt);
    /** 
    The secondary persons this ticket is connected to
    */
    Void SetSecondaryPersons(NSPerson[] secondaryPersons);
    Void SetSlevel(Integer slevel);
    Void SetStatus(NSTicketStatusEntity status);
    /** 
    An array containing the tags assigned to this request
    */
    Void SetTags(NSTag[] tags);
    /** 
    The primary key (auto-incremented)
    */
    Void SetTicketId(Integer ticketId);
    /** 
    The total time (seconds) within the priority's office hours the ticket has been in a external waiting status (configurable), not including current state
    */
    Void SetTimeSpentExternally(Integer timeSpentExternally);
    /** 
    The total time (seconds) within the priority's office hours the ticket has been in an open status (configurable), not including current state
    */
    Void SetTimeSpentInternally(Integer timeSpentInternally);
    /** 
    The total time (seconds) within the priority's office hours the ticket has been in a queue status, not including current state
    */
    Void SetTimeSpentQueue(Integer timeSpentQueue);
    /** 
    The time (minutes) between when the ticket was created and when it was closed. Calculated based on priority's timeframe.
    */
    Void SetTimeToClose(Integer timeToClose);
    /** 
    The time (minutes) between when the ticket was created and when it was replied to. Calculated based on priority's timeframe.
    */
    Void SetTimeToReply(Integer timeToReply);
    /** 
    The title of the ticket.
    */
    Void SetTitle(String title);
}`;