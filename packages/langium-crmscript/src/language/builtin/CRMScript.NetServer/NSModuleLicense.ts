export const NSModuleLicense = `/** 
Represents a single module license info.
*/
class NSModuleLicense {
    Integer GetAllowedUserType();
    Integer GetExtraFlags();
    String GetExtraInfo();
    Bool GetIsHidden();
    Integer GetLicenseType();
    String GetModuleDescription();
    String GetModuleName();
    String GetModuleTooltip();
    String GetModuleVersion();
    Integer GetNumberOfLicenses();
    String GetOwnerName();
    String GetPrerequisiteModuleName();
    String GetSignature();
    Integer GetSortOrder();
    Bool GetUnrestricted();
    Void SetAllowedUserType(Integer allowedUserType);
    Void SetExtraFlags(Integer extraFlags);
    Void SetExtraInfo(String extraInfo);
    Void SetIsHidden(Bool isHidden);
    /** 
    Sets the licence type.
    */
    Void SetLicenseType(Integer licenseType);
    Void SetModuleDescription(String moduleDescription);
    Void SetModuleName(String moduleName);
    Void SetModuleTooltip(String moduleTooltip);
    Void SetModuleVersion(String moduleVersion);
    Void SetNumberOfLicenses(Integer numberOfLicenses);
    Void SetOwnerName(String ownerName);
    Void SetPrerequisiteModuleName(String prerequisiteModuleName);
    Void SetSignature(String signature);
    Void SetSortOrder(Integer sortOrder);
    Void SetUnrestricted(Bool unrestricted);
}`;