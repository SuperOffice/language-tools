export const NSPersonSummary = `/** 
Summary of person, with recent activities, chats, and requests included.
*/
class NSPersonSummary {
    NSChatSummaryItem[] GetChats();
    NSActivitySummaryItem[] GetDocuments();
    NSActivitySummaryItem[] GetFollowups();
    NSPerson GetPerson();
    NSSaleSummaryItem[] GetSales();
    NSTicketSummaryItem[] GetTickets();
    Void SetChats(NSChatSummaryItem[] chats);
    Void SetDocuments(NSActivitySummaryItem[] documents);
    Void SetFollowups(NSActivitySummaryItem[] followups);
    Void SetPerson(NSPerson person);
    Void SetSales(NSSaleSummaryItem[] sales);
    Void SetTickets(NSTicketSummaryItem[] tickets);
}`;