export const NSMailbox = `/** 
Carrier containing information about a Service mailbox.
*/
class NSMailbox {
    String GetAddress();
    /** 
    The name of the category that the mailbox is connected to
    */
    String GetCategoryName();
    Integer GetMailInFilterId();
    String GetPriorityName();
    Void SetAddress(String address);
    Void SetCategoryName(String categoryName);
    /** 
    The primary key (auto-incremented)
    */
    Void SetMailInFilterId(Integer mailInFilterId);
    /** 
    The name of the priority that the mailbox is connected to
    */
    Void SetPriorityName(String priorityName);
}`;