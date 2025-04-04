export const SpmCustomerList = `/** 
SpmCustomerList
*/
class SpmCustomerList {
    /** 
    Adds a recipient to the list.
    */
    Void addRecipient(Integer customerId);
    /** 
    Deletes the current recipients list.
    */
    Bool delete();
    /** 
    Loads an existing customer list.
    */
    Bool load(Integer id);
    /** 
    If you have loaded a valid customer list, this method will remove all recipients both from the database and any you may have added using "addRecipient". Be aware that even if you do not save the list, the recipients will still be removed from the database.
    */
    Void removeRecipients();
    /** 
    Saves the current list. If the list does not already exist in the database, it will be created.
    */
    Integer save();
    /** 
    Sets the folder for this list.
    */
    Void setFolderId(Integer folderId);
    /** 
    Sets the name of the list.
    */
    Void setName(String name);
}`;