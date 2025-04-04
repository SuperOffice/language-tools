export const NSCheckoutInfo = `/** 
Information about the checked-out state of one document, describing whether it is checked out, and to whom.
*/
class NSCheckoutInfo {
    Integer GetAssociateId();
    String GetName();
    Integer GetState();
    Void SetAssociateId(Integer associateId);
    Void SetName(String name);
    Void SetState(Integer state);
}`;