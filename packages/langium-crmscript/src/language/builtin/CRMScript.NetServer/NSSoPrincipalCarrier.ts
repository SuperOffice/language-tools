export const NSSoPrincipalCarrier = `class NSSoPrincipalCarrier {
    String GetAssociate();
    Integer GetAssociateId();
    Integer GetBusinessId();
    Integer GetCategoryId();
    Integer GetContactId();
    Integer GetContactOwner();
    Integer GetCountryId();
    String GetDatabaseContextIdentifier();
    Integer GetEjAccessLevel();
    Integer GetEjUserId();
    Integer GetEjUserStatus();
    String GetEMailAddress();
    String GetFullName();
    String[] GetFunctionRights();
    Integer GetGroupId();
    Integer GetHomeCountryId();
    Bool GetIsPerson();
    NSGrantedModuleLicense[] GetLicenses();
    Integer GetPersonId();
    NSProvidedCredential[] GetProvidedCredentials();
    String GetRoleDescription();
    Integer GetRoleId();
    String GetRoleName();
    Integer GetRoleType();
    Integer[] GetSecondaryGroups();
    Integer GetUserType();
    Void SetAssociate(String associate);
    Void SetAssociateId(Integer id);
    Void SetBusinessId(Integer id);
    Void SetCategoryId(Integer id);
    Void SetContactId(Integer id);
    Void SetContactOwner(Integer owner);
    Void SetCountryId(Integer id);
    Void SetDatabaseContextIdentifier(String id);
    Void SetEjAccessLevel(Integer level);
    Void SetEjUserId(Integer id);
    Void SetEjUserStatus(Integer status);
    Void SetEMailAddress(String email);
    Void SetFullName(String name);
    Void SetFunctionRights(String[] rights);
    Void SetGroupId(Integer id);
    Void SetHomeCountryId(Integer id);
    Void SetIsPerson(Bool isPerson);
    Void SetLicenses(NSGrantedModuleLicense[] licenses);
    Void SetPersonId(Integer id);
    Void SetProvidedCredentials(NSProvidedCredential[] credentials);
    Void SetRoleDescription(String description);
    Void SetRoleId(Integer id);
    Void SetRoleName(String name);
    Void SetRoleType(Integer type);
    Void SetSecondaryGroups(Integer[] groups);
    Void SetUserType(Integer type);
}`;