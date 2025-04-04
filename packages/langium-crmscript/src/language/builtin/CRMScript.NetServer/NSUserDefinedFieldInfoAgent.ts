export const NSUserDefinedFieldInfoAgent = `/** 
Returns information about user-defined fields, like field type, field size, field label text, default value. Does not return the actual values in the user-defined fields. The values are returned on the entity objects.
*/
class NSUserDefinedFieldInfoAgent {
    /** 
    Creates a UserDefinedFieldInfo based on a owner-entity ID
    */
    NSUserDefinedFieldInfo ChangeFieldType(NSUserDefinedFieldInfo info, Integer fieldType, Bool isIndexed);
    /** 
    Sets default values into a new NSUserDefinedFieldInfo.
    */
    NSUserDefinedFieldInfo CreateDefaultUserDefinedFieldInfo();
    /** 
    Creates a UserDefinedFieldInfo based on a owner-entity ID
    */
    NSUserDefinedFieldInfo CreateUserDefinedFieldInfo(Integer ownerType, Integer fieldType);
    /** 
    Deletes the NSUserDefinedFieldInfo
    */
    Void DeleteUserDefinedFieldInfo(Integer userDefinedFieldInfo);
    /** 
    Detects columnid changes to the admin version (for determining publish warning)
    */
    Bool DetectColumnIdChanges(Integer ownerType);
    /** 
    Detects changes to the admin version (unpublished)
    */
    Bool DetectUnpublishedChanges(Integer ownerType);
    /** 
    Kind of the reverse of SetListTableIdAndUDListDefinitionIdFromSelectedListId
    */
    Integer FigureOutListIdFromListTableIdAndUDListDefinitionId(NSUserDefinedFieldInfo info);
    /** 
    Gets which page-one fields have changed from the current version
    */
    Bool[] GetChangedPageOneFields(Integer ownerType, Integer userGroupId);
    /** 
    Returns information about a particular custom field (user-defined + extra) on a particular table
    */
    NSFieldInfoBase GetCustomFieldInfo(String tableName, String fieldName);
    /** 
    Returns information about all the custom fields (user-defined + extra) on a particular table
    */
    NSFieldInfoBase[] GetCustomFieldInfoList(String tableName, Bool includeStandard);
    /** 
    Returns information about the given user defined field identified by the owner and the field label.
    */
    NSUserDefinedFieldInfo GetPublishedUserDefinedFieldFromFieldLabel(String fieldLabel, Integer ownerType);
    /** 
    Return information about the given user defined field identified by the owner and the prog-id.
    */
    NSUserDefinedFieldInfo GetPublishedUserDefinedFieldFromProgId(String progId, Integer ownerType);
    /** 
    Return information about all the user defined fields on a particular owner type (project, contact, person, etc).
    */
    NSUserDefinedFieldInfo[] GetPublishedUserDefinedFieldList(Integer ownerType);
    /** 
    Gets a list of page one fields for given Udef type and current user group
    */
    NSUserDefinedFieldInfo[] GetPublishedUserDefinedPageOneFields(Integer ownerType, Integer userGroupId);
    /** 
    Return information about the given user defined field identified by the owner and the field label.
    */
    NSUserDefinedFieldInfo GetUserDefinedFieldFromFieldLabel(String fieldLabel, Integer ownerType);
    /** 
    Returns an given array of user defined field identified by the IDs.
    */
    NSUserDefinedFieldInfo[] GetUserDefinedFieldFromIds(Integer[] ids);
    /** 
    Returns information about the given user defined field identified by the owner and the prog-id.
    */
    NSUserDefinedFieldInfo GetUserDefinedFieldFromProgId(String progId, Integer ownerType);
    /** 
    Return an given array user defined field identified by the owner and the prog-ids.
    */
    NSUserDefinedFieldInfo[] GetUserDefinedFieldFromProgIds(String[] progIds, Integer ownerType);
    /** 
    Gets an NSUserDefinedFieldInfo object.
    */
    NSUserDefinedFieldInfo GetUserDefinedFieldInfo(Integer userDefinedFieldInfoId);
    /** 
    Return information about all the user defined fields on a particular owner type (project, contact, person, etc).
    */
    NSUserDefinedFieldInfo[] GetUserDefinedFieldList(Integer ownerType);
    /** 
    Gets a list of page one fields for given Udef type and current user group
    */
    NSUserDefinedFieldInfo[] GetUserDefinedPageOneFields(Integer ownerType, Integer userGroupId);
    /** 
    Checks if any publish events are active
    */
    Bool IsAnyPublishEventActive();
    /** 
    Checks if the publish event is active for the given type.
    */
    Bool IsPublishEventActive(Integer type);
    /** 
    Publish changed Udef fields for the given owner type
    */
    Integer Publish(Integer ownerType);
    /** 
    Revert changed Udef fields for the given owner type. All unpublished changes will be lost
    */
    Void Revert(Integer ownerType);
    /** 
    Updates the existing NSUserDefinedFieldInfo or creates a new NSUserDefinedFieldInfo if the id parameter is 0
    */
    NSUserDefinedFieldInfo SaveUserDefinedFieldInfo(NSUserDefinedFieldInfo userDefinedFieldInfo);
    /** 
    Saves an array of user defined fields. This will update the unpublished layout.
    */
    Void SaveUserDefinedFieldInfos(NSUserDefinedFieldInfo[] infos);
    /** 
    Makes stuff similar to what happens in the win client
    */
    NSUserDefinedFieldInfo SetListTableIdAndUDListDefinitionIdFromSelectedListId(NSUserDefinedFieldInfo info, Integer selectedListId);
    /** 
    Sets the Page One Field grouping for a specific entity
    */
    Void SetPageOneFieldGrouping(Integer ownerType, Bool active);
    /** 
    Sets the start flag for udef publishing. Must be called before PUBLISH, or PUBLISH will fail.
    */
    Void SetPublishStartSystemEvent(Integer ownerType);
    /** 
    Changes rank of user defined fields
    */
    Void SetRankOnFields(Integer ownerType, Integer[] rankedFieldsIds);
    /** 
    Sets a user defined field as page one field.
    */
    Void SetUserDefinedPageOneField(Integer ownerType, Integer udefFieldId, Integer userGroupId, Integer fieldLineNo);
}`;