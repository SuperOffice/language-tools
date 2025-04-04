export const NSCustomerServiceAgent = `/** 
Agent used for Customer Service methods.
*/
class NSCustomerServiceAgent {
    /** 
    Adds a message to an existing request in the sam way as importMail would do it from an email.
    */
    NSTicketInfo AddMessageFromMailData(Integer ticketId, String data);
    /** 
    Gets all chat TOPICS which this user is a member of.
    */
    NSChatSession[] ChatSessionsForUser();
    /** 
    Checks whether the core HTML templates are customized
    */
    Bool CheckIfCustomizedTemplates();
    /** 
    Checks that we are using the same encryption keys
    */
    String CheckSymmetricEncryption(String encryptedString);
    /** 
    Sets default values into a new NSCustomerCenterConfig.
    */
    NSCustomerCenterConfig CreateDefaultCustomerCenterConfig();
    /** 
    Sets default values into a new NSMailboxEntity
    */
    NSMailboxEntity CreateDefaultMailboxEntity();
    /** 
    Sets default values into a new NSSmsConfig.
    */
    NSSmsConfig CreateDefaultSmsConfig();
    /** 
    Creates a login session for a CS user
    */
    NSCsSessionKey CreateSession(String remoteIp);
    /** 
    Creates a new ticket in the same way as importMail would import an email.
    */
    NSTicketInfo CreateTicketFromMailData(Integer mailboxId, String data);
    /** 
    Deletes the specified chat sessions.
    */
    Void DeleteChatSessions(Integer[] ids);
    /** 
    Deletes the NSCustomerCenterConfig
    */
    Void DeleteCustomerCenterConfig(Integer customerCenterConfig);
    /** 
    Checks if an event handler exists.
    */
    Bool EventHandlerExists(Integer eventHandlerType);
    /** 
    Executes event handlers in CRMScript for a given event.
    */
    NSEventData ExecuteEventHandlers(NSEventData eventData);
    /** 
    Searches for tickets matching title or ID
    */
    NSTicketInfo[] FindTicketsByTitleOrId(String titleOrId, Integer maxRows);
    /** 
    Gets all rows from cust_config as an array of NSCustomerCenterConfig entities
    */
    NSCustomerCenterConfig[] GetAllCustomerCenterConfigs();
    /** 
    Gets an NSCustomerCenterConfig object.
    */
    NSCustomerCenterConfig GetCustomerCenterConfig(Integer customerCenterConfigId);
    /** 
    Gets the carrier with data that Service needs when starting up
    */
    NSCustomerServiceStartup GetCustomerServiceStartup();
    /** 
    Gets an NSMailboxEntity object.
    */
    NSMailboxEntity GetMailboxEntity(Integer mailboxEntityId);
    /** 
    Gets all registered mailboxes in Service
    */
    NSMailbox[] GetMailboxes();
    /** 
    Converts a module name into a Service URL.
    */
    String GetProgramUrl(String programName, Bool external);
    /** 
    Gets the NSSmsConfig settings for Customer Service SMS providers.
    */
    NSSmsConfig GetSmsConfig();
    /** 
    Gets the calculated results for the required statistics for the Service Status page
    */
    NSStatisticsDataSet[] GetStatistics(Integer functions);
    /** 
    Checks if user has any chat notification
    */
    Bool HasChatNotify();
    /** 
    Removes a login session for a Service user
    */
    Void RemoveSession(Integer loginId);
    /** 
    Saves an array of NSCustomerCenterConfig entities to the database
    */
    Void SaveAllCustomerCenterConfigs(NSCustomerCenterConfig[] custConfigs);
    /** 
    Updates the existing NSCustomerCenterConfig or creates a new NSCustomerCenterConfig if the id parameter is 0
    */
    NSCustomerCenterConfig SaveCustomerCenterConfig(NSCustomerCenterConfig customerCenterConfig);
    /** 
    Updates the existing NSMailboxEntity or creates a new NSMailboxEntity if the ID parameter is 0
    */
    NSMailboxEntity SaveMailboxEntity(NSMailboxEntity mailboxEntity);
    /** 
    Updates the existing NSSmsConfig or creates a new NSSmsConfig if the ID parameter is 0
    */
    NSSmsConfig SaveSmsConfig(NSSmsConfig smsConfig);
    /** 
    Checks if a Service session is valid
    */
    Bool SessionIsValid(String csSessionKey);
    /** 
    Tests an SMTP account, by sending an email to a special @superoffice.com account
    */
    NSSmtpTestResult TestSmtpServer(String smtpUri, String from, Bool useStoredPassword);
    /** 
    Updates the cached FeatureToggles for Service
    */
    Void UpdateFeatureToggles(CsFeatureToggle[] featureToggles);
}`;