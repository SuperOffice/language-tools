export const NSWebhook = `/** 
nWebhook definitions. Webhooks broadcast events from NetServer to remote servers.
*/
class NSWebhook {
    String[] GetEvents();
    Map GetHeaders();
    String GetName();
    StringObjectDictionary GetProperties();
    DateTime GetRegistered();
    NSAssociate GetRegisteredAssociate();
    String GetSecret();
    Integer GetState();
    String GetTargetUrl();
    String GetType();
    DateTime GetUpdated();
    NSAssociate GetUpdatedAssociate();
    Integer GetWebhookId();
    Void SetEvents(String[] events);
    Void SetHeaders(Map headers);
    Void SetName(String name);
    Void SetProperties(StringObjectDictionary properties);
    Void SetRegistered(DateTime registered);
    Void SetRegisteredAssociate(NSAssociate registeredAssociate);
    Void SetSecret(String secret);
    Void SetState(Integer state);
    Void SetTargetUrl(String targetUrl);
    Void SetType(String type);
    Void SetUpdated(DateTime updated);
    Void SetUpdatedAssociate(NSAssociate updatedAssociate);
    Void SetWebhookId(Integer webhookId);
}`;