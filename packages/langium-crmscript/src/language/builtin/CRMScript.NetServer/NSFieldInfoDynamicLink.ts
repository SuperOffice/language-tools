export const NSFieldInfoDynamicLink = `/** 
Dynamic Link custom database field.
*/
class NSFieldInfoDynamicLink {
    Integer GetDefaultValue();
    String GetLinkName();
    String GetLinkValue();
    /** 
    Default attachment ID value
    */
    Void SetDefaultValue(Integer value);
    Void SetLinkName(String linkName);
    Void SetLinkValue(String linkValue);
}`;