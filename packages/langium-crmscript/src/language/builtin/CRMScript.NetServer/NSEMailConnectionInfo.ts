export const NSEMailConnectionInfo = `/** 
All information needed to connect to a mail server.
*/
class NSEMailConnectionInfo {
    String GetFolder();
    String GetPassword();
    String GetServerName();
    String GetUserName();
    Bool GetUseSSL();
    Void SetFolder(String folder);
    Void SetPassword(String password);
    Void SetServerName(String serverName);
    Void SetUserName(String userName);
    Void SetUseSSL(Bool useSSL);
}`;