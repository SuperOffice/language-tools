export const NSMDOListItem = `/** 
Carrier object for MDOListItem.
*/
class NSMDOListItem {
    NSMDOListItem[] GetChildItems();
    Integer GetColorBlock();
    Bool GetDeleted();
    String GetExtraInfo();
    String GetFullName();
    String GetIconHint();
    Integer GetId();
    String GetName();
    Integer GetRank();
    String GetStyleHint();
    String GetToolTip();
    String GetType();
    Void SetChildItems(NSMDOListItem[] childItems);
    Void SetColorBlock(Integer colorBlock);
    Void SetDeleted(Bool deleted);
    Void SetExtraInfo(String extraInfo);
    Void SetFullName(String fullName);
    Void SetIconHint(String iconHint);
    Void SetId(Integer id);
    Void SetName(String name);
    Void SetRank(Integer rank);
    Void SetStyleHint(String styleHint);
    Void SetToolTip(String toolTip);
    Void SetType(String type);
}`;