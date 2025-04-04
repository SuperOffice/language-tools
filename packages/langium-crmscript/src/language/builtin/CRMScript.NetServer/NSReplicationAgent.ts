export const NSReplicationAgent = `/** 
Replication/Travel administration.
*/
class NSReplicationAgent {
    /** 
    Sets default values into a new NSSatellite.
    */
    NSSatellite CreateDefaultSatellite();
    /** 
    Gets an NSArea object.
    */
    NSArea GetArea(Integer areaId);
    /** 
    Gets an array of NSArea objectsGets an array of NSArea objects.
    */
    NSArea[] GetAreaList(Integer[] areaIds);
    NSLicenseOwner[] GetCentralLicense();
    /** 
    Gets an NSSatellite object.
    */
    NSSatellite GetSatellite(Integer satelliteId);
    NSLicenseOwner[] SaveCentralLicense(NSLicenseOwner[] license);
    /** 
    Updates the existing NSSatellite or creates a new NSSatellite if the ID parameter is 0.
    */
    NSSatellite SaveSatellite(NSSatellite satellite);
    /** 
    Enables free-text search on this area
    */
    Void SetFreetextSearchEnabledOnArea(Integer areaId, Bool freetextEnabled);
}`;