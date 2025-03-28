export const builtin = `
/** String documentation */
Class String {
    Integer toInteger();
}
/** Integer documentation */
Class Integer {
    String toString();
}
/** Float documentation */
Class Float {}
/** NSPerson documentation */
returnType

Class NSContact {

    /** The number of active ERP links */
    Integer GetActiveErpLinks();

    /** Our contact */
    Integer GetAssociateId();

    /** Primary key */
    Integer GetContactId();

    /** Country */
    Integer GetCountryId();

    /** The associate's culture formatted full name (first name, middle name, and last name) */
    String GetAssociateFullName();

    /** The list item */
    String GetBusinessName();

    /** The list item */
    String GetCategoryName();

    /** City corresponding to zip code */
    String GetCity();

    /** Name of the country in the installed language */
    String GetCountryName();

    /** Department */
    String GetDepartment();

    /** The contact's phone number */
    String GetDirectPhone();

    /** The contact email address */
    String GetEmailAddress();

    /** Visible field */
    String GetEmailAddressName();

    /** The contact's address, formatted with line breaks and spaces into a single string. */
    String GetFormattedAddress();

    /** Get full name of the contact */
    String GetFullName();

    /** Contact kana name, used in Japanese versions only */
    String GetKananame();

    /** Contact name */
    String GetName();

    /** VAT number or similar */
    String GetOrgNr();

    /** The internet address to this contact */
    String GetURL();

    /** Visible field */
    String GetURLName();
}

`;