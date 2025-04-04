export const LocalizedField = `/** 
Represents fields. Used by Company.set/getAddress() functions.
*/
class LocalizedField {
    /** 
    Gets address type
    */
    String getAddressType();
    /** 
    Gets label
    */
    String getLabel();
    /** 
    Gets name
    */
    String getName();
    /** 
    Gets tooltip
    */
    String getTooltip();
    /** 
    Gets name
    */
    String getValue();
    /** 
    Gets value length
    */
    String getValueLength();
    /** 
    Sets name
    */
    Void setName(String name);
    /** 
    Sets tooltip
    */
    Void setTooltip(String value);
    /** 
    Sets value
    */
    Void setValue(String value);
}`;