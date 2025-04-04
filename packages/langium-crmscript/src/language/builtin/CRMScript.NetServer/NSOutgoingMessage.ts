export const NSOutgoingMessage = `/** 
Details about a message to be sent.
*/
class NSOutgoingMessage {
    String GetContent();
    String GetFormat();
    String GetFrom();
    Integer GetParentMessagingId();
    String GetSuggestedSessionKey();
    String GetTo();
    Void SetContent(String content);
    Void SetFormat(String format);
    Void SetFrom(String from);
    Void SetParentMessagingId(Integer parentMessagingId);
    Void SetSuggestedSessionKey(String suggestedSessionKey);
    Void SetTo(String to);
}`;