export const NSExtendedLicenseInfo = `class NSExtendedLicenseInfo {
    DateTime GetAccumulatedNextCheckDate();
    Bool GetCanBeActivated();
    NSLicenseInfo GetCurrent();
    NSExtendedModuleLicense[] GetExtendedModuleLicenses();
    NSLicenseInfo GetNew();
    String GetReason();
    Void SetAccumulatedNextCheckDate(DateTime accumulatedNextCheckDate);
    Void SetCanBeActivated(Bool canBeActivated);
    Void SetCurrent(NSLicenseInfo current);
    Void SetExtendedModuleLicenses(NSExtendedModuleLicense[] extendedModuleLicenses);
    Void SetNew(NSLicenseInfo new);
    Void SetReason(String reason);
}`;