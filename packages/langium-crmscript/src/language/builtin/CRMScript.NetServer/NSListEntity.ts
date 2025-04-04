export const NSListEntity = `/** 
The list entity contains information about a specific list.
*/
class NSListEntity {
    Bool GetDeleted();
    Integer GetId();
    Bool GetInUseByUserDefinedFields();
    Bool GetIsCustomList();
    Bool GetIsMDOList();
    String GetListType();
    String GetName();
    Integer GetRank();
    String GetTooltip();
    Bool GetUseGroupsAndHeadings();
    Void SetDeleted(Bool deleted);
    Void SetId(Integer id);
    Void SetInUseByUserDefinedFields(Bool inUseByUserDefinedFields);
    Void SetIsCustomList(Bool isCustomList);
    Void SetIsMDOList(Bool isMDOList);
    Void SetListType(String listType);
    Void SetName(String name);
    Void SetRank(Integer rank);
    Void SetTooltip(String tooltip);
    Void SetUseGroupsAndHeadings(Bool useGroupsAndHeadings);
}`;