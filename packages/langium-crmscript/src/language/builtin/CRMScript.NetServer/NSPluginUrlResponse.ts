export const NSPluginUrlResponse = `/** 
To be able to respond with more than just a true/false, but also an explanation. Such an explanation can be displayed on for instance a disabled “Place Order” button. In addition, an URL can be returned, which the GUI should navigate to/display if it is non-blank. The URL can be an SoProtocol or HTTP or HTTPS.
*/
class NSPluginUrlResponse {
    NSChangedData GetChanges();
    String GetErrorCode();
    Bool GetIsOk();
    String GetTechExplanation();
    String GetUrl();
    String GetUserExplanation();
    Void SetChanges(NSChangedData changes);
    Void SetErrorCode(String errorCode);
    Void SetIsOk(Bool isOk);
    Void SetTechExplanation(String techExplanation);
    Void SetUrl(String url);
    Void SetUserExplanation(String userExplanation);
}`;