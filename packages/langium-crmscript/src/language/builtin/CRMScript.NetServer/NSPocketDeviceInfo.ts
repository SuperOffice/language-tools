export const NSPocketDeviceInfo = `/** 
Describes a device running Pocket CRM.
*/
class NSPocketDeviceInfo {
    String GetDeviceIdentifier();
    String GetDeviceName();
    String GetLanguage();
    String GetOSVersion();
    Integer GetPlatform();
    String GetPNSHandle();
    String GetPocketVersion();
    Void SetDeviceIdentifier(String deviceIdentifier);
    Void SetDeviceName(String deviceName);
    Void SetLanguage(String language);
    Void SetOSVersion(String oSVersion);
    Void SetPlatform(Integer platform);
    Void SetPNSHandle(String pNSHandle);
    Void SetPocketVersion(String pocketVersion);
}`;