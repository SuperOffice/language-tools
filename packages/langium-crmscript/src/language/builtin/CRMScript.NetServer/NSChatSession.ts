export const NSChatSession = `/** 
Use the ChatSessionEntity on the Chat agent instead. Chat sessions belong to a chat topic, and contain messages to/from users. Carrier object for ChatSession.
*/
class NSChatSession {
    Integer GetChatSessionId();
    Void SetChatSessionId(Integer chatSessionId);
}`;