export const NSWebhookAgent = `/** 
Webhook definitions* webhooks signal other systems about events inside NetServer.
*/
class NSWebhookAgent {
    /** 
    Sets default values into a new NSWebhook.
    */
    NSWebhook CreateDefaultWebhook();
    /** 
    Deletes the NSWebhook
    */
    Void DeleteWebhook(Integer webhook);
    /** 
    Returns all webhooks, according to filter criteria
    */
    NSWebhook[] GetAllWebhooks(String nameFilter, String eventFilter, Integer statusFilter);
    /** 
    Return the most recent error message received when calling this webhook.
    */
    String GetLastError(Integer webhookId);
    /** 
    Gets an NSWebhook object.
    */
    NSWebhook GetWebhook(Integer webhookId);
    /** 
    Updates the existing NSWebhook or creates a new NSWebhook if the id parameter is 0
    */
    NSWebhook SaveWebhook(NSWebhook webhook);
    /** 
    Signal webhooks that an event has occurred. All webhooks listening for the event will be notified.
    */
    Void SignalEvent(String eventName, Integer primaryKey, StringObjectDictionary data);
    /** 
    Pings a webhook with a 'test' event, returns SUCCESS(true) or FAILURE(false) + the response from the webhook target.
    */
    NSWebhookResult TestWebhook(NSWebhook webhook);
}`;