export const NSBlobEntity = `/** 
Carrier object for BlobEntity.
*/
class NSBlobEntity {
    Integer GetBlobId();
    Integer GetBlobSize();
    String GetConceptualType();
    NSAssociate GetCreatedBy();
    DateTime GetCreatedDate();
    String GetDescription();
    String GetExtraInfo();
    Bool GetIsEncrypted();
    Bool GetIsZipped();
    String GetMimeType();
    Integer GetOriginalSize();
    NSAssociate GetUpdatedBy();
    DateTime GetUpdatedDate();
    Void SetBlobId(Integer blobId);
    Void SetBlobSize(Integer blobSize);
    Void SetConceptualType(String conceptualType);
    Void SetCreatedBy(NSAssociate createdBy);
    Void SetCreatedDate(DateTime createdDate);
    Void SetDescription(String description);
    Void SetExtraInfo(String extraInfo);
    Void SetIsEncrypted(Bool isEncrypted);
    Void SetIsZipped(Bool isZipped);
    Void SetMimeType(String mimeType);
    Void SetOriginalSize(Integer originalSize);
    Void SetUpdatedBy(NSAssociate updatedBy);
    Void SetUpdatedDate(DateTime updatedDate);
}`;