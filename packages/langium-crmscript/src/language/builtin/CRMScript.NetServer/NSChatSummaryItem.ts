export const NSChatSummaryItem = `/** 
Chat session summary: id, title, created date. Carrier object for ChatSummaryItem.
*/
class NSChatSummaryItem {
    Integer GetChatSessionId();
    String GetCompanyName();
    String GetFirstMessage();
    String GetLastMessage();
    String GetName();
    DateTime GetWhenEnded();
    DateTime GetWhenRequested();
    Void SetChatSessionId(Integer chatSessionId);
    Void SetCompanyName(String companyName);
    Void SetFirstMessage(String firstMessage);
    Void SetLastMessage(String lastMessage);
    Void SetName(String name);
    Void SetWhenEnded(DateTime whenEnded);
    Void SetWhenRequested(DateTime whenRequested);
}`;