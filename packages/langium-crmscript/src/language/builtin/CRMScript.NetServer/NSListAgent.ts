export const NSListAgent = `/** 
Collection of all services that work with Lists. These are typical lists of data shown in dropdown-list, checkbox lists, etc.
*/
class NSListAgent {
    /** 
    Saves a new list item for the specified list definition
    */
    NSListItemEntity AddFromListDefinition(Integer udListDefinitionId, NSListItemEntity item);
    /** 
    Saves a new list item for the specified list definition
    */
    NSListItemEntity AddFromListName(String udListDefinitionName, NSListItemEntity item);
    /** 
    Adds a hierarchy item to a path
    */
    NSHierarchyEntity AddHierarchyToPath(Integer domain, String path, String name);
    /** 
    Recalculates the amount to the new currency.
    */
    Float ChangeCurrency(Float amount, String fromCurrency, String toCurrency);
    /** 
    Sets default values into a new NSAmountClassEntity.
    */
    NSAmountClassEntity CreateDefaultAmountClassEntity();
    /** 
    Gets a new country
    */
    NSCountry CreateDefaultCountry();
    /** 
    Sets default values into a new NSCurrencyEntity.
    */
    NSCurrencyEntity CreateDefaultCurrencyEntity();
    /** 
    Sets default values into a new NSDocumentTemplateEntity.
    */
    NSDocumentTemplateEntity CreateDefaultDocumentTemplateEntity();
    /** 
    Creates a new document template language based on an existing template
    */
    Void CreateDefaultDocumentTemplateLanguage(Integer documentTemplateId, String languageCode);
    /** 
    Sets default values into a new NSExtAppEntity.
    */
    NSExtAppEntity CreateDefaultExtAppEntity();
    /** 
    Sets default values into a new NSHeadingEntity.
    */
    NSHeadingEntity CreateDefaultHeadingEntity();
    /** 
    Gets a heading for the specified list definition
    */
    NSHeadingEntity CreateDefaultHeadingFromListDefinition(Integer udListDefinitionId);
    /** 
    Sets default values into a new NSHierarchyEntity.
    */
    NSHierarchyEntity CreateDefaultHierarchyEntity();
    /** 
    Sets default values into a new NSListEntity.
    */
    NSListEntity CreateDefaultListEntity();
    /** 
    Sets default values into a new NSListItemEntity.
    */
    NSListItemEntity CreateDefaultListItemEntity();
    /** 
    Sets default values into a new NSProjectTypeEntity.
    */
    NSProjectTypeEntity CreateDefaultProjectTypeEntity();
    /** 
    Sets default values into a new NSRelationDefinitionEntity.
    */
    NSRelationDefinitionEntity CreateDefaultRelationDefinitionEntity();
    /** 
    Sets default values into a new NSResourceEntity.
    */
    NSResourceEntity CreateDefaultResourceEntity();
    /** 
    Sets default values into a new NSSaleStageEntity.
    */
    NSSaleStageEntity CreateDefaultSaleStageEntity();
    /** 
    Sets default values into a new NSSaleTypeEntity.
    */
    NSSaleTypeEntity CreateDefaultSaleTypeEntity();
    /** 
    Sets default values into a new NSTicketCategoryEntity.
    */
    NSTicketCategoryEntity CreateDefaultTicketCategoryEntity();
    /** 
    Sets default values into a new NSTicketPriorityEntity.
    */
    NSTicketPriorityEntity CreateDefaultTicketPriorityEntity();
    /** 
    Sets default values into a new NSTicketStatusEntity.
    */
    NSTicketStatusEntity CreateDefaultTicketStatusEntity();
    /** 
    Sets default values into a new NSWebPanelEntity.
    */
    NSWebPanelEntity CreateDefaultWebPanelEntity();
    /** 
    Marks all items in the list deleted
    */
    Void DeleteAllFromListDefinition(Integer udListDefinitionId);
    /** 
    Marks all items in the list deleted
    */
    Void DeleteAllFromListName(String udListDefinitionName);
    /** 
    Deletes all headings for list resolved by the provided ID.
    */
    Void DeleteAllHeadingsFromListDefinition(Integer id);
    /** 
    Deletes all headings for list resolved by the provided name.
    */
    Void DeleteAllHeadingsFromName(String name);
    /** 
    Permanently delete all web panels owned by your app.
    */
    Void DeleteAppWebPanels();
    /** 
    Deletes language variant of the document template
    */
    Void DeleteDocumentTemplateLanguage(Integer documentTemplateId, String languageCode);
    /** 
    Deletes a list item from the specified list definition
    */
    Void DeleteFromListDefinition(Integer id, Integer udListDefinitionId);
    /** 
    Deletes a list item from the specified list definition
    */
    Void DeleteFromListName(Integer id, String udListDefinitionName);
    /** 
    Deletes the NSHierarchyEntity
    */
    Void DeleteHierarchyEntity(Integer hierarchyEntity);
    /** 
    Removes a hierarchy item and its children from a path
    */
    Void DeleteHierarchyFromPath(Integer domain, String path);
    /** 
    Deletes the NSListEntity
    */
    Void DeleteListEntity(Integer listEntity);
    /** 
    Deletes an NSListEntity resolved by the provided name.
    */
    Void DeleteListEntityByName(String name);
    /** 
    Deletes a project status
    */
    Void DeleteProjectStatus(Integer projectStatusId);
    /** 
    Deletes the NSResourceEntity
    */
    Void DeleteResourceEntity(Integer resourceEntity);
    /** 
    Deletes the NSTicketCategoryEntity
    */
    Void DeleteTicketCategoryEntity(Integer ticketCategoryEntity);
    /** 
    Deletes the NSTicketPriorityEntity
    */
    Void DeleteTicketPriorityEntity(Integer ticketPriorityEntity);
    /** 
    Deletes the NSTicketStatusEntity
    */
    Void DeleteTicketStatusEntity(Integer ticketStatusEntity);
    /** 
    Hard-delete (real, permanent DELETE in the database) the given web panel. Use with care!
    */
    Void DeleteWebPanel(Integer id);
    /** 
    Generates the navigation URL to be used to navigate to the panel
    */
    String GenerateNavigationUrl(Integer visibleIn, String windowName);
    /** 
    Returns all available countries a contact or person could belong to.
    */
    NSCountry[] GetAllCountries(Bool includeDeleted);
    /** 
    Returns all currencies
    */
    NSCurrencyEntity[] GetAllCurrencies(Bool includeDeleted);
    /** 
    Returns all templates
    */
    NSDocumentTemplateEntity[] GetAllDocumentTemplates(Bool includeDeleted);
    /** 
    Gets list of all domains
    */
    Integer[] GetAllDomains();
    /** 
    Gets all list items for the specified list definition
    */
    NSListItemEntity[] GetAllFromListDefinition(Integer udListDefinitionId, Bool includeDeleted);
    /** 
    Gets all list items for the specified list definition
    */
    NSListItemEntity[] GetAllFromListName(String udListDefinitionName, Bool includeDeleted);
    /** 
    Gets all items in a domain
    */
    NSHierarchyEntity[] GetAllInDomain(Integer domain, Bool children);
    /** 
    Returns all ratings
    */
    NSSaleStageEntity[] GetAllSaleStages(Bool includeDeleted);
    /** 
    Returns all sale types as simple list items
    */
    NSSaleType[] GetAllSaleType();
    /** 
    Returns all sale types as entities with stakeholders, guide and quote properties
    */
    NSSaleTypeEntity[] GetAllSaleTypeEntities(Bool includeDeleted);
    /** 
    Returns all appointment tasks
    */
    NSTaskListItem[] GetAllTasks(Bool includeDeleted);
    /** 
    Returns all available ticket priorities.
    */
    NSTicketPriorityEntity[] GetAllTicketPriorities(Bool includeDeleted);
    /** 
    Gets an NSAmountClassEntity object.
    */
    NSAmountClassEntity GetAmountClassEntity(Integer amountClassEntityId);
    /** 
    Gets all web panels owned by your app; works in Online only, for registered Apps that send a valid ApplicationToken
    */
    NSWebPanelEntity[] GetAppWebPanels();
    /** 
    Gets the base currency, used for calculating exchange rates
    */
    NSCurrencyEntity GetBaseCurrency();
    /** 
    Gets an NSBusiness object.
    */
    NSBusiness GetBusiness(Integer businessId);
    /** 
    Returns all available businesses that a contact could have.
    */
    NSBusiness[] GetBusinesses();
    /** 
    Gets an array of NSBusiness objects.
    */
    NSBusiness[] GetBusinessList(Integer[] businessIds);
    /** 
    Returns all categories a contact could belong to
    */
    NSCategory[] GetCategories();
    /** 
    Gets an NSCategory object.
    */
    NSCategory GetCategory(Integer categoryId);
    /** 
    Gets an array of NSCategory objects.
    */
    NSCategory[] GetCategoryList(Integer[] categoryIds);
    /** 
    Gets an NSCompetitor object.
    */
    NSCompetitor GetCompetitor(Integer competitorId);
    /** 
    Gets an array of NSCompetitor objects.
    */
    NSCompetitor[] GetCompetitorList(Integer[] competitorIds);
    /** 
    Returns all competitors
    */
    NSCompetitor[] GetCompetitors();
    /** 
    Gets an NSConsentPurpose object.
    */
    NSConsentPurpose GetConsentPurpose(Integer consentPurposeId);
    /** 
    Gets an array of NSConsentPurpose objects.
    */
    NSConsentPurpose[] GetConsentPurposeList(Integer[] consentPurposeIds);
    /** 
    Returns all defined purposes.
    */
    NSConsentPurpose[] GetConsentPurposes();
    /** 
    Gets an NSConsentSource object.
    */
    NSConsentSource GetConsentSource(Integer consentSourceId);
    /** 
    Gets an array of NSConsentSource objects.
    */
    NSConsentSource[] GetConsentSourceList(Integer[] consentSourceIds);
    /** 
    Returns all defined Sources.
    */
    NSConsentSource[] GetConsentSources();
    /** 
    Returns all available countries a contact or person could belong to.
    */
    NSCountry[] GetCountries();
    /** 
    Gets an NSCountry object.
    */
    NSCountry GetCountry(Integer countryId);
    /** 
    Gets an array of NSCountry objects.
    */
    NSCountry[] GetCountryList(Integer[] countryIds);
    /** 
    Gets an NSCredited object.
    */
    NSCredited GetCredited(Integer creditedId);
    /** 
    Gets an array of NSCredited objects.
    */
    NSCredited[] GetCreditedList(Integer[] creditedIds);
    /** 
    Returns all credited
    */
    NSCredited[] GetCrediteds();
    /** 
    Returns all currencies
    */
    NSCurrency[] GetCurrencies();
    /** 
    Gets an NSCurrency object.
    */
    NSCurrency GetCurrency(Integer currencyId);
    /** 
    Gets an NSCurrencyEntity object.
    */
    NSCurrencyEntity GetCurrencyEntity(Integer currencyEntityId);
    /** 
    Gets an array of NSCurrency objects.
    */
    NSCurrency[] GetCurrencyList(Integer[] currencyIds);
    /** 
    Gets an NSCustomerLanguage object.
    */
    NSCustomerLanguage GetCustomerLanguage(Integer customerLanguageId);
    /** 
    Gets an array of NSCustomerLanguage objects.
    */
    NSCustomerLanguage[] GetCustomerLanguageList(Integer[] customerLanguageIds);
    NSCustomerLanguage[] GetCustomerLanguages();
    /** 
    Gets an NSDeliveryTerm object.
    */
    NSDeliveryTerm GetDeliveryTerm(Integer deliveryTermId);
    /** 
    Returns all DeliveryTerms in SuperOffice database.
    */
    NSDeliveryTerm[] GetDeliveryTerms();
    /** 
    Gets an NSDeliveryType object.
    */
    NSDeliveryType GetDeliveryType(Integer deliveryTypeId);
    /** 
    Returns all DeliveryTypes in SuperOffice database.
    */
    NSDeliveryType[] GetDeliveryTypes();
    /** 
    Gets an NSDepartment object.
    */
    NSDepartment GetDepartment(Integer departmentId);
    /** 
    Gets an array of Department objects.
    */
    NSDepartment[] GetDepartmentList(Integer[] departmentIds);
    /** 
    Gets all departments/user groups for the internal phone list with the user's colleagues.
    */
    NSDepartment[] GetDepartments();
    /** 
    Gets an NSDocumentTemplate object.
    */
    NSDocumentTemplate GetDocumentTemplate(Integer documentTemplateId);
    /** 
    Gets an NSDocumentTemplateEntity object.
    */
    NSDocumentTemplateEntity GetDocumentTemplateEntity(Integer documentTemplateEntityId);
    /** 
    Gets the file extension for the document template
    */
    String GetDocumentTemplateExtension(Integer documentTemplateId);
    /** 
    Gets the supported language variations for a document template
    */
    String[] GetDocumentTemplateLanguages(Integer documentTemplateId);
    /** 
    Gets an array of NSDocumentTemplate objects.
    */
    NSDocumentTemplate[] GetDocumentTemplateList(Integer[] documentTemplateIds);
    /** 
    Retrieves a list of key-value pairs of document template propertiesGets document template properties..<p></p>
    <code>Map GetDocumentTemplateProperties(Integer documentTemplateId, String[] requestedProperties)</code>
    */
    Map GetDocumentTemplateProperties(Integer documentTemplateId, String[] requestedProperties);
    /** 
    Returns all available document templates
    */
    NSDocumentTemplate[] GetDocumentTemplates();
    /** 
    The appointment's task is a Document template item when the appointment is a document.
    */
    NSTask[] GetDocumentTemplatesTasks();
    /** 
    Retrieves a stream to a document template based on its ID
    */
    NSStream GetDocumentTemplateStreamFromId(Integer documentTemplateId, String languageCode);
    /** 
    Returns a Document Template list item as a TaskListItem.
    */
    NSTask GetDocumentTemplateTask(Integer documentTemplateId);
    /** 
    Gets a url to the document template
    */
    String GetDocumentTemplateUrl(Integer documentTemplateId, Bool writableUrl, String languageCode);
    /** 
    Gets a String array of names in project guide that this template is used in
    */
    String[] GetDocumentTemplateUsedInProjectStage(Integer documentTemplateId);
    /** 
    Gets a String array of names in sales guide that this template is used in
    */
    String[] GetDocumentTemplateUsedInSalesStage(Integer documentTemplateId);
    /** 
    Gets a list of document types supported by a given document plugin. Use the document template type when creating a new template.
    */
    Map GetDocumentTypesForPlugin(Integer pluginId);
    /** 
    Gets the value of the Emarketing strict mode setting
    */
    Bool GetEmarketingStrictMode();
    /** 
    Gets an NSExtAppEntity object.
    */
    NSExtAppEntity GetExtAppEntity(Integer extAppEntityId);
    /** 
    Gets a list item for the specified list definition
    */
    NSListItemEntity GetFromListDefinition(Integer id, Integer udListDefinitionId);
    /** 
    Gets a list item for the specified list definition
    */
    NSListItemEntity GetFromListName(Integer id, String udListDefinitionName);
    /** 
    Gets an NSHeadingEntity object.
    */
    NSHeadingEntity GetHeadingEntity(Integer headingEntityId);
    /** 
    Gets a selectable MDO list of the headings for this list item
    */
    NSSelectableMDOListItem[] GetHeadings(Integer udListDefinitionId, Integer listItemId, Bool showDeleted);
    /** 
    Gets a selectable MDO list of the headings for this list item
    */
    NSSelectableMDOListItem[] GetHeadingsForListItemFromListName(String udListDefinitionName, Integer listItemId, Bool showDeleted);
    /** 
    Gets headings for list resolved by the provided ID.
    */
    NSHeadingEntity[] GetHeadingsFromListDefinition(Integer id);
    /** 
    Gets headings for list resolved by the provided name.
    */
    NSHeadingEntity[] GetHeadingsFromName(String name);
    /** 
    Gets an NSHierarchyEntity object.
    */
    NSHierarchyEntity GetHierarchyEntity(Integer hierarchyEntityId);
    /** 
    Gets a hierarchy item from a path
    */
    NSHierarchyEntity GetHierarchyFromPath(Integer domain, String path, Bool children);
    /** 
    Returns the list of all languages installed in this database.
    */
    NSLanguageInfo[] GetInstalledLanguages();
    /** 
    Gets an NSLanguageInfo object.
    */
    NSLanguageInfo GetLanguageInfo(Integer languageInfoId);
    /** 
    Gets an array of NSLanguageInfo objects.
    */
    NSLanguageInfo[] GetLanguageInfoList(Integer[] languageInfoIds);
    /** 
    Gets an NSLegalBase object.
    */
    NSLegalBase GetLegalBase(Integer legalBaseId);
    /** 
    Gets an array of NSLegalBase objects.
    */
    NSLegalBase[] GetLegalBaseList(Integer[] legalBaseIds);
    /** 
    Returns all defined bases.
    */
    NSLegalBase[] GetLegalBases();
    /** 
    Gets an NSLink object.
    */
    NSLink GetLink(Integer linkId);
    /** 
    Gets an array of Link objects.
    */
    NSLink[] GetLinkList(Integer[] linkIds);
    /** 
    Gets a list of the lists, built-in and user-defined.
    */
    NSListEntity[] GetListDefinitions(Bool includeDeleted);
    /** 
    Gets an NSListEntity object.
    */
    NSListEntity GetListEntity(Integer listEntityId);
    /** 
    Gets an NSListEntity resolved by the provided name.
    */
    NSListEntity GetListEntityByName(String name);
    NSSelectableMDOListItem[] GetListItemsForHeading(Integer udListDefinitionId, Integer headingId);
    NSSelectableMDOListItem[] GetListItemsForHeadingFromListName(String udListDefinitionName, Integer headingId);
    NSSelectableMDOListItem[] GetListItemsForUserGroup(Integer udListDefinitionId, Integer groupId);
    NSSelectableMDOListItem[] GetListItemsForUserGroupFromListName(String udListDefinitionName, Integer groupId);
    /** 
    Gets an NSLocalizedText object.
    */
    NSLocalizedText GetLocalizedText(Integer localizedTextId);
    /** 
    Returns a localized text based on the resource ID for the selected language.
    */
    NSLocalizedText GetLocalizedTextByType(Integer textType, Integer resourceId, Integer languageId);
    /** 
    Gets an array of NSLocalizedText objects.
    */
    NSLocalizedText[] GetLocalizedTextList(Integer[] localizedTextIds);
    /** 
    Gets all localized texts in the CRM database.
    */
    NSLocalizedText[] GetLocalizedTexts();
    /** 
    Gets all localized text belonging to a specific language.
    */
    NSLocalizedText[] GetLocalizedTextsByLanguageId(Integer languageId);
    /** 
    Gets localized text by their typeGets localized text by their type.
    */
    NSLocalizedText[] GetLocalizedTextsByType(Integer[] textTypes);
    /** 
    Gets an NSMrMrs object.
    */
    NSMrMrs GetMrMrs(Integer mrMrsId);
    /** 
    Returns all Items from the NSMrMrs table sorted by their value.
    */
    NSMrMrs[] GetMrMrses();
    /** 
    Gets an array of NSMrMrs objects.
    */
    NSMrMrs[] GetMrMrsList(Integer[] mrMrsIds);
    /** 
    Gets the Our currency object if currency is enabled
    */
    NSCurrency GetOurCurrency();
    /** 
    Gets the currency of the user's owner company
    */
    NSCurrency GetOwnerCompanysCurrency();
    /** 
    Gets an NSPaymentTerm object.
    */
    NSPaymentTerm GetPaymentTerm(Integer paymentTermId);
    /** 
    Returns all PaymentTerms in SuperOffice database.
    */
    NSPaymentTerm[] GetPaymentTerms();
    /** 
    Gets an NSPaymentType object.
    */
    NSPaymentType GetPaymentType(Integer paymentTypeId);
    /** 
    Returns all PaymentTypes in SuperOffice database.
    */
    NSPaymentType[] GetPaymentTypes();
    /** 
    Gets a list of plugin-dependent capabilities for a given document archive plugin.
    */
    Map GetPluginCapabilities(Integer pluginId);
    /** 
    Gets a list of installed document plugins
    */
    Map GetPluginList();
    /** 
    Gets an NSPosition object.
    */
    NSPosition GetPosition(Integer positionId);
    /** 
    Gets an array of NSPosition objects.
    */
    NSPosition[] GetPositionList(Integer[] positionIds);
    /** 
    Returns all the positions a person could have.
    */
    NSPosition[] GetPositions();
    /** 
    Returns all priorities an appointment could have.
    */
    NSPriority[] GetPriorities();
    /** 
    Gets an NSPriority object.
    */
    NSPriority GetPriority(Integer priorityId);
    /** 
    Gets an array of Priority objects.
    */
    NSPriority[] GetPriorityList(Integer[] priorityIds);
    /** 
    Returns all ProductCategories in SuperOffice list.
    */
    NSProductCategory[] GetProductCategories();
    /** 
    Gets an NSProductCategory object.
    */
    NSProductCategory GetProductCategory(Integer productCategoryId);
    /** 
    Returns all NSProductFamily in SuperOffice list.
    */
    NSProductFamily[] GetProductFamilies();
    /** 
    Gets an NSProductFamily object.
    */
    NSProductFamily GetProductFamily(Integer productFamilyId);
    /** 
    Gets an NSProductType object.
    */
    NSProductType GetProductType(Integer productTypeId);
    /** 
    Returns all ProductTypes in SuperOffice list.
    */
    NSProductType[] GetProductTypes();
    /** 
    Gets an NSProjectStatus object.
    */
    NSProjectStatus GetProjectStatus(Integer projectStatusId);
    /** 
    Gets all items from the Project Status (ProjStatus) table.
    */
    NSProjectStatus[] GetProjectStatuses();
    /** 
    Gets an array of NSProjectStatus objects.
    */
    NSProjectStatus[] GetProjectStatusList(Integer[] projectStatusIds);
    /** 
    Gets an NSProjectType object.
    */
    NSProjectType GetProjectType(Integer projectTypeId);
    /** 
    Gets an NSProjectTypeEntity object.
    */
    NSProjectTypeEntity GetProjectTypeEntity(Integer projectTypeEntityId);
    /** 
    Gets an array of NSProjectType objects.
    */
    NSProjectType[] GetProjectTypeList(Integer[] projectTypeIds);
    /** 
    Gets all items from the Project Type (ProjType) table.
    */
    NSProjectType[] GetProjectTypes();
    /** 
    Method to return all quick replies for a given associate
    */
    NSQuickReply[] GetQuickReplies();
    /** 
    Gets an NSRating object.
    */
    NSRating GetRating(Integer ratingId);
    /** 
    Gets an array of NSRating objects.
    */
    NSRating[] GetRatingList(Integer[] ratingIds);
    /** 
    Returns all ratings
    */
    NSRating[] GetRatings();
    /** 
    Gets an NSReason object.
    */
    NSReason GetReason(Integer reasonId);
    /** 
    Gets an array of NSReason objects.
    */
    NSReason[] GetReasonList(Integer[] reasonIds);
    /** 
    Returns all reasons
    */
    NSReason[] GetReasons();
    /** 
    Gets an NSReasonSold object.
    */
    NSReasonSold GetReasonSold(Integer reasonSoldId);
    /** 
    Gets an array of ReasonSold objects.
    */
    NSReasonSold[] GetReasonSoldList(Integer[] reasonSoldIds);
    /** 
    Gets an NSReasonStalled object.
    */
    NSReasonStalled GetReasonStalled(Integer reasonStalledId);
    /** 
    Gets an array of ReasonStalled objects.
    */
    NSReasonStalled[] GetReasonStalledList(Integer[] reasonStalledIds);
    /** 
    Gets an NSRelationDefinitionEntity object.
    */
    NSRelationDefinitionEntity GetRelationDefinitionEntity(Integer relationDefinitionEntityId);
    /** 
    Gets an NSResourceEntity object.
    */
    NSResourceEntity GetResourceEntity(Integer resourceEntityId);
    /** 
    Gets an NSSaleStageEntity object.
    */
    NSSaleStageEntity GetSaleStageEntity(Integer saleStageEntityId);
    /** 
    Gets an NSSaleType object.
    */
    NSSaleType GetSaleType(Integer saleTypeId);
    /** 
    Gets an NSSaleTypeEntity object.
    */
    NSSaleTypeEntity GetSaleTypeEntity(Integer saleTypeEntityId);
    /** 
    Gets an array of NSSaleType objects.
    */
    NSSaleType[] GetSaleTypeList(Integer[] saleTypeIds);
    /** 
    Gets an NSSelectionCategory object.
    */
    NSSelectionCategory GetSelectionCategory(Integer selectionCategoryId);
    /** 
    Gets an array of SelectionCategory objects.
    */
    NSSelectionCategory[] GetSelectionCategoryList(Integer[] selectionCategoryIds);
    /** 
    Gets an NSSource object.
    */
    NSSource GetSource(Integer sourceId);
    /** 
    Gets an array of Source objects.
    */
    NSSource[] GetSourceList(Integer[] sourceIds);
    /** 
    Returns all sources
    */
    NSSource[] GetSources();
    /** 
    Gets an NSTask object.
    */
    NSTask GetTask(Integer taskId);
    /** 
    Gets an array of Task objects.
    */
    NSTask[] GetTaskList(Integer[] taskIds);
    /** 
    Returns all appointment tasks
    */
    NSTask[] GetTasks();
    NSTicketCategoryEntity[] GetTicketCategories();
    NSMDOListItem[] GetTicketCategoriesForUserGroups(Integer[] userGroupIds);
    /** 
    Gets an NSTicketCategory object.
    */
    NSTicketCategory GetTicketCategory(Integer ticketCategoryId);
    /** 
    Gets an NSTicketCategoryEntity object.
    */
    NSTicketCategoryEntity GetTicketCategoryEntity(Integer ticketCategoryEntityId);
    /** 
    Gets an array of NSTicketCategoryEntity objects.
    */
    NSTicketCategoryEntity[] GetTicketCategoryList(Integer[] ticketCategoryEntityIds);
    NSTicketPriority[] GetTicketPriorities();
    /** 
    Gets an NSTicketPriority object.
    */
    NSTicketPriority GetTicketPriority(Integer ticketPriorityId);
    /** 
    Gets an NSTicketPriorityEntity object.
    */
    NSTicketPriorityEntity GetTicketPriorityEntity(Integer ticketPriorityEntityId);
    /** 
    Gets an array of NSTicketPriority objects.
    */
    NSTicketPriority[] GetTicketPriorityList(Integer[] ticketPriorityIds);
    /** 
    Gets an NSTicketStatusEntity object.
    */
    NSTicketStatusEntity GetTicketStatusEntity(Integer ticketStatusEntityId);
    NSTicketStatusEntity[] GetTicketStatuses();
    /** 
    Gets an array of NSTicketStatusEntity objects.
    */
    NSTicketStatusEntity[] GetTicketStatusList(Integer[] ticketStatusEntityIds);
    NSSelectableMDOListItem[] GetVisibleForUserGroups(Integer udListDefinitionId, Integer listItemId);
    NSSelectableMDOListItem[] GetVisibleForUserGroupsFromListName(String udListDefinitionName, Integer listItemId);
    /** 
    Gets a web panel using the ProgId key that was specified when it was created
    */
    NSWebPanelEntity GetWebPanelByProgId(String progId);
    /** 
    Gets an NSWebPanelEntity object.
    */
    NSWebPanelEntity GetWebPanelEntity(Integer webPanelEntityId);
    /** 
    Return a list of all web panels.
    */
    NSWebPanelEntity[] GetWebPanelList();
    /** 
    Changes all references from one ticket status to another.
    */
    Void GlobalChangeTicketStatus(Integer fromTicketStatusId, Integer toTicketStatusId);
    /** 
    Moves all tickets from one ticket category to another
    */
    Void MoveAllTickets(Integer fromTicketCategoryId, Integer toTicketCategoryId);
    /** 
    Moves a list item up or down in the list based on rank
    */
    Void MoveListItem(Integer udListDefinitionId, Integer listItemId, Integer direction);
    /** 
    Updates the fullname field of all categories
    */
    Void RebuildFullnames();
    /** 
    Saves all list items for the specified list definition
    */
    NSListItemEntity[] SaveAllFromListDefinition(Integer udListDefinitionId, NSListItemEntity[] items);
    /** 
    Saves all list items for the specified list definition
    */
    NSListItemEntity[] SaveAllFromListName(String udListDefinitionName, NSListItemEntity[] items);
    /** 
    Updates the existing NSAmountClassEntity or creates a new NSAmountClassEntity if the id parameter is 0
    */
    NSAmountClassEntity SaveAmountClassEntity(NSAmountClassEntity amountClassEntity);
    /** 
    Saves an NSConsentPurpose object
    */
    NSConsentPurpose SaveConsentPurpose(NSConsentPurpose consentPurpose);
    NSConsentSource SaveConsentSource(NSConsentSource consentSource);
    /** 
    Saves a country
    */
    NSCountry SaveCountry(NSCountry country);
    /** 
    Updates the existing NSCurrencyEntity or creates a new NSCurrencyEntity if the id parameter is 0
    */
    NSCurrencyEntity SaveCurrencyEntity(NSCurrencyEntity currencyEntity);
    /** 
    Updates the existing NSDocumentTemplateEntity or creates a new NSDocumentTemplateEntity if the id parameter is 0
    */
    NSDocumentTemplateEntity SaveDocumentTemplateEntity(NSDocumentTemplateEntity documentTemplateEntity);
    /** 
    Writes content in stream to document template file
    */
    NSTemplateInfo SaveDocumentTemplateStream(Integer documentTemplateId, NSStream content, String languageCode, Integer pluginId);
    /** 
    Updates the existing NSExtAppEntity or creates a new NSExtAppEntity if the id parameter is 0
    */
    NSExtAppEntity SaveExtAppEntity(NSExtAppEntity extAppEntity);
    /** 
    Saves a list item for the specified list definition
    */
    NSListItemEntity SaveFromListDefinition(Integer id, Integer udListDefinitionId, NSListItemEntity item);
    /** 
    Saves a list item for the specified list definition
    */
    NSListItemEntity SaveFromListName(Integer id, String udListDefinitionName, NSListItemEntity item);
    /** 
    Updates the existing NSHeadingEntity or creates a new NSHeadingEntity if the id parameter is 0
    */
    NSHeadingEntity SaveHeadingEntity(NSHeadingEntity headingEntity);
    /** 
    Saves new heading for list resolved by the provided ID.
    */
    NSHeadingEntity SaveHeadingFromListDefinition(Integer id, NSHeadingEntity entity);
    /** 
    Saves new heading for list resolved by the provided name.
    */
    NSHeadingEntity SaveHeadingFromName(String name, NSHeadingEntity entity);
    /** 
    Saves the active headings for the list item.
    */
    NSSelectableMDOListItem[] SaveHeadingsForListItemFromListDefinition(Integer udListDefinitionId, Integer listItemId, NSSelectableMDOListItem[] headings);
    /** 
    Saves the headings for the list item.
    */
    NSSelectableMDOListItem[] SaveHeadingsForListItemFromListName(String udListDefinitionName, Integer listItemId, NSSelectableMDOListItem[] headings);
    /** 
    Save headings for list resolved by the provided id.
    */
    NSHeadingEntity[] SaveHeadingsFromListDefinition(Integer id, NSHeadingEntity[] entities);
    /** 
    Saves headings for list resolved by the provided name.
    */
    NSHeadingEntity[] SaveHeadingsFromName(String name, NSHeadingEntity[] entities);
    /** 
    Updates the existing NSHierarchyEntity or creates a new NSHierarchyEntity if the id parameter is 0
    */
    NSHierarchyEntity SaveHierarchyEntity(NSHierarchyEntity hierarchyEntity);
    NSLegalBase SaveLegalBase(NSLegalBase legalBase);
    /** 
    Updates the existing NSListEntity or creates a new NSListEntity if the id parameter is 0
    */
    NSListEntity SaveListEntity(NSListEntity listEntity);
    /** 
    Saves an NSListEntity resolved by the provided name.
    */
    NSListEntity SaveListEntityByName(String name, NSListEntity listEntity);
    /** 
    Saves the NSListItemEntity.
    */
    NSListItemEntity SaveListItemEntity(NSListItemEntity listItemEntity);
    /** 
    Updates the existing NSProjectTypeEntity or creates a new NSProjectTypeEntity if the id parameter is 0
    */
    NSProjectTypeEntity SaveProjectTypeEntity(NSProjectTypeEntity projectTypeEntity);
    /** 
    Saves all quick replies for a given associate
    */
    Void SaveQuickReplies(NSQuickReply[] quickReplies);
    /** 
    Updates the existing NSRelationDefinitionEntity or creates a new NSRelationDefinitionEntity if the id parameter is 0
    */
    NSRelationDefinitionEntity SaveRelationDefinitionEntity(NSRelationDefinitionEntity relationDefinitionEntity);
    /** 
    Updates the existing NSResourceEntity or creates a new NSResourceEntity if the id parameter is 0
    */
    NSResourceEntity SaveResourceEntity(NSResourceEntity resourceEntity);
    /** 
    Updates the existing NSSaleStageEntity or creates a new NSSaleStageEntity if the id parameter is 
    */
    NSSaleStageEntity SaveSaleStageEntity(NSSaleStageEntity saleStageEntity);
    /** 
    Updates the existing NSSaleTypeEntity or creates a new NSSaleTypeEntity if the id parameter is 0
    */
    NSSaleTypeEntity SaveSaleTypeEntity(NSSaleTypeEntity saleTypeEntity);
    /** 
    Updates the existing NSTicketCategoryEntity or creates a new NSTicketCategoryEntity if the id parameter is 0
    */
    NSTicketCategoryEntity SaveTicketCategoryEntity(NSTicketCategoryEntity ticketCategoryEntity);
    /** 
    Updates the existing NSTicketPriorityEntity or creates a new NSTicketPriorityEntity if the id parameter is 0
    */
    NSTicketPriorityEntity SaveTicketPriorityEntity(NSTicketPriorityEntity ticketPriorityEntity);
    /** 
    Updates the existing NSTicketStatusEntity or creates a new NSTicketStatusEntity if the id parameter is 0
    */
    NSTicketStatusEntity SaveTicketStatusEntity(NSTicketStatusEntity ticketStatusEntity);
    /** 
    Updates the existing NSWebPanelEntity or creates a new NSWebPanelEntity if the id parameter is 0
    */
    NSWebPanelEntity SaveWebPanelEntity(NSWebPanelEntity webPanelEntity);
    /** 
    Creates a new document template based on another template
    */
    NSDocumentTemplateEntity SetDocumentTemplateFromDocumentTemplate(Integer sourceDocumentTemplateId, NSDocumentTemplateEntity documentTemplateEntity);
    /** 
    Stores a document template from its stream.
    */
    NSDocumentTemplateEntity SetDocumentTemplateStream(NSDocumentTemplateEntity documentTemplateEntity, NSStream stream, String languageCode, Integer pluginId);
    /** 
    Turns on the Emarketing strict mode, which will enable full GDPR rules concerning Emarketing consents and subscriptions
    */
    Void SetEmarketingStrictMode(Bool enable);
    /** 
    Sets headings which this list item should be listed under
    */
    Void SetHeadingsForListItem(Integer udListDefinitionId, Integer listItemId, Integer[] headingIds, Bool enable);
    /** 
    Updates listItems that will be visible for this usergroup
    */
    Void SetListItemsForHeading(Integer udListDefinitionId, Integer headingId, Integer[] listItemIds, Bool enable);
    /** 
    Updates listItems under this heading
    */
    Void SetListItemsForHeadingFromListName(String udListDefinitionName, Integer headingId, Integer[] listItemIds, Bool enable);
    /** 
    Updates listItems that will be visible for this usergroup
    */
    Void SetListItemsForUserGroup(Integer udListDefinitionId, Integer usergroupId, Integer[] listItemIds, Bool enable);
    /** 
    Updates listItems that will be visible for this usergroup
    */
    Void SetListItemsForUserGroupFromListName(String udListDefinitionName, Integer usergroupId, Integer[] listItemsID, Bool enable);
    /** 
    Sets rank order on headings
    */
    Void SetRankOnHeadings(Integer udListDefinitionId, Integer[] headingIds);
    /** 
    Sets rank order on project activity
    */
    Void SetRankOnProjectActivity(Integer projectTypeStatusLinkId, Integer[] itemsIds);
    /** 
    Sets rank order on project document
    */
    Void SetRankOnProjectDocument(Integer projectTypeStatusLinkId, Integer[] itemsIds);
    /** 
    Sets rank order on sale activity
    */
    Void SetRankOnSaleActivity(Integer saleTypeStageLinkId, Integer[] itemsIds);
    /** 
    Sets rank order on project document
    */
    Void SetRankOnSaleDocument(Integer saleTypeStageLinkId, Integer[] itemsIds);
    /** 
    Sets ticket categories for one user group
    */
    Void SetTicketCategoriesForUserGroup(Integer userGroupId, Integer[] categoryIds);
    /** 
    Sets a group which this list item should be visible for
    */
    Void SetVisibleForUserGroup(Integer udListDefinitionId, Integer listItemId, Integer[] userGroupId, Bool enable);
    /** 
    Updates User groups that this list item is visible for
    */
    NSSelectableMDOListItem[] SetVisibleForUserGroups(Integer udListDefinitionId, Integer listItemId, NSSelectableMDOListItem[] userGroups);
    /** 
    Updates User groups that this list item is visible for
    */
    NSSelectableMDOListItem[] SetVisibleForUserGroupsFromListName(String udListDefinitionName, Integer listItemId, NSSelectableMDOListItem[] userGroups);
    /** 
    Sort the list items in a given list alphabetically
    */
    Void SortListItems(Integer udListDefinitionId, String cultureName);
    /** 
    Updates a hierarchy item from a path
    */
    NSHierarchyEntity UpdateHierarchyFromPath(Integer domain, String path, NSHierarchyEntity entity);
    /** 
    Updates a TicketCategory memberships.
    */
    Void UpdateCategoryMemberships(NSTicketCategoryMembershipEntity[] membershipsToAdd, NSTicketCategoryMembershipEntity[] membershipsToUpdate, NSTicketCategoryMembershipEntity[] membershipsToDelete);
}`;