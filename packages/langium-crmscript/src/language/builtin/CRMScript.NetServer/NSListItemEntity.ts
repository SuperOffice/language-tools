export const NSListItemEntity = `/** 
The list item entity contains generic list item information.
*/
class NSListItemEntity {
    Bool GetDeleted();
    Integer GetId();
    String GetName();
    Integer GetRank();
    String GetTooltip();
    Integer GetUdListDefinitionId();
    Void SetDeleted(Bool deleted);
    Void SetId(Integer id);
    Void SetName(String name);
    Void SetRank(Integer rank);
    Void SetTooltip(String tooltip);
    Void SetUdListDefinitionId(Integer udListDefinitionId);
}`;