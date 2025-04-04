export const NSQuoteContext = `/** 
The context a quote is created in.
*/
class NSQuoteContext {
    NSAssociate GetCRMAssociate();
    NSQuoteAlternative GetCRMQuoteAlternative();
    NSQuoteLine GetCRMQuoteLine();
    NSQuoteVersion GetCRMQuoteVersion();
    NSSale GetCRMSale();
    String GetUserLanguageCode();
    Void SetCRMAssociate(NSAssociate cRMAssociate);
    Void SetCRMQuoteAlternative(NSQuoteAlternative cRMQuoteAlternative);
    Void SetCRMQuoteLine(NSQuoteLine cRMQuoteLine);
    Void SetCRMQuoteVersion(NSQuoteVersion cRMQuoteVersion);
    Void SetCRMSale(NSSale cRMSale);
    Void SetUserLanguageCode(String userLanguageCode);
}`;