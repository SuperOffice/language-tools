export const NSProviderInfo = `/** 
Information about a provider plugin.
*/
class NSProviderInfo {
    String GetName();
    String[] GetSupportedMessagingFormats();
    Bool GetSupportsConfig();
    Void SetName(String name);
    Void SetSupportedMessagingFormats(String[] supportedMessagingFormats);
    Void SetSupportsConfig(Bool supportsConfig);
}`;