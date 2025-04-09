export const NSReturnInfo = `/** 
Return value object for Document Plugin API calls.
*/
class NSReturnInfo {
    String GetAdditionalInfo();
    String GetExternalReference();
    Bool GetSuccess();
    Integer GetType();
    String GetValue();
    String GetVersionId();
    Void SetAdditionalInfo(String additionalInfo);
    Void SetExternalReference(String externalReference);
    Void SetSuccess(Bool success);
    Void SetType(Integer type);
    Void SetValue(String value);
    Void SetVersionId(String versionId);
}`;