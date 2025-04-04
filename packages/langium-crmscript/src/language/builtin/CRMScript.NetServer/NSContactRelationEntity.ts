export const NSContactRelationEntity = `/** 
Relationship between a (contact/person) and another (contact/person), as described by the RelationDefinition.
*/
class NSContactRelationEntity {
    String GetActiveText();
    String GetComment();
    NSAssociate GetCreatedBy();
    DateTime GetCreatedDate();
    Integer GetDestinationContactId();
    String GetDestinationContactName();
    Integer GetDestinationPersonId();
    String GetDestinationPersonName();
    String GetPassiveText();
    Integer GetRelationDefinitionId();
    Integer GetRelationId();
    Integer GetReversed();
    Integer GetSourceContactId();
    String GetSourceContactName();
    Integer GetSourcePersonId();
    String GetSourcePersonName();
    NSAssociate GetUpdatedBy();
    DateTime GetUpdatedDate();
    Void SetActiveText(String activeText);
    Void SetComment(String comment);
    Void SetCreatedBy(NSAssociate createdBy);
    Void SetCreatedDate(DateTime createdDate);
    Void SetDestinationContactId(Integer destinationContactId);
    Void SetDestinationContactName(String destinationContactName);
    Void SetDestinationPersonId(Integer destinationPersonId);
    Void SetDestinationPersonName(String destinationPersonName);
    Void SetPassiveText(String passiveText);
    Void SetRelationDefinitionId(Integer relationDefinitionId);
    Void SetRelationId(Integer relationId);
    Void SetReversed(Integer reversed);
    Void SetSourceContactId(Integer sourceContactId);
    Void SetSourceContactName(String sourceContactName);
    Void SetSourcePersonId(Integer sourcePersonId);
    Void SetSourcePersonName(String sourcePersonName);
    Void SetUpdatedBy(NSAssociate updatedBy);
    Void SetUpdatedDate(DateTime updatedDate);
}`;