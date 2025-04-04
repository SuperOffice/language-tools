export const NSQuote = `/** 
Quote carrier with the active quote version and favorite alternative.
*/
class NSQuote {
    Integer GetAcceptedQuoteAlternativeId();
    NSQuoteVersion GetActiveQuoteVersion();
    Integer GetActiveQuoteVersionId();
    Integer GetDocumentId();
    String GetERPOrderKey();
    String GetERPQuoteKey();
    NSQuoteAlternative GetFavoriteQuoteAlternative();
    String GetOrderComment();
    String GetPoNumber();
    String GetPreferredEmailCulture();
    Integer GetQuoteConnectionId();
    Integer GetQuoteId();
    Integer GetSaleId();
    Integer GetUseValuesFromQuote();
    Void SetAcceptedQuoteAlternativeId(Integer acceptedQuoteAlternativeId);
    Void SetActiveQuoteVersion(NSQuoteVersion activeQuoteVersion);
    Void SetActiveQuoteVersionId(Integer activeQuoteVersionId);
    Void SetDocumentId(Integer documentId);
    Void SetERPOrderKey(String eRPOrderKey);
    Void SetERPQuoteKey(String eRPQuoteKey);
    Void SetFavoriteQuoteAlternative(NSQuoteAlternative favoriteQuoteAlternative);
    Void SetOrderComment(String orderComment);
    Void SetPoNumber(String poNumber);
    Void SetPreferredEmailCulture(String preferredEmailCulture);
    Void SetQuoteConnectionId(Integer quoteConnectionId);
    Void SetQuoteId(Integer quoteId);
    Void SetSaleId(Integer saleId);
    Void SetUseValuesFromQuote(Integer useValuesFromQuote);
}`;