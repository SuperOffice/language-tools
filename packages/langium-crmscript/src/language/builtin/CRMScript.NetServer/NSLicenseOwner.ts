export const NSLicenseOwner = `/** 
Carrier object for LicenseOwner.
*/
class NSLicenseOwner {
    String GetDescription();
    String GetName();
    NSModuleLicenseLink[] GetRestrictedModuleLicenses();
    NSModuleLicenseLink[] GetUnrestrictedModuleLicenses();
    Void SetDescription(String description);
    Void SetName(String name);
    Void SetRestrictedModuleLicenses(NSModuleLicenseLink[] restrictedModuleLicenses);
    Void SetUnRestrictedModuleLicenses(NSModuleLicenseLink[] unrestrictedModuleLicenses);
}`;