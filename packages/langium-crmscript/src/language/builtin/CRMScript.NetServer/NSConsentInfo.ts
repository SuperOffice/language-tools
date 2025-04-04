export const NSConsentInfo = `/** 
Consent information for a give person. Consents are for a particular Purpose, and may be withdrawn (see LegalBase).
*/
class NSConsentInfo {
    String GetComment();
    Integer GetConsentPersonId();
    Integer GetConsentPurposeId();
    String GetConsentPurposeKey();
    String GetConsentPurposeName();
    Integer GetConsentSourceId();
    String GetConsentSourceKey();
    String GetConsentSourceName();
    Integer GetLegalBaseId();
    String GetLegalBaseKey();
    String GetLegalBaseName();
    DateTime GetRegistered();
    Integer GetRegisteredAssociateId();
    DateTime GetUpdated();
    Integer GetUpdatedAssociateId();
    Void SetComment(String comment);
    Void SetConsentPersonId(Integer consentPersonId);
    Void SetConsentPurposeId(Integer consentPurposeId);
    Void SetConsentPurposeKey(String consentPurposeKey);
    Void SetConsentPurposeName(String consentPurposeName);
    Void SetConsentSourceId(Integer consentSourceId);
    Void SetConsentSourceKey(String consentSourceKey);
    Void SetConsentSourceName(String consentSourceName);
    Void SetLegalBaseId(Integer legalBaseId);
    Void SetLegalBaseKey(String legalBaseKey);
    Void SetLegalBaseName(String legalBaseName);
    Void SetRegistered(DateTime registered);
    Void SetRegisteredAssociateId(Integer registeredAssociateId);
    Void SetUpdated(DateTime updated);
    Void SetUpdatedAssociateId(Integer updatedAssociateId);
}`;