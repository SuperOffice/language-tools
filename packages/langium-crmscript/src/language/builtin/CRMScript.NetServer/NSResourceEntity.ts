export const NSResourceEntity = `/** 
The resource entity contains resource information.
*/
class NSResourceEntity {
    Bool GetDeleted();
    Bool GetIsLocation();
    String GetLocationAddress();
    String GetName();
    Integer GetRank();
    Integer GetResourceId();
    String GetTooltip();
    Void SetDeleted(Bool deleted);
    Void SetIsLocation(Bool isLocation);
    Void SetLocationAddress(String locationAddress);
    Void SetName(String name);
    Void SetRank(Integer rank);
    Void SetResourceId(Integer resourceId);
    Void SetTooltip(String tooltip);
}`;