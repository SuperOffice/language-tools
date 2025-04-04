export const SpmShipment = `/** 
Denotes a shipment in the eMarketeer module. A SpmShipment object will be responsible for the actual shipment. This object needs a SpmStaticList and a SpmMessage object as input.
*/
class SpmShipment {
    /** 
    Adds a list of recipients to the shipment.
    */
    Void addList(Integer list);
    /** 
    Adds a CRM list of project members to shipment.
    */
    Void addListCRMProject(Integer id);
    /** 
    Adds a CRM selection to shipment.
    */
    Void addListCRMSelection(Integer id);
    /** 
    Adds a selection list to shipment.
    */
    Void addListSelection(Integer id);
    /** 
    Adds a ticket selection list to shipment.
    */
    Void addListTicketSelection(Integer id);
    /** 
    Saves the SpmShipment object.
    */
    Integer save();
    /** 
    Sets the descriptive text of the SpmShipment.
    */
    Void setDescription(String description);
    /** 
    Sets the folder that this SpmShipment will be stored in.
    */
    Void setFolderId(Integer folderId);
    /** 
    Sets the from address of the outgoing email.
    */
    Void setFrom(String from);
    /** 
    Sets the ID of the SpmMessage object that will be used for the shipment.
    */
    Void setMessage(Integer messageId);
    /** 
    Sets the rate of outgoing emails per minute for this shipment.
    */
    Void setSendRate(Integer sendRate);
    /** 
    Sets the date and time when the shipment will be started.
    */
    undefined setStartDate(DateTime start);
}`;