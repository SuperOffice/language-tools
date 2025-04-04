export const NSPluginResponse = `/** 
To be able to respond with more than just a true/false, but also an explanation. Such an explanation can be displayed on for instance a disabled Place Order button.
*/
class NSPluginResponse {
    NSChangedData GetChanges();
    String GetErrorCode();
    Bool GetIsOk();
    String GetTechExplanation();
    String GetUserExplanation();
    Void SetChanges(NSChangedData changes);
    Void SetErrorCode(String errorCode);
    Void SetIsOk(Bool isOk);
    Void SetTechExplanation(String techExplanation);
    Void SetUserExplanation(String userExplanation);
}`;