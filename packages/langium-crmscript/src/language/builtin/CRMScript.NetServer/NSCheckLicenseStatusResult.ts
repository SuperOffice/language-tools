export const NSCheckLicenseStatusResult = `/** 
Result of NSCheckLicenseStatus.
*/
class NSCheckLicenseStatusResult {
    Integer GetLicenseStatus();
    String GetMessage();
    String GetUrl();
    undefined SetLicenseStatus(Integer licenseStatus);
    Void SetMessage(String message);
    Void SetUrl(String url);
}`;