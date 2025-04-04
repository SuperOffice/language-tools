export const SpmStaticList = `/** 
With this class you can create and edit static lists in the eMarketeer. A static list consist of one or more email addresses (and possible a matching name) which will be used when creating a shipment.
*/
class SpmStaticList {
    /** 
    Adds a recipient to the static list.
    */
    Void addRecipient(String address, String name);
    /** 
    Deletes a static list.
    */
    Bool delete();
    /** 
    Gets a map of all the recipients in this list. The first element will be the email address and the second element the name of the recipient.
    */
    Map getRecipients();
    /** 
    Loads an existing static list.
    */
    Bool load(Integer id);
    /** 
    Removes a recipient from the list identified by the email address.
    */
    Void removeRecipient(String address);
    /** 
    Saves the list and the recipients.
    */
    Integer save();
    /** 
    Sets folder ID for a static list.
    */
    Void setFolderId(Integer folderId);
    /** 
    Sets the name of this list.
    */
    Void setName(String name);
}`;