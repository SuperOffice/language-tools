export const NSProjectTypeEntity = `/** 
Carrier object for ProjectTypeEntity.
*/
class NSProjectTypeEntity {
    Bool GetDeleted();
    Integer GetDurationUnit();
    Bool GetHasGuide();
    Bool GetIsAutoAdvance();
    String GetName();
    Integer GetProjectDuration();
    Integer GetProjTypeId();
    Integer GetRank();
    NSSelectableMDOListItem[] GetStages();
    String GetTooltip();
    Void SetDeleted(Bool deleted);
    Void SetDurationUnit(Integer durationUnit);
    Void SetHasGuide(Bool hasGuide);
    Void SetIsAutoAdvance(Bool isAutoAdvance);
    Void SetName(String name);
    Void SetProjectDuration(Integer projectDuration);
    Void SetProjTypeId(Integer projTypeId);
    Void SetRank(Integer rank);
    Void SetStages(NSSelectableMDOListItem[] stages);
    Void SetTooltip(String tooltip);
}`;