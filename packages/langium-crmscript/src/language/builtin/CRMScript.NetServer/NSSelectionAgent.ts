export const NSSelectionAgent = `/** 
Selections, entities, members and tasks<p></p>
<pre><code>NSSelectionAgent agent;
agent.callMethod(arg1, arg2);</code></pre>
*/
class NSSelectionAgent {
    /** 
    Adds the collection of ContactPersonId as members to the static selection
    */
    Void AddContactSelectionMembers(Integer selectionId, NSContactPersonId[] contactPersonIds);
    /** 
    Adds members to the selection from the search result.
    */
    Integer AddContactSelectionMembersFromSearch(Integer selectionId, String storageKey);
    /** 
    Adds or removes interests on companies and persons in a selection.
    */
    Void AddRemoveContactSelectionMemberInterests(Integer selectionId, Integer[] addCompanyInterests, Integer[] removeCompanyInterests, Integer[] addContactInterests, Integer[] removeContactInterests);
    /** 
    Add selection members to a static selection of type others than contacts.
    */
    Integer AddSelectionMembers(Integer selectionId, Integer[] ids);
    /** 
    Adds members from the selection using the search result.
    */
    Integer AddSelectionMembersFromSearch(Integer selectionId, String storageKey);
    /** 
    Copies contact selection members from selection into an existing selection.
    */
    Void CopyContactSelectionMembers(Integer fromSelectionId, Integer toSelectionId);
    /** 
    Copies selection members from selection into an existing selection.
    */
    Void CopySelectionMembers(Integer fromSelectionId, Integer toSelectionId);
    /** 
    Creates a new selection based on selection members from an existing selection.
    */
    NSSelectionEntity CreateContactSelectionFromSelection(Integer selectionId, String name, Integer targetSelectionType, Bool copyMembers);
    /** 
    Creates a new contact selection based on contact selection members from an existing shadow sale, appointment, project or document selection.
    */
    NSSelectionEntity CreateContactSelectionFromShadowSelection(Integer selectionId, String name);
    /** 
    Sets default values into a new NSMailMergeSettings.
    */
    NSMailMergeSettings CreateDefaultMailMergeSettings();
    /** 
    Sets default values into a new NSMailMergeTask.
    */
    NSMailMergeTask CreateDefaultMailMergeTask();
    /** 
    Sets default values into a new NSSelectionEntity.
    */
    NSSelectionEntity CreateDefaultSelectionEntity();
    /** 
    Creates a new selection based on external duplicate
    */
    Integer CreateNewEntry(NSDuplicateEntry duplicate);
    /** 
    Creates (but do not save) a new selection entity, for the current user and the given target table; other fields populated as by CreateDefaultSelectionEntity()
    */
    NSSelectionEntity CreateSelectionEntity(String targetTableName);
    /** 
    Creates a new selection based on selection members from an existing selection.
    */
    NSSelectionEntity CreateSelectionFromSelection(Integer selectionId, String name, Integer targetSelectionType, Bool copyMembers);
    /** 
    Creates a temporary selection.
    */
    NSSelectionEntity CreateTemporaryContactSelection();
    /** 
    Creates a temporary selection with members from a collection of ContactPerson IDs.
    */
    NSSelectionEntity CreateTemporaryContactSelectionFromContactPersonIds(NSContactPersonId[] contactPersonIds);
    /** 
    Creates a temporary selection with members from an existing project.
    */
    NSSelectionEntity CreateTemporaryContactSelectionFromProjectMembers(Integer projectId);
    /** 
    Creates a temporary selection with members from a collection of selection-member IDs.
    */
    NSSelectionEntity CreateTemporaryContactSelectionFromSelectionMemberIds(Integer selectionId, Integer[] selectionMemberIds);
    /** 
    Creates a temporary selection with members from a collection of entity IDs.
    */
    NSSelectionEntity CreateTemporarySelectionFromIds(Integer[] ids, Integer targetTableNumber);
    /** 
    Deletes all contacts from a selection.
    */
    Void DeleteContacts(Integer selectionId);
    /** 
    Deletes all entities from a selection.
    */
    Void DeleteEntities(Integer selectionId);
    /** 
    Deletes all persons from a selection.
    */
    Void DeletePersons(Integer selectionId);
    /** 
    Deletes the NSSelectionEntity
    */
    Void DeleteSelectionEntity(Integer selectionEntity);
    /** 
    Edits company and contact details in a selection based on contents in selectionMemberEditValues.
    */
    Void EditContactSelectionMemberDetails(Integer selectionId, NSSelectionMemberEditValues selectionMemberEditValues);
    /** 
    Generates a string that is the result of substituting the template variables with values from selection members.
    */
    Byte[] ExportSelectionMembers(Integer selectionId, String templateName, Bool useContacts);
    /** 
    Generates a string that is the result of substituting the template variables with values from selection members.
    */
    Byte[] ExportSelectionMembersWithOrderBy(Integer selectionId, String templateName, Bool useContacts, String orderBy);
    /** 
    Generates follow-ups for members in the selection.
    */
    Void GenerateFollowUps(Integer selectionId, NSAppointmentEntity appointmentEntity, Integer associateId, Bool saveOnContactOwner, Bool uniqueContact);
    /** 
    Retrieves all available duplicate rules for selection
    */
    NSDuplicateRule[] GetDuplicateRules();
    /** 
    Gets duplicates(exact or similar in the database) based on the name
    */
    NSDuplicateEntry[] GetDuplicates(String name);
    /** 
    Gets the criteria for this dynamic selection.
    */
    NSArchiveRestrictionInfo[] GetDynamicSelectionCriteria(Integer selectionId);
    /** 
    Gets the criteria for this dynamic selection. This call supports multiple criteria groups.
    */
    NSArchiveRestrictionGroup[] GetDynamicSelectionCriteriaGroups(Integer selectionId);
    /** 
    Gets a list of all selection ids where the given selection is used to create a combined selection.
    */
    Integer[] GetParentCombinedSelections(Integer selectionId);
    /** 
    Returns an NSRecipientStatistics object with a count of addresses and email addresses.
    */
    NSRecipientStatistics GetRecipientStatistics(Integer selectionId);
    /** 
    Returns an NSRecipientStatistics object with a count of addresses and email addresses based on contact and persons in a collection of ContactPersonId.
    */
    NSRecipientStatistics GetRecipientStatisticsFromContactPersonIds();
    /** 
    Returns an NSRecipientStatistics object with a count of addresses and email addresses based on members in a project.
    */
    NSRecipientStatistics GetRecipientStatisticsFromProjectMembers(Integer projectId);
    /** 
    Gets an NSSelectionEntity object.
    */
    NSSelectionEntity GetSelectionEntity(Integer selectionEntityId);
    /** 
    Obtains a selection for the given entity, for the current user, of type WorkingSetForFind.
    */
    NSSelectionForFind GetSelectionForFind(String entityName, Integer typicalSearchId);
    /** 
    Gets the list of members in this selection. The type of members depends on the target table of the selection.
    */
    NSArchiveListItem[] GetSelectionMembersArchiveRows(Integer selectionId, String select);
    /** 
    Gets the list of members in this selection's shadow (i.e. the list of contacts + persons referenced in the main selection).
    */
    NSArchiveListItem[] GetSelectionShadowMembersArchiveRows(Integer selectionId, String select);
    /** 
    Removes members from the selection as  specified in the collection of ContactPersonId.
    */
    Void RemoveContactSelectionMembers(Integer selectionId, NSContactPersonId[] contactPersonIds);
    /** 
    Removes members from the selection using a collection a selection-member IDs.
    */
    Void RemoveContactSelectionMembersFromIds(Integer selectionId, Integer[] selectionMembersIds);
    /** 
    Removes members from the selection using the search result.
    */
    Integer RemoveContactSelectionMembersFromSearch(Integer selectionId, String storageKey);
    /** 
    Removes members from the selection as specified in the collection of entity IDs. The IDs are selection member IDs (selection member primary key)
    */
    Void RemoveSelectionMembers(Integer selectionId, Integer[] selectionMemberIds);
    /** 
    Removes members from the selection as specified in the collection of entity IDs. The IDs can be a collection of sale IDs, or other supported types.
    */
    Void RemoveSelectionMembersById(Integer selectionId, Integer[] ids);
    /** 
    Removes members from the selection using the search result.
    */
    Integer RemoveSelectionMembersFromSearch(Integer selectionId, String storageKey);
    /** 
    Updates the existing NSSelectionEntity or creates a new NSSelectionEntity if the ID parameter is 0.
    */
    NSSelectionEntity SaveSelectionEntity(NSSelectionEntity selectionEntity);
    /** 
    Sets which duplicate rules should be active or not
    */
    Void SetDuplicateRulesStatus(NSDuplicateRule[] rules);
    /** 
    Updates the criteria for this dynamic selection. Replaces existing criteria with the new values.
    */
    NSArchiveRestrictionInfo[] SetDynamicSelectionCriteria(Integer selectionId, NSArchiveRestrictionInfo[] criteria);
    /** 
    Updates the criteria for this dynamic selection using string.
    */
    NSArchiveRestrictionInfo[] SetDynamicSelectionCriteria2(Integer selectionId, String filter);
    /** 
    Updates the criteria for this dynamic selection. Use criteria as either restriction objects or OData string format.
    */
    NSArchiveRestrictionInfo[] SetDynamicSelectionCriteria3(Integer selectionId, NSArchiveRestrictionInfo[] criteria, String filter);
    /** 
    Updates the criteria for this dynamic selection. Replaces existing criteria with the new values. This call supports multiple criteria groups.
    */
    NSArchiveRestrictionGroup[] SetDynamicSelectionCriteriaGroups(Integer selectionId, NSArchiveRestrictionGroup[] criteria);
    /** 
    Starts a mail-merge operation with specified settings.
    */
    Void StartMailMerge(MailMergeSettings settings);
    /** 
    Updates (imports) TypicalSearch information in the database
    */
    String UpdateTypicalSearch(NSTypicalSearches searches);
}`;