export const NSTemporaryKeyInfo = `/** 
The fields returned when checking a temporary key.
*/
class NSTemporaryKeyInfo {
    Integer GetDomain();
    Bool GetIsExpired();
    Integer GetPersonId();
    Integer GetTargetId();
    Void SetDomain(Integer domain);
    Void SetIsExpired(Bool isExpired);
    Void SetPersonId(Integer personId);
    Void SetTargetId(Integer targetId);
}`;