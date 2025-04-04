export const NSArchiveListItem = `class NSArchiveListItem {
    Map GetColumnData();
    String GetEntityName();
    String GetLinkHint();
    Integer GetPrimaryKey();
    String GetStyleHint();
    /** 
    Each column data item contains a display value, a tooltip hint, a link hint, and an ORDERBY value.<p></p>
    The display value is encoded by the CultureDataFormatter and can be decoded or localized by that class. All other values are optional.<p></p>
    Tooltip hints can be passed to the TooltipProvider (Tooltip service) to be translated into an actual tooltip.
    */
    Void SetColumnData(Map columnData);
    Void SetEntityName(String entityName);
    Void SetLinkHint(String linkHint);
    Void SetPrimaryKey(Integer primaryKey);
    Void SetStyleHint(String styleHint);
}`;