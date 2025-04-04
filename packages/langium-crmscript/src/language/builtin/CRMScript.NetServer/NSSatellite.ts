export const NSSatellite = `class NSSatellite {
    NSArea GetArea();
    NSContact GetContact();
    DateTime GetCreated();
    NSAssociate GetCreatedBy();
    NSLicenseOwner[] GetLicenseOwners();
    Integer GetSatelliteId();
    DateTime GetUpdated();
    NSAssociate GetUpdatedBy();
    Void SetArea(NSArea area);
    Void SetContact(NSContact contact);
    Void SetCreated(DateTime created);
    Void SetCreatedBy(NSAssociate createdBy);
    Void SetLicenseOwners(NSLicenseOwner[] licenseOwners);
    Void SetSatelliteId(Integer satelliteId);
    Void SetUpdated(DateTime updated);
    Void SetUpdatedBy(NSAssociate updatedBy);
}`;