export const NSPersonEntity = `/** 
The Person Service. The service implements all services working with the Person object.
*/
class NSPersonEntity {
    Integer GetActiveErpLinks();
    Integer GetActiveInterests();
    /** 
    Retrieves a formatted addressRetrieves the structure holding formatted address data.
    */
    NSAddress GetAddress();
    NSAssociate GetAssociate();
    DateTime GetBirthDate();
    String[] GetBounceEmails();
    NSBusiness GetBusiness();
    NSCategory GetCategory();
    NSEntityElement[] GetChatEmails();
    NSConsentInfo[] GetConsents();
    NSContact GetContact();
    NSAssociate GetCorrespondingAssociate();
    NSCountry GetCountry();
    NSAssociate GetCreatedBy();
    DateTime GetCreatedDate();
    NSCustomerLanguage GetCustomerLanguage();
    /** 
    Gets the user-defined + extra fields on an NSPersonEntity as a map.
    */
    Map GetCustomFields();
    Integer GetDbiAgentId();
    String GetDbiKey();
    DateTime GetDbiLastModified();
    DateTime GetDbiLastSyncronized();
    String GetDescription();
    NSEntityElement[] GetEmails();
    /** 
    Gets the extra fields on NSPersonEntity as a map.
    */
    Map GetExtraFields();
    /** 
    Returns a collection of fax numbers that belong to the contact person.
    */
    NSEntityElement[] GetFaxes();
    String GetFirstname();
    /** 
    Gets formal name for a person, as used in labels. (Full name + person title + academic title)
    */
    String GetFormalName();
    String GetFullName();
    NSSelectableMDOListItem[] GetInterests();
    NSEntityElement[] GetInternetPhones();
    /** 
    Checks if the person object is an associate. The property is read-only.
    */
    Bool GetIsAssociate();
    String GetKanafname();
    String GetKanalname();
    String GetLastname();
    String GetMiddleName();
    /** 
    Returns a collection of mobile phone numbers that belong to the contact person.
    */
    NSEntityElement[] GetMobilePhones();
    String GetMrmrs();
    Bool GetNoMailing();
    /** 
    Returns a collection of office phone numbers that belong to the contact person.
    */
    NSEntityElement[] GetOfficePhones();
    /** 
    Returns a collection of pagers that belong to the contact person.
    */
    NSEntityElement[] GetOtherPhones();
    NSEntityElement[] GetPagers();
    Integer GetPersonId();
    String GetPersonNumber();
    NSPosition GetPosition();
    String GetPost1();
    String GetPost2();
    String GetPost3();
    /** 
    Returns a collection of phone numbers that belong to the contact person.
    */
    NSEntityElement[] GetPrivatePhones();
    Bool GetRetired();
    String GetSalutation();
    Integer GetSentInfo();
    /** 
    The person's available and selected shipment types.
    */
    NSSelectableMDOListItem[] GetShipmentTypes();
    Integer GetShowContactTickets();
    Integer GetSource();
    NSAssociate GetSupportAssociate();
    NSTicketPriority GetTicketPriority();
    String GetTitle();
    NSAssociate GetUpdatedBy();
    DateTime GetUpdatedDate();
    NSEntityElement[] GetUrls();
    Bool GetUsePersonAddress();
    /** 
    Gets the user-defined fields on the NSPersonEntity as a map.
    */
    Map GetUserDefinedFields();
    NSUserInfo GetUserInfo();
    Void SetActiveErpLinks(Integer activeErpLinks);
    Void SetActiveInterests(Integer activeInterests);
    /** 
    Sets a formatted addressSets the structure holding formatted address data.
    */
    Void SetAddress(NSAddress address);
    Void SetAssociate(NSAssociate associate);
    Void SetBirthDate(DateTime birthDate);
    Void SetBounceEmails(String[] bounceEmails);
    Void SetBusiness(NSBusiness business);
    Void SetCategory(NSCategory category);
    Void SetChatEmails(NSEntityElement[] chatEmails);
    Void SetConsents(NSConsentInfo[] consents);
    Void SetContact(NSContact contact);
    Void SetCorrespondingAssociate(NSAssociate correspondingAssociate);
    Void SetCountry(NSCountry country);
    Void SetCreatedBy(NSAssociate createdBy);
    Void SetCreatedDate(DateTime createdDate);
    Void SetCustomerLanguage(NSCustomerLanguage customerLanguage);
    /** 
    Sets the user-defined and extra fields on an NSPersonEntity with a map.
    */
    Void SetCustomFields(Map udefs);
    Void SetDbiAgentId(Integer dbiAgentId);
    Void SetDbiKey(String dbiKey);
    Void SetDbiLastModified(DateTime dbiLastModified);
    Void SetDbiLastSyncronized(DateTime dbiLastSyncronized);
    Void SetDescription(String description);
    Void SetEmails(NSEntityElement[] emails);
    /** 
    Sets the extra field values on NSPersonEntity with a map.
    */
    Void SetExtraFields(Map extras);
    /** 
    Returns a collection of fax numbers that belong to the contact person.
    */
    Void SetFaxes(NSEntityElement[] faxes);
    Void SetFirstname(String firstname);
    /** 
    Gets formal name for a person, as used in labels. (Full name + person title + academic title)
    */
    Void SetFormalName(String formalName);
    Void SetFullName(String fullName);
    Void SetInterests(NSSelectableMDOListItem[] interests);
    Void SetInternetPhones(NSEntityElement[] internetPhones);
    /** 
    Checks if the person object is an associate. The property is read-only.
    */
    Void SetIsAssociate(Bool isAssociate);
    Void SetKanafname(String kanafname);
    Void SetKanalname(String kanalname);
    Void SetLastname(String lastname);
    Void SetMiddleName(String middleName);
    /** 
    Returns a collection of mobile phone numbers that belong to the contact person.
    */
    Void SetMobilePhones(NSEntityElement[] mobilePhones);
    Void SetMrmrs(String mrmrs);
    Void SetNoMailing(Bool noMailing);
    /** 
    Returns a collection of office phone numbers that belong to the contact person.
    */
    Void SetOfficePhones(NSEntityElement[] officePhones);
    /** 
    Returns a collection of pagers that belong to the contact person.
    */
    Void SetOtherPhones(NSEntityElement[] otherPhones);
    Void SetPagers(NSEntityElement[] pagers);
    Void SetPersonId(Integer personId);
    Void SetPersonNumber(String personNumber);
    Void SetPosition(NSPosition position);
    Void SetPost1(String post1);
    Void SetPost2(String post2);
    Void SetPost3(String post3);
    /** 
    Returns a collection of phone numbers that belong to the contact person.
    */
    Void SetPrivatePhones(NSEntityElement[] privatePhones);
    Void SetRetired(Bool retired);
    Void SetSalutation(String salutation);
    Void SetSentInfo(Integer sentInfo);
    Void SetShipmentTypes(NSSelectableMDOListItem[] shipmentTypes);
    Void SetShowContactTickets(Integer showContactTickets);
    Void SetSource(Integer source);
    Void SetSupportAssociate(NSAssociate supportAssociate);
    Void SetTicketPriority(NSTicketPriority ticketPriority);
    Void SetTitle(String title);
    /** 
    The person that last updated the person object
    */
    Void SetUpdatedBy(NSAssociate updatedBy);
    Void SetUpdatedDate(DateTime updatedDate);
    Void SetUrls(NSEntityElement[] urls);
    Void SetUsePersonAddress(Bool usePersonAddress);
    /** 
    Sets the user-defined fields on the NSPersonEntity as a map.
    */
    Void SetUserDefinedFields(Map udefs);
    Void SetUserInfo(NSUserInfo userInfo);
}`;