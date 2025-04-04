export const NSForeignAppEntity = `/** 
Carrier object for ForeignAppEntity.n*/
class NSForeignAppEntity {
    NSAssociate GetCreatedBy();
    DateTime GetCreatedDate();
    NSForeignDevice[] GetDevices();
    Integer GetForeignAppId();
    String GetName();
    NSAssociate GetUpdatedBy();
    DateTime GetUpdatedDate();
    Void SetCreatedBy(NSAssociate createdBy);
    Void SetCreatedDate(DateTime createdDate);
    Void SetDevices(NSForeignDevice[] devices);
    Void SetForeignAppId(Integer foreignAppId);
    Void SetName(String name);
    Void SetUpdatedBy(NSAssociate updatedBy);
    Void SetUpdatedDate(DateTime updatedDate);
}`;