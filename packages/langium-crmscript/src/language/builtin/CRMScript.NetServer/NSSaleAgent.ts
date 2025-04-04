export const NSSaleAgent = `/** 
Sale data services.
*/
class NSSaleAgent {
    Void AddSaleStakeholders(Integer saleId, NSSaleStakeholder[] saleStakeholders);
    /** 
    Re-calculates all the next due dates
    */
    Void BatchUpdateNextDueDate();
    /** 
    Sets default values into a new NSSaleEntity.
    */
    NSSaleEntity CreateDefaultSaleEntity();
    /** 
    Sets default values into a new NSSaleStakeholder.
    */
    NSSaleStakeholder CreateDefaultSaleStakeholder();
    /** 
    Sets default values into a new NSSaleSummary.
    */
    NSSaleSummary CreateDefaultSaleSummary();
    /** 
    Deletes the NSSaleEntity
    */
    Void DeleteSaleEntity(Integer saleEntity);
    /** 
    Deletes the NSSaleStakeholder
    */
    Void DeleteSaleStakeholder(Integer saleStakeholder);
    Void DeleteSaleStakeholders(Integer[] saleStakeholderIds);
    /** 
    Returns opportunities (open sales) belonging to the user currently logged on
    */
    NSSale[] GetMyOpportunities(Integer count);
    /** 
    Gets the next due date for a sale.
    */
    DateTime GetNextDueDate(Integer saleId);
    /** 
    Gets the next (not deleted) sale stage ID if the current stage is deleted. If the current stage is not deleted, the CurrentStageId is returned.
    */
    Integer GetNextSaleStage(Integer saleId, Bool includeCurrentStage);
    /** 
    Returns all open sales for the contact provided.
    */
    NSSale[] GetOpenSalesForContact(Integer contactId);
    /** 
    Gets the probability percentage for a given sale stage
    */
    Integer GetProbabilityFromStage(Integer stageId);
    /** 
    Returns the latest sales (that are sold) limited by their amount.
    */
    NSSale[] GetRecentSales(Integer amountLimit, Integer count);
    /** 
    Gets an NSSale object.
    */
    NSSale GetSale(Integer saleId);
    /** 
    Gets an NSSaleEntity object.
    */
    NSSaleEntity GetSaleEntity(Integer saleEntityId);
    /** 
    Gets an array of Sale objects.
    */
    NSSale[] GetSaleList(Integer[] saleIds);
    /** 
    Returns all sales within a time period. The sales array can be limited by amount and status.
    */
    NSSale[] GetSalesByDate(DateTime fromDate, DateTime toDate, Integer amountLimit, Integer status);
    /** 
    Returns all sales for the contact provided.
    */
    NSSale[] GetSalesFromContact(Integer contactId, Bool onlyOpenSales);
    /** 
    Returns all sales for the person provided.
    */
    NSSale[] GetSalesFromPerson(Integer personId, Bool onlyOpenSales);
    /** 
    Gets an NSSaleStakeholder object.
    */
    NSSaleStakeholder GetSaleStakeholder(Integer saleStakeholderId);
    NSSaleStakeholder[] GetSaleStakeholderById(Integer[] saleStakeholderIds);
    /** 
    Gets an array of SaleStakeholder objects.
    */
    NSSaleStakeholder[] GetSaleStakeholderList(Integer[] saleStakeholderIds);
    NSSaleStakeholder[] GetSaleStakeholders(Integer saleId);
    NSSaleSummary GetSummaryByAssociate(Integer associateId, DateTime fromDate, DateTime toDate);
    NSSaleSummary GetSummaryByContact(Integer contactId, DateTime fromDate, DateTime toDate);
    NSSaleSummary GetSummaryByGroup(Integer groupId, DateTime fromDate, DateTime toDate);
    /** 
    Returns all open sales, sorted descending with the latest first.
    */
    NSSale[] GetUpcomingSales(Integer weightedAmountLimit, Integer count);
    /** 
    Does this sale have a sale guide associated with its sale type?
    */
    Bool HasGuide(Integer saleId);
    Bool HasGuideActivities(Integer saleId);
    Bool HasStakeholderSetting(Integer saleId);
    /** 
    Checks if the number is unique or required.
    */
    Bool IsNumberValid(Integer contactId, String number);
    Bool OfferAutoNextStageOnApppointmentCompleted(Integer appointmentId);
    /** 
    Updates the existing NSSaleEntity or creates a new NSSaleEntity if the ID parameter is 0.
    */
    NSSaleEntity SaveSaleEntity(NSSaleEntity saleEntity);
    /** 
    Updates the existing NSSaleStakeholder or creates a new NSSaleStakeholder if the id parameter is 0
    */
    NSSaleStakeholder SaveSaleStakeholder(NSSaleStakeholder saleStakeholder);
    /** 
    Changes the status of one or more sales to Lost.
    */
    Void SetAsLost(Integer[] saleIds);
    /** 
    Changes the status of one or more Sales to Sold.
    */
    Void SetAsSold(Integer[] saleIds);
    NSSaleStakeholder[] UpdateSaleStakeholders(NSSaleStakeholder[] stakeholders);
    /** 
    Checks that entity is ready for saving, return error messages by field.
    */
    Map ValidateSaleEntity(NSSaleEntity saleEntity);
}`;