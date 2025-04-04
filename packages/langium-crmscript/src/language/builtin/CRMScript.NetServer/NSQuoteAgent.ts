export const NSQuoteAgent = `/** 
Services for the Quote Management feature, part of the Sale module.
*/
class NSQuoteAgent {
    /** 
    Adds a new quote attachment document to a sale type
    */
    Integer AddSaleTypeQuoteAttachment(Integer saleTypeId, Integer documentId);
    /** 
    Approves a quote version
    */
    NSApproveRejectResponse ApproveQuoteVersion(Integer quoteVersionId, String approvedByText, Integer approvedByAssociateId, String approvalText);
    Bool CanConnectorProvideCapability(Integer quoteConnectionId, String capabilityName);
    /** 
    Copies a quote alternative from the same sale and adds it to a version.
    */
    NSQuoteAlternative CopyQuoteAlternative(Integer quoteVersionId, Integer quoteAlternativeId, String quoteAlternativeName);
    /** 
    Creates a copy of a PriceList in the SuperOffice database
    */
    NSPriceList CopySuperOfficePriceList(Integer originalPriceListId, String newName, DateTime validFrom, DateTime validTo, Integer newCurrencyId, Bool convertCurrency);
    /** 
    Creates a new quote on a sale.
    */
    NSQuoteEntity CreateAndSaveQuote(Integer saleId, Integer connectionId, String firstAlternativeName);
    /** 
    Creates a copy the active version with connected alternatives and quotelines from another sale.
    */
    NSQuoteEntity CreateAndSaveQuoteFromSale(Integer copyFromSaleId, Integer copyToSaleId);
    /** 
    Created a new NSQuoteVersion based on another NSQuoteVersion on the same Quote.
    */
    NSQuoteVersion CreateAndSaveQuoteVersion(Integer quoteVersionId);
    /** 
    Creates a new connection.
    */
    NSQuoteConnection CreateConnectionFromConnectorName(String connectorName);
    /** 
    Sets default values into a new NSPriceList.
    */
    NSPriceList CreateDefaultPriceList();
    /** 
    Sets default values into a new NSProduct.
    */
    NSProduct CreateDefaultProduct();
    /** 
    Sets default values into a new NSQuoteAlternative.
    */
    NSQuoteAlternative CreateDefaultQuoteAlternative();
    /** 
    Looks at the Quote version, related sale and sale type, and ensures that the correct NSQuoteVersionAttachment records exist. This method may create or delete records
    */
    NSQuoteVersionAttachment[] CreateOrUpdateQuoteVersionAttachments(Integer quoteVersionId);
    /** 
    Creates a new quote alternative on a version.
    */
    NSQuoteAlternative CreateQuoteAlternative(Integer quoteVersionId, String quoteAlternativeName, String quoteAlternativeDescription);
    /** 
    Creates a quoteline based on a product key.
    */
    NSQuoteLine CreateQuoteLine(Integer quoteAlternativeId, String eRPProductKey);
    /** 
    Creates a quoteline based on a product.
    */
    NSQuoteLine CreateQuoteLineFromProduct(Integer quoteAlternativeId, NSProduct product);
    /** 
    Marks a connection as deleted.
    */
    Void DeleteConnection(Integer quoteConnectionId);
    /** 
    Deletes the NSPriceList
    */
    Void DeletePriceList(Integer priceList);
    /** 
    Deletes the NSProduct
    */
    Void DeleteProduct(Integer product);
    /** 
    Deletes a Quote
    */
    Void DeleteQuote(Integer quoteId);
    /** 
    Deletes a quote alternative
    */
    Void DeleteQuoteAlternative(Integer quoteAlternativeId);
    /** 
    Deletes the QuoteLine in the SuperOffice database
    */
    Void DeleteQuoteLine(Integer quoteLineId);
    /** 
    Deletes the QuoteLines in the SuperOffice database
    */
    Void DeleteQuoteLines(Integer[] quoteLineIds);
    /** 
    Deletes the sale type quote attachment with the given ID
    */
    Void DeleteSaleTypeQuoteAttachment(Integer saleTypeQuoteAttachmentId);
    /** 
    Gets a product, from the ProductProvider
    */
    NSProduct[] FindProduct(Integer quoteAlternativeId, String userInput, String priceListKey);
    /** 
    Generate all the documents required to send the Quote as an email to the prospect, or an Order Confirmation; it just depends on the template IDs for the lines doc and mail body.
    */
    NSQuotePublishDocuments GenerateQuoteDocuments(Integer quoteVersionId, Integer emailBodyTemplateId, Bool attachMainDocument, Integer quotedProductsTemplateId, Bool includeAttachments, String rawMailSubject);
    /** 
    Gets the available active PriceLists in a specific currency.
    */
    NSPriceList[] GetActivePriceLists(Integer quoteConnectionId, String currency);
    /** 
    Gets the available active PriceLists in a specific currency.
    */
    NSPriceList[] GetActivePriceListsByCurrencyId(Integer quoteConnectionId, Integer currencyId);
    /** 
    Gets all available connections. Some installed connections may not be available to the user.
    */
    NSQuoteConnection[] GetAllAvailableQuoteConnections();
    /** 
    Gets all available connections. Some installed connections may not be available to the user. Includes price lists for the connection.
    */
    NSQuoteConnection[] GetAllAvailableQuoteConnectionsWithPriceLists();
    /** 
    Gets all installed connections. Some installed connections may not be available to the user.
    */
    NSQuoteConnection[] GetAllInstalledQuoteConnections();
    /** 
    Gets the all PriceLists in all currencies, including those inactive.
    */
    NSPriceList[] GetAllPriceLists(Integer quoteConnectionId, String currency);
    /** 
    Gets the all PriceLists in all currencies, including those inactive.
    */
    NSPriceList[] GetAllPriceListsByCurrencyId(Integer quoteConnectionId, Integer currencyId);
    /** 
    Returns all the configuration fields
    */
    NSQuoteLineConfiguration[] GetAllQuoteLineConfigurations();
    /** 
    Used by ADMIN. Asks for metadata needed to populate admin dialog that takes in the information needed to create a connection to an ERP system. The values entered in the dialog are stored in the SuperOffice database and used when InitializeConnector is called by the client.
    */
    Map GetConfigurationFields(Integer connectionId, String connectorName);
    /** 
    Returns the specified connection.
    */
    NSQuoteConnection GetConnection(Integer quoteConnectionId);
    /** 
    Returns the config fields for the connection.
    */
    Map GetConnectionConfigFields(Integer quoteConnectionId);
    /** 
    Returns all connections available for the specified user.
    */
    NSQuoteConnection[] GetConnectionsForAssociate(Integer associateId);
    /** 
    Returns an array of PluginResponseInfos for all failed connection initializations.
    */
    NSPluginResponse[] GetConnectionStartupErrors();
    /** 
    Returns the PluginResponseInfo for the connection initialization.
    */
    NSPluginResponse GetConnectionStartupResponse(Integer quoteConnectionId);
    /** 
    Gets a list of connector capabilities
    */
    String[] GetConnectorCapabilities(Integer quoteConnectionId);
    /** 
    Gets a list of all possible connector capabilities
    */
    String[] GetConnectorCapabilityNames(Integer quoteConnectionId);
    /** 
    Converts an XML string into an object representation.
    */
    NSProductExtraDataField[] GetExtraInfo(String quoteLineExtraData);
    /** 
    Returns the configuration fields that should be visible in the GUI.
    */
    NSQuoteLineConfiguration[] GetInUseQuoteLineConfigurations();
    /** 
    Gets a base64-encoded data stream that is just the order confirmation document, for the given quote version; no permanent document is created or stored anywhere; the result is a PDF
    */
    String GetOrderConfirmation(Integer quoteVersionId, Integer confirmationTemplateId);
    /** 
    If there is a problem with a quoteline, the error description shall be placed in the status and reason fields of the quoteline, if there is a problem with the alternative, the error description shall be placed in the status and reason fields of the alternative. A summary of all the problems (if any) should be placed in the response object. Requires that the Create-Order capability is true.
    */
    NSPluginUrlResponse GetOrderState(Integer quoteVersionId);
    /** 
    Gets an NSPriceList object.
    */
    NSPriceList GetPriceList(Integer priceListId);
    /** 
    Gets a product with the given key
    */
    NSProduct GetProduct(Integer quoteConnectionId, String eRPProductKey);
    /** 
    Gets a product with the given database ID
    */
    NSProduct GetProductFromDbId(Integer productId);
    /** 
    Gets an image connected to a product, from the ProductProvider
    */
    String GetProductImage(Integer quoteConnectionId, String eRPProductKey, Integer rank);
    /** 
    Gets an NSQuote
    */
    NSQuote GetQuote(Integer quoteId);
    /** 
    Gets an NSQuoteAlternative object.
    */
    NSQuoteAlternative GetQuoteAlternative(Integer quoteAlternativeId);
    /** 
    Gets all quote alternatives for a quote version
    */
    NSQuoteAlternative[] GetQuoteAlternatives(Integer quoteVersionId);
    /** 
    Gets a Quote
    */
    NSQuoteEntity GetQuoteEntity(Integer quoteId);
    /** 
    Gets a Quote for a sale
    */
    NSQuoteEntity GetQuoteEntityFromSaleId(Integer saleId);
    /** 
    Gets an NSQuote for a sale
    */
    NSQuote GetQuoteFromSaleId(Integer saleId);
    /** 
    Gets QuoteLine from database
    */
    NSQuoteLine GetQuoteLine(Integer quoteLineId);
    /** 
    Returns the configuration field with the given ID
    */
    NSQuoteLineConfiguration GetQuoteLineConfiguration(Integer quoteLineConfigurationId);
    /** 
    Returns the configuration field with the given field name
    */
    NSQuoteLineConfiguration GetQuoteLineConfigurationFromFieldName(String fieldName);
    /** 
    Gets an image connected to a quoteline, either from the ERPProvider or from the SuperOffice database
    */
    NSImage GetQuoteLineImage(Integer quoteLineId, Integer rank);
    /** 
    Gets all QuoteLines from an alternative
    */
    NSQuoteLine[] GetQuoteLines(Integer quoteAlternativeId);
    /** 
    Gets a named list from the connector.
    */
    NSQuoteListItem[] GetQuoteList(String quoteListType);
    /** 
    Gets an NSQuoteVersion
    */
    NSQuoteVersion GetQuoteVersion(Integer quoteVersionId);
    /** 
    Gets all quote versions for a sale
    */
    NSQuoteVersion[] GetQuoteVersions(Integer quoteId);
    /** 
    Gets all button states for the Quote version dialog.
    */
    NSQuoteVersionWorkflowState GetQuoteVersionWorkflowButtonStates(Integer quoteVersionId, Integer quoteAlternativeId);
    /** 
    Gets state icon and name for the Quote version dialog header.
    */
    NSQuoteVersionButtonState GetQuoteVersionWorkflowImageState(Integer quoteVersionId);
    /** 
    Gets all button states for the Quote version dialog. Packages ImageState, Button states and status info into one call.
    */
    NSQuoteVersionWorkflowState GetQuoteVersionWorkflowState(Integer quoteVersionId, Integer quoteAlternativeId);
    /** 
    Gets status info for the Quote version dialog header.
    */
    NSQuoteVersionStatusInformation GetQuoteVersionWorkflowStatusInfo(Integer quoteVersionId);
    NSPluginResponse HasConnections();
    /** 
    Toggles the 'included' state of a quote version attachment
    */
    Bool IncludeQuoteVersionAttachment(Integer quoteVersionId, Integer documentId, Bool include);
    /** 
    Moves quote line rank up/down
    */
    Void MoveQuoteLine(Integer quoteLineId, Bool direction);
    /** 
    Places an order in the ERP system.
    */
    NSPluginUrlResponse PlaceOrder(Integer quoteAlternativeId, Bool markSaleAsSold, String poNumber, String orderComment, String culture);
    /** 
    When the user changes one or more values in a quoteline or a quoteAlternative, the connector gets to change the QuoteLines and the alternative, for instance calculate VAT. RecalculateQuoteAlternative shall be called when the user changes any of the following fields: Quantity, DiscountAmount, DiscountPercent, listprice (if allowed). RecalculateQuoteAlternative will calculate the TotalPrice and the VAT (if possible) for the lines and the alternative.
    */
    NSQuoteAlternativeRecalculated RecalculateQuoteAlternative(Integer quoteAlternative);
    /** 
    When the user changes one or more values in a quoteline, the connector gets to change the QuoteLine, for instance calculate VAT. Shall be called when the user changes any of the following fields: Quantity, DiscountAmount, DiscountPercent, ListPrice (if allowed). Will calculate the TotalPrice and the VAT (if possible) for the line.
    */
    NSQuoteLine RecalculateQuoteLine(NSQuoteLine quoteLine, String[] changedFields);
    /** 
    Rejects a quote version
    */
    NSApproveRejectResponse RejectQuoteVersion(Integer quoteVersionId, String rejectedByText, Integer rejectedByAssociateId, String rejectionText);
    /** 
    Removes a product from the database
    */
    Void RemoveProduct(Integer productId);
    /** 
    Restores a connection marked as deleted.
    */
    Void RestoreConnection(Integer quoteConnectionId);
    /** 
    Saves a connection to the database.
    */
    NSQuoteConnection SaveConnection(NSQuoteConnection connection);
    /** 
    Saves the connection config fields.
    */
    Map SaveConnectionConfigFields(Integer quoteConnectionId, Map connectionConfigFields);
    /** 
    Updates the existing NSPriceList or creates a new NSPriceList if the id parameter is 0
    */
    NSPriceList SavePriceList(NSPriceList priceList);
    /** 
    Updates the existing NSProduct or creates a new NSProduct if the id parameter is 0
    */
    NSProduct SaveProduct(NSProduct product);
    /** 
    Saves an NSQuote
    */
    NSQuote SaveQuote(NSQuote quote);
    /** 
    Updates the existing NSQuoteAlternative or creates a new NSQuoteAlternative if the id parameter is 0
    */
    NSQuoteAlternative SaveQuoteAlternative(NSQuoteAlternative quoteAlternative);
    /** 
    Saves an NSQuoteEntity.
    */
    NSQuoteEntity SaveQuoteEntity(NSQuoteEntity quoteEntity);
    /** 
    Saves the NSQuoteLine in the SuperOffice database
    */
    NSQuoteLine SaveQuoteLine(NSQuoteLine quoteLine);
    /** 
    Saves an NSQuoteLineConfiguration object. It is not possible to add a new configuration.
    */
    NSQuoteLineConfiguration SaveQuoteLineConfiguration(NSQuoteLineConfiguration quoteLineConfiguration);
    /** 
    Saves a collection of QuoteLineConfigurations. It is not possible to add a new configurations.
    */
    NSQuoteLineConfiguration[] SaveQuoteLineConfigurations(NSQuoteLineConfiguration[] quoteLineConfigurations);
    /** 
    Saves the image connected to a quoteline in the SuperOffice database
    */
    Void SaveQuoteLineImage(Integer quoteLineId, NSImage image, Integer rank);
    /** 
    Saves the QuoteLines in the SuperOffice database
    */
    NSQuoteLine[] SaveQuoteLines(NSQuoteLine[] quoteLines);
    /** 
    Saves a quote version
    */
    NSQuoteVersion SaveQuoteVersion(NSQuoteVersion quoteVersion);
    /** 
    Save the quote version number if it is valid
    */
    Bool SaveQuoteVersionNumber(Integer quoteVersionId, String number);
    /** 
    Sends the quote to the user's customer.
    */
    NSPluginUrlResponse SendQuoteVersion(Integer quoteVersionId, DateTime expiryDate, DateTime followupDate, String followupText, String culture);
    /** 
    Tests if the connection data is sufficient to get a connection with the ERP system. The Connector should try to do some operations to check if the connection has sufficient rights to run. The connection has not been created yet. TestConnection()is called without InitializeConnector being called first.
    */
    NSPluginResponse TestConnection(String connectorName);
    /** 
    Toggles if the product is in assortment or not
    */
    Void ToggleProductInAssortment(Integer productId);
    /** 
    Toggle the 'included' state of a quote version attachment
    */
    Bool ToggleQuoteVersionAttachmentIncluded(Integer quoteVersionAttachmentId);
    /** 
    Toggles the 'default included' state of a sale type quote attachment
    */
    Bool ToggleSaleTypeQuoteAttachmentDefaultIncluded(Integer saleTypeQuoteAttachmentId);
    /** 
    Updates price on the all the quote lines for each alternative in the current quote version
    */
    NSQuoteVersionValidated UpdateQuoteVersionPrices(Integer quoteVersionId);
    /** 
    When the user changes one or more values in a quoteline or a quoteAlternative, the connector gets to change the QuoteLines and the alternative, for instance calculate VAT. ValidateQuoteVersion shall be called when the user presses the validate button, presses the send button or closes the quote dialog.
    */
    NSQuoteVersionValidated ValidateQuoteVersion(Integer quoteVersionId, Integer action);
}`;