export const InvoiceEntry = `/** 
Represents invoice entries and lets you create new or modify existing invoice entries
*/
class InvoiceEntry {
    /** 
    Gets the discount of the current InvoiceEntry object in percent.
    */
    String getDiscount();
    /** 
    Gets the discount of the current InvoiceEntry object in money.
    */
    String getDiscountMoney();
    /** 
    Returns the price per unit of the current InvoiceEntry object.
    */
    String getPricePrUnit();
    /** 
    Gets the value of the specified field.
    */
    String getValue(String field);
    /** 
    Loads an existing InvoiceEntry object.
    */
    Bool load(Integer id);
    /** 
    Saves the existing InvoiceEntry object and returns the ID.
    */
    Integer save();
    /** 
    Sets the discount of the current InvoiceEntry object with the given percent.
    */
    Void setDiscount(Float percent);
    /** 
    Sets the discount of the current InvoiceEntry object with the given money.
    */
    Void setDiscountMoney(Float money);
    /** 
    Sets the price per unit for the current InvoiceEntry object with the given price.
    */
    Void setPricePrUnit(Float price);
    /** 
    Sets a field of the current InvoiceEntry object with the given value.
    */
    Void setValue(String field, String value);
}`;