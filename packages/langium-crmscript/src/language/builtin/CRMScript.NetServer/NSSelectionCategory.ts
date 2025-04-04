export const NSSelectionCategory = `class NSSelectionCategory {
    /** 
    Gets the primary key (ID) for the SelectionCategory
    */
    Integer GetId();
    /** 
    Gets the tooltip description for the SelectionCategory list item.
    */
    String GetTooltip();
    /** 
    Gets the name of the SelectionCategory.
    */
    String GetValue();
    /** 
    Sets the primary key (ID) for the SelectionCategory
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the SelectionCategory list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the SelectionCategory item.
    */
    Void SetValue(String value);
}`;