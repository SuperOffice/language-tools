export const NSParticipantSyncData = `/** 
Carrier object for ParticipantSyncData.
*/
class NSParticipantSyncData {
    String GetContactBusiness();
    String GetContactCategory();
    String GetContactCountry();
    String GetContactDepartment();
    String GetContactFullName();
    Integer GetContactId();
    String GetContactName();
    String[] GetContactUrl();
    String GetCountry();
    String[] GetEMail();
    String[] GetMessenger();
    Integer GetParticipantStatus();
    String GetPersonAcademicTitle();
    NSAddressSyncData GetPersonAddress();
    String GetPersonCountry();
    String GetPersonFirstName();
    /** 
    Gets formal name for a person, as used in labels. (Full name + person title + academic title)
    */
    String GetPersonFormalName();
    String GetPersonFullName();
    Integer GetPersonId();
    String GetPersonLastname();
    String GetPersonMiddleName();
    String GetPersonMrmrs();
    String GetPersonPosition();
    String GetPersonTitle();
    String[] GetPhoneContact();
    String[] GetPhoneDirect();
    /** 
    Returns a collection of fax numbers that belong to the contact person.
    */
    String[] GetPhoneFax();
    /** 
    Returns a collection of mobile phone numbers that belong to the contact person.
    */
    String[] GetPhoneMobile();
    /** 
    Returns a collection of phone numbers that belong to the contact person.
    */
    String[] GetPhonePrivate();
    NSAddressSyncData GetPostalAddress();
    NSAddressSyncData GetStreetAddress();
    String[] GetUrl();
    String[] GetVoip();
    Void SetContactBusiness(String contactBusiness);
    /** 
    The GUI forces the user to enter a category type
    */
    Void SetContactCategory(String contactCategory);
    Void SetContactCountry(String contactCountry);
    Void SetContactDepartment(String contactDepartment);
    Void SetContactFullName(String contactFullName);
    Void SetContactId(Integer contactId);
    Void SetContactName(String contactName);
    Void SetContactUrl(String[] contactUrl);
    Void SetCountry(String country);
    Void SetEMail(String[] eMail);
    Void SetMessenger(String[] messenger);
    Void SetParticipantStatus(Integer participantStatus);
    Void SetPersonAcademicTitle(String personAcademicTitle);
    Void SetPersonAddress(NSAddressSyncData personAddress);
    Void SetPersonCountry(String personCountry);
    Void SetPersonFirstName(String personFirstName);
    Void SetPersonFormalName(String personFormalName);
    Void SetPersonFullName(String personFullName);
    Void SetPersonId(Integer personId);
    Void SetPersonLastname(String personLastname);
    Void SetPersonMiddleName(String personMiddleName);
    Void SetPersonMrmrs(String personMrmrs);
    Void SetPersonPosition(String personPosition);
    Void SetPersonTitle(String personTitle);
    /** 
    Returns a collection of office phone numbers that belong to the contact person.
    */
    Void SetPhoneContact(String[] phoneContact);
    Void SetPhoneDirect(String[] phoneDirect);
    Void SetPhoneFax(String[] phoneFax);
    Void SetPhoneMobile(String[] phoneMobile);
    Void SetPhonePrivate(String[] phonePrivate);
    Void SetPostalAddress(NSAddressSyncData postalAddress);
    Void SetStreetAddress(NSAddressSyncData null);
    Void SetUrl(String[] url);
    Void SetVoip(String[] voip);
}`;