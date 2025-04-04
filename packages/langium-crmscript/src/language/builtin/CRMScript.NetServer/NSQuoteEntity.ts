export const NSQuoteEntity = `/** 
Quote methods.
*/
class NSQuoteEntity {
    Integer GetAcceptedQuoteAlternativeId();
    Integer GetActiveQuoteVersionId();
    Integer GetDocumentId();
    String GetERPOrderKey();
    String GetERPQuoteKey();
    String GetOrderComment();
    String GetPoNumber();
    String GetPreferredEmailCulture();
    Integer GetQuoteConnectionId();
    Integer GetQuoteId();
    NSQuoteVersion[] GetQuoteVersions();
    Integer GetSaleId();
    Integer GetUseValuesFromQuote();
    Void SetAcceptedQuoteAlternativeId(Integer acceptedQuoteAlternativeId);
    Void SetActiveQuoteVersionId(Integer activeQuoteVersionId);
    Void SetDocumentId(Integer documentId);
    Void SetERPOrderKey(String eRPOrderKey);
    Void SetERPQuoteKey(String eRPQuoteKey);
    Void SetOrderComment(String orderComment);
    Void SetPoNumber(String poNumber);
    Void SetPreferredEmailCulture(String preferredEmailCulture);
    Void SetQuoteConnectionId(Integer quoteConnectionId);
    Void SetQuoteId(Integer quoteId);
    Void SetQuoteVersions(NSQuoteVersion[] quoteVersions);
    Void SetSaleId(Integer saleId);
    Void SetUseValuesFromQuote(Integer useValuesFromQuote);
}`;