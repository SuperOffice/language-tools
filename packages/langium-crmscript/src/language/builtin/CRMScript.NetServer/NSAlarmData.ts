export const NSAlarmData = `/** 
Carrier object for AlarmData.
*/
class NSAlarmData {
    DateTime GetAlarmTime();
    Integer GetAppointmentId();
    String GetAppointmentText();
    /** 
    where=no start time,note,docin, docout
    */
    Integer GetAppointmentType();
    Integer GetAssignmentStatus();
    Integer GetBookingType();
    String GetContactDepartment();
    String GetContactFullName();
    Integer GetContactId();
    String GetContactName();
    DateTime GetEndDate();
    String GetFormalName();
    Integer GetInvitationStatus();
    String GetLocation();
    String GetPersonFullName();
    Integer GetPersonId();
    Integer GetProjectId();
    String GetProjectName();
    Integer GetSaleId();
    String GetSaleName();
    DateTime GetStartTime();
    String GetTaskName();
    Void SetAlarmTime(DateTime alarmTime);
    Void SetAppointmentId(Integer appointmentId);
    Void SetAppointmentText(String appointmentText);
    Void SetAppointmentType(Integer appointmentType);
    Void SetAssignmentStatus(Integer assignmentStatus);
    Void SetBookingType(Integer bookingType);
    Void SetContactDepartment(String contactDepartment);
    Void SetContactFullName(String contactFullName);
    Void SetContactId(Integer contactId);
    Void SetContactName(String contactName);
    Void SetEndDate(DateTime endDate);
    Void SetFormalName(String formalName);
    Void SetInvitationStatus(Integer invitationStatus);
    Void SetLocation(String location);
    Void SetPersonFullName(String personFullName);
    Void SetPersonId(Integer personId);
    Void SetProjectId(Integer projectId);
    Void SetProjectName(String projectName);
    Void SetSaleId(Integer saleId);
    Void SetSaleName(String saleName);
    Void SetStartTime(DateTime startTime);
    Void SetTaskName(String taskName);
}`;