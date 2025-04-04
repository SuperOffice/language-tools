export const NSUser = `/** 
SuperOffice User, with login credentials and an associated person.
*/
class NSUser {
    Integer GetAssociateId();
    NSCredential[] GetCredentials();
    /** 
    Gets the user-defined + extra fields on a User as a map.
    */
    Map GetCustomFields();
    Bool GetDeleted();
    Integer GetEjUserId();
    /** 
    Gets the extra fields on User as a map.
    */
    Map GetExtraFields();
    Bool GetIsOnTravel();
    Bool GetIsPersonRetired();
    DateTime GetLastlogin();
    DateTime GetLastlogout();
    NSLicenseOwner[] GetLicenseOwners();
    String GetName();
    String GetNickName();
    NSUserGroup[] GetOtherGroups();
    NSPerson GetPerson();
    Integer GetRank();
    String GetRequestSignature();
    NSRole GetRole();
    NSMDOListItem[] GetTicketCategories();
    String GetTooltip();
    Integer GetType();
    NSUserGroup GetUserGroup();
    String GetUserName();
    Bool GetWaitingForApproval();
    Void SetAssociateId(Integer associateId);
    Void SetCredentials(NSCredential[] credentials);
    /** 
    Sets the user-defined and extra fields on a User with a map.
    */
    Void SetCustomFields(Map udefs);
    Void SetDeleted(Bool deleted);
    Void SetEjUserId(Integer ejUserId);
    /** 
    Sets the extra field values on User with a map.
    */
    Void SetExtraFields(Map extras);
    Void SetIsOnTravel(Bool isOnTravel);
    Void SetIsPersonRetired(Bool isPersonRetired);
    Void SetLastlogin(DateTime lastlogin);
    Void SetLastlogout(DateTime lastlogout);
    Void SetLicenseOwners(NSLicenseOwner[] licenseOwners);
    Void SetName(String name);
    Void SetNickName(String nickName);
    Void SetOtherGroups(NSUserGroup[] otherGroups);
    Void SetPerson(NSPerson person);
    Void SetRank(Integer rank);
    Void SetRequestSignature(String requestSignature);
    Void SetRole(NSRole NSRole);
    Void SetTicketCategories(NSMDOListItem[] ticketCategories);
    Void SetTooltip(String tooltip);
    Void SetType(Integer type);
    Void SetUserGroup(NSUserGroup userGroup);
    Void SetUserName(String userName);
    Void SetWaitingForApproval(Bool waitingForApproval);
}`;