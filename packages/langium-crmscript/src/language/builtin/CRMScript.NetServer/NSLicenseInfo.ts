export const NSLicenseInfo = `/** 
Represents all licenses for this owner at this site.
*/
class NSLicenseInfo {
    DateTime GetAdminWarningDate();
    String GetCompanyName();
    Integer GetDeploymentType();
    DateTime GetExpiryDate();
    Integer GetExtraFlags();
    String GetExtraInfo();
    DateTime GetGraceDate();
    String GetLicenseUrl();
    String GetLicenseVersion();
    DateTime GetMaintenanceDate();
    NSModuleLicense[] GetModuleLicenses();
    DateTime GetNextCheckDate();
    String GetOwnerDescription();
    String GetOwnerName();
    String GetProductDescription();
    String GetProductType();
    NSSignedPublicKey GetPublicKey();
    String GetSerialNr();
    String GetSignature();
    Void SetAdminWarningDate(DateTime adminWarningDate);
    Void SetCompanyName(String companyName);
    Void SetDeploymentType(Integer deploymentType);
    Void SetExpiryDate(DateTime expiryDate);
    Void SetExtraFlags(Integer extraFlags);
    Void SetExtraInfo(String extraInfo);
    Void SetGraceDate(DateTime graceDate);
    Void SetLicenseUrl(String licenseUrl);
    Void SetLicenseVersion(String licenseVersion);
    Void SetMaintenanceDate(DateTime maintenanceDate);
    Void SetModuleLicenses(NSModuleLicense[] moduleLicenses);
    Void SetNextCheckDate(DateTime nextCheckDate);
    Void SetOwnerDescription(String ownerDescription);
    Void SetOwnerName(String ownerName);
    Void SetProductDescription(String productDescription);
    Void SetProductType(String productType);
    Void SetPublicKey(NSSignedPublicKey publicKey);
    Void SetSerialNr(String serialNr);
    Void SetSignature(String signature);
}`;