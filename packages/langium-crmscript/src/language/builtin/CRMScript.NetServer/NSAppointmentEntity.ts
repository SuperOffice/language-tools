export const NSAppointmentEntity = `/** 
Appointments appear in the diary, and have links to a Contact/Person and possibly a Project or Sale. They have start and end time+date.
*/
class NSAppointmentEntity {
    DateTime GetActiveDate();
    Integer GetActiveLinks();
    TimeSpan GetAlarmLeadTime();
    Bool GetAlldayEvent();
    Integer GetAppointmentId();
    NSAssociate GetAssignedBy();
    Integer GetAssignmentStatus();
    NSAssociate GetAssociate();
    String GetAgenda();
    Integer GetBookingType();
    Integer GetCautionWarning();
    String GetCentralserviceVideomeetId();
    Integer GetColorIndex();
    Integer GetCompleted();
    NSContact GetContact();
    NSAssociate GetCreatedBy();
    DateTime GetCreatedDate();
    /** 
    Gets the user-defined + extra fields on an NSAppointmentEntity as a map.
    */
    Map GetCustomFields();
    String GetDescription();
    DateTime GetEndDate();
    /** 
    Gets the extra fields on NSAppointmentEntity as a map.
    */
    Map GetExtraFields();
    Bool GetFreeBusy();
    Bool GetHasAlarm();
    Bool GetHasConflict();
    String GetInternalNotes();
    Integer GetInvitationStatus();
    NSPerson GetInvitedPerson();
    Bool GetIsAlldayEvent();
    Bool GetIsFree();
    Bool GetIsMileStone();
    Bool GetIsPublished();
    String GetJoinVideomeetUrl();
    TimeSpan GetLagTime();
    TimeSpan GetLeadTime();
    NSLink[] GetLinks();
    String GetLocation();
    NSAssociate GetMotherAssociate();
    Integer GetMotherId();
    NSParticipantInfo[] GetParticipants();
    NSPerson GetPerson();
    Integer GetPreferredTZLocation();
    /** 
    It's possible to give appointments different priorities. All the different priority types are saved in the priority table, and edited from the Admin Client. An appointment does not require a priority.
    */
    NSPriority GetPriority();
    Integer GetPrivate();
    NSProject GetProject();
    DateTime GetPublishEventDate();
    DateTime GetPublishFrom();
    DateTime GetPublishTo();
    NSRecurrenceInfo GetRecurrence();
    Integer GetRejectCounter();
    String GetRejectReason();
    NSSale GetSale();
    DateTime GetStartDate();
    Integer GetSuggestedAppointmentId();
    String GetTitle();
    NSTaskListItem GetTask();
    Integer GetType();
    NSAssociate GetUpdatedBy();
    DateTime GetUpdatedDate();
    /** 
    Gets the user-defined fields on the NSAppointmentEntity as a map.
    */
    Map GetUserDefinedFields();
    /** 
    Returns the usergroups and/or users the NSAppointmentEntity item is visible for.
    */
    NSVisibleFor[] GetVisibleFor();
    Void SetActiveDate(DateTime activeDate);
    Void SetActiveLinks(Integer activeLinks);
    Void SetAlarmLeadTime(TimeSpan alarmLeadTime);
    Void SetAlldayEvent(Bool isAllDayEvent);
    Void SetAppointmentId(Integer appointmentId);
    Void SetAssignedBy(NSAssociate assignedBy);
    Void SetAssignmentStatus(Integer assignmentStatus);
    Void SetAgenda(String agenda);
    Void SetAssociate(NSAssociate associate);
    Void SetBookingType(Integer bookingType);
    Void SetCautionWarning(Integer cautionWarning);
    Void SetCentralserviceVideomeetId(String centralserviceVideomeetId);
    Void SetColorIndex(Integer colorIndex);
    Void SetCompleted(Integer completed);
    Void SetContact(NSContact contact);
    Void SetCreatedBy(NSAssociate createdBy);
    Void SetCreatedDate(DateTime createdDate);
    /** 
    Sets the user-defined and extra fields on an NSAppointmentEntity with a map.
    */
    Void SetCustomFields(Map udefs);
    Void SetDescription(String description);
    Void SetEndDate(DateTime endTime);
    /** 
    Sets the extra field values on NSAppointmentEntity with a map.
    */
    Void SetExtraFields(Map extras);
    Void SetFreeBusy(Bool isFreeBusy);
    Void SetHasAlarm(Bool hasAlarm);
    Void SetHasConflict(Bool hasConflict);
    Void SetInternalNotes(String internalNotes);
    Void SetInvitationStatus(Integer invitationStatus);
    Void SetInvitedPerson(NSPerson invitedPerson);
    Void SetIsAlldayEvent(Bool isAlldayEvent);
    Void SetIsFree(Bool isFree);
    Void SetIsMileStone(Bool isMileStone);
    /** 
    Sets the isPublished property of the appointment.
    */
    Void SetIsPublished(Bool isPublished);
    Void SetJoinVideomeetUrl(String joinVideomeetUrl);
    Void SetLagTime(TimeSpan lagTime);
    Void SetLeadTime(TimeSpan leadTime);
    Void SetLinks(NSLink[] links);
    Void SetLocation(String location);
    Void SetMotherAssociate(NSAssociate motherAssociate);
    Void SetMotherId(Integer motherId);
    Void SetParticipants(NSParticipantInfo[] participants);
    Void SetPerson(NSPerson person);
    Void SetPreferredTZLocation(Integer preferredTZLocation);
    /** 
    It's possible to give appointments different priorities. All the different priority types are saved in the priority table, and edited from the Admin Client. An appointment does not require a priority.
    */
    Void SetPriority(NSPriority priority);
    /** 
    The confidentiality of appointments is shown as different types of private on the appointment.
    */
    Void SetPrivate(Integer private);
    Void SetProject(NSProject project);
    Void SetPublishEventDate(DateTime publishDate);
    /** 
    Sets the publish from date on an NSAppointmentEntity.
    */
    Void SetPublishFrom(DateTime publishFrom);
    /** 
    Sets the publish to date on NSAppointmentEntity.
    */
    Void SetPublishTo(DateTime publishTo);
    Void SetRecurrence(NSRecurrenceInfo recurrence);
    Void SetRejectCounter(Integer rejectCounter);
    Void SetRejectReason(String rejectReason);
    Void SetSale(NSSale sale);
    undefined SetStartDate(DateTime startDate);
    Void SetSuggestedAppointmentId(Integer suggestedAppointmentId);
    Void SetTitle(String agenda);
    Void SetTask(NSTaskListItem task);
    Void SetType(Integer type);
    Void SetUpdatedBy(NSAssociate updatedBy);
    Void SetUpdatedDate(DateTime updatedDate);
    /** 
    Sets the user-defined fields on the NSAppointmentEntity as a map.
    */
    Void SetUserDefinedFields(Map udefs);
    /** 
    Sets the usergroups and/or users the NSAppointmentEntity item is visible for.
    */
    Void SetVisibleFor(NSVisibleFor[] visibleFor);
}`;