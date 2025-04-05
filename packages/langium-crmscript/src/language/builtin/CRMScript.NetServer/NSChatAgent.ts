export const NSChatAgent = `/** 
Chat functions. Manage chat channels, sessions, and messages.
*/
class NSChatAgent {
    /** 
    Accept the transfer: assign the session to the user. If the session is not being transferred, nothing happens.
    */
    NSChatSessionEntity AcceptChatSessionTransfer(Integer chatSessionId);
    /** 
    Adds a new message to a chat session
    */
    NSChatMessage AddChatMessage(Integer chatSessionId, NSChatMessage message);
    /** 
    Adds a user to a chat topic
    */
    NSChatTopicAgent AddChatTopicUserAgent(Integer chatTopicId, NSChatTopicAgent useragent);
    /** 
    Gets all chat sessions which this user is a member of.
    */
    NSChatSessionEntity[] ChatSessionsForUser();
    /** 
    Gets all chat topics which this user is a member of.nd, Notifications, Listen or Manager.
    */
    NSChatTopicEntity[] ChatTopicsForUser();
    /** 
    Creates a new session on a chat topic
    */
    NSChatSessionEntity CreateChatSessionForTopic(Integer chatTopicId);
    /** 
    Sets default values into a new NSChatSessionEntity.
    */
    NSChatSessionEntity CreateDefaultChatSessionEntity();
    /** 
    Sets default values into a new NSChatTopicAgent.
    */
    NSChatTopicAgent CreateDefaultChatTopicAgent();
    /** 
    Sets default values into a new NSChatTopicEntity.
    */
    NSChatTopicEntity CreateDefaultChatTopicEntity();
    /** 
    Deletes the NSChatSessionEntity
    */
    Void DeleteChatSessionEntity(Integer chatSessionEntity);
    /** 
    Deletes the NSChatTopicEntity
    */
    Void DeleteChatTopicEntity(Integer chatTopicEntity);
    /** 
    Removes a user from a topic
    */
    Void DeleteChatTopicUserAgent(Integer chatTopicId, String username);
    /** 
    Gets all or some of the messages in a chat session
    */
    NSChatMessage[] GetChatMessages(Integer chatSessionId, Integer after);
    /** 
    Gets the chat presence status for all chat users.
    */
    NSChatPresence[] GetChatPresence();
    /** 
    Gets an NSChatSessionEntity object.
    */
    NSChatSessionEntity GetChatSessionEntity(Integer chatSessionEntityId);
    /** 
    Gets an NSChatTopicEntity object.
    */
    NSChatTopicEntity GetChatTopicEntity(Integer chatTopicEntityId);
    /** 
    Gets a user assigned to a topic
    */
    NSChatTopicAgent GetChatTopicUserAgent(Integer chatTopicId, String username);
    /** 
    Gets a list of users assigned to a chat topic.
    */
    NSChatTopicAgent[] GetChatTopicUserAgentList(Integer chatTopicId);
    /** 
    Gets the chat transcript, formatted as plain text or HTML.
    */
    String GetChatTranscript(Integer chatSessionId, Bool html);
    /** 
    Gets list of users that can be assigned to chat topics.
    */
    NSMDOListItem[] GetUserAgentList(Bool flat, Bool onlyPresent);
    /** 
    Checks if we are right now within the opening hours of the given topic. Will use timezones to calculate if configured.
    */
    Bool IsWithinOpeningHours(Integer chatTopicId);
    /** 
    Answer the session: assign the session to the user. The welcome message is sent to the customer.
    */
    NSChatSessionEntity PickUpChatSession(Integer chatSessionId);
    /** 
    Answer the first available session from the queue: assign the session to the user. The welcome message is sent to the customer.
    */
    NSChatSessionEntity PickUpFirstChatSession();
    /** 
    Do not want. Deny the transfer to the user. If the session is not being transferred, nothing happens.
    */
    NSChatSessionEntity RejectChatSessionTransfer(Integer chatSessionId);
    /** 
    Resets chat session, puts it back on the queue for pickup.
    */
    NSChatSessionEntity ResetChatSession(Integer chatSessionId);
    /** 
    Saves the chat presence for specified users
    */
    Void SaveChatPresence(NSChatPresence[] chatPresence);
    /** 
    Updates the existing NSChatSessionEntity or creates a new NSChatSessionEntity if the id parameter is 0
    */
    NSChatSessionEntity SaveChatSessionEntity(NSChatSessionEntity chatSessionEntity);
    /** 
    Updates the existing NSChatTopicEntity or creates a new NSChatTopicEntity if the id parameter is 0
    */
    NSChatTopicEntity SaveChatTopicEntity(NSChatSessionEntity chatSessionEntity);
    /** 
    Requests to send the session to another user. If the session does not belong to the user, nothing happens.
    */
    NSChatSessionEntity TransferChatSession(Integer chatSessionId, String toAssociate);
    /** 
    Updates a user's role in a chat topic
    */
    NSChatTopicAgent UpdateChatTopicUserAgent(Integer chatTopicId, String username, NSChatTopicAgent useragent);
    /** 
    Updates users roles in a chat topic
    */
    NSChatTopicAgent[] UpdateChatTopicUserAgent(Integer chatTopicId, NSChatTopicAgent[] useragents);
}`;