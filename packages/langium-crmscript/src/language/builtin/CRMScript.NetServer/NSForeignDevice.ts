export const NSForeignDevice = `/** 
Saves a foreign device belonging to the ForeignDevice and application name specified.
*/
class NSForeignDevice {
    String GetAssociateFullName();
    String GetCreatedBy();
    DateTime GetCreatedDate();
    String GetDeviceIdentifier();
    Integer GetForeignAppId();
    Integer GetForeignDeviceId();
    String GetName();
    String GetUpdatedBy();
    DateTime GetUpdatedDate();
    Void SetAssociateFullName(String associateFullName);
    Void SetCreatedBy(String createdBy);
    Void SetCreatedDate(DateTime createdDate);
    Void SetDeviceIdentifier(String deviceIdentifier);
    Void SetForeignAppId(Integer foreignAppId);
    Void SetForeignDeviceId(Integer foreignDeviceId);
    Void SetName(String name);
    Void SetUpdatedBy(String updatedBy);
    Void SetUpdatedDate(DateTime updatedDate);
}`;