export const NSAmountClassEntity = `/** 
Carrier object for AmountClassEntity.
*/
class NSAmountClassEntity {
    Integer GetAmountClassId();
    Float GetAmountFrom();
    Float GetAmountTo();
    Integer GetCurrencyId();
    Bool GetDeleted();
    String GetName();
    Integer GetRank();
    String GetTooltip();
    Void SetAmountClassId(Integer amountClassId);
    Void SetAmountFrom(Float amountFrom);
    Void SetAmountTo(Float amountTo);
    Void SetCurrencyId(Integer currencyId);
    Void SetDeleted(Bool deleted);
    Void SetName(String name);
    Void SetRank(Integer rank);
    Void SetTooltip(String tooltip);
}`;