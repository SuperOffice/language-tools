export const NSPreferenceAgent = `/** 
Preferences, user interface tab configuration.
*/
class NSPreferenceAgent {
    /** 
    Sets default values into a new NSPreference.
    */
    NSPreference CreateDefaultPreference();
    /** 
    Sets default values into a new NSPreferenceDescription.
    */
    NSPreferenceDescription CreateDefaultPreferenceDescription();
    /** 
    Sets default values into a new NSPreferenceDescriptionLine.
    */
    NSPreferenceDescriptionLine CreateDefaultPreferenceDescriptionLine();
    /** 
    Gets an NSPreferenceDescription based on the section and key
    */
    Void DeleteFromSectionAndKey(String section, String key);
    /** 
    Deletes the PrefDescLines associated with Preference Description ID in the SuperOffice database
    */
    Void DeletePrefDescLinesByPrefDescId(Integer prefDescId);
    /** 
    Deletes the PrefDescLines associated with Preference Description IDs in the SuperOffice database
    */
    Void DeletePrefDescLinesByPrefDescIds(Integer[] prefDescIds);
    /** 
    Deletes a preference by ID
    */
    Void DeletePreference(Integer id);
    /** 
    Deletes the NSPreferenceDescription
    */
    Void DeletePreferenceDescription(Integer preferenceDescription);
    /** 
    Deletes the NSPreferenceDescriptionLine
    */
    Void DeletePreferenceDescriptionLine(Integer preferenceDescriptionLine);
    /** 
    Deletes the PrefDescLines in the SuperOffice database
    */
    Void DeletePreferenceDescriptionLines(Integer[] prefDescLineIds);
    /** 
    Deletes some preferences by ID
    */
    Void DeletePreferences(Integer[] ids);
    /** 
    Gets a list of all PreferenceDescriptions in the system.
    */
    NSPreferenceDescription[] GetAll();
    /** 
    Gets all NSPreferenceDescription-items in the specified section
    */
    NSPreferenceDescription[] GetAllFromSection(String section);
    /** 
    Gets an NSPreferenceDescription based on the section and key
    */
    NSPreferenceDescription GetFromSectionAndKey(String section, String key);
    /** 
    Returns URL to status service. e.g. 'https://help.superoffice.com/sodispatcher/v1/status'
    */
    String GetNetServicesStatusUrl();
    /** 
    Gets a preference by ID
    */
    NSPreference GetPreference(Integer id);
    /** 
    Gets a preference by name
    */
    NSPreference GetPreferenceByName(String prefSection, String prefKey, Integer prefLevel);
    /** 
    Gets a preference by name and owner ID.
    */
    NSPreference GetPreferenceByNameAndId(String prefSection, String prefKey, Integer prefLevel, Integer ownerId);
    /** 
    Gets an NSPreferenceDescription object.
    */
    NSPreferenceDescription GetPreferenceDescription(Integer preferenceDescriptionId);
    /** 
    Gets an NSPreferenceDescriptionLine object.
    */
    NSPreferenceDescriptionLine GetPreferenceDescriptionLine(Integer preferenceDescriptionLineId);
    /** 
    Gets a preference description line from a prefDesc_id and a prefValue
    */
    NSPreferenceDescriptionLine GetPreferenceDescriptionLineFromIdAndValue(Integer prefDescId, String prefValue);
    /** 
    Gets all preference description lines from a prefDesc_id
    */
    NSPreferenceDescriptionLine[] GetPreferenceDescriptionLinesByPrefDescId(Integer prefDescId);
    /** 
    Gets one or more preferences based on a set of specifications.
    */
    NSPreference[] GetPreferences(NSPreferenceSpec[] specifications);
    /** 
    Gets one or more preferences based on a set of specifications.
    */
    NSPreference[] GetPreferencesWithDisplayValues(NSPreferenceSpec[] specifications);
    /** 
    Gets the tab order.
    */
    NSTabOrder GetTabOrder(String tabName);
    NSTabOrder[] GetTabOrders();
    /** 
    Updates an NSPreferenceDescription based on the section and key
    */
    NSPreferenceDescription SaveFromSectionAndKey(String section, String key, NSPreferenceDescription preferenceDescription);
    /** 
    Saves this preference
    */
    Void SavePreference(NSPreference preference);
    /** 
    Updates the existing NSPreferenceDescription or creates a new NSPreferenceDescription if the id parameter is 0
    */
    NSPreferenceDescription SavePreferenceDescription(NSPreferenceDescription preferenceDescription);
    /** 
    Updates the existing NSPreferenceDescriptionLine or creates a new NSPreferenceDescriptionLine if the id parameter is 0
    */
    NSPreferenceDescriptionLine SavePreferenceDescriptionLine(NSPreferenceDescriptionLine preferenceDescriptionLine);
    /** 
    Saves the PreferenceDescriptionLine array in the SuperOffice database
    */
    NSPreferenceDescriptionLine[] SavePreferenceDescriptionLines(NSPreferenceDescriptionLine[] preferenceDescriptionLines);
    /** 
    Saves this set of preferences.
    */
    Void SavePreferenceEntities(NSPreference[] preferences, Bool removeLowerLevels);
    /** 
    Saves a complete preference object, on any level and any target.
    */
    NSPreference SavePreferenceEntity(NSPreference preference, Bool removeLowerLevels);
    /** 
    Saves this set of preferences.
    */
    Void SavePreferences(NSPreference[] preferences);
    /** 
    Saves the tab order. The order is saved pr. user.
    */
    Void SaveTabOrder(NSTabOrder tabOrder);
    Void SaveTabOrders(NSTabOrder[] tabOrders);
    /** 
    Updates the NetServices preferences with values contained in the content from the Status URL
    */
    Void UpdateNetServicesStatus(String xmlOrJson);
}`;