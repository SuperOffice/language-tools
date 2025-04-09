export const NSTicketCategoryEntity = `/** 
Describes the meta data for a ticket category, and provides special operations on it.
*/
class NSTicketCategoryEntity {
    Integer GetAssignmentLag();
    Integer GetCategoryMaster();
    Integer GetClosingStatus();
    /** 
    Gets the user-defined + extra fields on an NSTicketCategoryEntity as a map.
    */
    Map GetCustomFields();
    Integer GetDelegateMethod();
    String GetExternalName();
    /** 
    Gets the extra fields on NSTicketCategoryEntity as a map.
    */
    Map GetExtraFields();
    Integer GetFlags();
    String GetFullname();
    Integer GetMsgClosingStatus();
    String GetName();
    String GetNotificationEmail();
    Integer GetParentId();
    Integer GetReplyTemplate();
    Integer GetTicketCategoryId();
    Void SetAssignmentLag(Integer assignmentLag);
    Void SetCategoryMaster(Integer categoryMaster);
    Void SetClosingStatus(Integer closingStatus);
    /** 
    Sets the user-defined and extra fields on an NSTicketCategoryEntity with a map.
    */
    Void SetCustomFields(Map udefs);
    Void SetDelegateMethod(Integer delegateMethod);
    Void SetExternalName(String externalName);
    /** 
    Sets the extra field values on NSTicketCategoryEntity with a map.
    */
    Void SetExtraFields(Map extras);
    Void SetFlags(Integer flags);
    Void SetFullname(String fullname);
    Void SetMsgClosingStatus(Integer msgClosingStatus);
    Void SetName(String name);
    Void SetNotificationEmail(String notificationEmail);
    Void SetParentId(Integer parentId);
    Void SetReplyTemplate(Integer replyTemplate);
    Void SetTicketCategoryId(Integer ticketCategoryId);
}`;