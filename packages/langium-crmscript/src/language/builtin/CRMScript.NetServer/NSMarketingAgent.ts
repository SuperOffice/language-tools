export const NSMarketingAgent = `/** 
Agent used for Marketing functions, such as Forms.
*/
class NSMarketingAgent {
    /** 
    Sets default values into a new NSFormEntity.
    */
    NSFormEntity CreateDefaultFormEntity();
    /** 
    Sets default values into a new NSFormSubmissionEntity.
    */
    NSFormSubmissionEntity CreateDefaultFormSubmissionEntity();
    /** 
    Sets default values into a new NSShipmentMessageBlockEntity.
    */
    NSShipmentMessageBlockEntity CreateDefaultShipmentMessageBlockEntity();
    /** 
    Sets default values into a new NSShipmentMessageEntity.
    */
    NSShipmentMessageEntity CreateDefaultShipmentMessageEntity();
    /** 
    Deletes the NSFormEntity
    */
    Void DeleteFormEntity(Integer formEntity);
    /** 
    Deletes the NSFormSubmissionEntity
    */
    Void DeleteFormSubmissionEntity(Integer formSubmissionEntity);
    /** 
    Deletes the NSShipmentMessageBlockEntity
    */
    Void DeleteShipmentMessageBlockEntity(Integer shipmentMessageBlockEntity);
    /** 
    Deletes the NSShipmentMessageEntity
    */
    Void DeleteShipmentMessageEntity(Integer shipmentMessageEntity);
    /** 
    Gets an NSFormEntity object.
    */
    NSFormEntity GetFormEntity(Integer formEntityId);
    /** 
    Gets an NSFormSubmissionEntity object.
    */
    NSFormSubmissionEntity GetFormSubmissionEntity(Integer formSubmissionEntityId);
    /** 
    Gets a shipment message from its shipment address ID
    */
    NSPreviewMailing GetPreviewMailing(Integer shipmentAddrId);
    /** 
    Gets a shipment from its shipment ID
    */
    NSPreviewMailingHeader GetPreviewMailingHeader(Integer shipmentId);
    /** 
    Gets an NSShipmentMessageBlockEntity object.
    */
    NSShipmentMessageBlockEntity GetShipmentMessageBlockEntity(Integer shipmentMessageBlockEntityId);
    /** 
    Gets an NSShipmentMessageEntity object.
    */
    NSShipmentMessageEntity GetShipmentMessageEntity(Integer shipmentMessageEntityId);
    /** 
    Gets the saved user blocks to be used in a shipment/mailing message
    */
    NSShipmentMessageBlockEntity[] GetUserBlocks(Integer associateId);
    /** 
    Updates the existing NSFormEntity or creates a new NSFormEntity if the id parameter is 0
    */
    NSFormEntity SaveFormEntity(NSFormEntity formEntity);
    /** 
    Updates the existing NSFormSubmissionEntity or creates a new NSFormSubmissionEntity if the id parameter is 0
    */
    NSFormSubmissionEntity SaveFormSubmissionEntity(NSFormSubmissionEntity formSubmissionEntity);
    /** 
    Updates the existing NSShipmentMessageBlockEntity or creates a new NSShipmentMessageBlockEntity if the id parameter is 0
    */
    NSShipmentMessageBlockEntity SaveShipmentMessageBlockEntity(NSShipmentMessageBlockEntity shipmentMessageBlockEntity);
    /** 
    Updates the existing NSShipmentMessageEntity or creates a new NSShipmentMessageEntity if the id parameter is 0
    */
    NSShipmentMessageEntity SaveShipmentMessageEntity(NSShipmentMessageEntity shipmentMessageEntity);
    /** 
    Tries to verify a Google recaptcha token. The token is gained from the recaptcha frontend component
    */
    Bool VerifyGoogleRecaptcha(String token, String optionalSecretKey);
}`;