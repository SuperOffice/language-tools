export const NSProjectEntity = `/** 
The Project Service. The service implements all services working with the Project object.
*/
class NSProjectEntity {
    Integer GetActiveErpLinks();
    Integer GetActiveLinks();
    Integer GetActiveStatusMonitorId();
    NSAssociate GetAssociate();
    Bool GetCompleted();
    NSAssociate GetCreatedBy();
    DateTime GetCreatedDate();
    /** 
    Gets the user-defined + extra fields on a ProjectEntity as a map.
    */
    Map GetCustomFields();
    String GetDescription();
    DateTime GetEndDate();
    /** 
    Gets the extra fields on ProjectEntity as a map.
    */
    Map GetExtraFields();
    Bool GetHasImage();
    String GetImageDescription();
    Bool GetIsPublished();
    NSLink[] GetLinks();
    String GetName();
    DateTime GetNextMilestoneDate();
    Integer GetNmdAppointmentId();
    String GetPostit();
    Integer GetProjectId();
    NSProjectMember[] GetProjectMembers();
    String GetProjectNumber();
    NSProjectStatus GetProjectStatus();
    NSProjectType GetProjectType();
    DateTime GetPublishEventDate();
    DateTime GetPublishFrom();
    DateTime GetPublishTo();
    NSAssociate GetUpdatedBy();
    DateTime GetUpdatedDate();
    NSEntityElement[] GetUrls();
    /** 
    Gets the user-defined fields on the ProjectEntity as a map.
    */
    Map GetUserDefinedFields();
    Void SetActiveErpLinks(Integer activeErpLinks);
    Void SetActiveLinks(Integer activeLinks);
    Void SetActiveStatusMonitorId(Integer activeStatusMonitorId);
    Void SetAssociate(NSAssociate associate);
    Void SetCompleted(Bool completed);
    Void SetCreatedBy(NSAssociate createdBy);
    Void SetCreatedDate(DateTime createdDate);
    /** 
    Sets the user-defined and extra fields on a ProjectEntity with a map.
    */
    Void SetCustomFields(Map udefs);
    Void SetDescription(String description);
    Void SetEndDate(DateTime endDate);
    /** 
    Sets the extra field values on ProjectEntity with a map.
    */
    Void SetExtraFields(Map extras);
    Void SetHasImage(Bool hasImage);
    Void SetImageDescription(String imageDescription);
    /** 
    Sets the visibility of a ProjectEntity
    */
    Void SetIsPublished(Bool isPublished);
    Void SetLinks(NSLink[] links);
    Void SetName(String name);
    Void SetNextMilestoneDate(DateTime nextMilestoneDate);
    Void SetNmdAppointmentId(Integer nmdAppointmentId);
    Void SetPostit(String postIt);
    Void SetProjectId(Integer projectId);
    Void SetProjectMembers(NSProjectMember[] projectMembers);
    Void SetProjectNumber(String projectNumber);
    Void SetProjectStatus(NSProjectStatus projectStatus);
    Void SetProjectType(NSProjectType projectType);
    Void SetPublishEventDate(DateTime publishDate);
    /** 
    Sets the publish from date on a ProjectEntity.
    */
    Void SetPublishFrom(DateTime publishFrom);
    /** 
    Sets the publish to date on ProjectEntity.
    */
    Void SetPublishTo(DateTime publishTo);
    Void SetUpdatedBy(NSAssociate updatedBy);
    Void SetUpdatedDate(DateTime updatedDate);
    Void SetUrls(NSEntityElement[] urls);
    /** 
    Sets the user-defined fields on the ProjectEntity as a map.
    */
    Void SetUserDefinedFields(Map udefs);
}`;