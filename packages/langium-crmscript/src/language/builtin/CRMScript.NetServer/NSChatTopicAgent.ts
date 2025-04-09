export const NSChatTopicAgent = `/** 
User agents within a chat topic. Which users are assigned and what roles they have within the chat topic. Carrier object for ChatTopicAgent.
*/
class NSChatTopicAgent {
    Bool GetCanListen();
    Bool GetCanManage();
    Bool GetCanNotify();
    /** 
    True if the user can respond to chats in this topic
    */
    Bool GetCanRespond();
    Integer GetTopicId();
    NSAssociate GetUser();
    Void SetCanListen(Bool canListen);
    Void SetCanManage(Bool canManage);
    Void SetCanNotify(Bool canNotify);
    Void SetCanRespond(Bool canRespond);
    Void SetTopicId(Integer topicId);
    Void SetUser(NSAssociate user);
}`;