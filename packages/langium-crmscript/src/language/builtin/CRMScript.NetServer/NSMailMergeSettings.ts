export const NSMailMergeSettings = `/** 
Settings specifying what selection to perform the mailmerge on, what merge document to use etc.
*/
class NSMailMergeSettings {
    /** 
    Adds this company interest to each company recipient.
    */
    Integer GetAddCompanyInterest();
    /** 
    Adds this person interest to each person recipient.
    */
    Integer GetAddPersonInterest();
    Bool GetAlwaysUseCustomAttention();
    String GetCustomAttention();
    String GetCustomMailBody();
    String GetCustomMailSubject();
    Integer GetDocumentId();
    String GetExtraInfo();
    Bool GetIncludeNoMailingsRecipient();
    Bool GetIncludeRetiredRecipients();
    /** 
    Include recipients that are marked with stop
    */
    Bool GetIncludeStoppedRecipients();
    Bool GetIsTemporarySelection();
    Integer GetMailMergeDeliveryType();
    Integer GetProjectId();
    Integer GetRemoveCompanyInterest();
    Integer GetRemovePersonInterest();
    Bool GetSaveDocument();
    Integer GetSelectionId();
    Bool GetSynchronous();
    NSMailMergeTask GetTaskEntity();
    Bool GetTestOnly();
    /** 
    Adds this company interest to each company recipient.
    */
    Void SetAddCompanyInterest(Integer addCompanyInterest);
    /** 
    Adds this person interest to each person recipient.
    */
    Void SetAddPersonInterest(Integer addPersonInterest);
    Void SetAlwaysUseCustomAttention(Bool alwaysUseCustomAttention);
    Void SetCustomAttention(String customAttention);
    Void SetCustomMailBody(String customMailBody);
    Void SetCustomMailSubject(String customMailSubject);
    Void SetDocumentId(Integer documentId);
    Void SetExtraInfo(String extraInfo);
    Void SetIncludeNoMailingsRecipient(Bool includeNoMailingsRecipient);
    Void SetIncludeRetiredRecipients(Bool includeRetiredRecipients);
    Void SetIncludeStoppedRecipients(Bool includeStoppedRecipients);
    Void SetIsTemporarySelection(Bool isTemporarySelection);
    Void SetMailMergeDeliveryType(Integer mailMergeDeliveryType);
    Void SetProjectId(Integer projectId);
    Void SetRemoveCompanyInterest(Integer removeCompanyInterest);
    Void SetRemovePersonInterest(Integer removePersonInterest);
    Void SetSaveDocument(Bool saveDocument);
    Void SetSelectionId(Integer selectionId);
    Void SetSynchronous(Bool synchronous);
    Void SetTaskEntity(NSMailMergeTask taskEntity);
    Void SetTestOnly(Bool testOnly);
}`;