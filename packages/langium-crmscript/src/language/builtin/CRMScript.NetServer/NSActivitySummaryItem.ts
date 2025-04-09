export const NSActivitySummaryItem = `/** 
Summary details about appointments and documents.
*/
class NSActivitySummaryItem {
    /** 
    Returns the appointment ID (primary key).
    */
    Integer GetAppointmentId();
    /** 
    The Completed state. NotStarted(1) or Completed(3)
    */
    Integer GetCompleted();
    /** 
    Start/Document date.
    */
    DateTime GetDate();
    /** 
    The appointment's textbox; document title.
    */
    String GetDescription();
    /** 
    Returns the document ID.
    */
    Integer GetDocumentId();
    /** 
    Returns the registered date.
    */
    DateTime GetRegistered();
    /** 
    Primary key
    */
    Void SetAppointmentId(Integer appointmentId);
    /** 
    Sets the Completed state. NotStarted(1) or Completed(3)
    */
    Void SetCompleted(Integer completed);
    /** 
    Start/Document date
    */
    Void SetDate(DateTime date);
    /** 
    Sets the appointment's textbox; document title
    */
    Void SetDescription(String description);
    /** 
    Sets the document ID
    */
    Void SetDocumentId(Integer documentId);
    /** 
    Sets the registered date.
    */
    Void SetRegistered(DateTime registered);
}`;