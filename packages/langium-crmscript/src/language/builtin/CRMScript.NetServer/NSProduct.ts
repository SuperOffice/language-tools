export const NSProduct = `/** 
Information about a Product from the ERP system. This may be fetched from SuperOffice Product table through the SO Connector.
*/
class NSProduct {
    String GetCode();
    Float GetDefaultSubscriptionQuantity();
    String GetDescription();
    String GetERPPriceListKey();
    String GetERPProductKey();
    String GetExtraField1();
    String GetExtraField2();
    String GetExtraField3();
    String GetExtraField4();
    String GetExtraField5();
    NSProductExtraDataField[] GetExtraInfo();
    Bool GetInAssortment();
    Float GetInStock();
    Bool GetIsSubscription();
    String GetItemNumber();
    String GetName();
    String GetPriceUnit();
    String GetProductCategoryKey();
    String GetProductFamilyKey();
    Integer GetProductId();
    /** 
    Either a ListId to an ID from a connector provided list, or, if the connection doesn't support lists, a text with the actual product type.
    */
    String GetProductTypeKey();
    String GetQuantityUnit();
    String GetRawExtraInfo();
    String GetRights();
    String GetRule();
    String GetSubscriptionUnit();
    String GetSupplier();
    String GetSupplierCode();
    Float GetUnitCost();
    Float GetUnitListPrice();
    Float GetUnitMinimumPrice();
    String GetUrl();
    Float GetVAT();
    String GetVATInfo();
    Void SetCode(String code);
    Void SetDefaultSubscriptionQuantity(Float defaultSubscriptionQuantity);
    Void SetDescription(String description);
    Void SetERPPriceListKey(String eRPPriceListKey);
    Void SetERPProductKey(String eRPProductKey);
    Void SetExtraField1(String extraField1);
    Void SetExtraField2(String extraField2);
    Void SetExtraField3(String extraField3);
    Void SetExtraField4(String extraField4);
    Void SetExtraField5(String extraField5);
    Void SetExtraInfo(NSProductExtraDataField[] extraInfo);
    Void SetInAssortment(Bool inAssortment);
    Void SetInStock(Float inStock);
    Void SetIsSubscription(Bool isSubscription);
    Void SetItemNumber(String itemNumber);
    Void SetName(String name);
    Void SetPriceUnit(String priceUnit);
    Void SetProductCategoryKey(String productCategoryKey);
    Void SetProductFamilyKey(String productFamilyKey);
    Void SetProductId(Integer productId);
    Void SetProductTypeKey(String productTypeKey);
    Void SetQuantityUnit(String quantityUnit);
    Void SetRawExtraInfo(String rawExtraInfo);
    Void SetRights(String rights);
    Void SetRule(String rule);
    Void SetSubscriptionUnit(String subscriptionUnit);
    Void SetSupplier(String supplier);
    Void SetSupplierCode(String supplierCode);
    Void SetUnitCost(Float unitCost);
    Void SetUnitListPrice(Float unitListPrice);
    Void SetUnitMinimumPrice(Float unitMinimumPrice);
    Void SetUrl(String url);
    Void SetVAT(Float vAT);
    Void SetVATInfo(String vATInfo);
}`;