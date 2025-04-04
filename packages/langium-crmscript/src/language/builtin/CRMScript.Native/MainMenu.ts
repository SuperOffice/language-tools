export const MainMenu = `/** 
Used to control the main (left-side) menu of SuperOffice CRM. Customizing the main menu means modifying the corresponding trigger.
*/
class MainMenu {
    /** 
    Adds a group to the main menu (navigator) with the given label and image. By default, it appends the item to the bottom of the main menu. Use one of the other addGroup variants to specify the exact position or on-click JavaScript code.
    */
    Void addGroup(String label, String image);
    /** 
    Adds a group to the main menu (navigator) with the given label and image in a specific position. This will shift the index of all subsequent groups. Thus, you should not make assumptions about which slot a group is in.
    */
    Void addGroup(String label, String image, Integer position);
    /** 
    Adds a group to the main menu (navigator) with the given label and image in a specific position. This will shift the index of all subsequent groups. Thus, you should not make assumptions about which slot a group is in.<p></p>
    In addition, you can specify on-click JavaScript code. Use this to create clickable menu groups.
    */
    Void addGroup(String label, String image, Integer position, String onClick);
    /** 
    Adds an item to the SuperOffice main menu (navigator).
    */
    Void addItem(String label, String url);
    /** 
    Adds an item to the SuperOffice main menu (navigator).
    */
    Void addItem(String label, String url, Integer group, Integer position);
    /** 
    Adds an item to the SuperOffice main menu (navigator).
    */
    Void addItem(String label, String url, Integer group, Integer position, String onClick, String itemId, String target);
    /** 
    Adds an item to the SuperOffice main menu (navigator).
    */
    Void addItem(String label, String url, Integer group, Integer position, String onClick, String itemId, String target, String iconUrl);
    /** 
    Clears all the contents of the menu.
    */
    Void clear();
    /** 
    Removes the group at the given index (starts at 0) from the main menu.
    */
    Void deleteGroup(Integer index);
    /** 
    Removes the item at the given index from the group.
    */
    Void deleteItem(Integer group, Integer index);
    /** 
    Returns the label (ID) of a group in the main menu given its position.
    */
    String getGroupId(Integer group);
    /** 
    Returns the position of a specific group in the main menu given its label (ID)
    */
    Integer getGroupIndex(String label);
    /** 
    Returns the label (ID) of an item in a group given its position.
    */
    String getItemId(Integer group, Integer pos);
    /** 
    Returns the position of a specific item in the group given its label (ID).
    */
    Integer getItemIndex(Integer group, String label);
    /** 
    Returns the current number of groups in the main menu.
    */
    Integer getNumGroups();
    /** 
    Returns the current number of items in the group.
    */
    Integer getNumItems(Integer group);
}`;