export const NSArchiveRestrictionInfo = `/** 
Carries information about a restriction on the query of an archive provider.
*/
class NSArchiveRestrictionInfo {
    NSArchiveColumnInfo GetColumnInfo();
    String[] GetDisplayValues();
    /** 
    Gets inter-restriction operator that describes how this restriction is related to the next one in an array.
    */
    Integer GetInterOperator();
    /** 
    Gets the parenthesis (if any) associated with this restriction.*/
    Integer GetInterParenthesis();
    Bool GetIsActive();
    String GetName();
    String GetOperator();
    Integer GetParenthesis();
    NSArchiveRestrictionInfo[] GetSubRestrictions();
    Integer GetUniqueHash();
    String[] GetValues();
    Void SetColumnInfo(NSArchiveColumnInfo columnInfo);
    Void SetDisplayValues(String[] displayValues);
    /** 
    Gets inter-restriction operator that describes how this restriction is related to the next one in an array.
    */
    Void SetInterOperator(Integer operator);
    /** 
    Gets the parenthesis (if any) associated with this restriction.*/
    Void SetInterParenthesis(Integer interParenthesis);
    /** 
    Activates or deactivates a restriction.
    */
    Void SetIsActive(Bool isActive);
    undefined SetName(String name);
    Void SetOperator(String operator);
    Void SetParenthesis(Integer p);
    Void SetSubRestrictions(NSArchiveRestrictionInfo[] subRestrictions);
    Void SetUniqueHash(Integer uniqueHash);
    Void SetValues(String[] values);
}`;