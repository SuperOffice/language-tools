export const NSDocumentAgent = `/** 
Collection of all services that work with Document data. This is services for the document information, not the physical document themselves. These are handled by the BLOB service methods.
*/
class NSDocumentAgent {
    /** 
    Checks in a currently checked-out document
    */
    NSReturnInfo CheckinDocument(Integer documentId, String[] allowedReturnTypes, String versionDescription, String[] versionExtraFields);
    /** 
    Checks out a document for editing by the current user.
    */
    NSReturnInfo CheckoutDocument(Integer documentId, String[] allowedReturnTypes);
    /** 
    Sets default values into a new NSDocumentEntity.
    */
    NSDocumentEntity CreateDefaultDocumentEntity();
    NSDocumentEntity CreateDefaultDocumentEntityFromSuggestion(Integer suggestedDocumentId);
    /** 
    Sets default values into a new NSDocumentPreview.
    */
    NSDocumentPreview CreateDefaultDocumentPreview();
    /** 
    Sets default values into a new NSSuggestedDocumentEntity.
    */
    NSSuggestedDocumentEntity CreateDefaultSuggestedDocumentEntity();
    /** 
    Sets default values into a new NSTemplateVariablesParameters.
    */
    NSTemplateVariablesParameters CreateDefaultTemplateVariablesParameters();
    /** 
    Creates a new NSStream that can be used to store the document in the file archive.
    */
    NSStream CreateDocumentStream(NSDocumentEntity documentEntity, Bool overwriteExistingData);
    /** 
    Creates a new document content based on a document template and store it in the document archive. Tags are substituted according to the provided IDs.
    */
    NSDocumentEntity CreateNewPhysicalDocumentFromTemplate(Integer contactId, Integer personId, Integer appointmentId, Integer documentId, Integer saleId, Integer selectionId, Integer projectId, String uiCulture);
    /** 
    Creates a new physical document based on a document template and store it in the document archive. Tags are substituted according to the provided IDs.
    */
    NSDocumentEntity CreateNewPhysicalDocumentFromTemplateWithCustomTags(Integer contactId, Integer personId, Integer appointmentId, Integer documentId, Integer saleId, Integer selectionId, Integer projectId, String[] customTags, String[] customValues, String uiCulture);
    /** 
    Creates a new physical document based on a document template and store it in the document archive. Tags are substituted according to the provided IDs.
    */
    NSDocumentEntity CreateNewPhysicalDocumentFromTemplateWithCustomTags2(Integer contactId, Integer personId, Integer appointmentId, Integer documentId, Integer saleId, Integer selectionId, Integer projectId, String uiCulture);
    /** 
    Creates a new physical document based on the documents template.*/
    NSDocumentEntity CreateNewPhysicalMailMergeDocumentFromTemplate(Integer documentId, String uiCulture);
    /** 
    Creates a new temporary file based on the provided stream.  Specified filename may be overridden, and actual name is returned.
    */
    String CreateTempFile(String filename);
    /** 
    Deletes the NSDocumentEntity
    */
    Void DeleteDocumentEntity(Integer documentEntity);
    /** 
    Deletes the document contents
    */
    NSReturnInfo DeletePhysicalDocument(Integer documentId, String[] allowedReturnType);
    /** 
    Deletes a temporary file created with CreateTempFile.
    */
    Void DeleteTempFile(String filename);
    /** 
    Executes a custom command on a particular document, optionally a particular version
    */
    NSReturnInfo ExecuteDocumentCommand(Integer documentId, String versionId, String[] allowedReturnTypes, String command, String[] additionalData);
    /** 
    Gets all documents that are linked to the appointment (the documents that are listed in the appointment dialog).
    */
    NSDocument[] GetAppointmentDocuments(Integer appointmentId);
    /** 
    Gets the current checkout state for a document, relative to the user performing the call.
    */
    NSCheckoutInfo GetCheckoutState(Integer documentId);
    /** 
    Returns a specified number of document appointments within a time range.
    */
    NSDocument[] GetContactDocuments(Integer contactId, Integer count);
    /** 
    Returns a specified number of document appointments within a time range, filtered by the document template heading.
    */
    NSDocument[] GetContactDocumentsByTemplateHeading(Integer contactId, Integer count, Integer templateHeadingId);
    /** 
    Returns a specified number of document appointments within a time range, filtered by document template type.
    */
    NSDocument[] GetContactDocumentsByTemplateType(Integer contactId, Integer count, Integer documentTemplateId);
    /** 
    Returns a specified number of document appointments within a time range, filtered by document template types.
    */
    NSDocument[] GetContactDocumentsByTemplateTypes(Integer contactId, Integer count, Integer[] documentTemplateIds);
    /** 
    Gets an NSDocument object.
    */
    NSDocument GetDocument(Integer documentId);
    /** 
    Gets a list of custom commands valid for the specific document at this time.
    */
    NSCommandInfo[] GetDocumentCommands(Integer documentId, String[] allowedReturnTypes);
    /** 
    Gets an NSDocumentEntity object.
    */
    NSDocumentEntity GetDocumentEntity(Integer documentEntityId);
    /** 
    Gets an array of NSDocument objects.
    */
    NSDocument[] GetDocumentList(Integer[] documentIds);
    /** 
    Gets plugin-dependent properties for the document.
    */
    Map GetDocumentProperties(Integer documentId, String[] requestedProperties);
    /** 
    Returns document appointments, filtered by the document template heading.
    */
    NSDocument[] GetDocumentsByTemplateHeading(Integer templateHeadingId);
    /** 
    Gets the document content as a stream
    */
    NSStream GetDocumentStream(Integer documentId);
    /** 
    Gets the document as a stream
    */
    NSStream GetDocumentStreamFromEntity(NSDocumentEntity documentEntity);
    /** 
    Gets a URL referring to the given document content.
    */
    String GetDocumentUrl(Integer documentId, String versionId, Bool writeableUrl);
    NSDocument[] GetMyPublishedDocuments();
    /** 
    Gets all documents that are linked to the person (the documents that are listed in the person dialog).
    */
    NSDocument[] GetPersonDocuments(Integer personId);
    /** 
    Returns a specified number of document appointments within a time range. The document appointments belong to the person specified.
    */
    NSDocument[] GetPersonDocumentsByDate(Integer personId, Bool includeProjectDocuments, Integer count);
    /** 
    Returns a specified number of document appointments within a time range, filtered by document template heading.
    */
    NSDocument[] GetPersonDocumentsByTemplateHeading(Integer personId, Bool includeProjectDocuments, Integer count, Integer templateHeadingId);
    /** 
    Returns a specified number of document appointments within a time range, filtered by document template type.
    */
    NSDocument[] GetPersonDocumentsByTemplateType(Integer personId, Bool includeProjectDocuments, Integer count, Integer documentTemplateId);
    /** 
    Returns a specified number of document appointments within a time range, filtered by document template types.
    */
    NSDocument[] GetPersonDocumentsByTemplateTypes(Integer personId, Bool includeProjectDocuments, Integer count, Integer[] documentTemplateIds);
    /** 
    Gets a list of plugin-dependent capabilities for a given document archive plugin.
    */
    Map GetPluginCapabilities(Integer pluginId);
    /** 
    Gets a list of installed document plugins
    */
    Map GetPluginList();
    /** 
    Gets the preview version of the document content as a stream. Retrieves a sanitized version if possible
    */
    NSDocumentPreview GetPreviewDocumentStream(Integer documentId);
    /** 
    Returns a specified number of document appointments within a time range.
    */
    NSDocument[] GetProjectDocuments(Integer projectId, Integer count);
    /** 
    Returns a specified number of document appointments within a time range, filtered by document template heading.
    */
    NSDocument[] GetProjectDocumentsByTemplateHeading(Integer projectId, Integer count, Integer templateHeadingId);
    /** 
    Returns a specified number of document appointments within a time range, filtered by document template type.
    */
    NSDocument[] GetProjectDocumentsByTemplateType(Integer projectId, Integer count, Integer documentTemplateId);
    /** 
    Returns a specified number of document appointments within a time range, filtered by document template types.
    */
    NSDocument[] GetProjectDocumentsByTemplateTypes(Integer projectId, Integer count, Integer[] documentTemplateIds);
    /** 
    Returns a specified number of document appointments within a time range.
    */
    NSDocument[] GetProjectMemberDocuments(Integer personId, Integer count);
    /** 
    Returns a specified number of document appointments within a time range, filtered by document template heading.
    */
    NSDocument[] GetProjectMemberDocumentsByTemplateHeading(Integer personId, Integer count, Integer templateHeadingId);
    /** 
    Returns a specified number of document appointments within a time range, filtered by document template type.
    */
    NSDocument[] GetProjectMemberDocumentsByTemplateType(Integer personId, Integer count, Integer documentTemplateId);
    /** 
    Returns a specified number of document appointments within a time range, filtered by document template types.
    */
    NSDocument[] GetProjectMemberDocumentsByTemplateTypes(Integer personId, Integer count, Integer[] documentTemplateIds);
    /** 
    Gets the document if it's published
    */
    NSDocument GetPublishedDocument(Integer documentId);
    /** 
    Gets the published documents from an array of document IDs.
    */
    NSDocument[] GetPublishedDocuments(Integer[] documentIds);
    /** 
    Returns a specified number of published document appointments within a time range.
    */
    NSDocument[] GetPublishedDocumentsByDate(Integer personId, Bool includeProjectDocuments, Integer count);
    /** 
    Returns a specified number of published document appointments within a time range.
    */
    NSDocument[] GetPublishedPersonDocumentsByDate(Integer personId, Bool includeProjectDocuments, Integer count);
    /** 
    Gets published appointment documents by project ID.
    */
    NSDocument[] GetPublishedProjectDocuments(Integer projectId);
    /** 
    Gets all documents that are linked to the sale (the documents that are listed in the sale dialog).
    */
    NSDocument[] GetSaleDocuments(Integer saleId);
    /** 
    Gets the document content as a stream. Retrieves a sanitized version if possible
    */
    NSStream GetSanitizedDocumentStream(Integer documentId);
    /** 
    Retrieves a stream to a mail template based on its name. Sanitizes the contents if possible.
    */
    NSStream GetSanitizedTemplateStream(String templateName, Bool allowPersonal, String uiCulture);
    /** 
    Retrieve a stream to a document template based on its ID. Sanitizes the contents if possible.
    */
    NSStream GetSanitizedTemplateStreamFromId(Integer templateId, String uiCulture);
    /** 
    Gets an NSSuggestedDocumentEntity object.
    */
    NSSuggestedDocumentEntity GetSuggestedDocumentEntity(Integer suggestedDocumentEntityId);
    /** 
    Gets data stream for temporary file created with CreateTempFile.
    */
    NSStream GetTempFile(String filename);
    /** 
    Retrieve a stream to a mail template based on its name
    */
    NSStream GetTemplateStream(String templateName, Bool allowPersonal, String uiCulture);
    /** 
    Retrieve a stream to a document template based on its ID
    */
    NSStream GetTemplateStreamFromId(Integer templateId, String uiCulture);
    /** 
    Gets the preview version of the document content as a stream. Retrieves an unsanitized version.
    */
    NSDocumentPreview GetUnsanitizedPreviewDocumentStream(Integer documentId);
    /** 
    Gets a list of existing, committed  versions for a given document
    */
    NSVersionInfo[] GetVersionList(Integer documentId);
    /** 
    Rename the physical document (change the file name or equivalent concept in the document archive).
    */
    String RenameDocument(Integer documentId, String newFilename);
    /** 
    Updates the existing NSDocumentEntity or creates a new NSDocumentEntity if the id parameter is 0
    */
    NSDocumentEntity SaveDocumentEntity(NSDocumentEntity documentEntity);
    /** 
    Saves content in stream to document template file
    */
    NSTemplateInfo SaveDocumentTemplateStream(Integer documentTemplateId, NSStream content, String languageCode, Integer pluginId);
    /** 
    Generates a PDF from HTML and makes a document
    */
    Integer SavePrivacyReport(String htmlReport, String title, Integer personId);
    /** 
    Updates the existing NSSuggestedDocumentEntity or creates a new NSSuggestedDocumentEntity if the id parameter is 0
    */
    NSSuggestedDocumentEntity SaveSuggestedDocumentEntity(NSSuggestedDocumentEntity suggestedDocumentEntity);
    /** 
    Store a document's contents from its stream. Since there is a potential for a name conflict (the file name stored by the document entity earlier may prove to be invalid), the (possibly amended) document entity is returned.
    */
    NSDocumentEntity SetDocumentStream(NSDocumentEntity documentEntity, Bool overwriteExistingData);
    /** 
    Stores document content from stream. Since there is a potential for a name conflict (the file name stored by the document entity earlier may prove to be invalid), the (possibly amended) document entity is returned.
    */
    NSDocumentEntity SetDocumentStreamFromId(Integer documentId);
    /** 
    Saves a mail signature template to the document archive
    */
    Void SetTemplateStream(String filename, Bool personal, NSStream stream);
    /** 
    Parses the source document, and replaces any template variable tags with their values, based on the associate ID.<p><p/>
    This method also takes a pair of arrays specifying custom tags and their values; these tags will be available during substitution in addition to all the existing tags.
    */
    NSStream SubstituteMergeDocumentTemplateVariables(Integer documentId, Integer associateId, String[] customTags, String[] customValues);
    /** 
    Parses the source document, and replaces any template variable tags with their values, based on the associate ID.
    */
    NSStream SubstituteMergeDocumentTemplateVariables2(Integer documentId, Integer associateId, Map customTags);
    /** 
    Parses the source document, and replaces any template variable tags with their values, based on the provided identifiers. This method also takes a pair of arrays specifying custom tags and their values; these tags will be available during substitution in addition to all the existing tags
    */
    NSStream SubstituteMergeDocumentTemplateVariablesEx(Integer mergeDocumentId, Integer contactId, Integer personId, Integer projectId, Integer selectionId, Integer appointmentId, Integer documentId, Integer saleId, String[] customTags, String[] customValues);
    /** 
    Parses the source document, and replaces any template variable tags with their values, based on the provided identifiers. This method also takes a pair of arrays specifying custom tags and their values; these tags will be available during substitution in addition to all the existing tags. Custom values will override values otherwise set.
    */
    NSStream SubstituteMergeDocumentTemplateVariablesEx2(Integer mergeDocumentId, Integer contactId, Integer personId, Integer projectId, Integer selectionId, Integer appointmentId, Integer documentId, Integer saleId, Map customTags);
    /** 
    Parses the source string, and replaces any template variable tags with their values, based on the IDs given in the other parameters.
    */
    String SubstituteTemplateVariables(String source, Integer generatorEncoding, Integer contactId, Integer personId, Integer appointmentId, Integer documentId, Integer saleId, Integer selectionId, Integer projectId, String cultureName);
    /** 
    Parses the source string, and replaces any template variable tags with their values, based on the identities, custom values and entities specified in the other parameters.
    */
    String SubstituteTemplateVariablesEx();
    /** 
    Parse the source string, and replace any template variable tags with their values, based on the IDs given in the other parameters.<p><p/>
    This method also takes a pair of arrays specifying custom tags and their values; these tags will be available during substitution in addition to all the existing tags. Custom values will override values otherwise set.
    */
    String SubstituteTemplateVariablesWithCustomTags(String source, Integer generatorEncoding, String[] customTags, String[] customValues, Integer contactId, Integer personId, Integer appointmentId, Integer documentId, Integer saleId, Integer selectionId, Integer projectId, String cultureName);
    /** 
    Parse the source string, and replace any template variable tags with their values, based on the IDs given in the other parameters.<p><p/>
    This method also takes a pair of arrays specifying custom tags and their values; these tags will be available during substitution in addition to all the existing tags. Custom values will override values otherwise set.
    */
    String SubstituteTemplateVariablesWithCustomTags2(String source, Integer generatorEncoding, Map customTags, Integer contactId, Integer personId, Integer appointmentId, Integer documentId, Integer saleId, Integer selectionId, Integer projectId, String cultureName);
    /** 
    Undoes (abandon) a checkout
    */
    NSReturnInfo UndoCheckoutDocument(Integer documentId, String[] allowedReturnTypes);
    /** 
    Checks that entity is ready for saving, return error messages by field.
    */
    Map ValidateDocumentEntity(NSDocumentEntity documentEntity);
    /** 
    Verifies that the requested document stream exists, and that we can access it, without actually getting the stream.
    */
    Void VerifyGetDocumentStream(Integer documentId);
}`;