export const NSPerson = `/** 
Carrier object for Person.
*/
class NSPerson {
    /** 
    How many active ERP links are there for this person?
    */
    Integer GetActiveErpLinks();
    /** 
    Number of records in pintr table; select count(*) from pintr pi where pi.person_id = this.person_id == activeInterests is always true
    */
    Integer GetActiveInterests();
    /** 
    ID of the item's owner (Associate id)
    */
    Integer GetAssociateId();
    /** 
    Name of the person's owner
    */
    String GetAssociateName();
    /** 
    The category list item name
    */
    String GetCategoryName();
    /** 
    The persons contact country ID
    */
    Integer GetContactCountryId();
    /** 
    The persons contact department
    */
    String GetContactDepartment();
    /** 
    Actual phone number as entered by the user
    */
    String GetContactFax();
    /** 
    Company full name + department
    */
    String GetContactFullName();
    /** 
    Owning contact ID
    */
    Integer GetContactId();
    /** 
    The persons company name
    */
    String GetContactName();
    /** 
    The persons contact organization number
    */
    String GetContactOrgNr();
    /** 
    Returns the direct phone that belong to the persons contact.
    */
    String GetContactPhone();
    /** 
    Country
    */
    Integer GetCountryId();
    /** 
    Info text/description on person.
    */
    String GetDescription();
    /** 
    Returns the direct phone that belong to the contact person.
    */
    String GetDirectPhone();
    /** 
    First email on contact person.
    */
    String GetEmail();
    /** 
    Email description
    */
    String GetEmailName();
    /** 
    Returns the fax phone that belong to the contact person.
    */
    String GetFaxPhone();
    /** 
    First name
    */
    String GetFirstname();
    /** 
    Gets formal name for a person, as used in labels. (Full name + person title + academic title)
    */
    String GetFormalName();
    /** 
    Gets the persons full name (internal name used in clients for employees).
    */
    String GetFullName();
    /** 
    Kana first name, used in Japanese versions only
    */
    String GetKanafname();
    /** 
    Kana last name, used in Japanese versions only
    */
    String GetKanalname();
    /** 
    Last name
    */
    String GetLastname();
    /** 
    Middle name or 'van' etc.
    */
    String GetMiddleName();
    /** 
    Returns the mobile phone that belong to the contact person.
    */
    String GetMobilePhone();
    String GetMrmrs();
    /** 
    Primary key
    */
    Integer GetPersonId();
    /** 
    The position. This is a predefined SuperOffice value, different from Title
    */
    String GetPosition();
    /** 
    Postal address, used in Japanese versions only
    */
    String GetPost1();
    /** 
    Postal address, used in Japanese versions only
    */
    String GetPost2();
    /** 
    Postal address, used in Japanese versions only
    */
    String GetPost3();
    /** 
    Display sort sequence for default sort order
    */
    Integer GetRank();
    /** 
    1 = the user is retired and should have no rights, not appear in lists, etc.
    */
    Integer GetRetired();
    /** 
    Our support contact for this person
    */
    Integer GetSupportAssociateId();
    /** 
    Support priority ID
    */
    Integer GetSupportLanguageId();
    /** 
    Ticket priority ID
    */
    Integer GetTicketPriorityId();
    /** 
    Title
    */
    String GetTitle();
    /** 
    If 1, use person's address for mailing instead of company address
    */
    Bool GetUsePersonAddress();
    /** 
    How many active ERP links are there for this person?
    */
    Void SetActiveErpLinks(Integer activeErpLinks);
    /** 
    Number of records in pintr table; select count(*) from pintr pi where pi.person_id = this.person_id == activeInterests is always true
    */
    Void SetActiveInterests(Integer activeInterests);
    /** 
    ID of the item's owner (Associate id)
    */
    Void SetAssociateId(Integer associateId);
    /** 
    Name of the person's owner
    */
    Void SetAssociateName(String associateName);
    /** 
    The category list item name
    */
    Void SetCategoryName(String categoryName);
    /** 
    The persons contact country ID
    */
    Void SetContactCountryId(Integer contactCountryId);
    /** 
    The persons contact department
    */
    Void SetContactDepartment(String contactDepartment);
    /** 
    Actual phone number as entered by the user
    */
    Void SetContactFax(String contactFax);
    /** 
    Company full name + department
    */
    Void SetContactFullName(String contactFullName);
    /** 
    Owning contact ID
    */
    Void SetContactId(Integer contactId);
    /** 
    The persons company name
    */
    Void SetContactName(String contactName);
    /** 
    The persons contact organization number
    */
    Void SetContactOrgNr(String contactOrgNr);
    /** 
    Returns the direct phone that belong to the persons contact.
    */
    Void SetContactPhone(String contactPhone);
    /** 
    Country
    */
    Void SetCountryId(Integer countryId);
    /** 
    Info text/description on person.
    */
    Void SetDescription(String description);
    /** 
    Returns the direct phone that belong to the contact person.
    */
    Void SetDirectPhone(String directPhone);
    /** 
    First email on contact person.
    */
    Void SetEmail(String email);
    /** 
    Email description
    */
    Void SetEmailName(String emailName);
    /** 
    Returns the fax phone that belong to the contact person.
    */
    Void SetFaxPhone(String faxPhone);
    /** 
    First name
    */
    Void SetFirstname(String firstname);
    /** 
    Gets formal name for a person, as used in labels. (Full name + person title + academic title)
    */
    Void SetFormalName(String formalName);
    /** 
    Gets the persons full name (internal name used in clients for employees).
    */
    Void SetFullName(String fullName);
    /** 
    Kana first name, used in Japanese versions only
    */
    Void SetKanafname(String kanafname);
    /** 
    Kana last name, used in Japanese versions only
    */
    Void SetKanalname(String kanalname);
    /** 
    Last name
    */
    Void SetLastname(String lastname);
    /** 
    Middle name or 'van' etc.
    */
    Void SetMiddleName(String middleName);
    /** 
    Returns the mobile phone that belong to the contact person.
    */
    Void SetMobilePhone(String mobilePhone);
    Void SetMrmrs(String mrmrs);
    /** 
    Primary key
    */
    Void SetPersonId(Integer personId);
    /** 
    The position. This is a predefined SuperOffice value, different from Title
    */
    Void SetPosition(String position);
    /** 
    Postal address, used in Japanese versions only
    */
    Void SetPost1(String post1);
    /** 
    Postal address, used in Japanese versions only
    */
    Void SetPost2(String post2);
    /** 
    Postal address, used in Japanese versions only
    */
    Void SetPost3(String post3);
    /** 
    Display sort sequence for default sort order
    */
    Void SetRank(Integer rank);
    /** 
    1 = the user is retired and should have no rights, not appear in lists, etc.
    */
    Void SetRetired(Integer retired);
    /** 
    Our support contact for this person
    */
    Void SetSupportAssociateId(Integer supportAssociateId);
    /** 
    Support priority ID
    */
    Void SetSupportLanguageId(Integer supportLanguageId);
    /** 
    Ticket priority ID
    */
    Void SetTicketPriorityId(Integer ticketPriorityId);
    /** 
    Title
    */
    Void SetTitle(String title);
    /** 
    If 1, use person's address for mailing instead of company address
    */
    Void SetUsePersonAddress(Bool usePersonAddress);
}`;