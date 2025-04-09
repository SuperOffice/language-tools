export const NSCategorizationStatusResponse = `/** 
Carrier to describe the current categorization training status for a tenant in HugoA. Carrier object for CategorizationStatusResponse.
*/
class NSCategorizationStatusResponse {
    String GetContextIdentifier();
    NSCategorizationModelDetails GetCurrentModel();
    NSCategorizationModelDetails GetPreviousModel();
    String GetStatus();
    Void SetContextIdentifier(String contextIdentifier);
    Void SetCurrentModel(NSCategorizationModelDetails currentModel);
    Void SetPreviousModel(NSCategorizationModelDetails previousModel);
    Void SetStatus(String status);
}`;