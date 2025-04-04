export const NSTicket = `class NSTicket {
    DateTime GetActivate();
    Integer GetAlertLevel();
    DateTime GetAlertTimeout();
    String GetAuthor();
    Integer GetBaseStatus();
    Integer GetCategory();
    String GetCategoryFullname();
    String GetCategoryName();
    DateTime GetClosedAt();
    Integer GetConnectId();
    DateTime GetCreatedAt();
    Integer GetCreatedBy();
    String GetCreatedByName();
    Integer GetCustId();
    DateTime GetDeadline();
    DateTime GetFirstReadByUser();
    String GetFromAddress();
    Bool GetHasAttachment();
    DateTime GetLastChanged();
    Integer GetNumMessages();
    Integer GetNumReplies();
    Integer GetOrigin();
    Integer GetOwnedBy();
    String GetOwnedByName();
    String GetPersonFirstname();
    String GetPersonFullname();
    String GetPersonLastname();
    String GetPersonMiddleName();
    Integer GetPriority();
    String GetPriorityName();
    DateTime GetReadByCustomer();
    DateTime GetReadByOwner();
    Integer GetReadStatus();
    Integer GetRealTimeSpentExternally();
    Integer GetRealTimeSpentInternally();
    Integer GetRealTimeSpentQueue();
    Integer GetRealTimeToClose();
    Integer GetRealTimeToReply();
    DateTime GetRepliedAt();
    Integer GetSlevel();
    Integer GetTicketId();
    Integer GetTicketStatus();
    /** 
    Gets the display name of the ticket status.
    */
    String GetTicketStatusDisplayValue();
    Integer GetTimeSpentExternally();
    Integer GetTimeSpentInternally();
    Integer GetTimeSpentQueue();
    Integer GetTimeToClose();
    Integer GetTimeToReply();
    String GetTitle();
    Void SetActivate(DateTime activate);
    Void SetAlertLevel(Integer alertLevel);
    Void SetAlertTimeout(DateTime alertTimeout);
    Void SetAuthor(String author);
    Void SetBaseStatus(Integer baseStatus);
    Void SetCategory(Integer category);
    Void SetCategoryFullname(String categoryFullname);
    Void SetCategoryName(String categoryName);
    Void SetClosedAt(DateTime closedAt);
    Void SetConnectId(Integer connectId);
    Void SetCreatedAt(DateTime createdAt);
    Void SetCreatedBy(Integer createdBy);
    Void SetCreatedByName(String createdByName);
    Void SetCustId(Integer custId);
    Void SetDeadline(DateTime deadline);
    Void SetFirstReadByUser(DateTime firstReadByUser);
    Void SetFromAddress(String fromAddress);
    Void SetHasAttachment(Bool hasAttachment);
    Void SetLastChanged(DateTime lastChanged);
    Void SetNumMessages(Integer numMessages);
    Void SetNumReplies(Integer numReplies);
    Void SetOrigin(Integer origin);
    Void SetOwnedBy(Integer ownedBy);
    Void SetOwnedByName(String ownedByName);
    Void SetPersonFirstname(String personFirstname);
    /** 
    Sets the full name for the primary person (customer)
    */
    Void SetPersonFullname(String personFullname);
    Void SetPersonLastname(String personLastname);
    Void SetPersonMiddleName(String personMiddleName);
    Void SetPriority(Integer priority);
    Void SetPriorityName(String priorityName);
    Void SetReadByCustomer(DateTime readByCustomer);
    Void SetReadByOwner(DateTime readByOwner);
    Void SetReadStatus(Integer readStatus);
    Void SetRealTimeSpentExternally(Integer realTimeSpentExternally);
    Void SetRealTimeSpentInternally(Integer realTimeSpentInternally);
    Void SetRealTimeSpentQueue(Integer realTimeSpentQueue);
    Void SetRealTimeToClose(Integer realTimeToClose);
    Void SetRealTimeToReply(Integer realTimeToReply);
    Void SetRepliedAt(DateTime repliedAt);
    Void SetSlevel(Integer slevel);
    Void SetTicketId(Integer ticketId);
    Void SetTicketStatus(Integer ticketStatus);
    /** 
    Gets the display name of the ticket status.
    */
    Void SetTicketStatusDisplayValue(String ticketStatusDisplayValue);
    Void SetTimeSpentExternally(Integer timeSpentExternally);
    Void SetTimeSpentInternally(Integer timeSpentInternally);
    Void SetTimeSpentQueue(Integer timeSpentQueue);
    Void SetTimeToClose(Integer timeToClose);
    Void SetTimeToReply(Integer timeToReply);
    Void SetTitle(String title);
}`;