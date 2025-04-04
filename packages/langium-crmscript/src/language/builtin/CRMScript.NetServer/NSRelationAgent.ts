export const NSRelationAgent = `/** 
Contact/Person relations.
*/
class NSRelationAgent {
    /** 
    Sets default values into a new NSContactRelationEntity.
    */
    NSContactRelationEntity CreateDefaultContactRelationEntity();
    /** 
    Deletes the specified contact relation.
    */
    Void DeleteContactRelation(Integer contactRelationEntityId);
    /** 
    Gets an NSContactRelationEntity object.
    */
    NSContactRelationEntity GetContactRelationEntity(Integer contactRelationEntityId);
    /** 
    Creates a new or updates an existing contact relation.
    */
    NSContactRelationEntity SaveContactRelation(NSContactRelationEntity contactRelationEntity);
}`;