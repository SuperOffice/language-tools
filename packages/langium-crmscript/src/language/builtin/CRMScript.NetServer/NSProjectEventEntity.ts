export const NSProjectEventEntity = `/** 
The ProjectEvent Service. The service implements all services working with the ProjectEvent object
*/
class NSProjectEventEntity {
    NSAssociate GetCreatedBy();
    DateTime GetCreatedDate();
    Bool GetEnabled();
    DateTime GetEventDate();
    Integer GetId();
    Bool GetIsPublished();
    Bool GetIsVisibleForCategories();
    Bool GetIsVisibleForMembers();
    Bool GetIsVisibleForPersonInterests();
    Integer GetProjectEventId();
    Integer GetProjectId();
    DateTime GetPublishFrom();
    DateTime GetPublishTo();
    Integer GetPublishType();
    Bool GetSignOff();
    String GetSignOffConfirmationText();
    Bool GetSignOffTaskEnable();
    Integer GetSignOffTaskId();
    String GetSignOffText();
    Bool GetSignOffTriggersAssign();
    Bool GetSignOn();
    String GetSignOnConfirmationText();
    Bool GetSignOnTaskEnable();
    Integer GetSignOnTaskId();
    String GetSignOnText();
    Bool GetSignOnTriggersAssign();
    NSAssociate GetUpdatedBy();
    DateTime GetUpdatedDate();
    NSMDOListItem[] GetVisibleForCategories();
    NSMDOListItem[] GetVisibleForPersonInterests();
    Void SetCreatedBy(NSAssociate createdBy);
    Void SetCreatedDate(DateTime createdDate);
    Void SetEnabled(Bool enabled);
    Void SetEventDate(DateTime eventDate);
    Void SetId(Integer id);
    Void SetIsPublished(Bool isPublished);
    Void SetIsVisibleForCategories(Bool isVisibleForCategories);
    Void SetIsVisibleForMembers(Bool isVisibleForMembers);
    Void SetIsVisibleForPersonInterests(Bool isVisibleForPersonInterests);
    Void SetProjectEventId(Integer projectEventId);
    Void SetProjectId(Integer projectId);
    Void SetPublishFrom(DateTime publishFrom);
    Void SetPublishTo(DateTime publishTo);
    Void SetPublishType(Integer publishType);
    Void SetSignOff(Bool signOff);
    Void SetSignOffConfirmationText(String signOffConfirmationText);
    Void SetSignOffTaskEnable(Bool signOffTaskEnable);
    Void SetSignOffTaskId(Integer signOffTaskId);
    Void SetSignOffText(String signOffText);
    Void SetSignOffTriggersAssign(Bool signOffTriggersAssign);
    Void SetSignOn(Bool signOn);
    Void SetSignOnConfirmationText(String signOnConfirmationText);
    Void SetSignOnTaskEnable(Bool signOnTaskEnable);
    Void SetSignOnTaskId(Integer signOnTaskId);
    Void SetSignOnText(String signOnText);
    Void SetSignOnTriggersAssign(Bool signOnTriggersAssign);
    Void SetUpdatedBy(NSAssociate null);
    Void SetUpdatedDate(DateTime null);
    Void SetVisibleForCategories(NSMDOListItem[] visibleForCategories);
    Void SetVisibleForPersonInterests(NSMDOListItem[] visibleForPersonInterests);
}`;