export const NSConsentPerson = `/** 
Carrier object for ConsentPerson.
*/
class NSConsentPerson {
    String GetComment();
    Integer GetConsentPersonId();
    NSConsentPurpose GetConsentPurpose();
    NSConsentSource GetConsentSource();
    NSLegalBase GetLegalBase();
    Integer GetPersonId();
    Void SetComment(String comment);
    Void SetConsentPersonId(Integer consentPersonId);
    Void SetConsentPurpose(NSConsentPurpose consentPurpose);
    Void SetConsentSource(NSConsentSource consentSource);
    Void SetLegalBase(NSLegalBase legalBase);
    Void SetPersonId(Integer personId);
}`;