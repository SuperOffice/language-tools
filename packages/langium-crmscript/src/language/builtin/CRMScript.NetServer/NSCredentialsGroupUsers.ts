export const NSCredentialsGroupUsers = `/** 
The users within a user group.
*/
class NSCredentialsGroupUsers {
    String[] GetHeadings();
    NSCredentialUser[] GetUsers();
    Void SetHeadings(String[] headings);
    Void SetUsers(NSCredentialUser[] users);
}`;