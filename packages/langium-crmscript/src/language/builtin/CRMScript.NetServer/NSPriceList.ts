export const NSPriceList = `/** 
A price list is basically a collection of products. It can be valid in a time period, and outright deactivated. All prices in the product list is in a specific currency. We have decieded not to separate prices and products, which means that we get a simpler data model, but some redundancy.
*/
class NSPriceList {
    String GetCurrency();
    String GetCurrencyName();
    String GetDescription();
    String GetERPPriceListKey();
    Bool GetIsActive();
    String GetName();
    Integer GetPriceListId();
    Integer GetQuoteConnectionId();
    DateTime GetValidFrom();
    DateTime GetValidTo();
    Void SetCurrency(String currency);
    Void SetCurrencyName(String currencyName);
    Void SetDescription(String description);
    Void SetERPPriceListKey(String eRPPriceListKey);
    Void SetIsActive(Bool isActive);
    Void SetName(String name);
    Void SetPriceListId(Integer priceListId);
    Void SetQuoteConnectionId(Integer quoteConnectionId);
    Void SetValidFrom(DateTime validFrom);
    Void SetValidTo(DateTime validTo);
}`;