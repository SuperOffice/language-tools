export const NSLicenseAgent = `/** 
License query, download, activation.
*/
class NSLicenseAgent {
    /** 
    Saves a new license to the database.
    */
    NSLicenseResult ActivateLicenseInfo(NSExtendedLicenseInfo newLicense);
    /** 
    Loads and activates a new license from file/string if the new license is valid.
    */
    NSExtendedLicenseInfo AddLicenseFromFile(String fileContent);
    /** 
    Assigns third party licenses
    */
    NSModuleLicenseLink[] AssignThirdPartyLicenses(Integer associateId, String moduleOwner, String[] moduleLicenseNames);
    /** 
    Changes the new serial number for the installation. Requests a new license from SuperLicense, checks if change is authorized.
    */
    NSLicenseResult ChangeSerialNumber(String newCompanyName, String newSerialNumber);
    /** 
    Gets all licenses, with usage, from all module owners as they are stored in the database
    */
    NSExtendedLicenseInfo[] GetLicenseForAllOwnersFromDB();
    /** 
    Gets license, with usage, as it is stored in the database for one particular module owner.
    */
    NSExtendedLicenseInfo GetLicenseFromDB(String ownerName);
    /** 
    Loads a new license from file
    */
    NSExtendedLicenseInfo GetLicenseFromFile(String fileContent);
    NSExtendedLicenseInfo GetLicenseFromLicenseServer(String ownerName);
    /** 
    Gets license information from the license server for a particular module owner.
    */
    NSCheckLicenseStatusResult GetLicenseStatusFromLicenseServer(String ownerName);
    /** 
    Gets license information for one particular license module.
    */
    NSModuleLicense GetModuleLicenseFromDB(String ownerName, String moduleName);
    /** 
    Gets details about a license from the license server.
    */
    String GetModuleLicenseHistoryFromLicenseServer(NSExtendedLicenseInfo licenseInfo, NSExtendedModuleLicense moduleLicense);
    /** 
    Obtains information about satellite module licenses
    */
    NSLicenseOwner[] GetSatelliteLicenses(Integer satelliteId);
    /** 
    Gets the shop URL for the specified module owner.
    */
    String GetShopUrl(String ownerName);
    /** 
    Gets license assignments for an associate for licenses belonging to an other module owner than SuperOffice
    */
    NSModuleLicenseLink[] GetThirdPartyLicenseAssignments(Integer associateId, String moduleOwner);
    /** 
    Obtains information about associate module licenses
    */
    NSLicenseOwner[] GetUserLicenses(Integer associateId);
    /** 
    Gets all licenses in an NSMDOListItem structure.
    */
    NSSelectableMDOListItem[] GetUserLicensesMDOList();
    /** 
    Removes the license from a particular module owner from the database.
    */
    NSLicenseResult RemoveLicenseFromDB(String moduleOwner);
    /** 
    Unassigns (removes) third-party licenses
    */
    NSModuleLicenseLink[] UnassignThirdPartyLicenses(Integer associateId, String moduleOwner, String[] moduleLicenseNames);
    /** 
    Validates that a license is consistent.
    */
    NSLicenseResult ValidateLicenseInfo(NSExtendedLicenseInfo licenseInfo);
}`;