export const NSContactSummary = `/** 
Summary of contact with recent activities, chats, and requests included.
*/
class NSContactSummary {
    NSChatSummaryItem[] GetChats();
    NSContact GetContact();
    NSActivitySummaryItem[] GetDocuments();
    NSActivitySummaryItem[] GetFollowups();
    NSSaleSummaryItem[] GetSales();
    NSTicketSummaryItem[] GetTickets();
    Void SetChats(NSChatSummaryItem[] chats);
    Void SetContact(NSContact contact);
    Void SetDocuments(NSActivitySummaryItem[] documents);
    Void SetFollowups(NSActivitySummaryItem[] followups);
    Void SetSales(NSSaleSummaryItem[] sales);
    Void SetTickets(NSTicketSummaryItem[] tickets);
}`;