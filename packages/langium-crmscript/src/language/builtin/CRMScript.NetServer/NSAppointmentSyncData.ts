export const NSAppointmentSyncData = `/** 
Carrier object for AppointmentSyncData.
*/
class NSAppointmentSyncData {
    DateTime GetAlarmTime();
    Integer GetAppointmentId();
    String GetAppointmentText();
    String GetContactDepartment();
    String GetContactFullName();
    Integer GetContactId();
    String GetContactName();
    DateTime GetEndDate();
    Bool GetHasAlarm();
    Bool GetIsAllDay();
    Bool GetIsAssignment();
    Bool GetIsBusy();
    Bool GetIsCompleted();
    Bool GetIsInvitation();
    Bool GetIsTentative();
    String GetLocation();
    NSParticipantSyncData[] GetParticipants();
    String GetPersonFormalName();
    String GetPersonFullName();
    Integer GetPersonId();
    Integer GetProjectId();
    /** 
    Project name
    */
    String GetProjectName();
    Integer GetSaleId();
    String GetSaleName();
    DateTime GetStartDate();
    String GetTaskName();
    Void SetAlarmTime(DateTime alarmTime);
    Void SetAppointmentId(Integer appointmentId);
    Void SetAppointmentText(String appointmentText);
    Void SetContactDepartment(String contactDepartment);
    Void SetContactFullName(String contactFullName);
    Void SetContactId(Integer contactId);
    Void SetContactName(String contactName);
    Void SetEndDate(DateTime endDate);
    Void SetHasAlarm(Bool hasAlarm);
    Void SetIsAllDay(Bool isAllDay);
    Void SetIsAssignment(Bool isAssignment);
    Void SetIsBusy(Bool isBusy);
    Void SetIsCompleted(Bool isCompleted);
    Void SetIsInvitation(Bool isInvitation);
    Void SetIsTentative(Bool isTentative);
    Void SetLocation(String location);
    Void SetParticipants(NSParticipantSyncData[] participants);
    Void SetPersonFormalName(String personFormalName);
    Void SetPersonFullName(String personFullName);
    Void SetPersonId(Integer personId);
    Void SetProjectId(Integer projectId);
    Void SetProjectName(String projectName);
    Void SetSaleId(Integer saleId);
    Void SetSaleName(String saleName);
    Void SetStartDate(DateTime startDate);
    Void SetTaskName(String taskName);
}`;