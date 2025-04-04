export const NSRecipientStatistics = `/** 
Carrier object for RecipientStatistics.
*/
class NSRecipientStatistics {
    /** 
    Number of members with an invalid address.
    */
    Integer GetNoAddresses();
    /** 
    Number of members with no fax or email address.
    */
    Integer GetNoFaxOrEmails();
    /** 
    Total number of members.
    */
    Integer GetTotal();
    /** 
    Number of members with a valid email address.
    */
    Integer GetValidEmailAddresses();
    /** 
    Number of members with a valid fax number.
    */
    Integer GetValidFaxNumbers();
    /** 
    Number of members with a valid postal address.
    */
    Integer GetValidPostalAddresses();
    /** 
    Number of members with an invalid address.
    */
    Void SetNoAddresses(Integer num);
    /** 
    Number of members with no fax or email address.
    */
    Void SetNoFaxOrEmails(Integer num);
    /** 
    Total number of members.
    */
    Void SetTotal(Integer num);
    /** 
    Number of members with a valid email address.
    */
    Void SetValidEmailAddresses(Integer num);
    /** 
    Number of members with a valid fax number.
    */
    Void SetValidFaxNumbers(Integer num);
    /** 
    Number of members with a valid postal address.
    */
    Void SetValidPostalAddresses(Integer num);
}`;