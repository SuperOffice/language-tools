export const NSMailMergeTask = `/** 
Properties describing a task to create on recipients of a mail merge.
*/
class NSMailMergeTask {
    Integer GetCompleted();
    String GetDescription();
    Integer GetDuration();
    Integer GetOwnerAssociateId();
    Integer GetPriorityId();
    Integer GetProjectId();
    Integer GetSaleId();
    Bool GetSingleEntryOnEachCompany();
    DateTime GetStartDate();
    Integer GetTypeId();
    NSVisibleFor GetVisibleFor();
    Void SetCompleted(Integer completed);
    Void SetDescription(String description);
    Void SetDuration(Integer duration);
    Void SetOwnerAssociateId(Integer ownerAssociateId);
    Void SetPriorityId(Integer priorityId);
    Void SetProjectId(Integer projectId);
    Void SetSaleId(Integer saleId);
    Void SetSingleEntryOnEachCompany(Bool singleEntryOnEachCompany);
    undefined SetStartDate(DateTime startDate);
    Void SetTypeId(Integer typeId);
    Void SetVisibleFor(NSVisibleFor visibleFor);
}`;