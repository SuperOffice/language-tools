export const NSHeadingEntity = `/** 
The heading entity contains generic list item information.
*/
class NSHeadingEntity {
    Bool GetDeleted();
    Integer GetHeadingId();
    String GetName();
    Integer GetRank();
    String GetTooltip();
    Integer GetUdListDefinitionId();
    Void SetDeleted(Bool deleted);
    Void SetHeadingId(Integer headingId);
    Void SetName(String name);
    Void SetRank(Integer rank);
    Void SetTooltip(String tooltip);
    Void SetUdListDefinitionId(Integer udListDefinitionId);
}`;