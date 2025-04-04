export const NSTemplateInfo = `/** 
Information about a document template, i.e., a document that generally contains unresolved merge tags and that is used as the source for creating new documents.
*/
class NSTemplateInfo {
    String GetDescription();
    String GetExternalReference();
    String GetName();
    Integer GetPluginId();
    Void SetDescription(String description);
    Void SetExternalReference(String externalReference);
    Void SetName(String name);
    Void SetPluginId(Integer pluginId);
}`;