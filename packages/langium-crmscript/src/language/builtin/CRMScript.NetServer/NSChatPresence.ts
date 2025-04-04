export const NSChatPresence = `/** 
Represents presence information for a chat user, bundled with some other useful information. Carrier object for ChatPresence.
*/
class NSChatPresence {
    Integer[] GetChatTopics();
    String GetDisplayName();
    Integer GetOngoingChats();
    Bool GetPresent();
    Integer GetUserId();
    Void SetChatTopics(Integer[] chatTopics);
    Void SetDisplayName(String displayName);
    Void SetOngoingChats(Integer ongoingChats);
    Void SetPresent(Bool present);
    Void SetUserId(Integer userId);
}`;