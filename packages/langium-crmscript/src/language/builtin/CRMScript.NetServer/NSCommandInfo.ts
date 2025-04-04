export const NSCommandInfo = `/** 
An instance of this class describes a custom command, declared and implemented by a document plugin.
*/
class NSCommandInfo {
    String GetDisplayName();
    String GetDisplayTooltip();
    String GetIconHint();
    String GetName();
    Integer GetReturnType();
    Void SetDisplayName(String displayName);
    Void SetDisplayTooltip(String displayTooltip);
    Void SetIconHint(String iconHint);
    Void SetName(String name);
    Void SetReturnType(Integer returnType);
}`;