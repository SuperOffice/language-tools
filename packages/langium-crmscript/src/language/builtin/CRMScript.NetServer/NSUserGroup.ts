export const NSUserGroup = `/** 
The main user group that this user belongs to.
*/
class NSUserGroup {
    Bool GetDeleted();
    Integer GetId();
    Integer GetRank();
    String GetTooltip();
    String GetValue();
    /** 
    Marks a user group.
    */
    Void SetDeleted(Bool deleted);
    Void SetId(Integer id);
    Void SetRank(Integer rank);
    Void SetTooltip(String tooltip);
    Void SetValue(String value);
}`;