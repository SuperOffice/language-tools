export const NSConsentSource = `/** 
Carrier object for ConsentSource.
*/
class NSConsentSource {
    Integer GetConsentSourceId();
    Bool GetDeleted();
    String GetKey();
    Integer GetMailTemplateId();
    String GetName();
    Integer GetRank();
    String GetTooltip();
    Void SetConsentSourceId(Integer consentSourceId);
    Void SetDeleted(Bool deleted);
    Void SetKey(String key);
    Void SetMailTemplateId(Integer mailTemplateId);
    Void SetName(String name);
    Void SetRank(Integer rank);
    Void SetTooltip(String tooltip);
}`;