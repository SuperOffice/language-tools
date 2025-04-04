export const NSMessageDeliveryStatus = `/** 
Describes the message status.
*/
class NSMessageDeliveryStatus {
    Integer GetMessagingId();
    Integer GetStatus();
    String GetStatusDescription();
    Void SetMessagingId(Integer messagingId);
    Void SetStatus(Integer status);
    Void SetStatusDescription(String statusDescription);
}`;