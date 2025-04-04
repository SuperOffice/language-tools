export const NSAccessGatewayInfo = `/** 
Access gateway related data and operations. Carrier object for AccessGatewayInfo.
*/
class NSAccessGatewayInfo {
    /** 
    Returns the registered client ID for AccessGateway OIDC.
    */
    String GetClientId();
    /** 
    Returns the registered redirect_uri for AccessGateway OIDC.
    */
    String GetRedirectUri();
    /** 
    Sets the client ID for AccessGateway OIDC.
    */
    Void SetClientId(String clientId);
    /** 
    Sets the redirect_uri for AccessGateway OIDC.
    */
    Void SetRedirectUri(String redirectUri);
}`;