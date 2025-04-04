export const NSFormSubmissionEntity = `/** 
Content of a Form submission.
*/
class NSFormSubmissionEntity {
    Integer GetContactId();
    String GetEmailAddress();
    Integer GetFormId();
    Integer GetFormSubmissionId();
    Integer GetPersonId();
    String GetProcessingLog();
    String GetResponse();
    Integer GetResponseShipmentAddrId();
    Integer GetStatus();
    DateTime GetWhenSubmitted();
    Void SetContactId(Integer contactId);
    Void SetEmailAddress(String emailAddress);
    Void SetFormId(Integer formId);
    Void SetFormSubmissionId(Integer formSubmissionId);
    Void SetPersonId(Integer personId);
    Void SetProcessingLog(String processingLog);
    Void SetResponse(String response);
    Void SetResponseShipmentAddrId(Integer responseShipmentAddrId);
    Void SetStatus(Integer status);
    Void SetUpdSetWhenSubmitted(DateTime whenSubmitted);
}`;