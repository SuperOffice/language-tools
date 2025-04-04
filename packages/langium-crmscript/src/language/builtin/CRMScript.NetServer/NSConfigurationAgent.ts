export const NSConfigurationAgent = `/** 
User interface configuration* XML and other elements such as inter-client URLs.
*/
class NSConfigurationAgent {
    /** 
    Configuration XML may be expensive to build and parse, and are therefore cached to the database.<p></p>
    Caching is per application/instance/associate, and can be turned off through the config file. If caching is on, and the configuration is changed, it is necessary to clear the cached configurations from the database, through this call.
    */
    Void ClearConfigurationCache(String application, String instance, Bool forAllAssociates);
    /** 
    Sets default values into a new NSDiaryViewEntity.
    */
    NSDiaryViewEntity CreateDefaultDiaryViewEntity();
    /** 
    Sets default values into a new NSSystemEventEntity.
    */
    NSSystemEventEntity CreateDefaultSystemEventEntity();
    /** 
    Deletes the NSDiaryViewEntity
    */
    Void DeleteDiaryViewEntity(Integer diaryViewEntity);
    /** 
    Deletes the NSSystemEventEntity
    */
    Void DeleteSystemEventEntity(Integer systemEventEntity);
    /** 
    Deletes a window and dialog position and size setting.
    */
    Void DeleteWindowPosSize(Integer windowPosSizeId);
    Bool ExistsSystemEvent(String key);
    /** 
    Gets one defined configuration fragment, with full reference resolution and parsing applied.
    */
    String GetAnyConfiguration(String application, String instance, String item, String type);
    /** 
    Returns the application configuration.
    */
    String GetApplicationConfiguration(String application, String instance);
    /** 
    Returns a valid URL based in the soprotocol provided
    */
    String GetCRMUrl(String soProtocol, String currents, Bool frameless);
    /** 
    Generates a URL to the emarketing module
    */
    String GetCSAuthUrl(String language, String programName, String action, String extraParameters);
    /** 
    Gets the host name for Service
    */
    String GetCsCgiUrlInternal();
    /** 
    Converts a module name into a Service URL.
    */
    String GetCsProgramUrl(String language, String programName, String action, String extraParameters);
    /** 
    Gets a value from the Registry table.
    */
    String GetCSRegistryValue(Integer entry);
    /** 
    Gets the www folder for Service
    */
    String GetCSWwwFolder();
    /** 
    Gets the URL for the external access to the customer center
    */
    String GetCustomerUrl();
    /** 
    Gets an NSDiaryViewEntity object.
    */
    NSDiaryViewEntity GetDiaryViewEntity(Integer diaryViewEntityId);
    Integer GetEmailNumberOfDays();
    String GetEMarketingUrl(String language);
    /** 
    Gets the list of filters to be used for processing the configuration data for this application.
    */
    String GetFilterList(String application, String instance);
    /** 
    Gets the GetHelpDispatcherUrl used by the help system.
    */
    String GetHelpDispatcherUrl();
    /** 
    Gets the window and dialog position and size settings belonging to the currently logged-on user.
    */
    NSWindowPosSize[] GetMyWindowPosSizes();
    /** 
    Gets the object mappings (what code objects should be instantiated to handle the entities of the client configuration?)
    */
    String GetObjectMapping(String application, String instance);
    /** 
    Gets the configuration for one whole web page, including all its panels etc.
    */
    String GetPageConfiguration(String application, String instance, String page);
    /** 
    Gets the configuration for one whole web page, including all its panels etc.
    */
    String GetRefreshedPageConfiguration(String application, String instance, String page);
    /** 
    Gets an NSSystemEventEntity object.
    */
    NSSystemEventEntity GetSystemEventEntity(Integer systemEventEntityId);
    /** 
    Gets an NSWindowPosSize object.
    */
    NSWindowPosSize GetWindowPosSize(Integer windowPosSizeId);
    /** 
    Retrieves a list of NSWindowPosSize objects.
    */
    NSWindowPosSize[] GetWindowPosSizeList(Integer[] windowPosSizeIds);
    /** 
    Gets the window and dialog position and size settings belonging to the specified associate
    */
    NSWindowPosSize[] GetWindowPosSizesOnAssociateId(Integer associateId);
    /** 
    Gets the window and dialog position and size settings belonging to the specified person
    */
    NSWindowPosSize[] GetWindowPosSizesOnPersonId(Integer personId);
    /** 
    Gets the default URL used for the logo, from the [NetServices] PageUrl preferencec, with tags substituted.
    */
    String GetWwwUrl(String client);
    /** 
    Returns the URL used for the logo by the SM.web client. Uses urldispatch.aspx.*/
    String GetWwwUrlForSMWeb();
    /** 
    Updates the existing NSDiaryViewEntity or creates a new NSDiaryViewEntity if the ID parameter is 0.
    */
    NSDiaryViewEntity SaveDiaryViewEntity(NSDiaryViewEntity diaryViewEntity);
    /** 
    Updates the existing NSSystemEventEntity or creates a new NSSystemEventEntity if the id parameter is 0
    */
    NSSystemEventEntity SaveSystemEventEntity(NSSystemEventEntity systemEventEntity);
    /** 
    Saves a window and dialog position and size setting.
    */
    NSWindowPosSize SaveWindowPosSize(NSWindowPosSize windowPosSize);
    /** 
    Saves a set of window and dialog position and size settings.
    */
    NSWindowPosSize[] SaveWindowPosSizes(NSWindowPosSize[] windowPosSizes);
}`;