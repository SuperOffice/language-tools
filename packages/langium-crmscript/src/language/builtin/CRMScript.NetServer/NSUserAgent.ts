export const NSUserAgent = `/** 
User administration.
*/
class NSUserAgent {
    Void AddOwnerContact(Integer contactId);
    /** 
    Checks if the current associate can change the password for an associate
    */
    Bool CanChangePassword(Integer associateId);
    /** 
    Changes password for a user.
    */
    Bool ChangeOwnPassword(String oldPassword, String newPassword);
    /** 
    Changes password for a user.
    */
    Bool ChangePassword(Integer associateId, String oldPassword, String newPassword);
    /** 
    Changes password for a user.
    */
    Bool ChangePasswordFromName(String associateName, String oldPassword, String newPassword);
    /** 
    Gets a user from the user name.
    */
    NSUser ChangeUserType(NSUser user, Integer userType);
    /** 
    Checks if AccessGatewayRegistration is valid
    */
    Bool CheckAccessGatewayRegistration();
    /** 
    Sets default values into a new NSRoleEntity.
    */
    NSRoleEntity CreateDefaultRoleEntity();
    /** 
    Creates a new role entity of the specified role type. The role type cannot be changed after the entity is created.
    */
    NSRoleEntity CreateDefaultRoleEntityFromType(Integer type);
    /** 
    Sets default values into a new NSServiceAuth.
    */
    NSServiceAuth CreateDefaultServiceAuth();
    /** 
    Sets default values into a new NSUntrustedCredentials.
    */
    NSUntrustedCredentials CreateDefaultUntrustedCredentials();
    /** 
    Sets default values into a new NSUser.
    */
    NSUser CreateDefaultUser();
    /** 
    Creates default NSUser providing the user type.  Only System and Anonymous users can be created without an existing person.
    */
    NSUser CreateDefaultUserFromUserType(Integer userType);
    /** 
    Creates an NSPersonEntity with default values based on the contactId and credentials.
    */
    NSUser CreateDefaultUserFromUserTypeAndCredential(Integer userType, Integer contactId, String credentialType, String credentialValue, String credentialDisplayValue);
    /** 
    Creates default NSUser providing the associate type and person id.  System and Anonymous users can be created without an existing person and permits person id to be 0.
    */
    NSUser CreateDefaultUserFromUserTypeAndPersonId(Integer userType, Integer personId);
    /** 
    Creates an associate of type external user.
    */
    Integer CreateExternalUser(Integer personId, String userName, String password, Integer roleId, Bool isActive);
    /** 
    Creates UserGroup (Rank is assigned to the highest rank)
    */
    NSUserGroup CreateUserGroup();
    /** 
    First asks AccessGateway to decrypt the tokens, then saves the external tokens to the DB and returns a key that can be used to retrieve them
    */
    String DecryptAndSaveExternalTokens(NSTokenManagementInfo tokenManagementInfo);
    /** 
    Removes credential of a specific type for a user
    */
    Bool DeleteCredential(Integer userId, String credentialType);
    /** 
    Deletes an associate of type external user.
    */
    Void DeleteExternalUser(Integer associateId);
    /** 
    Deletes the specified role and move all users associated with the role to the replacingRoleId
    */
    Void DeleteRole(Integer roleIdToDelete, Integer replacingRoleId);
    /** 
    Deletes the NSServiceAuth
    */
    Void DeleteServiceAuth(Integer serviceAuth);
    /** 
    Deletes the NSUser
    */
    Void DeleteUser(Integer user);
    /** 
    Deletes a user, with lookup based on the user name.
    */
    Void DeleteUserFromName(String userName);
    /** 
    Deletes a user group and move its members to another user group
    */
    Void DeleteUserGroup(Integer userGroupToDelete, Integer userGroupToMoveTo);
    /** 
    Gets user groups holding users filtered by the searchString.
    */
    NSCredentialsGroup[] FindCredentialsGroups(String type, String searchString);
    /** 
    Find users matching the partial name.
    */
    NSCredentialsGroupUsers FindCredentialUsers(String type, String searchString);
    /** 
    Finds all roles with a given functional right. The roles matched must contain the specified functional right.
    */
    NSMDOListItem[] FindRolesWithFunctionalRight(String functionalRightName);
    /** 
    Finds all roles with a given set of functional rights. The roles matched must contain one or more of the specified functional rights.
    */
    Integer[] FindRolesWithFunctionalRights(String[] functionalRightNames);
    /** 
    Finds all roles without a given set of functional rights. The roles matched must not contain any of the specified functional rights.
    */
    Integer[] FindRolesWithoutFunctionalRights(String[] functionalRightNames);
    /** 
    Generates a new password for an external user.
    */
    String GenerateNewPasswordForExternalUser(String associateName);
    /** 
    Returns accessgateway registration info
    */
    NSAccessGatewayInfo GetAccessGatewayInfo();
    /** 
    Gets an access token based on the current user's session.
    */
    String GetAccessToken(String appToken, Bool includeCsSession);
    /** 
    Gets a list of all functional rights for the given type of role.
    */
    NSSelectableMDOListItem[] GetAllFunctionalRights(Integer roleType);
    /** 
    Gets a list of all roles for the given type of role. 
    */
    NSSelectableMDOListItem[] GetAllRoles(Integer roleType);
    /** 
    Gets all user groups
    */
    NSUserGroup[] GetAllUserGroups(Bool includeDeleted);
    /** 
    Gets user groups holding users.
    */
    NSCredentialsGroup[] GetCredentialsGroups(Integer type);
    /** 
    Gets available credential types that can be used for authentication
    */
    NSCredentialType[] GetCredentialTypes();
    /** 
    Gets available credential types that can be used for the specified user type.
    */
    NSCredentialType[] GetCredentialTypesForUserType(Integer userType);
    /** 
    Gets credential users within a user group
    */
    NSCredentialsGroupUsers GetCredentialUsers(String groupName, String type);
    /** 
    Gets credential users within a user group
    */
    NSCredentialsGroupUsers GetCredentialUsersInGroup(String type, String groupName);
    /** 
    Reads one specific data right at the given position.
    */
    String GetDataRight(Integer roleId, String tableName, Integer relationToOwner);
    /** 
    Reads specific a set of data rights at the given row in the rights matrix.
    */
    Map GetDataRights(Integer roleId, String tableName);
    /** 
    Gets the default username for a person
    */
    String GetDefaultAssociateUserName(NSUser user);
    /** 
    Retrieves the tokens from the DB based on the given key
    */
    NSTokenManagementInfo GetExternalTokens(String key);
    /** 
    Gets all functional rights for the given role. Functional rights not set on the role are not included.
    */
    NSSelectableMDOListItem[] GetFunctionalRights(Integer roleId);
    /** 
    Gets an NSRole object.
    */
    NSRole GetRole(Integer roleId);
    /** 
    Gets an NSRoleEntity object.
    */
    NSRoleEntity GetRoleEntity(Integer roleEntityId);
    /** 
    Gets an NSServiceAuth object.
    */
    NSServiceAuth GetServiceAuth(Integer serviceAuthId);
    /** 
    Gets a set of credentials of a specified type for authenticated user.
    */
    NSUntrustedCredentials[] GetUntrustedCredentials(String type);
    /** 
    Gets a set of credentials of a specified type for a specified user. SecretValue is only populated for authenticated user, and system users.
    */
    NSUntrustedCredentials[] GetUntrustedCredentialsForAssociate(Integer associateId, String type);
    /** 
    Gets an NSUser object.
    */
    NSUser GetUser(Integer userId);
    /** 
    Gets user from ejUserId.
    */
    NSUser[] GetUserFromEjUserId(Integer ejUserId);
    /** 
    Gets a user, with lookup based on user name.
    */
    NSUser GetUserFromName(String userName);
    /** 
    Returns the user associated with the supplied person ID.
    */
    NSUser[] GetUserFromPersonId(Integer personId);
    /** 
    Gets an NSUserGroup object.
    */
    NSUserGroup GetUserGroup(Integer userGroupId);
    /** 
    Gets an array of UserGroup objects.
    */
    NSUserGroup[] GetUserGroupList(Integer[] userGroupIds);
    /** 
    Gets an NSUserInfo object.
    */
    NSUserInfo GetUserInfo(Integer userInfoId);
    /** 
    Gets an array of NSUserInfo objects.
    */
    NSUserInfo[] GetUserInfoList(Integer[] userInfoIds);
    String GetValidUserName(Integer associateId, Integer type, Integer personId, String userName);
    /** 
    Generates a valid username for an unsaved user.
    */
    String GetValidUserNameForNewUser(NSUser user);
    Bool IsNickNameUnique(Integer associateId, String nickName);
    Bool IsPasswordValid(Integer associateId, Integer type, Integer personId, String password);
    NSUserValidationResult IsPasswordValidWithReason(Integer associateId, Integer type, Integer personId, String password);
    Bool IsUserNameValid(Integer associateId, Integer type, Integer personId, String userName, String username);
    NSUserValidationResult IsUserNameValidWithReason(Integer associateId, Integer type, Integer personId, String userName, String username);
    /** 
    Retiring a user means to remove all licenses, setting person.retired=1 and associate.deleted=1. Un-retiring a user means setting  person.retired=0 and associate.deleted=0
    */
    Void MakeRetired(Integer associateId, Bool retired);
    /** 
    Registers with access gateway if not already done, otherwise will attempt to update.
    */
    NSAccessGatewayInfo RegisterWithAccessGateway(String redirectUri);
    /** 
    Removes all user licenses.
    */
    Void RemoveLicenses(Integer associateId);
    /** 
    Removes a contact from the ownercontactlink table
    */
    Void RemoveOwnerContact(Integer contactId);
    /** 
    Removes a credentials entry for authenticated user.
    */
    Void RemoveUntrustedCredentials(String type, String publicValue);
    /** 
    Removes a credentials entry for a specified user.
    */
    Void RemoveUntrustedCredentialsForAssociate(Integer associateId, String type, String publicValue);
    /** 
    Gets a user from the provided information. If the user or associated person does not exist, it will be created on demand.
    */
    NSResolvedUser ResolveUserFromInfo(Integer contactId, String personName, String[] phoneNumbers, String[] emails, Integer userType);
    /** 
    Saves (adds/replaces) current credential of the same type for the user.
    */
    Bool SaveCredential(Integer userId, NSCredential credential);
    /** 
    Saves the external tokens to the DB and returns a key that can be used to retrieve them
    */
    String SaveExternalTokens(NSTokenManagementInfo tokenManagementInfo);
    /** 
    Updates the existing NSRoleEntity or creates a new NSRoleEntity if the id parameter is 0
    */
    NSRoleEntity SaveRoleEntity(NSRoleEntity roleEntity);
    /** 
    Updates the existing NSServiceAuth or creates a new NSServiceAuth if the id parameter is 0
    */
    NSServiceAuth SaveServiceAuth(NSServiceAuth serviceAuth);
    /** 
    Saves credentials for authenticated user.
    */
    Void SaveUntrustedCredentials(String type, NSUntrustedCredentials credentials);
    /** 
    Saves credentials for a specified user.
    */
    Void SaveUntrustedCredentialsForAssociate(Integer associateId, String type, NSUntrustedCredentials credentials);
    /** 
    Updates the existing NSUser or creates a new NSUser if the id parameter is 0
    */
    NSUser SaveUser(NSUser user);
    /** 
    Saves a user, with lookup based on the user name.
    */
    NSUser SaveUserFromName(String userName, NSUser user);
    /** 
    Saves a user group. Sets UserGroup.Deleted to mark a user group as deleted and invisible in the user interface.
    */
    NSUserGroup SaveUserGroup(NSUserGroup userGroup);
    /** 
    Sets one specific data right at the given position.
    */
    Void SetDataRight(Integer roleId, String tableName, Integer relationToOwner, String dataRightValue);
    /** 
    Modifies an external user. Changes external users information according to the flags set in  externalUserInfoModification.
    */
    Void SetExternalUserInfo(Integer associateId, String userName, String password, Bool isActive, Integer roleId, Integer externalUserInfoModification);
    /** 
    Sets all functional rights for the given role. Functional rights not specified here will be removed from the role.
    */
    Void SetFunctionalRights(Integer roleId, Integer[] functionalRightIds);
    String SetGeneratedPassword(Integer associateId);
    String SetGeneratedPasswordFromName(String associateName);
    /** 
    Changes password for a user.
    */
    Bool SetPassword(Integer associateId, String password);
    /** 
    Changes password for a user.
    */
    Bool SetPasswordFromName(String associateName, String password);
    /** 
    Checks that entity is ready for saving, return error messages by field.
    */
    Map ValidateUser(NSUser user);
}`;