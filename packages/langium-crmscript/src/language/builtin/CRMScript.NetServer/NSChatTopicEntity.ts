export const NSChatTopicEntity = `/** 
Chat topics define who is assigned, when the channel is open for business, and look of the chat widget. Carrier object for ChatTopicEntity.
*/
class NSChatTopicEntity {
    String GetAlertRecipient();
    NSReplyTemplate GetAlertTemplate();
    String GetBadgeHeader();
    Bool GetBotEnabled();
    NSChatBotSettings GetBotSettings();
    Integer GetChatTopicId();
    Bool GetCollectConsent();
    String GetCustomQueueText();
    Bool GetCustomQueueTextEnabled();
    String GetDescription();
    NSCustomerLanguage GetLanguage();
    DateTime GetLastAccept();
    String GetName();
    NSChatOpeningHours GetOpeningHours();
    Bool GetOpeningHoursEnabled();
    Integer GetSecondsPrAccept();
    NSTicketCategory GetTicketCategory();
    Bool GetTicketEnabled();
    NSTicketPriority GetTicketPriority();
    Integer GetWarnManagerNewChatMinutes();
    Integer GetWarnNewChatMinutes();
    String GetWelcomeMessage();
    NSChatWidgetSettings GetWidget();
    Void SetAlertRecipient(String alertRecipient);
    Void SetAlertTemplate(NSReplyTemplate alertTemplate);
    Void SetBadgeHeader(String badgeHeader);
    Void SetBotEnabled(Bool botEnabled);
    Void SetBotSettings(NSChatBotSettings botSettings);
    Void SetChatTopicId(Integer chatTopicId);
    Void SetCollectConsent(Bool collectConsent);
    Void SetCustomQueueText(String customQueueText);
    Void SetCustomQueueTextEnabled(Bool customQueueTextEnabled);
    Void SetDescription(String description);
    Void SetLanguage(NSCustomerLanguage language);
    Void SetLastAccept(DateTime lastAccept);
    Void SetName(String name);
    Void SetOpeningHours(NSChatOpeningHours openingHours);
    Void SetOpeningHoursEnabled(Bool openingHoursEnabled);
    Void SetSecondsPrAccept(Integer secondsPrAccept);
    Void SetTicketCategory(NSTicketCategory ticketCategory);
    Void SetTicketEnabled(Bool ticketEnabled);
    Void SetTicketPriority(NSTicketPriority ticketPriority);
    Void SetWarnManagerNewChatMinutes(Integer warnManagerNewChatMinutes);
    Void SetWarnNewChatMinutes(Integer warnNewChatMinutes);
    Void SetWelcomeMessage(String welcomeMessage);
    Void SetWidget(NSChatWidgetSettings widget);
}`;