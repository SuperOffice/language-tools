export const NSDocumentTemplateEntity = `/**
The template a document is based on is stored in the SO arc\template folder on the server. This will return the name as displayed in the GUI, and not the physical document name, of the template the document object is based on.
*/
class NSDocumentTemplateEntity {
    /**
    Which document plugin is responsible for the documents generated from this template
    */
    Integer GetAutoeventId();
    /**
    Processed via tag substitution to give document reference
    */
    String GetDefaultOref();
    /**
    True if deleted
    */
    Bool GetDeleted();
    Integer GetDirection();
    /**
    Primary key
    */
    Integer GetDocumentTemplateId();
    /**
    The document type to use when creating a blank document. Plugin-specific. Used when not creating template from a local file.
    */
    Integer GetDocumentTypeKey();
    /**
    Subject to use if document template is an email.
    */
    String GetEmailSubject();
    /**
    Relative to TemplatePath, or extref for other document plugins. i.e URL or full path.
    */
    String GetFilename();
    /**
    True if the email signature should be added in bottom of mail if this an email template
    */
    Bool GetIncludeSignature();
    /**
    What is the intention of this document (used by SAINT)
    */
    Integer GetIntentId();
    Integer GetInvitationDocType();
    /**

    */
    Bool GetIsDefaultPublished();
    /**
    True if the template is in use in a project or sales guide
    */
    Bool GetIsInUseInGuides();
    /**
    Which document plugin is responsible for this template's contents
    */
    Integer GetLoadTemplateFromPlugin();
    /**
    The mime type
    */
    String GetMimeType();
    /**
    The template list item
    */
    String GetName();
    Integer GetPrivacyDocType();
    Integer GetQuoteDocType();
    /**

    */
    Integer GetRank();
    NSDocTmplType GetRecordType();
    /**
    1 = save document records in DB; otherwise not.
    */
    Integer GetSaveInDb();
    /**
    If email template, default sender address when template is of type quote email or privacy email.
    */
    String GetSenderEmailAddress();
    Integer GetSenderEmailMode();
    /**
    True if when using this template there should be shown a place for editing current choices of person, compant, sale, project etc
    */
    Bool GetShowCurrents();
    /**
    Tooltip or other description
    */
    String GetTooltip();
    /**
    Which document plugin is responsible for the documents generated from this template
    */
    Void SetAutoeventId(Integer autoeventId);
    /**
    Processed via tag substitution to give document reference
    */
    Void SetDefaultOref(String defaultOref);
    /**
    True if deleted
    */
    Void SetDeleted(Bool deleted);
    /**
    Sets the direction of a document template.
    */
    Void SetDirection(Integer direction);
    /**
    Primary key
    */
    Void SetDocumentTemplateId(Integer documentTemplateId);
    /**
    The document type to use when creating a blank document. Plugin-specific. Used when not creating template from a local file.
    */
    Void SetDocumentTypeKey(Integer documentTypeKey);
    /**
    Subject to use if document template is an email.
    */
    Void SetEmailSubject(String emailSubject);
    /**
    Relative to TemplatePath, or extref for other document plugins. i.e URL or full path.
    */
    Void SetFilename(String filename);
    /**
    True if the email signature should be added in bottom of mail if this an email template
    */
    Void SetIncludeSignature(Bool includeSignature);
    /**
    What is the intention of this document (used by SAINT)
    */
    Void SetIntentId(Integer intentId);
    Void SetInvitationDocType(Integer invitationDocType);
    /**
    Published to external persons
    */
    Void SetIsDefaultPublished(Bool isDefaultPublished);
    /**
    True if the template is in use in a project or sales guide
    */
    Void SetIsInUseInGuides(Bool isInUseInGuides);
    /**
    Which document plugin is responsible for this template's contents
    */
    Void SetLoadTemplateFromPlugin(Integer loadTemplateFromPlugin);
    /**
    The mime type
    */
    Void SetMimeType(String mimeType);
    /**
    The template list item
    */
    Void SetName(String name);
    Void SetPrivacyDocType(Integer privacyDocType);
    Void SetQuoteDocType(Integer quoteDocType);
    /**
    Rank order
    */
    Void SetRank(Integer rank);
    /**
    1 = app, 2 = doc, 3 = email, 4 = fax, 5 = phone, 6 = todo
    */
    Void SetRecordType(NSDocTmplType recordType);
    /**
    1 = save document records in DB; otherwise not.
    */
    Void SetSaveInDb(Integer saveInDb);
    /**
    If email template, default senderaddress when template is of type quote email or privacy email.
    */
    Void SetSenderEmailAddress(String senderEmailAddress);
    Void SetSenderEmailMode(Integer senderEmailMode);
    /**
    True if when using this template there should be shown a place for editing current choices of person, compant, sale, project etc
    */
    Void SetShowCurrents(Bool showCurrents);
    /**
    Tooltip or other description
    */
    Void SetTooltip(String tooltip);
}`;
