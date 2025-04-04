export const NSContactEntity = `/** 
The Contact Service. Implements all services working with the Contact object.
*/
class NSContactEntity {
    Integer GetActiveErpLinks();
    Integer GetActiveInterests();
    Integer GetActiveStatusMonitorId();
    NSAddress GetAddress();
    NSAssociate GetAssociate();
    String[] GetBounceEmails();
    NSBusiness GetBusiness();
    NSCategory GetCategory();
    Integer GetContactId();
    NSCountry GetCountry();
    NSAssociate GetCreatedBy();
    DateTime GetCreatedDate();
    NSCustomerLanguage GetCustomerLanguage();
    /** 
    Gets the user-defined + extra fields on an NSContactEntity as a map.
    */
    Map GetCustomFields();
    Integer GetDbiAgentId();
    String GetDbiKey();
    DateTime GetDbiLastModified();
    DateTime GetDbiLastSyncronized();
    Integer GetDeleted();
    String GetDepartment();
    String GetDescription();
    NSEntityElement[] GetEmails();
    /** 
    Gets the extra fields on NSContactEntity as a map.
    */
    Map GetExtraFields();
    NSEntityElement[] GetFaxes();
    Integer GetGroupId();
    NSSelectableMDOListItem[] GetInterests();
    String GetKananame();
    String GetName();
    Bool GetNoMailing();
    String GetNumber1();
    String GetNumber2();
    String GetOrgNr();
    NSPerson[] GetPersons();
    NSEntityElement[] GetPhones();
    Integer GetSource();
    NSAssociate GetSupportAssociate();
    NSPerson GetSupportPerson();
    NSTicketPriority GetTicketPriority();
    NSAssociate GetUpdatedBy();
    DateTime GetUpdatedDate();
    NSEntityElement[] GetUrls();
    /** 
    Gets the user-defined fields on the NSContactEntity as a map.
    */
    Map GetUserDefinedFields();
    Bool GetXstop();
    Void SetActiveErpLinks(Integer activeErpLinks);
    Void SetActiveInterests(Integer activeInterests);
    Void SetActiveStatusMonitorId(Integer activeStatusMonitorId);
    /** 
    Sets a contact's address. You can pass either an NSAddress object or NSLocalizedField[][].
    */
    Void SetAddress(NSLocalizedField[][] address);
    Void SetAssociate(NSAssociate associate);
    Void SetBounceEmails(String[] bounceEmails);
    Void SetBusiness(NSBusiness business);
    Void SSetCategory(NSCategory category);
    Void SetContactId(Integer contactId);
    Void SetCountry(NSCountry country);
    Void SetCreatedBy(NSAssociate createdBy);
    Void SetCreatedDate(DateTime createdDate);
    Void SetCustomerLanguage(NSCustomerLanguage customerLanguage);
    /** 
    Sets the user-defined and extra fields on an NSContactEntity with a map.
    */
    Void SetCustomFields(Map udefs);
    Void SetDbiAgentId(Integer dbiAgentId);
    Void SetDbiKey(String dbiKey);
    Void SetDbiLastModified(DateTime dbiLastModified);
    Void SetDbiLastSyncronized(DateTime dbiLastSyncronized);
    Void SetDeleted(Integer deleted);
    /** \n*/
    Void SetDepartment(String department);
    Void SetDescription(String description);
    Void SetEmails(NSEntityElement[] emails);
    /** 
    Sets the extra field values on NSContactEntity with a map.
    */
    Void SetExtraFields(Map extras);
    Void SetFaxes(NSEntityElement[] faxes);
    Void SetGroupId(Integer groupId);
    Void SetInterests(NSSelectableMDOListItem[] interests);
    Void SetKananame(String kananame);
    Void SetName(String name);
    Void SetNoMailing(Bool noMailing);
    Void SetNumber1(String number1);
    Void SetNumber2(String number2);
    Void SetOrgNr(String orgNr);
    Void SetPersons(NSPerson[] persons);
    Void SetPhones(NSEntityElement[] phones);
    Void SetSource(Integer source);
    Void SetSupportAssociate(NSAssociate supportAssociate);
    Void SetSupportPerson(NSPerson supportPerson);
    Void SetTicketPriority(NSTicketPriority ticketPriority);
    Void SetUpdatedBy(NSAssociate updatedBy);
    Void SetUpdatedDate(DateTime updatedDate);
    Void SetUrls(NSEntityElement[] urls);
    /** 
    Sets the user-defined fields on the NSContactEntity as a map.
    */
    Void SetUserDefinedFields(Map udefs);
    Void SetXstop(Bool xstop);
}`;