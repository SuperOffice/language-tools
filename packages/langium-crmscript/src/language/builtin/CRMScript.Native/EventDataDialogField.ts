export const EventDataDialogField = `/** 
Utility class to generate a field for dialog to use in CRMScript triggers.
*/
class EventDataDialogField {
    /** 
    Adds individual items to list.
    */
    Void addListItem(String id);
    /** 
    Returns additional info for the named list.
    */
    String getAdditionalInfo();
    /** 
    Returns true if field is allowed to be empty instead of 0.
    */
    Bool getAllowBlank();
    /** 
    Returns true if root selection is allowed.
    */
    Bool getAllowRootSelection();
    /** 
    Returns true if days is enabled, used with timespan field type.
    */
    Bool getDays();
    /** 
    Returns default value set.
    */
    String getDefault();
    /** 
    Returns default float value set. Only use for float field type.
    */
    Float getDefaultFloat();
    /** 
    Force flat list if using list name.
    */
    Bool getForceFlatList();
    /** 
    Returns identifier for field.
    */
    String getId();
    /** 
    If true, hide empty roots in search. Default is false. Only applies when showFullPath is true and field type is list.
    */
    Bool getHideEmptyRootsInSearch();
    /** 
    Returns true if hours is enabled, used with timespan field type.
    */
    Bool getHours();
    /** 
    Returns label for field.
    */
    String getLabel();
    /** 
    Returns listname for field.
    */
    String getListName();
    /** 
    If true, field has to have a valid value.
    */
    Bool getMandatory();
    /** 
    Returns true if minutes is enabled, used with timespan field type.
    */
    Bool getMinutes();
    /** 
    Returns placeholder text for field.
    */
    String getPlaceholder();
    /** 
    Returns true if seconds is enabled, used with timespan field type.
    */
    Bool getSeconds();
    /** 
    Show all children when searching. Default is false. Only applies if showFullPath is true and field type is list.
    */
    Bool getShowAllChildrenInSearch();
    /** 
    If true, list is preloaded so that the full path is shown.
    */
    Bool getShowFullPath();
    /** 
    Returns what type of field.
    */
    String getType();
    /** 
    Sets additional info for the named list.
    */
    Void setAdditionalInfo(String info);
    /** 
    Set to true if field is allowed to be empty instead of 0.
    */
    Void setAllowBlank(Bool allowBlank);
    /** 
    Set to true if root selection is allowed.
    */
    Void setAllowRootSelection(Bool allowRoot);
    /** 
    Set to true if days is enabled, used with timespan field type.
    */
    Void setDays(Bool enable);
    /** 
    Sets default value for field.
    */
    Void setDefault(String default);
    /** 
    Sets default float value. Only use for float field type.
    */
    Void setDefaultFloat(Float default);
    /** 
    Force flat list if using list name.
    */
    Void setForceFlatList(Bool enable);
    /** 
    Sets label for field.
    */
    Void setLabel(String enable);
    /** 
    Set listname for field.
    */
    Void setListName(String listName);
    /** 
    Set identifier for field.
    */
    Void setId(String identifier);
    /** 
    If true, hide empty roots in search. Default is false. Only applies when showFullPath is true and field type is list.
    */
    Void setHideEmptyRootsInSearch(Bool enable);
    /** 
    Returns true if hours is enabled, used with timespan field type.
    */
    Void setHours(Bool enable);
    /** 
    If true, field has to have a valid value.
    */
    Void setMandatory(Bool mandatory);
    /** 
    Returns true if minutes is enabled, used with timespan field type.
    */
    Void setMinutes(Bool enable);
    /** 
    Sets placeholder text for field.
    */
    Void setPlaceholder(String placeholder);
    /** 
    Returns true if seconds is enabled, used with timespan field type.
    */
    Void setSeconds(Bool enable);
    /** 
    Show all children when searching. Default is false. Only applies if showFullPath is true and field type is list.
    */
    Void setShowAllChildrenInSearch(Bool enable);
    /** 
    If true, list is preloaded so that the full path is shown.
    */
    Void setShowFullPath(Bool enable);
    /** 
    Sets what type of field.
    */
    Void setType(String type);
}`;