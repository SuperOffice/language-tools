export const NSHistoryRequest = `/** 
Specification for a request for history information, by ID. It is possible to ask for rights for a new record (insert), but then you need to supply the parent ID for entities that have parents (projectmember, selectionmember, person).
*/
class NSHistoryRequest {
    String GetEntityName();
    Integer GetEntityOrParentId();
    Bool GetRequestForNewRecord();
    Void SetEntityName(String entityName);
    Void SetEntityOrParentId(Integer entityOrParentId);
    Void SetRequestForNewRecord(Bool requestForNewRecord);
}`;