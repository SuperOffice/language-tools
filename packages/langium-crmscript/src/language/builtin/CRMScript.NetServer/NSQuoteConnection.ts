export const NSQuoteConnection = `/** 
Information about a connection to the ERP system.
*/
class NSQuoteConnection {
    Bool GetAllAccess();
    Integer[] GetAssociateAccessIds();
    String GetConnectorName();
    Bool GetDeleted();
    String GetDisplayDescription();
    String GetDisplayName();
    Integer GetErpConnectionId();
    String GetERPName();
    String GetExtraData();
    NSPluginResponse GetInitializeResponse();
    Bool GetIsAvailable();
    NSPriceList[] GetPriceLists();
    Integer GetQuoteConnectionId();
    Integer GetRank();
    Integer[] GetUserGroupAccessIds();
    Void SetAllAccess(Bool allAccess);
    Void SetAssociateAccessIds(Integer[] associateAccessIds);
    Void SetConnectorName(String connectorName);
    Void SetDeleted(Bool deleted);
    Void SetDisplayDescription(String displayDescription);
    Void SetDisplayName(String displayName);
    Void SetErpConnectionId(Integer erpConnectionId);
    Void SetERPName(String eRPName);
    Void SetExtraData(String extraData);
    Void SetInitializeResponse(NSPluginResponse initializeResponse);
    /** 
    Whether or not the specified connection is available. Typically, without network access the availability is false.
    */
    Void SetIsAvailable(Bool isAvailable);
    Void SetPriceLists(NSPriceList[] priceLists);
    Void SetQuoteConnectionId(Integer quoteConnectionId);
    Void SetRank(Integer rank);
    Void SetUserGroupAccessIds(Integer[] userGroupAccessIds);
}`;