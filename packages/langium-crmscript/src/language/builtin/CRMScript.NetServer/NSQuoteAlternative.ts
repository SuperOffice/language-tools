export const NSQuoteAlternative = `/** 
Information about a connection to the ERP system.
*/
class NSQuoteAlternative {
    String GetDescription();
    Float GetDiscountAmount();
    Float GetDiscountPercent();
    Float GetEarningAmount();
    Float GetEarningPercent();
    /** 
    Can be overridden by the user in the field 'DiscountPercent' or 'DiscountAmount'. Both the two 'ERPDiscountPercent' and 'ERPDiscountAmount' shall be filled out. If UserValueOverride is 'None', then the ERPDiscountAmount shall be copied into DiscountAmount and ERPDiscountPercent into DiscountPercent.
    */
    Float GetERPDiscountAmount();
    Float GetERPDiscountPercent();
    String GetERPQuoteAlternativeKey();
    String GetExtraField1();
    String GetExtraField2();
    String GetExtraField3();
    String GetExtraField4();
    String GetExtraField5();
    String GetName();
    Integer GetQuoteAlternativeId();
    Integer GetQuoteVersionId();
    String GetReason();
    Integer GetStatus();
    Float GetSubTotal();
    Float GetTotalPrice();
    Integer GetUserValueOverride();
    Float GetVAT();
    String GetVATInfo();
    Void SetDescription(String description);
    Void SetDiscountAmount(Float discountAmount);
    Void SetDiscountPercent(Float discountPercent);
    Void SetEarningAmount(Float earningAmount);
    Void SetEarningPercent(Float earningPercent);
    Void SetERPDiscountAmount(Float eRPDiscountAmount);
    Void SetERPDiscountPercent(Float eRPDiscountPercent);
    Void SetERPQuoteAlternativeKey(String eRPQuoteAlternativeKey);
    Void SetExtraField1(String extraField1);
    Void SetExtraField2(String extraField2);
    Void SetExtraField3(String extraField3);
    Void SetExtraField4(String extraField4);
    Void SetExtraField5(String extraField5);
    Void SetName(String name);
    Void SetQuoteAlternativeId(Integer quoteAlternativeId);
    Void SetQuoteVersionId(Integer quoteVersionId);
    Void SetReason(String reason);
    Void SetStatus(Integer status);
    Void SetSubTotal(Float subTotal);
    Void SetTotalPrice(Float totalPrice);
    Void SetUserValueOverride(Integer userValueOverride);
    Void SetVAT(Float vAT);
    Void SetVATInfo(String vATInfo);
}`;