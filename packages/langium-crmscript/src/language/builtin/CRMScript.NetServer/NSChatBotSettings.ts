export const NSChatBotSettings = `/** 
Chat topic bot settings. Trigger script ids to run on bot events. Carrier object for ChatBotSettings.
*/
class NSChatBotSettings {
    Integer GetBotMessageReceivedScriptId();
    String GetBotName();
    Integer GetBotRegisterScriptId();
    Integer GetBotSessionChangedScriptId();
    Integer GetBotSessionCreatedScriptId();
    Void SetBotMessageReceivedScriptId(Integer botMessageReceivedScriptId);
    Void SetBotName(String botName);
    Void SetBotRegisterScriptId(Integer botRegisterScriptId);
    Void SetBotSessionChangedScriptId(Integer botSessionChangedScriptId);
    Void SetBotSessionCreatedScriptId(Integer botSessionCreatedScriptId);
}`;