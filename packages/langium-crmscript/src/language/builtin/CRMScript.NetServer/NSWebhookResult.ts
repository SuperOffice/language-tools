export const NSWebhookResult = `/** 
Result of calling a webhook.
*/
class NSWebhookResult {
    String GetMessage();
    Bool GetSuccess();
    Void SetMessage(String message);
    Void SetSuccess(Bool success);
}`;