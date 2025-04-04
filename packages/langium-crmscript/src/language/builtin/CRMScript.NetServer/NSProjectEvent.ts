export const NSProjectEvent = `/** 
A project that is also an event. Used by Audience.
*/
class NSProjectEvent {
    String GetAssociateFullName();
    Integer GetAssociateId();
    String GetDescription();
    Bool GetEnabled();
    DateTime GetEventDate();
    String GetEventName();
    Bool GetIsSignedOn();
    Integer GetProjectId();
    Bool GetSignOff();
    String GetSignOffConfirmationText();
    Integer GetSignOffPersonId();
    Bool GetSignOffTaskEnable();
    Integer GetSignOffTaskId();
    String GetSignOffText();
    Bool GetSignOffTriggersAssign();
    Bool GetSignOn();
    String GetSignOnConfirmationText();
    Integer GetSignOnPersonId();
    Bool GetSignOnTaskEnable();
    Integer GetSignOnTaskId();
    String GetSignOnText();
    Bool GetSignOnTriggersAssign();
    Void SetAssociateFullName(String associateFullName);
    Void SetAssociateId(Integer associateId);
    Void SetDescription(String description);
    Void SetEnabled(Bool enabled);
    Void SetEventDate(DateTime eventDate);
    Void SetEventName(String eventName);
    Void SetIsSignedOn(Bool isSignedOn);
    Void SetProjectId(Integer projectId);
    Void SetSignOff(Bool signOff);
    Void SetSignOffConfirmationText(String signOffConfirmationText);
    Void SetSignOffPersonId(Integer signOffPersonId);
    Void SetSignOffTaskEnable(Bool signOffTaskEnable);
    Void SetSignOffTaskId(Integer signOffTaskId);
    Void SetSignOffText(String signOffText);
    Void SetSignOffTriggersAssign(Bool signOffTriggersAssign);
    Void SetSignOn(Bool signOn);
    Void SetSignOnConfirmationText(String signOnConfirmationText);
    Void SetSignOnPersonId(Integer signOnPersonId);
    Void SetSignOnTaskEnable(Bool signOnTaskEnable);
    Void SetSignOnTaskId(Integer signOnTaskId);
    Void SetSignOnText(String signOnText);
    Void SetSignOnTriggersAssign(Bool signOnTriggersAssign);
}`;