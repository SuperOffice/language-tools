export const NSMessagingAgent = `/** 
SMS and other external messaging systems.
*/
class NSMessagingAgent {
    /** 
    Creates a new message and insert it in the message queue. (inbox)
    */
    Void CreateMessage(NSIncomingMessage incomingMessage);
    /** 
    Gets delivery status
    */
    NSMessageDeliveryStatus[] GetDeliveryStatus(Integer[] messagingIds);
    NSProviderInfo[] GetPlugins();
    /** 
    Sends an array of messages
    */
    NSMessageDeliveryStatus[] SendMessages(String plugin, NSOutgoingMessage[] outgoingMessages);
    /** 
    Sends an array of messages using given config
    */
    NSMessageDeliveryStatus[] SendMessagesWithConfig(String plugin, NSOutgoingMessage[] outgoingMessages, Map config);
    /** 
    Sets or change the delivery status on an outgoing message.
    */
    Void SetDeliveryStatus(String plugin, String externalMessageId, Integer status, String statusDescription);
}`;