export const NSQuoteAlternativeRecalculated = `/** 
The QuoteAlternativeRecalculated is returned after a call to RecalculateQuoteAlternative. It contains flags indicating changes to quote alternative and quote lines.
*/
class NSQuoteAlternativeRecalculated {
    NSQuoteAlternative GetChangedQuoteAlternative();
    NSChangedData GetChanges();
    Bool GetQuoteLinesHasChanged();
    Void SetChangedQuoteAlternative(NSQuoteAlternative changedQuoteAlternative);
    Void SetChanges(NSChangedData changes);
    Void SetQuoteLinesHasChanged(Bool quoteLinesHasChanged);
}`;