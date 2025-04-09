export const NSDocumentEntity = `class NSDocumentEntity {
    Integer GetActiveLinks();
    NSAssociate GetAssociate();
    String GetAttention();
    Integer GetCompleted();
    NSContact GetContact();
    NSAssociate GetCreatedBy();
    DateTime GetCreatedDate();
    /** 
    Gets the user-defined + extra fields on an NSDocumentEntity as a map.
    */
    Map GetCustomFields();
    DateTime GetDate();
    String GetDescription();
    Integer GetDocumentId();
    NSDocumentTemplate GetDocumentTemplate();
    String GetExternalRef();
    /** 
    Gets the extra fields on NSDocumentEntity as a map.
    */
    Map GetExtraFields();
    String GetHeader();
    Bool GetIsPublished();
    NSLink[] GetLinks();
    Integer GetLockSemantics();
    String GetName();
    String GetOurRef();
    NSPerson GetPerson();
    NSProject GetProject();
    DateTime GetPublishEventDate();
    DateTime GetPublishFrom();
    DateTime GetPublishTo();
    NSSale GetSale();
    Integer GetSnum();
    Integer GetSuggestedDocumentId();
    Integer GetType();
    NSAssociate GetUpdatedBy();
    DateTime GetUpdatedDate();
    /** 
    Gets the user-defined fields on the NSDocumentEntity as a map.
    */
    Map GetUserDefinedFields();
    NSVisibleFor[] GetVisibleFor();
    String GetYourRef();
    Void SetActiveLinks(Integer activeLinks);
    Void SetAssociate(NSAssociate associate);
    Void SetAttention(String attention);
    Void SetCompleted(Integer completed);
    Void SetContact(NSContact contact);
    Void SetCreatedBy(NSAssociate createdBy);
    Void SetCreatedDate(DateTime createdDate);
    /** 
    Sets the user-defined and extra fields on an NSDocumentEntity with a map.
    */
    Void SetCustomFields(Map udefs);
    Void SetDate(DateTime date);
    Void SetDescription(String description);
    Void SetDocumentId(Integer documentId);
    Void SetDocumentTemplate(NSDocumentTemplate documentTemplate);
    Void SetExternalRef(String externalRef);
    /** 
    Sets the extra field values on NSDocumentEntity with a map.
    */
    Void SetExtraFields(Map extras);
    Void SetHeader(String header);
    /** 
    Sets the IsPublished property
    */
    Void SetIsPublished(Bool isPublished);
    Void SetLinks(NSLink[] links);
    Void SetLockSemantics(Integer lockSemantics);
    Void SetName(String name);
    Void SetOurRef(String ourRef);
    Void SetPerson(NSPerson person);
    Void SetProject(NSProject project);
    Void SetPublishEventDate(DateTime publishDate);
    /** 
    Sets the publish from date on an NSDocumentEntity.
    */
    Void SetPublishFrom(DateTime publishFrom);
    /** 
    Sets the publish to date on NSDocumentEntity. After this date the event is no longer visible.
    */
    Void SetPublishTo(DateTime publishTo);
    Void SetSale(NSSale sale);
    Void SetSnum(Integer snum);
    Void SetSuggestedDocumentId(Integer suggestedDocumentId);
    Void SetType(Integer type);
    Void SetUpdatedBy(NSAssociate associate);
    Void SetUpdatedDate(DateTime updatedDate);
    /** 
    Sets the user-defined fields on the NSDocumentEntity as a map.
    */
    Void SetUserDefinedFields(Map udefs);
    /** 
    Sets the user groups and/or users the NSDocumentEntity item is visible for.
    */
    Void SetVisibleFor(NSVisibleFor[] visibleFor);
    Void SetYourRef(String yourRef);
}`;