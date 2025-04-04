export const NSRelationDefinitionEntity = `/** 
A relation definition entity with source and destination tables.
*/
class NSRelationDefinitionEntity {
    Bool GetDeleted();
    Integer GetDestination();
    String GetName();
    String GetPassiveText();
    Integer GetRank();
    Integer GetReldefId();
    Integer GetSource();
    String GetTooltip();
    Void SetDeleted(Bool deleted);
    Void SetDestination(Integer destination);
    Void SetName(String name);
    Void SetPassiveText(String passiveText);
    Void SetRank(Integer rank);
    Void SetReldefId(Integer reldefId);
    Void SetSource(Integer source);
    Void SetTooltip(String tooltip);
}`;