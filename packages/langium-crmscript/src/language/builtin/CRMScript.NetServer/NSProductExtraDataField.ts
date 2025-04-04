export const NSProductExtraDataField = `/** 
A way to show some simple extra data on a product, typically to hep the user to identify the correct product. Basically a bucket of additional info that the ERP system would like to store and show in the user interface. Information placed here is shown in the GUI if the provide-extra-data capability is true.
*/
class NSProductExtraDataField {
    String GetName();
    Integer GetType();
    String GetValue();
    Void SetName(String name);
    Void SetType(Integer type);
    Void SetValue(String value);
}`;