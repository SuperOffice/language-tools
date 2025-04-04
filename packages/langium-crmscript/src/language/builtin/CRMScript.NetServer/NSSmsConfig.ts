export const NSSmsConfig = `/** 
SMS settings for Customer Service SMS providers.
*/
class NSSmsConfig {
    String GetDefaultSmsCountry();
    String GetNetServerSmsProvider();
    Map GetNsPluginConfig();
    String GetNsPluginSender();
    Void SetDefaultSmsCountry(String defaultSmsCountry);
    Void SetNetServerSmsProvider(String netServerSmsProvider);
    Void SetNsPluginConfig(Map nsPluginConfig);
    Void SetNsPluginSender(String nsPluginSender);
}`;