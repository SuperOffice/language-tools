export const NSSystemEventEntity = `/** 
Entity for system events.
*/
class NSSystemEventEntity {
    NSAssociate GetActivatedBy();
    DateTime GetEta();
    String GetEventkey();
    String GetEventmess();
    Integer GetExtraInfo();
    Integer GetOwner();
    DateTime GetRegistered();
    Integer GetScope();
    Integer GetSystemEventId();
    Integer GetUpdatedCount();
    Void SetActivatedBy(NSAssociate activatedBy);
    Void SetEta(DateTime eta);
    /** 
    Event key, predefined in code
    */
    Void SetEventkey(String eventkey);
    Void SetEventmess(String eventmess);
    Void SetExtraInfo(Integer extraInfo);
    Void SetOwner(Integer owner);
    Void SetRegistered(DateTime registered);
    Void SetScope(Integer scope);
    Void SetSystemEventId(Integer systemEventId);
    Void SetUpdatedCount(Integer updatedCount);
}`;