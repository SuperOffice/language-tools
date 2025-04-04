export const NSExtendedModuleLicense = `class NSExtendedModuleLicense {
    NSModuleLicense GetCurrent();
    NSModuleLicense GetNew();
    Integer GetNumberOfLicensesAdded();
    Integer GetNumberOfLicensesFree();
    Integer GetNumberOfLicensesInUse();
    Integer GetNumberOfLicensesNewFree();
    Integer GetNumberOfLicensesNewTotal();
    Integer GetNumberOfLicensesTotal();
    Void SetCurrent(NSModuleLicense current);
    Void SetNew(NSModuleLicense new);
    Void SetNumberOfLicensesAdded(Integer numberOfLicensesAdded);
    Void SetNumberOfLicensesFree(Integer numberOfLicensesFree);
    Void SetNumberOfLicensesInUse(Integer numberOfLicensesInUse);
    Void SetNumberOfLicensesNewFree(Integer numberOfLicensesNewFree);
    Void SetNumberOfLicensesNewTotal(Integer numberOfLicensesNewTotal);
    Void SetNumberOfLicensesTotal(Integer numberOfLicensesTotal);
}`;