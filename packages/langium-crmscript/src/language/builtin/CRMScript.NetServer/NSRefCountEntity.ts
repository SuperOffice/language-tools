export const NSRefCountEntity = `/** 
A refcount entity for a number allocation.
*/
class NSRefCountEntity {
    Bool GetAllocate();
    Bool GetAllowBlank();
    Integer GetCurrentValue();
    String GetField();
    Bool GetReadOnly();
    Integer GetRecordId();
    Integer GetRefCountsId();
    Integer GetSatPrefix();
    NSMDOListItem[] GetSuggestedRecords();
    Integer GetTravelPrefix();
    /** 
    Checks that entered value is unique
    */
    Bool GetUnique();
    Void SetAllocate(Bool allocate);
    Void SetAllowBlank(Bool allowBlank);
    Void SetCurrentValue(Integer currentValue);
    Void SetField(String field);
    Void SetReadOnly(Bool readOnly);
    Void SetRecordId(Integer recordId);
    Void SetRefCountsId(Integer refCountsId);
    Void SetSatPrefix(Integer satPrefix);
    Void SetSuggestedRecords(NSMDOListItem[] suggestedRecords);
    Void SetTravelPrefix(Integer travelPrefix);
    /** 
    Checks that entered value is unique
    */
    Void SetUnique(Bool unique);
}`;