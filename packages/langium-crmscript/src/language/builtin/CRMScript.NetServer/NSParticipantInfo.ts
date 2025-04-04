export const NSParticipantInfo = `/** 
Represents an appointment participant.
*/
class NSParticipantInfo {
    Integer GetAssociateId();
    Integer GetContactId();
    Integer GetEmailId();
    Integer GetInvitationStatus();
    Integer GetPersonId();
    Bool GetSendEmail();
    Void SetAssociateId(Integer associateId);
    Void SetContactId(Integer contactId);
    Void SetEmailId(Integer emailId);
    Void SetInvitationStatus(Integer invitationStatus);
    Void SetPersonId(Integer personId);
    Void SetSendEmail(Bool sendEmail);
}`;