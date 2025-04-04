export const NSProjectAgent = `/** 
Collection of all services that work with Project data.
*/
class NSProjectAgent {
    /** 
    Adds multiple project members to a project
    */
    Void AddProjectMembers(Integer projectEntityId, NSProjectMember[] projectMembers);
    /** 
    Sets default values into a new NSProjectEntity.
    */
    NSProjectEntity CreateDefaultProjectEntity();
    /** 
    Sets default values into a new NSProjectEventEntity.
    */
    NSProjectEventEntity CreateDefaultProjectEventEntity();
    /** 
    Sets default values into a new NSProjectMember.
    */
    NSProjectMember CreateDefaultProjectMember();
    /** 
    Creates a new project based on external duplicate
    */
    Integer CreateNewEntry();
    /** 
    Deletes the NSProjectEntity
    */
    Void DeleteProjectEntity(Integer projectEntity);
    /** 
    Deletes the NSProjectEventEntity
    */
    Void DeleteProjectEventEntity(Integer projectEventEntity);
    /** 
    Deletes a project event based on a project ID. Does not delete the project, but does delete the published and ExternalEvent and AudienceVisibility records.
    */
    Void DeleteProjectEventEntityFromProjectId(Integer projectId);
    /** 
    Deletes the NSProjectMember
    */
    Void DeleteProjectMember(Integer projectMember);
    /** 
    Deletes project-member rows.
    */
    Void DeleteProjectMemberByIds(Integer[] projectMemberIds);
    /** 
    Deletes the given project members from a project
    */
    Void DeleteProjectMembers(Integer projectEntityId, Integer[] memberIds);
    /** 
    Retrieve all available duplicate rules for project
    */
    NSDuplicateRule[] GetDuplicateRules();
    /** 
    Gets duplicates(exact or similar in the database) based on the name
    */
    NSDuplicateEntry[] GetDuplicates(String name);
    /** 
    Returns projects where an user is project member.
    */
    NSProject[] GetMyMemberProjects();
    /** 
    Gets all project events that belongs to the currently logged-on user.
    */
    NSProjectEvent[] GetMyProjectEvents();
    /** 
    Returns projects belonging to an associate. If memberProjects is false only the projects where the associate is project responsible is returned, otherwise both the projects where the associate is project responsible and project member is returned.
    */
    NSProject[] GetMyProjects(Bool includeMemberProjects);
    /** 
    Gets published projects from the logged in user.
    */
    NSProject[] GetMyPublishedProjects();
    NSAppointment GetNextMilestone(Integer projectId);
    Integer GetNextProjectStatus(Integer projectId);
    /** 
    Gets an NSProject object.
    */
    NSProject GetProject(Integer projectId);
    /** 
    Gets an NSProjectEntity object.
    */
    NSProjectEntity GetProjectEntity(Integer projectEntityId);
    /** 
    Gets an NSProjectEvent object.
    */
    NSProjectEvent GetProjectEvent(Integer projectEventId);
    /** 
    Gets an NSProjectEventEntity object.
    */
    NSProjectEventEntity GetProjectEventEntity(Integer projectEventEntityId);
    /** 
    Gets an NSProjectEventEntity based on a projectId.
    */
    NSProjectEventEntity GetProjectEventEntityFromProjectId(Integer projectId);
    /** 
    Gets an array of NSProjectEvent objects.
    */
    NSProjectEvent[] GetProjectEventList(Integer[] projectEventIds);
    /** 
    Gets an NSProjectEvent object from a project and a person.
    */
    NSProjectEvent GetProjectEventOnPerson(Integer projectId, Integer personId);
    /** 
    Gets all project events that belongs to the person specified.
    */
    NSProjectEvent[] GetProjectEventsOnPerson(Integer personId);
    /** 
    Returns the project image that is displayed in the CRM application.
    */
    NSImage GetProjectImage(Integer projectId);
    /** 
    Gets an array of Project objects.
    */
    NSProject[] GetProjectList(Integer[] projectIds);
    /** 
    Gets an NSProjectMember object.
    */
    NSProjectMember GetProjectMember(Integer projectMemberId);
    /** 
    Returns an array of project members
    */
    NSProjectMember[] GetProjectMembers(Integer projectId);
    /** 
    Returns an array of project members.
    */
    NSProjectMember[] GetProjectMembersById(Integer[] projectMemberIds);
    /** 
    Returns all projects where the given contact has project members.
    */
    NSProject[] GetProjectsFromContact(Integer contactId);
    /** 
    Returns all projects where the person is project member.
    */
    NSProject[] GetProjectsFromPerson(Integer personId);
    /** 
    Gets published project by project ID.
    */
    NSProject GetPublishedProject(Integer projectId);
    /** 
    Gets published projects by project IDs.
    */
    NSProject[] GetPublishedProjects(Integer[] projectIds);
    /** 
    Gets published projects where person is a member
    */
    NSProject[] GetPublishedProjectsOnPersonId(Integer personId);
    Bool HasGuide(Integer projectId);
    Bool HasGuideActivities(Integer projectId);
    /** 
    Checks if the number is unique or required.
    */
    Bool IsNumberValid(Integer contactId, String number);
    /** 
    Merges two projects into one, removing the source project in the process
    */
    Void Merge(Integer sourceProjectId, Integer destinationProjectId, Bool replaceEmptyFieldsOnDestination);
    Bool OfferAutoNextStatusOnApppointmentCompleted(Integer appointmentId);
    /** 
    Updates the existing NSProjectEntity or creates a new NSProjectEntity if the  ID parameter is 0.
    */
    NSProjectEntity SaveProjectEntity(NSProjectEntity projectEntity);
    /** 
    Updates the existing NSProjectEventEntity or creates a new NSProjectEventEntity if the ID parameter is 0.<p></p>
    Returns.
    */
    NSProjectEventEntity SaveProjectEventEntity(NSProjectEventEntity entity);
    /** 
    Updates the existing NSProjectMember or creates a new NSProjectMember if the id parameter is 0
    */
    NSProjectMember SaveProjectMember(NSProjectMember projectMember);
    /** 
    Saves role and comment on an array of project members represented by IDs.
    */
    Void SaveProjectMembersFunctionAndComment(Integer[] projectMemberIds, Integer roleId, String comment);
    /** 
    Sets which duplicate rules should be active or not
    */
    Void SetDuplicateRulesStatus(NSDuplicateRule[] rules);
    /** 
    Stores the project image that is displayed in the CRM application.
    */
    Void SetProjectImage(Integer projectId, NSImage image);
    /** 
    Updates an NSProjectMember row.
    */
    NSProjectMember UpdateProjectMember(NSProjectMember projectMember);
    /** 
    Checks that entity is ready for saving, return error messages by field.
    */
    Map ValidateProjectEntity(NSProjectEntity projectEntity);
}`;