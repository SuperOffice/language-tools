export const NSPersonAgent = `/** 
Person data services.
*/
class NSPersonAgent {
    /** 
    Adds a bounce count on the email address if it exists
    */
    Void AddBounce(String emailAddress);
    /** 
    Adds a number of bounce counts on the email address if it exists
    */
    Void AddBounceWithCount(String emailAddress, Integer counts);
    /** 
    Sets the primary email address on person, possibly re-ranking email addresses accordingly.
    */
    Void AddEmailAddressToPerson(Integer personId, String emailAddress, Bool setAsPrimaryEmail);
    /** 
    Changes country and regenerates the default values and localized information such as phone number and address format for this entity.
    */
    NSPersonEntity ChangeCountry(NSPersonEntity personEntity, Integer toCountryId);
    /** 
    Moves one person up or down in the ranking in the Person Archive, if possible. Corresponds to the move up/move down functions in the person archive in the contact panel.
    */
    Integer ChangePersonRank(Integer personId, Bool moveUp);
    /** 
    Checks a temporary key for validity, and in case it is valid, return its domain, targetId and personId
    */
    NSTemporaryKeyInfo CheckTemporaryKey(String temporaryKey);
    /** 
    Creates an NSPersonEntity with default values based on the contactId.
    */
    NSPersonEntity CreateDefaultByContactId(Integer contactId);
    /** 
    Sets default values into a new NSConsentPerson.
    */
    NSConsentPerson CreateDefaultConsentPerson();
    /** 
    Creates an NSPersonEntity with default values based on the contactId and credentials.
    */
    NSPersonEntity CreateDefaultFromCredential(Integer contactId, String credentialType, String credentialValue, String credentialDisplayValue);
    /** 
    Sets default values into a new NSPersonEntity.
    */
    NSPersonEntity CreateDefaultPersonEntity();
    /** 
    Creates a temporary key in the database from the given parameters and return the key string. Used for temporary keys for accessing customer centric functionality, such as UpdateSubscriptions.
    */
    String CreateTemporaryKey(Integer domain, Integer targetId, Integer personId, DateTime expires);
    /** 
    Deletes the NSConsentPerson
    */
    Void DeleteConsentPerson(Integer consentPerson);
    /** 
    Trigger deletion of persons that has been (soft) deleted and have timed out the expiry period (the SoftDeleteRetention preference).
    */
    Void DeleteExpired();
    /** 
    Deletes the NSPersonEntity
    */
    Void DeletePersonEntity(Integer personEntity);
    /** 
    Deletes all temporary keys for a given domain and person
    */
    Void DeleteTemporaryKeysOfDomain(Integer domain, Integer personId);
    /** 
    Gets the person's localized addressGets the person's localized address.
    */
    NSLocalizedField[][] GetAddress(Integer personId);
    /** 
    Gets the person's localized addressGets the person's localized address.
    */
    NSLocalizedField[][] GetAddressByCountry(Integer personId, Integer countryId);
    /** 
    Gets the best language for this person on this template
    */
    String GetBestSoLanguageForTemplate(Integer personId, Integer templateId);
    /** 
    Gets the persons working in the same company as the logged-on user.
    */
    NSPerson[] GetColleagues();
    /** 
    Gets the persons working in a specific department in the same company as the logged-on user
    */
    NSPerson[] GetColleaguesByDepartment(Integer departmentId);
    /** 
    Gets the persons working in the same company as the logged-on user.
    */
    NSPerson[] GetColleaguesBySource(Integer sourceType, Integer count);
    /** 
    Gets all consent information for a given person. May include withdrawn consents (check)
    */
    NSConsentInfo[] GetConsentInfos(Integer personId);
    /** 
    Gets an NSConsentPerson object.
    */
    NSConsentPerson GetConsentPerson(Integer consentPersonId);
    /** 
    Gets the owner of the logged in person.
    */
    NSPerson GetMyOwner();
    /** 
    Gets the person info belonging to the currently logged-on user.
    */
    NSPersonEntity GetMyPerson();
    /** 
    Gets the owner of the person by ID.
    */
    NSPerson GetOwnerOnPersonId(Integer personId);
    /** 
    Gets an NSPerson object.
    */
    NSPerson GetPerson(Integer personId);
    /** 
    Gets an NSPersonEntity object.
    */
    NSPersonEntity GetPersonEntity(Integer personEntityId);
    /** 
    Returns the person image that is displayed in the CRM application.
    */
    NSImage GetPersonImage(Integer personId);
    /** 
    Gets an array of NSPerson objects.
    */
    NSPerson[] GetPersonList(Integer[] personIds);
    /** 
    Returns all the persons belonging to a contact.
    */
    NSPerson[] GetPersonsFromContact(Integer contactId);
    /** 
    Returns all the persons belonging to a project.
    */
    NSPerson[] GetPersonsFromProject(Integer projectId);
    /** 
    Gets summary of person and recent activity.
    */
    NSPersonSummary GetPersonSummary(Integer personId, Integer limit);
    /** 
    Returns all phones that belong to a person, ordered by the phone type.
    */
    NSEntityElement[] GetPhones(Integer personId);
    /** 
    Returns the sales representative for an external user.
    */
    NSPersonEntity GetSalesRep(String contactName, String personFirstname, String personLastname, String emailAddress, String phoneNumber);
    /** 
    Checks if consent has been given by a specified person, for a specific purpose. Withdraw consents return FALSE.
    */
    Bool HasConsent(Integer personId, String purpose);
    /** 
    Checks if the number is unique or required.
    */
    Bool IsNumberValid(Integer contactId, String number);
    /** 
    Merges two persons. The destination person will remain. You must specify the date after which activities will be moved along with the person.
    */
    Void Merge(Integer sourcePersonId, Integer destinationPersonId, DateTime moveAfterDate, Bool deleteSource, Bool replaceEmptyFieldsOnDestination);
    /** 
    Moves a person to a specified contact. You must specify the date after which activities will be moved along with the person.
    */
    Void Move(Integer personId, Integer destinationContactId, DateTime moveAfterDate);
    /** 
    Normalize the ranks for all persons that belong to a contact. This means that the persons will be sorted according to their current rank values, and the ranks will be made monotonically increasing from 1.
    */
    Bool NormalizeRanks(Integer contactId);
    /** 
    Turns off consent for a specified person and purpose.
    */
    Void RemoveConsent(Integer personId, String purpose);
    /** 
    Gets a person from the provided information. If the person does not exist, it will be created on demand.
    */
    NSResolvedPerson ResolvePersonFromInfo(Integer contactId, String personName, String[] phoneNumbers, String[] emails);
    /** 
    Updates the existing NSConsentPerson or creates a new NSConsentPerson if the id parameter is 0
    */
    NSConsentPerson SaveConsentPerson(NSConsentPerson consentPerson);
    /** 
    Creates or updates an NSPersonEntityUpdates the existing NSPersonEntity or creates a new NSPersonEntity if the ID parameter is 0.
    */
    NSPersonEntity SavePersonEntity(NSPersonEntity personEntity);
    /** 
    Sends a confirmation email to the provided person, email address (id), using the document template
    */
    Void SendConsentConfirmationEmail(Integer personId, String emailAddress, Integer emailTemplateId, Integer cultureLcidId, String subject);
    /** 
    Sets a specified type of consent on the person.
    */
    Void SetConsent(Integer personId, String purpose, String source, String legalBase, String comment);
    /** 
    Stores the person image that is displayed in the CRM application.
    */
    Void SetPersonImage(Integer personId);
    /** 
    Directly sets the rank field of a person record, adjusting all other person records under the same contact as needed.
    */
    Bool SetPersonRank(Integer personId, Integer desiredRank);
    /** 
    Attempts to add multiple persons to an email flow, returning an array of boolean values indicating success for each person.
    */
    Bool[] TryAddPersonsToEmailFlow(Integer flowId, Integer[] personIds);
    /** 
    This entity supports Soft Delete. Call this method to Undelete a previously soft-deleted record
    */
    Void Undelete(Integer id);
    /** 
    Checks that entity is ready for saving, return error messages by field.
    */
    Map ValidatePersonEntity(NSPersonEntity personEntity);
}`;