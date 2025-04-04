export const NSPhoneListAgent = `/** 
Collection of all services for searching for person or contact (company) phone numbers.
*/
class NSPhoneListAgent {
    /** 
    Adds a new contact to the history/favorites. If the contact already existed in the history, it isn't added but the rank is updated.
    */
    Integer AddToFavorites(Integer contactId);
    /** 
    Returns an array of phone list items for all the persons belonging to a contact (company).
    */
    NSPhoneListItem[] GetContactPhones(Integer contactId);
    /** 
    Returns an array of phone list items with the in-parameter as restriction.
    */
    NSPhoneListItem[] GetDepartmentPhones(Integer departmentId);
    /** 
    Returns an array of phone list items with the Contacts in the users favorites dropdown list.
    */
    NSPhoneListItem[] GetFavoritesPhones();
    /** 
    Gets Phone List Preferences from the CRM 5 user preferences
    */
    NSPhoneListPreferences GetPreferences();
    /** 
    Searches the phone list using default search preferences or the preferences already set by the NSPhoneListPreferences Service
    */
    NSPhoneListItem[] Search(String searchString);
    /** 
    Searches the phone list based on the supplied preferences.
    */
    NSPhoneListItem[] SearchWithPreferences(String searchString, NSPhoneListPreferences preferences);
    /** 
    Sets Phone List Preferences to the CRM 5 user preferences
    */
    Void SetPreferences(NSPhoneListPreferences preferences);
}`;