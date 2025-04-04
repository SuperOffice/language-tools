export const NSCredentialsGroup = `/** 
When the CredentialType's control is of type link, the user is selected from a source like active directory.  This will then be the organisational unit (e.g. user security group) in active directory. Only one group is listed if the system does not support groups.
*/
class NSCredentialsGroup {
    String GetDisplayName();
    String GetName();
    Void SetDisplayName(String displayName);
    /** 
    n*/
    Void SetName(String name);
}`;