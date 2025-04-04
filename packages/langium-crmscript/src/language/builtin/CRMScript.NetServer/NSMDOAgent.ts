export const NSMDOAgent = `/** 
MDO Lists, reading, searching, and item lookup.
*/
class NSMDOAgent {
    /** 
    Gets an MDO list.
    */
    NSMDOListItem[] GetList(String name, Bool forceFlatList, String additionalInfo, Bool onlyHistory);
    /** 
    Retrieves the UdListDefinition ID of a list, by its name.
    */
    Integer GetListIdByListName(String name);
    /** 
    Returns a single list item
    */
    NSMDOListItem GetListItem(String listName, Integer id);
    /** 
    Returns a list of all MDO List names.
    */
    String[] GetListNames();
    /** 
    Get an MDO list with own history list.
    */
    NSMDOListItem[] GetListWithHistory(String name, Bool forceFlatList, String additionalInfo, Integer[] historyItems, Bool onlyHistory);
    /** 
    Gets an MDO list with restrictions.
    */
    NSMDOListItem[] GetListWithRestriction(String name, String additionalInfo, String searchValue);
    /** 
    Gets a Selectable MDO list.
    */
    NSSelectableMDOListItem[] GetSelectableList(String name, Bool forceFlatList, String additionalInfo, Bool onlyHistory);
    /** 
    Gets a Selectable MDO list with own history list.
    */
    NSSelectableMDOListItem[] GetSelectableListWithHistory(String name, Bool forceFlatList, String additionalInfo, Integer[] historyItems, Bool onlyHistory);
    /** 
    Gets a Selectable MDO list with restrictions.
    */
    NSSelectableMDOListItem[] GetSelectableListWithRestriction(String name, String additionalInfo, String searchValue);
    /** 
    Returns a flat Selectable MDO List.
    */
    NSSelectableMDOListItem[] GetSelectableSimpleList(String name);
    /** 
    Returns a simple flat MDO List.
    */
    NSMDOListItem[] GetSimpleList(String name);
    /** 
    Saves the selected values as selected by their given list representation.
    */
    NSSelectableMDOListItem[] SetSelected(String name, String additionalInfo);
}`;