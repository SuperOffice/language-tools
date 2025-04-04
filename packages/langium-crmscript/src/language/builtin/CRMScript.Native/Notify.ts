export const Notify = `/** 
Handles notification of different types.
*/
class Notify {
    /** 
    Sends a custom notification to a user.
    */
    Void sendCustomMessage(Integer recipientId, String message);
    /** 
    Sends a custom notification message to user with specified URL.
    */
    Void sendCustomMessage(Integer recipientId, String message, String url);
    /** 
    Sends a notification about a new request according to the user's notify configuration.
    */
    Void sendNewTicket(Integer ticketId);
    /** 
    Sends a notification about a new request according to the user's notify configuration. By setting the parameter skipCategoryMemberNotification, this method will not notify members of the category (if set up) or the email address free-text field on the category.
    */
    Void sendNewTicket(Integer ticketId, Bool skipCategoryMemberNotification);
    /** 
    Notifies a user about a new message in the specified ticket according to the users notify configuration.
    */
    Void sendNewTicketMessage(Integer ticketId, Bool onlyToHotLlist);
    /** 
    Sends a notification about a ticket being activated, according to the users notify configuration.
    */
    Void sendTicketActivated(Integer ticketId);
    /** 
    Sends a notification to the users about a ticket being taken over.
    */
    Void sendTicketTakenOver(Integer ticketId, Integer oldUserId, Integer newUserId);
}`;