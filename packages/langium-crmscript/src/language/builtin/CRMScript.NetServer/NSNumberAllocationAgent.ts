export const NSNumberAllocationAgent = `/** 
This agent can be used to manage number allocation.
*/
class NSNumberAllocationAgent {
    /** 
    Sets default values into a new NSRefCountEntity.
    */
    NSRefCountEntity CreateDefaultRefCountEntity();
    /** 
    Deletes the NSRefCountEntity
    */
    Void DeleteRefCountEntity(Integer refCountEntity);
    /** 
    Returns true or false if Automatically create new counters for new document templates
    */
    Bool GetNumberEachTemplate();
    /** 
    Gets an NSRefCountEntity object.
    */
    NSRefCountEntity GetRefCountEntity(Integer refCountEntityId);
    /** 
    Saves default numbering values in preferences
    */
    Void SaveDefaultNumbering(NSRefCountEntity refCountEntity);
    /** 
    Updates the existing NSRefCountEntity or creates a new NSRefCountEntity if the id parameter is 0
    */
    NSRefCountEntity SaveRefCountEntity(NSRefCountEntity refCountEntity);
    /** 
    Saves true or false if Automatically create new counters for new document templates
    */
    Void SetNumberEachTemplate(Bool setValue);
}`;