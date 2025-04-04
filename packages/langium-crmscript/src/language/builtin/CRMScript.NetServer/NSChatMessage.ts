export const NSChatMessage = `/** 
A message in a chat session. Carrier object for ChatMessage.
*/
class NSChatMessage {
    String GetAuthor();
    Integer GetChatMessageId();
    Integer GetChatSessionId();
    String GetMessage();
    Integer GetReadByCustomer();
    String GetSpecialParam();
    Integer GetSpecialType();
    Integer GetType();
    DateTime GetWhenPosted();
    Void SetAuthor(String author);
    Void SetChatMessageId(Integer chatMessageId);
    Void SetChatSessionId(Integer chatSessionId);
    Void SetMessage(String message);
    Void SetReadByCustomer(Integer readByCustomer);
    Void SetSpecialParam(String specialParam);
    Void SetSpecialType(Integer specialType);
    Void SetType(Integer type);
    Void SetWhenPosted(DateTime whenPosted);
}`;