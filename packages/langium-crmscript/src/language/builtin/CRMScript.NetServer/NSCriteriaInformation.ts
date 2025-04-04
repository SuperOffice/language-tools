export const NSCriteriaInformation = `/** 
Carrier for criteria information. It contains all the search criteria - that is, ArchiveRestrictionInfo - objects, including a  column specification. In addition, it contains the same criteria expressed as an archive, with an array of ArchiveColumnInfo specifications and a set of ArchiveRow rows. The rows of the archive form a subset of the restriction array.
*/
class NSCriteriaInformation {
    NSArchiveColumnInfo[] GetCriteriaArchiveColumns();
    NSArchiveListItem[] GetCriteriaArchiveRows();
    NSArchiveRestrictionGroup[] GetRestrictionGroups();
    NSArchiveRestrictionInfo[] GetRestrictions();
    Void SetCriteriaArchiveColumns(NSArchiveColumnInfo[] criteriaArchiveColumns);
    Void SetCriteriaArchiveRows(NSArchiveListItem[] criteriaArchiveRows);
    Void SetRestrictionGroups(NSArchiveRestrictionGroup[] restrictionGroups);
    Void SetRestrictions(NSArchiveRestrictionInfo[] restrictions);
}`;