export const NSBLOBAgent = `/** 
Collection of all services that work with binary objects (BLOBS). For example, images and documents.
*/
class NSBLOBAgent {
    /** 
    Changes the contact image link.
    */
    Void ChangeContactImage(Integer contactId, Integer blobId);
    Void ChangePersonImage(Integer personId, Integer blobId);
    /** 
    Changes the project image link.
    */
    Void ChangeProductImage(Integer productId, Integer blobId);
    /** 
    Changes the project image link.
    */
    Void ChangeProjectImage(Integer projectId, Integer blobId);
    /** 
    Removes the binary objects linked to the batch task, the links themselves and the batch task.
    */
    Void CleanupBatchTask(Integer batchTaskId);
    /** 
    Sets default values into a new NSBlobEntity.
    */
    NSBlobEntity CreateDefaultBlobEntity();
    /** 
    Deletes the NSBlobEntity
    */
    Void DeleteBlobEntity(Integer blobEntity);
    /** 
    Gets a CLOB (limited to a reasonable size by the mechanics of Web Services) according to a string key; ALSO limits to the current ApplicationToken if any
    */
    String GetAppData(String key);
    /** 
    Gets an NSBlobEntity object.
    */
    NSBlobEntity GetBlobEntity(Integer blobEntityId);
    /** 
    Gets the blob entity that represents the contact image binary object.
    */
    NSBlobEntity GetBlobEntityOnContact(Integer contactId);
    /** 
    Gets the blob entity that represents the country flag binary object.
    */
    NSBlobEntity GetBlobEntityOnCountry(Integer countryId);
    /** 
    Gets the blob entity that represents the person image binary object.
    */
    NSBlobEntity GetBlobEntityOnPerson(Integer personId);
    /** 
    Gets the blob entity that represents the product image binary object.
    */
    NSBlobEntity GetBlobEntityOnProduct(Integer productId);
    /** 
    Gets the blob entity that represents the project image binary object.
    */
    NSBlobEntity GetBlobEntityOnProject(Integer projectId);
    /** 
    Gets the binary object as a stream
    */
    NSStream GetBlobStream(Integer blobEntityId);
    /** 
    Returns the chat image that is displayed in chat with a specified maximum size.
    */
    NSImage GetChatImageWithSize(Integer chatTopicId, Integer width, Integer height);
    /** 
    Returns the contact image that is displayed in the CRM application.
    */
    NSImage GetContactImage(Integer contactId);
    /** 
    Returns the contact image that is displayed in the CRM application with a specified maximum size.
    */
    NSImage GetContactImageWithSize(Integer contactId, Integer width, Integer height);
    /** 
    Gets the output of a batchtask as a stream
    */
    NSStream GetOutputFromBatch(Integer batchTaskId);
    /** 
    Returns the person image that is displayed in the CRM application.
    */
    NSImage GetPersonImage(Integer personId);
    /** 
    Returns the person image that is displayed in the CRM application with a specified maximum size.
    */
    NSImage GetPersonImageWithSize(Integer personId, Integer width, Integer height);
    /** 
    Returns the product image (rank=1) that is displayed in the CRM application.
    */
    NSImage GetProductImage(Integer productId);
    /** 
    Returns the product thumbnail that is displayed in the CRM application.
    */
    NSImage GetProductThumbnail(Integer productId);
    /** 
    Returns the project image that is displayed in the CRM application.
    */
    NSImage GetProjectImage(Integer projectId);
    /** 
    Returns the project image that is displayed in the CRM application with a specified maximum size.
    */
    NSImage GetProjectImageWithSize(Integer projectId, Integer width, Integer height);
    /** 
    Returns the quoteline image (rank=1) that is displayed in the CRM application.
    */
    NSImage GetQuoteLineImage(Integer quoteLineId);
    /** 
    Updates the existing NSBlobEntity or creates a new NSBlobEntity if the ID parameter is 0.
    */
    NSBlobEntity SaveBlobEntity(NSBlobEntity blobEntity);
    /** 
    Stores an image in the database without linking it to a project or a person.
    */
    Integer SaveImageStream(Integer type, NSImage image, String description);
    /** 
    Saves a project image that is displayed in the CRM application's project image selection dialog to the database.
    */
    Void SaveProjectImage(String description, NSImage image);
    /** 
    Sets a CLOB (limited to a reasonable size by the mechanics of Web Services) according to a string key; ALSO limits to the current ApplicationToken if any.
    */
    Void SetAppData(String key, String data);
    /** 
    Stores a binary object from its stream
    */
    Void SetBlobStream(Integer blobEntityId, NSStream stream);
    /** 
    Stores the contact image that is displayed in the CRM application.
    */
    Void SetContactImage(Integer contactId, NSImage image);
    /** 
    Stores the person image that is displayed in the CRM application.
    */
    Void SetPersonImage(Integer personId, NSImage image);
    /** 
    Stores the product image that is displayed in the CRM application. The image is scaled down to max 1000x1000. This method operates only the main (rank=1) image; future extensions may support multiple images. A thumbnail of size 75x75 is also automatically set.
    */
    Void SetProductImage(Integer productId, NSImage image);
    /** 
    Stores the product thumbnail that is displayed in the CRM application. The image is scaled down to max 200x200 pixels.
    */
    Void SetProductThumbnail(Integer productId, NSImage image);
    /** 
    Stores the project image that is displayed in the CRM application.
    */
    Void SetProjectImage(Integer projectId, NSImage image);
}`;