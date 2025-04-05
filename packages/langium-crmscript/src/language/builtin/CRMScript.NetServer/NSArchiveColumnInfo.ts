export const NSArchiveColumnInfo = `/** 
Information about the definition and properties of an archive display column. It is used by the archive MDO providers to construct column lists for the configuration dialogs, and by the archive control to know what type (and other properties) each column has. The class is serializable and used on both the application and web server sides.
*/
class NSArchiveColumnInfo {
    Bool GetCanOrderBy();
    Bool GetCanRestrictBy();
    String GetDisplayName();
    String GetDisplayTooltip();
    String GetDisplayType();
    String GetHeadingIconHint();
    String GetIconHint();
    Bool GetIsVisible();
    String GetName();
    String GetRestrictionListName();
    String GetRestrictionType();
    String GetSourceCode();
    String GetWidth();
    /** 
    Sets the CanOrderBy property.
    */
    Void SetCanOrderBy(Bool canOrderBy);
    /** 
    Sets whether the column can be used as an restriction.
    */
    Void SetCanRestrictBy(Bool canRestrictBy);
    Void SetDisplayName(String displayName);
    Void SetDisplayTooltip(String displayTooltip);
    Void SetDisplayType(String displayType);
    Void SetHeadingIconHint(String headingIconHint);
    Void SetIconHint(String iconHint);
    /** 
    Sets the visibility of the column.
    */
    Void SetIsVisible(Bool isVisible);
    Void SetName(String name);
    Void SetRestrictionListName(String restrictionListName);
    Void SetRestrictionType(String restrictionType);
    Void SetSourceCode(String code);
    Void SetWidth(String width);
}`;