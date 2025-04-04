export const NSIncomingMessage = `/** 
Details about a message to be sent.
*/
class NSIncomingMessage {
    String GetContent();
    String GetFormat();
    String GetFrom();
    String GetPlugin();
    String GetSessionKey();
    String GetTo();
    Void SetContent(String content);
    Void SetFormat(String format);
    Void SetFrom(String from);
    Void SetPlugin(String plugin);
    Void SetSessionKey(String sessionKey);
    Void SetTo(String to);
}`;