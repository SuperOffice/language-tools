export const NSContactAgent = `/** 
Contact (company) data services.
*/
class NSContactAgent {
    /** 
    Adds a person to the given contact
    */
    NSPersonEntity AddPerson(Integer contactId, NSPersonEntity newPersonEntity);
    /** 
    Changes country regenerates the default values and localized information such as phone number and address format
    */
    NSContactEntity ChangeCountry(NSContactEntity contactEntity, Integer toCountryId);
    /** 
    Copies a contact. Activities and related data will be ignored
    */
    Integer Copy(Integer sourceContactId, String destinationContactName, String destinationContactDepartment, Bool copyPersons);
    /** 
    Sets default values into a new NSContactEntity.
    */
    NSContactEntity CreateDefaultContactEntity();
    /** 
    Creates a new contact based on external duplicate
    */
    Integer CreateNewEntry(NSDuplicateEntry duplicate);
    /** 
    Deletes the NSContactEntity
    */
    Void DeleteContactEntity(Integer contactEntity);
    /** 
    Triggers deletion of contacts (companies) that has been (soft) deleted and have timed out the expiry period (the SoftDeleteRetention preference).
    */
    Void DeleteExpired();
    /** 
    Gets a contact's localized addressGets the contact's localized address
    */
    LocalizedField[][] GetAddress(Integer contactId);
    /** 
    Gets a contact's localized addressGets the contact's localized address
    */
    LocalizedField[][] GetAddressByCountry(Integer contactId, Integer countryId);
    /** 
    Gets an NSContact object.
    */
    NSContact GetContact(Integer contactId);
    /** 
    Gets an NSContactEntity object.
    */
    NSContactEntity GetContactEntity(Integer contactEntityId);
    /** 
    Gets an array of Contact objects.
    */
    NSContact[] GetContactList(Integer[] contactIds);
    /** 
    Gets summary of contact and its recent activity.
    */
    NSContactSummary GetContactSummary(Integer contactId, Integer limit);
    /** 
    Returns the contact with all the contact persons belonging to the contact
    */
    NSContactEntity GetContactWithPersons(Integer contactId);
    /** 
    Retrieves all available duplicate rules for contact
    */
    NSDuplicateRule[] GetDuplicateRules();
    /** 
    Gets duplicates (exact or similar in the database) based on the name
    */
    NSDuplicateEntry[] GetDuplicates(String name);
    /** 
    Returns the contacts where there has been activity since activityStartTime.
    */
    NSContactActivity[] GetMyActiveContacts(DateTime activityStartTime, Integer[] contactCategories, Integer actionType);
    /** 
    Returns all data needed to display the logged on person's business card (company, person, and company interest data).
    */
    NSContactEntity GetMyBizCard();
    /** 
    Gets the contact belonging to the currently logged-on user.
    */
    NSContactEntity GetMyContact();
    /** 
    Gets the contacts where the user currently logged in is set as contact owner.
    */
    NSContact[] GetMyContacts();
    /** 
    Returns a set of initial contacts.
    */
    NSContact[] GetMyRecentContacts(Integer sourceType);
    /** 
    Gets duplicates based on the contact name and department
    */
    NSDuplicateEntry[] GetNameDepartmentDuplicates(String name, String department);
    /** 
    Returns an array of all the contact persons for the company card.
    */
    NSPerson[] GetPersons(Integer contactId);
    /** 
    Gets the associated billing and invoice quote version addresses.
    */
    NSAddress[] GetQuoteVersionAddresses(Integer quoteVersionId);
    /** 
    Checks if the number is unique or required. The setting is configured from admin under system options.
    */
    Bool IsNumberValid(Integer contactId, String number);
    /** 
    Merges two contacts. The destination contact will remain.
    */
    Void Merge(Integer sourceContactId, Integer destinationContactId, Bool mergeIdenticalPersons, Bool replaceEmptyFieldsOnDestination);
    /** 
    Updates the existing NSContactEntity or creates a new NSContactEntity if the ID parameter is 0.
    */
    NSContactEntity SaveContactEntity(NSContactEntity contactEntityId);
    /** 
    Saves a custom quote version address.
    */
    NSAddress SaveQuoteVersionAddress(Integer quoteVersionId, NSAddress address, Integer addressType, Integer countryId);
    /** 
    Sets which duplicate rules should be active or not
    */
    Void SetDuplicateRulesStatus(NSDuplicateRule[] rules);
    /** 
    This entity supports Soft Delete. Call this method to Undelete a previously soft-deleted record
    */
    Void Undelete(Integer id);
    /** 
    Checks that entity is ready for saving, return error messages by field.
    */
    Map ValidateContactEntity(NSContactEntity contactEntity);
}`;