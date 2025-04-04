export const NSPreviewMailingHeader = `class NSPreviewMailingHeader {
    Integer GetDocumentMessageId();
    String GetFromAddress();
    Integer GetMessageId();
    String GetMessageSubject();
    Integer GetNumBounced();
    Integer GetNumClicks();
    Integer GetNumOpened();
    Integer GetNumSent();
    /** 
    Gets the persons full name (internal name used in clients for employees).
    */
    String GetPersonFullName();
    Integer GetPersonId();
    String GetShipmentDescription();
    Integer GetShipmentId();
    String GetShipmentType();
    DateTime GetStartDate();
    Integer GetStatus();
    Void SetDocumentMessageId(Integer documentMessageId);
    Void SetFromAddress(String fromAddress);
    Void SetMessageId(Integer messageId);
    Void SetMessageSubject(String messageSubject);
    Void SetNumBounced(Integer numBounced);
    Void SetNumClicks(Integer numClicks);
    Void SetNumOpened(Integer numOpened);
    Void SetNumSent(Integer numSent);
    /** 
    Gets the persons full name (internal name used in clients for employees).
    */
    Void SetPersonFullName(String personFullName);
    Void SetPersonId(Integer personId);
    Void SetShipmentDescription(String shipmentDescription);
    Void SetShipmentId(Integer shipmentId);
    Void SetShipmentType(String shipmentType);
    Void SetStartDate(DateTime startDate);
    Void SetStatus(Integer status);
}`;