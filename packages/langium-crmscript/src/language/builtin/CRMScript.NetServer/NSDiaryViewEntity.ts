export const NSDiaryViewEntity = `/** 
The DiaryView Service. The service implements all services working with the DiaryView object.
*/
class NSDiaryViewEntity {
    NSSelectableMDOListItem[] GetAssociateList();
    Integer GetAssocId();
    Integer GetDiaryViewId();
    String GetName();
    Integer GetRank();
    String GetTooltip();
    Integer GetTzLocationId();
    Integer GetVisibleColumns();
    Void SetAssociateList(NSSelectableMDOListItem[] associateList);
    Void SetAssocId(Integer assocId);
    Void SetDiaryViewId(Integer diaryViewId);
    Void SetName(String name);
    Void SetRank(Integer rank);
    Void SetTooltip(String tooltip);
    Void SetTzLocationId(Integer tzLocationId);
    Void SetVisibleColumns(Integer visibleColumns);
}`;