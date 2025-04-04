export const NSQuoteVersionValidated = `/** 
The QuoteVersionValidated is returned after a call to ValidateQuoteAlternative. It contains flags indicating changes to quote, quoteversion/quotealternative and quotelines.
*/
class NSQuoteVersionValidated {
    NSQuote GetChangedQuote();
    NSQuoteAlternativeRecalculated[] GetChangedQuoteAlternatives();
    NSQuoteVersion GetChangedQuoteVersion();
    NSSale GetChangedSale();
    String GetErrorCode();
    Bool GetIsOk();
    String GetTechExplanation();
    String GetUserExplanation();
    Void SetChangedQuote(NSQuote changedQuote);
    Void SetChangedQuoteAlternatives(NSQuoteAlternativeRecalculated[] changedQuoteAlternatives);
    Void SetChangedQuoteVersion(NSQuoteVersion changedQuoteVersion);
    Void SetChangedSale(NSSale changedSale);
    Void SetErrorCode(String errorCode);
    Void SetIsOk(Bool isOk);
    Void SetTechExplanation(String techExplanation);
    Void SetUserExplanation(String userExplanation);
}`;