export const NSHistory = `/** 
The usage history of the currently logged in user is represented as History objects.
*/
class NSHistory {
    Integer GetAssociateId();
    Integer GetHistoryId();
    String GetHistoryName();
    Integer GetId();
    String GetItemInfo();
    String GetName();
    Integer GetRank();
    Void SetAssociateId(Integer associateId);
    Void SetHistoryId(Integer historyId);
    Void SetHistoryName(String historyName);
    Void SetId(Integer id);
    Void SetItemInfo(String itemInfo);
    Void SetName(String name);
    Void SetRank(Integer rank);
}`;