export const NSArchiveRestrictionGroup = `/** 
Carrier for restriction group. Contains all the search restrictions for the group - that is, ArchiveRestrictionInfo - objects, including info such as rank and name.
*/
class NSArchiveRestrictionGroup {
    String GetDescription();
    String GetName();
    Integer GetRank();
    NSArchiveRestrictionInfo[] GetRestrictions();
    Void SetDescription(String description);
    Void SetName(String name);
    Void SetRank(Integer rank);
    Void SetRestrictions(NSArchiveRestrictionInfo[] restrictions);
}`;