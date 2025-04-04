export const Inbox = `/** 
A class for managing the inbox.
*/
class Inbox {
    /** 
    Inserts an SMTP formatted email into Service's inbox, which then will be imported when ejournalCron runs.
    */
    Integer addSmtpMail(String smtpMail, String uidl, Integer filterId);
}`;