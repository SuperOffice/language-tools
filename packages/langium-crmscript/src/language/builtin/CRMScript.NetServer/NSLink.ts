export const NSLink = `/** 
Links two entities (contacts/projects/sales/URLs) together.
*/
class NSLink {
    String GetDescription();
    String GetEntityName();
    String GetExtraInfo();
    Integer GetId();
    Integer GetLinkId();
    Void SetDescription(String description);
    Void SetEntityName(String entityName);
    Void SetExtraInfo(String extraInfo);
    Void SetId(Integer id);
    Void SetLinkId(Integer linkId);
}`;