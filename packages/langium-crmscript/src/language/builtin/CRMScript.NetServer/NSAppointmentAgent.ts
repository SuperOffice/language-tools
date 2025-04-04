export const NSAppointmentAgent = `/** 
Collection of all services that works with Appointment data.
*/
class NSAppointmentAgent {
    /** 
    Accepts an appointment invitation.
    */
    Void Accept(Integer appointmentId, Integer updateMode);
    /** 
    Accepts that an invited participant has rejected your invitation or assignment.
    */
    NSAppointmentEntity AcceptRejected(Integer appointmentId, Integer updateMode);
    /** 
    Accepts an appointment invitation and sends an email confirmation to the meeting organizer.
    */
    Void AcceptWithEmailConfirmation(Integer appointmentId, Integer updateMode);
    /** 
    Accepts an appointment invitation and sends an email confirmation to the meeting organizer.
    */
    Void AcceptWithSmtpEmailConfirmation(Integer appointmentId, Integer updateMode, NSEMailConnectionInfo smtpEMailConnectionInfo);
    /** 
    Assigns an appointment to another person.*/
    NSAppointmentEntity AssignTo(Integer appointmentId, ParticipantInfo participant, Integer updateMode);
    /** 
    Calculates the set of dates that represents a recurrence pattern. Adds conflict information to each date.
    */
    NSRecurrenceInfo CalculateDays(NSAppointmentEntity appointmentEntity);
    Bool CanAssignToProjectMember(Integer projectId, Integer suggestedAppointmentId);
    /** 
    Deletes all appointments(within the appointmentIds array) with status BookingDeleted.
    */
    Integer CleanUpBookingDeleted(Integer[] appointmentIds);
    /** 
    Deletes all appointments with status BookingDeleted and for logged-in user.
    */
    Integer CleanUpRecurringBookingDeleted();
    /** 
    Creates an appointment from an emailItem invitation and accepting it.
    */
    Void CreateAndAccept(Integer emailItemId, Integer updateMode);
    /** 
    Creates an appointment from an emailItem invitation and accepting it with email confirmation to the meeting organizer.
    */
    Void CreateAndAcceptWithEmailConfirmation(Integer emailItemId, Integer updateMode);
    /** 
    Creates an invitation record and an appointment with a given UID to reserve it if the UID is unused, otherwise null.
    */
    NSAppointmentEntity CreateAppointmentForUID(NSAppointmentEntity appointmentEntity, String uID);
    /** 
    Sets default values into a new NSAppointmentEntity.
    */
    NSAppointmentEntity CreateDefaultAppointmentEntity();
    /** 
    Creates an NSAppointmentEntity populated with the default values for the specific type.
    */
    NSAppointmentEntity CreateDefaultAppointmentEntityByType(Integer type);
    /** 
    Creates an NSAppointmentEntity populated with the default values for the specific type and owner.
    */
    NSAppointmentEntity CreateDefaultAppointmentEntityByTypeAndAssociate(Integer type, Integer associateId);
    NSAppointmentEntity CreateDefaultAppointmentEntityFromProjectSuggestion(Integer suggestedAppointmentId, Integer projectId, Bool createNow, Integer ownerId);
    /** 
    Creates an appointment based on a suggested appointment.
    */
    NSAppointmentEntity CreateDefaultAppointmentEntityFromSaleSuggestion(Integer suggestedAppointmentId, Integer saleId, Bool createNow, Integer ownerId);
    /** 
    Creates an NSRecurrenceInfo object populated with the default values for the specific type.*/
    NSRecurrenceInfo CreateDefaultRecurrence();
    /** 
    Creates an NSRecurrenceInfo object populated with the default values for the specific type.
    */
    NSRecurrenceInfo CreateDefaultRecurrenceByDate(DateTime startDate);
    /** 
    A re-open appointment should be created as a reminder to re-open the sale at a certain date with information regarding the stalled sale.
    */
    NSAppointmentEntity CreateDefaultReOpenAppointment(Integer saleId);
    /** 
    Sets default values into a new NSSuggestedAppointmentEntity.
    */
    NSSuggestedAppointmentEntity CreateDefaultSuggestedAppointmentEntity();
    /** 
    Sets default values into a new NSTaskListItem.
    */
    NSTaskListItem CreateDefaultTaskListItem();
    /** 
    Declining an appointment invitation where no tentative appointments have been created.
    */
    Void DeclineInvitationFromEmailItem(Integer emailItemId, String rejectReason);
    /** 
    Deletes a booking
    */
    Void Delete(Integer appointmentId, Integer updateMode, Bool sendEmailToParticipants, NSEMailConnectionInfo smtpEMailConnectionInfo, NSEMailConnectionInfo imapEMailConnectionInfo);
    /** 
    Deletes the NSAppointmentEntity.
    */
    Void DeleteAppointmentEntity(Integer appointmentEntity);
    /** 
    Adds a sales lead (task) to a contact in SuperOffice. If the contact or person is known, the sales lead is added to the current contact. If not, a new contact is created, with the associate with ownerIdForNewContact as responsible (Our Contact). A relation is created between the contact and the person submitting the lead. Based on wether the person the request is made for is found or not, the following happens: If the person is found, the person, person's contact and sales representative is returned. If neither the person nor the contact is found a new person and contact is created (if sufficient data is supplied), and the person, person's contact and sales representative is returned. If the contact and not the person is found a new person is created on this contact, and the contact, salesrep, and person is returned (if there was enough data to return the person).
    */
    NSSalesActivity GenerateLead(Integer associateIdForNewContact, String leadDescription, String relation, Integer relationId, String leadContact, String leadPersonFirstname, String leadPersonLastname, String leadPersonEmail, String leadPhoneNumber, String creatorsContact, String creatorsFirstname, String creatorsLastname);
    /** 
    Gets activity information for one or more days according to the given date interval.
    */
    NSActivityInformationListItem[] GetActivityInformationListByDatesAndAssociate(DateTime startDate, DateTime endDate, Integer associateId);
    NSMultiAlarmData GetAlarms(Bool includeInvitations, Bool includeAllAppointments, Integer defaultAlarmLeadTimeInMinutes);
    /** 
    Gets an NSAppointment object.
    */
    NSAppointment GetAppointment(Integer appointmentId);
    /** 
    Gets an NSAppointmentEntity object.
    */
    NSAppointmentEntity GetAppointmentEntity(Integer appointmentEntityId);
    /** 
    Gets the appointment that corresponds to the given UID.
    */
    NSAppointmentEntity GetAppointmentFromUID(String uID);
    /** 
    Checks if any of the participants is marked to receive emails on this appointment.
    */
    Bool GetAppointmentHaveParticipantsWithEmail(Integer appointmentId);
    /** 
    Retrieves an array of NSAppointment objects.
    */
    NSAppointment[] GetAppointmentList(Integer[] appointmentIds);
    /** 
    Gets all records involved in a booking and/or recurring appointments.
    */
    NSAppointment[] GetAppointmentRecords(Integer motherId, Integer recurrenceRuleId);
    /** 
    Returns appointments of a specific appointment task heading.
    */
    NSAppointment[] GetAppointmentsByTaskHeading(Integer taskHeadingId);
    NSAppointment[] GetAssociateDiary(Integer associateId, DateTime startTime, DateTime endTime, Integer count);
    NSAppointment[] GetAssociatesDiary(Integer[] associateIds, DateTime startTime, DateTime endTime);
    /** 
    Checks if the current associate can create appointments in the diary of other associates.
    */
    Bool[] GetCanInsertForAssociates(Integer[] associateIds);
    /** 
    Returns a specified number of appointments within a time range. The appointments belong to the contact specified.
    */
    NSAppointment[] GetContactAppointments(Integer contactId, DateTime startTime, DateTime endTime, Integer count);
    /** 
    Returns a specified number of appointments of a specific appointment task type within a time range. The appointments belong to the contact specified.
    */
    NSAppointment[] GetContactAppointmentsByTask(Integer contactId, DateTime startTime, DateTime endTime, Integer count, Integer taskId);
    /** 
    Returns a specified number of appointments of a specific appointment task heading within a time range. The appointments belong to the contact specified.
    */
    NSAppointment[] GetContactAppointmentsByTaskHeading(Integer contactId, DateTime startTime, DateTime endTime, Integer count, Integer taskHeadingId);
    /** 
    Returns a specified number of appointments belonging to an array of appointment task types within a time range. The appointments belong to the contact specified.
    */
    NSAppointment[] GetContactAppointmentsByTasks(Integer contactId, DateTime startTime, DateTime endTime, Integer count, Integer[] taskIds);
    /** 
    Returns a specified number of appointments of a specific appointment type within a time range. The appointments belong to the contact specified.
    */
    NSAppointment[] GetContactAppointmentsByType(Integer contactId, Integer count, Integer appointmentType);
    /** 
    Gets combined day information (activity + red-letter summary) for one or more days according to the given date interval.
    */
    NSDayInformationListItem[] GetDayInformationListByDatesAndAssociate(DateTime startTime, DateTime endTime, Integer associateId);
    NSAppointment[] GetDiaryByGroup(Integer groupId, Integer groupType, DateTime startTime, DateTime endTime, Integer count);
    /** 
    Returns a specified number of appointments within a time range. The appointments belong to the currently logged-on user.
    */
    NSAppointment[] GetMyAppointments(DateTime startTime, DateTime endTime, Integer count);
    /** 
    Returns a specified number of appointments within a time range. The appointments belong to the currently logged-on user.
    */
    NSAppointment[] GetMyDiary(DateTime startTime, DateTime endTime, Integer count);
    /** 
    Gets published appointments from the logged in user.
    */
    NSAppointment[] GetMyPublishedAppointments();
    /** 
    Returns a specified number of appointments within a time range. The appointments belong to the currently logged-on user.
    */
    NSAppointmentSyncData[] GetMySyncAppointments(DateTime startTime, DateTime endTime);
    /** 
    Returns a specified number of appointments within a time range. The appointments belong to the currently logged-on user.
    */
    NSAppointment[] GetMyTasks(Integer count);
    /** 
    Gets the next suggested appointment for a given sale (or rather a given sales guide).
    */
    NSSuggestedAppointment GetNextSuggestedAppointmentBySale(Integer saleId, Integer currentAppointmentId, Bool skipCompleteCheck);
    /** 
    Looks up the name / email of an event-organizer
    */
    String GetOrganizerName(Integer motherAppointmentId);
    /** 
    Returns a specified number of appointments within a time range. The appointments belong to the person specified.
    */
    NSAppointment[] GetPersonAppointments(Integer personId, Bool includeProjectAppointments, DateTime startTime, DateTime endTime, Integer count);
    /** 
    Returns a specified number of appointments of a specific appointment task type within a time range. The appointments belong to the person specified.
    */
    NSAppointment[] GetPersonAppointmentsByTask(Integer personId, Bool includeProjectAppointments, DateTime startTime, DateTime endTime, Integer count, Integer taskId);
    /** 
    Returns a specified number of appointments of a specific appointment task heading within a time range. The appointments belong to the person specified.
    */
    NSAppointment[] GetPersonAppointmentsByTaskHeading(Integer personId, Bool includeProjectAppointments, DateTime startTime, DateTime endTime, Integer count, Integer taskHeadingId);
    /** 
    Returns a specified number of appointments from a list of appointment task types within a time range. The appointments belong to the person specified.
    */
    NSAppointment[] GetPersonAppointmentsByTasks(Integer personId, Bool includeProjectAppointments, DateTime startTime, DateTime endTime, Integer count, Integer[] taskIds);
    /** 
    Returns a specified number of appointments of a specific appointment type within a time range. The appointments belong to the person specified.
    */
    NSAppointment[] GetPersonAppointmentsByType(Integer personId, Bool includeProjectAppointments, DateTime startTime, DateTime endTime, Integer count, Integer appointmentType);
    /** 
    Returns a specified number of appointments within a time range.
    */
    NSAppointment[] GetPersonDiary(Integer personId, DateTime startTime, DateTime endTime, Integer count);
    /** 
    Returns a specified number of appointments within a time range.
    */
    NSAppointment[] GetPersonTasks(Integer personId, Integer count);
    /** 
    Returns a specified number of appointments within a time range. The appointments belong to the project specified.
    */
    NSAppointment[] GetProjectAppointments(Integer projectId, DateTime startTime, DateTime endTime, Integer count);
    /** 
    Returns a specified number of appointments of a specific appointment task type within a time range. The appointments belong to the project specified. 
    */
    NSAppointment[] GetProjectAppointmentsByTask(Integer projectId, DateTime startTime, DateTime endTime, Integer count, Integer taskId);
    /** 
    Returns a specified number of appointments of a specific appointment task heading within a time range. The appointments belong to the project specified.
    */
    NSAppointment[] GetProjectAppointmentsByTaskHeading(Integer projectId, DateTime startTime, DateTime endTime, Integer count, Integer taskHeadingId);
    /** 
    Returns a specified number of appointments matching the list of appointment task types within a time range. The appointments belong to the project specified.
    */
    NSAppointment[] GetProjectAppointmentsByTasks(Integer projectId, DateTime startTime, DateTime endTime, Integer count, Integer[] taskIds);
    /** 
    Returns a specified number of appointments of a specific appointment type within a time range. The appointments belong to the project specified.
    */
    NSAppointment[] GetProjectAppointmentsByType(Integer projectId, DateTime startTime, DateTime endTime, Integer count, Integer appointmentType);
    /** 
    Returns a specified number of appointments within a time range. The appointments belong to the projects where the person specified is member.
    */
    NSAppointment[] GetProjectMemberAppointments(Integer personId, DateTime startTime, DateTime endTime, Integer count);
    /** 
    Returns a specified number of appointments of a specific appointment task type within a time range. The appointments belong to the projects where the person specified is member.
    */
    NSAppointment[] GetProjectMemberAppointmentsByTask(Integer personId, DateTime startTime, DateTime endTime, Integer count, Integer taskId);
    /** 
    Returns a specified number of appointments of a specific appointment task heading within a time range. The appointments belong to the projects where the person specified is member.
    */
    NSAppointment[] GetProjectMemberAppointmentsByTaskHeading(Integer personId, Integer count, Integer taskHeadingId);
    /** 
    Returns a specified number of appointments matching a set of appointment task types within a time range. The appointments belong to the projects where the person specified is member.
    */
    NSAppointment[] GetProjectMemberAppointmentsByTasks(Integer personId, DateTime startTime, DateTime endTime, Integer count, Integer[] taskIds);
    /** 
    Returns a specified number of appointments of a specific appointment type within a time range. The appointments belong to the projects where the person specified is member.
    */
    NSAppointment[] GetProjectMemberAppointmentsByType(Integer personId, DateTime startTime, DateTime endTime, Integer count, Integer appointmentType);
    /** 
    Gets published appointment by appointment ID.
    */
    NSAppointment GetPublishedAppointment(Integer appointmentId);
    /** 
    Gets published appointments by appointment IDs.
    */
    NSAppointment[] GetPublishedAppointments(Integer[] appointmentIds);
    /** 
    Gets published appointments by project ID.
    */
    NSAppointment[] GetPublishedProjectAppointments(Integer projectId);
    /** 
    Gets detailed red-letter day information (red-letter summary + individual day texts) for one or more days according to the given date interval.
    */
    NSRedLetterInformationListItem[] GetRedLetterInformationListByDatesAndAssociate(DateTime startTime, DateTime endTime, Integer associateId);
    /** 
    Gets an NSSuggestedAppointment object.
    */
    NSSuggestedAppointment GetSuggestedAppointment(Integer suggestedAppointmentId);
    /** 
    Gets an NSSuggestedAppointmentEntity object.
    */
    NSSuggestedAppointmentEntity GetSuggestedAppointmentEntity(Integer suggestedAppointmentEntityId);
    /** 
    Gets an NSTaskListItem object.
    */
    NSTaskListItem GetTaskListItem(Integer taskListItemId);
    /** 
    Gets all takslist items
    */
    NSTaskListItem[] GetTaskListItems(Bool includeDeleted);
    /** 
    Gets the UID associated with the appointment id in the Invitation table.
    */
    String GetUIDFromAppointmentId(Integer appointmentId, Bool useMotherId);
    /** 
    Moving a booking to another start time.
    */
    NSAppointmentEntity Move(Integer appointmentId, Integer updateMode);
    /** 
    Rejecting an appointment invitation
    */
    Void Reject(Integer appointmentId, String rejectReason, Integer updateMode);
    /** 
    Rejecting an appointment invitation and send an email confirmation to the meeting organizer.
    */
    Void RejectWithEmailConfirmation(Integer appointmentId, String rejectReason, Integer updateMode);
    /** 
    Rejecting an appointment invitation and send an email confirmation to the meeting organizer.
    */
    Void RejectWithSmtpEmailConfirmation(Integer appointmentId, String rejectReason, Integer updateMode);
    /** 
    Submits a request for information. The request is added to the task list of the user that is responsible for this contact. Based on wether the person the request is made for is found or not, the following happens: If the person is found, the person, person's contact and sales representative is returned. If neither the person nor the contact is found a new person and contact is created (if sufficient data is supplied), and the person, person's contact and sales representative is returned. If the contact and not the person is found a new person is created on this contact, and the contact, salesrep, and person is returned (if there was enough data to return the person). If more than one contact is found a list of contacts is returned.
    */
    NSSalesActivity RequestForInfo(Integer associateIdForNewContact, String channel, String regarding, String contactName, String personFirstname, String personLastname, String emailAddress, String phoneNumber);
    /** 
    Saving a booking.
    */
    NSAppointmentEntity Save(Integer updateMode, Bool sendEmailToParticipants);
    /** 
    Saves an appointmentUpdates the existing NSAppointmentEntity or creates a new NSAppointmentEntity if the ID parameter is 0.
    */
    NSAppointmentEntity SaveAppointmentEntity(NSAppointmentEntity appointmentEntity);
    /** 
    Updates the existing NSSuggestedAppointmentEntity or creates a new NSSuggestedAppointmentEntity if the id parameter is 0
    */
    NSSuggestedAppointmentEntity SaveSuggestedAppointmentEntity(NSSuggestedAppointmentEntity suggestedAppointmentEntity);
    /** 
    Updates the existing NSTaskListItem or creates a new NSTaskListItem if the ID parameter is 0.
    */
    NSTaskListItem SaveTaskListItem(NSTaskListItem taskListItem);
    /** 
    Sets the completed status for an array of activities. The changes are saved immediately.
    */
    Void SetActivityStatus(String[] activityIdentifier, Integer activityStatus);
    /** 
    Sets an appointment invitation to seen.
    */
    Void SetSeen(Integer appointmentId, Integer updateMode);
    /** 
    Toggles the completed status for an array of activities.
    */
    Integer ToggleActivities(String[] activityIdentifier);
    /** 
    Toggles the completed status for an activity. The changes are saved immediately.
    */
    Integer ToggleActivity(String activityIdentifier);
    /** 
    Toggles the first activity and sets the rest of the activities to the result of the first toggle.
    */
    String[] ToggleAndSetActivities(String[] activityIdentifiers);
    /** 
    Sets an appointment's status to Completed if the appointment had a different status, or sets the status to started if already set to completed.
    */
    Integer ToggleAppointmentStatus(Integer appointmentId);
    /** 
    Updates an appointment record.
    */
    NSAppointment UpdateAppointment(Integer id, DateTime startTime, DateTime endTime, Integer status, Integer type, Integer associateId);
    /** 
    Updates the attendance to an appointment based on incoming ICS RSVPs.
    */
    Bool UpdateAppointmentFromIcsResponse(String emailAddress, NSStream icsData);
    /** 
    Checks that entity is ready for saving.
    */
    Map ValidateAppointmentEntity(NSAppointmentEntity appointmentEntity);
    /** 
    Validates the set of dates to calculate any conflicts.
    */
    NSRecurrenceDate[] ValidateDays(NSAppointmentEntity appointmentEntity, DateTime[] dates);
    /** 
    Returns true if the changes will trigger email sending on Save, so you can inform the user.
    */
    Bool WillSendEmail(NSAppointmentEntity appointment);
}`;