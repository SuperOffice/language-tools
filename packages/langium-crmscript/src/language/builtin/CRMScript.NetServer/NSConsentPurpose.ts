export const NSConsentPurpose = `/** 
Carrier object for ConsentPurpose.
*/
class NSConsentPurpose {
    Integer GetActive();
    Integer GetConsentPurposeId();
    String GetConsentText();
    Bool GetDeleted();
    String GetFormText();
    String GetKey();
    String GetName();
    String GetPrivacyStatementDesc();
    String GetPrivacyStatementUrl();
    Integer GetRank();
    String GetTooltip();
    NSAssociate GetUpdatedBy();
    DateTime GetUpdatedDate();
    Void SetActive(Integer active);
    Void SetConsentPurposeId(Integer consentPurposeId);
    Void SetConsentText(String consentText);
    Void SetDeleted(Bool deleted);
    Void SetFormText(String formText);
    Void SetKey(String key);
    Void SetName(String name);
    Void SetPrivacyStatementDesc(String privacyStatementDesc);
    Void SetPrivacyStatementUrl(String privacyStatementUrl);
    Void SetRank(Integer rank);
    Void SetTooltip(String tooltip);
    Void SetUpdatedBy(NSAssociate updatedBy);
    Void SetUpdatedDate(DateTime updatedDate);
}`;