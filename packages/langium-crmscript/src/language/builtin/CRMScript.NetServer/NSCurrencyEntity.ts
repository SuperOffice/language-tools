export const NSCurrencyEntity = `/** 
Carrier object for CurrencyEntity.
*/
class NSCurrencyEntity {
    Integer GetCurrencyId();
    Bool GetDeleted();
    String GetName();
    Integer GetRank();
    Float GetRate();
    String GetTooltip();
    Float GetUnits();
    Void SetCurrencyId(Integer currencyId);
    Void SetDeleted(Bool deleted);
    Void SetName(String name);
    Void SetRank(Integer rank);
    Void SetRate(Float rate);
    Void SetTooltip(String tooltip);
    Void SetUnits(Float units);
}`;