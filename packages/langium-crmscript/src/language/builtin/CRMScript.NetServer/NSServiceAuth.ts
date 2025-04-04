export const NSServiceAuth = `/** 
Properties for service authentication.
*/
class NSServiceAuth {
    String GetAuthType();
    String GetPassword();
    Integer GetPort();
    String GetServer();
    Integer GetServiceAuthId();
    String GetUsername();
    Void SetAuthType(String authType);
    Void SetPassword(String password);
    Void SetPort(Integer port);
    Void SetServer(String server);
    Void SetServiceAuthId(Integer serviceAuthId);
    Void SetUsername(String username);
}`;