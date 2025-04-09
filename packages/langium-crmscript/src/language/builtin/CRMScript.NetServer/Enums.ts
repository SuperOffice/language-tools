export const Enums = `/** Completed status enum common to appointments, documents and sales*/
enum NSActivityStatus {
    Unknown = 0,
    NotStarted = 0,
    Started = 0,
    Completed = 0
}

/** The type of Address*/
enum NSAddressType {
    Unknown = 0,
    ContactPostalAddress = 0,
    ContactStreetAddress = 0,
    PersonPrivateAddress = 0,
    QuoteBillingAddress = 0,
    QuoteShippingAddress = 0
}

/** Is this an all day event: 0 = No, 1 = Yes*/
enum NSAllDayEvent {
    No = 0,
    Yes = 0
}

/** Value for the availableInState field in table externalapplication*/
enum NSAppAvailState {
    Always = 0,
    CentralDb = 0,
    SatelliteDb = 0,
    TravelDb = 0,
    SalesMarketingWeb = 0,
    SalesMarketingPocket = 0
}

/** Appointment and invitation synchronization info*/
enum NSAppointmentCautionWarning {
    OK = 0,
    NotInSync = 0,
    NotNotifiedByEmail = 0,
    RecurrencePatternNotSupported = 0,
    IncomingRecurrenceChangeNotSupported = 0,
    ExternalParticipantsDateTimeMismatch = 0
}

/** Value for field 'private' in table 'appointment'.*/
enum AppointmentPrivate {
    Public = 0,
    PrivateUser = 0,
    PrivateGroup = 0
}

/** Value for field 'status' in table 'appointment'.*/
enum NSAppointmentStatus {
    UnknownOrPostIt = 0,
    NotStarted = 0,
    Started = 0,
    Completed = 0,
    Hidden = 0,
    Booking = 0,
    BookingMoved = 0,
    BookingSeen = 0,
    BookingMovedSeen = 0,
    BookingDeclined = 0,
    BookingDeleted = 0,
    Assignment = 0,
    AssignmentSeen = 0,
    AssignmentDeclined = 0
}

/** Value for field 'type' in table 'appointment'.*/
enum NSAppointmentType {
    Unknown = 0,
    inDiary = 0,
    inChecklist = 0,
    Note = 0,
    Document = 0,
    SavedReport = 0,
    BookingForDiary = 0,
    BookingForChecklist = 0,
    MergeDraft = 0,
    MergeFinal = 0
}

/** Behaviour in archives*/
enum NSArchiveBehaviour {
    None = 0,
    InArchives = 0,
    MultiSelectInArchives = 0
}

/** Status if this appointment is in the process of being assigned to someone else*/
enum NSAssignmentStatus {
    Unknown = 0,
    None = 0,
    Assigning = 0,
    Seen = 0,
    Declined = 0
}

/** Describes what source the associates should be retrieved from. */
enum NSAssociateSourceType {
    Unknown = 0,
    History = 0,
    DiaryViewList = 0,
    Department = 0,
    All = 0
}

/** Field Type in table associate*/
enum NSAssociateType {
    NoPersonBit = 0,
    AnonymousBit = 0,
    NoCalenderBit = 0,
    NoSentryBit = 0,
    Employee = 0,
    Resource = 0,
    ExternalPerson = 0,
    System = 0,
    Anonymous = 0
}

/** Value for field 'badge' in table 'ej_message'. Defines the initial source of a message.*/
enum NSBadgeType {
    Unknown = 0,
    Reply = 0,
    Forward = 0,
    Comment = 0,
    Incoming = 0,
    Outgoing = 0
}

/** Batch task cancel support*/
enum NSBatchTaskCancellationBehaviour {
    CanCancel = 0,
    CancelWithWarning = 0,
    CannotCancel = 0
}

enum NSBatchTaskState {
    Unknown = 0,
    New = 0,
    Aquired = 0,
    Started = 0,
    Succeeded = 0,
    Failed = 0,
    SucceededManualCleanup = 0,
    All = 0
}

/** The link type, often synonymous with the blob type, of a BinaryObjectLink row*/
enum NSBlobLinkType {
    PersonImage = 0,
    ProjectImage = 0,
    EventImage = 0,
    Thumbnail = 0,
    StatusMonitorImage = 0,
    BatchTask = 0,
    ProductImage = 0,
    ProductThumbnail = 0,
    QuoteLineImage = 0,
    QuoteLineThumbnail = 0,
    AccessToken = 0,
    RefreshToken = 0,
    Dashboard = 0,
    DashboardTile = 0,
    ChatTopicImage = 0,
    FormsBackgroundImage = 0,
    ContactImage = 0,
    DashboardHtmlTileData = 0
}

/** The type of booking the appointment represents*/
enum NSBookingType {
    Unknown = 0,
    None = 0,
    Owner = 0,
    Participant = 0
}

/** Valid iCal methods*/
enum NSCalMethod {
    Unknown = 0,
    Add = 0,
    Cancel = 0,
    Counter = 0,
    DeclineCounter = 0,
    Publish = 0,
    Refresh = 0,
    Reply = 0,
    Request = 0
}

/** iCal reply status*/
enum NSCalReplyStatus {
    Unknown = 0,
    Accepted = 0,
    Declined = 0,
    Tentative = 0
}

/** Different methods the user may use to change password*/
enum NSChangePasswordType {
    Email = 0,
    Password = 0
}

/** Chat Message Special type*/
enum NSChatMessageSpecialType {
    None = 0,
    Welcome = 0,
    Url = 0,
    Block = 0,
    NewSession = 0,
    TransferedSession = 0,
    Error = 0,
    SessionDeleted = 0,
    FaqSuccessQuestion = 0,
    ClosedByUser = 0,
    ClosedByCustomer = 0,
    ClosedByIdle = 0,
    TransferRejected = 0,
    ReopenedByCustomer = 0,
    ClickedOption = 0,
    BotMessage = 0,
    Options = 0,
    IllegalFileType = 0
}

/** Chat Message type*/
enum NSChatMessageType {
    Invalid = 0,
    ToCustomer = 0,
    ToUser = 0,
    Special = 0
}

/** Value for field 'flags' in table 'chat_session'.*/
enum NSChatSessionFlags {
    CustomerIsTyping = 0,
    UserIsTyping = 0
}

/** Chat Session status*/
enum NSChatSessionStatus {
    Invalid = 0,
    PreChatForm = 0,
    Faq = 0,
    OfflineForm = 0,
    InQueue = 0,
    CustomerLast = 0,
    UserLast = 0,
    Finished = 0,
    Deleted = 0,
    Closed = 0,
    RequestPosted = 0,
    ClosedFromQueue = 0
}

/** Value for field 'chat_status' in table 'ejuser'.*/
enum NSChatStatus {
    NotPresent = 0,
    Present = 0
}

/** Chat Topic flags*/
enum NSChatTopicFlag {
    None = 0,
    PopupAlert = 0,
    EmailAlert = 0,
    CollectConsent = 0,
    UseCustomQueueMessage = 0,
    WidgetSizeLarge = 0,
    OfflineCollectConsent = 0,
    UseQueueOfflineForm = 0
}

/** Chat widget size: normal or large*/
enum NSChatWidgetSize {
    Normal = 0,
    Large = 0
}

/** Enum listing the possible checkout states of a document, as seen from outside the document plugin*/
enum NSCheckoutState {
    NotCheckedOut = 0,
    CheckedOutOwn = 0,
    CheckedOutOther = 0,
    LockingNotSupported = 0
}

/** Color index of tasks*/
enum NSColorIndex {
    LightBlue = 0,
    DarkBlue = 0,
    LightGray = 0,
    DarkGray = 0,
    LightGreen = 0,
    DarkGreen = 0,
    LightYellow = 0,
    DarkYellow = 0,
    LightRed = 0,
    DarkRed = 0,
    BlueAlt1 = 0,
    BlueAlt2 = 0,
    BlueAlt3 = 0,
    GrayAlt1 = 0,
    GrayAlt2 = 0,
    GrayAlt3 = 0,
    GreenAlt1 = 0,
    GreenAlt2 = 0,
    GreenAlt3 = 0,
    YellowAlt1 = 0,
    YellowAlt2 = 0,
    YellowAlt3 = 0,
    RedAlt1 = 0,
    RedAlt2 = 0,
    RedAlt3 = 0
}

/** Command action*/
enum NSCommandAction {
    Implicit = 0,
    YesNo = 0,
    OkCancel = 0,
    Ok = 0
}

/** Result of an action*/
enum NSCommandActionResult {
    Implicit = 0,
    Yes = 0,
    Ok = 0,
    No = 0,
    Cancel = 0
}

/** Conceptual image types*/
enum NSConceptualImageType {
    UndefinedImage = 0,
    PersonImage = 0,
    ProjectImage = 0,
    EventImage = 0,
    Thumbnail = 0,
    StatusMonitorImage = 0
}

/** Value for field 'type' in table 'cust_config'.*/
enum NSConfigType {
    Style = 0,
    Options = 0
}

/** Describes what type of activity/action there has been on a contact*/
enum NSContactAction {
    Unknown = 0,
    Created = 0,
    Updated = 0,
    NewActivity = 0,
    ActivityCompleted = 0,
    PersonAdded = 0,
    PersonUpdated = 0,
    DocumentAdded = 0,
    All = 0
}

/** Describes what source the contacts should be retrieved from.*/
enum NSContactSourceType {
    Unknown = 0,
    History = 0,
    Diary = 0,
    Favorites = 0,
    All = 0
}

/** Types of control used with user administration work with credentials*/
enum NSCredentialControlType {
    Static = 0,
    Edit = 0,
    Password = 0,
    Link = 0,
    Hidden = 0
}

/** What kind of usage is this credential for*/
enum NSCredentialUsage {
    Outbound = 0,
    Inbound = 0,
    Session = 0
}

/** Actor type within the CRM, system, a subset of the SuperOffice Entity types*/
enum NSCrmActorType {
    Unknown = 0,
    Contact = 0,
    Person = 0,
    Project = 0,
    Sale = 0
}

/** Custom Field type: 1 = Number, 2 = Short text, 3 = Long text, 4 = Date, 5 = Unlimited date, 6 = Checkbox, 7 = Drop-down listbox, 8 = Decimal, 9 = DateTime, 10 = Time, 11 = TimeSpan, 12 = Relation, 13 = Attachment*/
enum NSCustomFieldType {
    Unknown = 0,
    Integer = 0,
    ShortText = 0,
    LongText = 0,
    Date = 0,
    Blob = 0,
    Checkbox = 0,
    MdoList = 0,
    Decimal = 0,
    DateTime = 0,
    Time = 0,
    TimeSpan = 0,
    RelationTo = 0,
    Attachment = 0,
    DynamicLink = 0,
    ListText = 0
}

/** Dashboard layout*/
enum NSDashboardLayout {
    None = 0,
    One = 0,
    TwoVerticalSplit = 0,
    ThreeESplit = 0,
    TwoHorizontalSplit = 0,
    ThreeTSplit = 0,
    Four = 0
}

/** Dashboard tile entity type*/
enum NSDashboardTileEntityType {
    None = 0,
    Company = 0,
    Project = 0,
    Sale = 0,
    Product = 0,
    Activity = 0,
    Document = 0,
    WebPanel = 0,
    Followup = 0
}

/** Dashboard tile option type*/
enum NSDashboardTileOptionType {
    None = 0,
    String = 0,
    Integer = 0,
    Boolean = 0,
    List = 0
}

/** Dashboard tile type*/
enum NSDashboardTileType {
    None = 0,
    Chart = 0,
    Web = 0,
    List = 0,
    Bignum = 0
}

/** Dashboard tile currency mode*/
enum NSDashTileCurrencyMode {
    None = 0,
    Base = 0,
    Own = 0,
    Specified = 0
}

/** Dashboard tile entity type (V2)*/
enum NSDashTileEntityType {
    None = 0,
    Contact = 0,
    Sale = 0,
    Project = 0,
    Appointment = 0,
    Person = 0
}

/** Dashboard tile measure*/
enum NSDashTileMeasure {
    None = 0,
    CountAll = 0,
    Sum = 0,
    Average = 0,
    Max = 0,
    Min = 0,
    Count = 0
}

/** Dashboard tile chart type (V2)*/
enum NSDashTileType {
    None = 0,
    Pie = 0,
    List = 0,
    BigNum = 0,
    Bar = 0,
    Line = 0,
    Area = 0,
    Column = 0,
    CombinedBarLine = 0,
    CombinedColumnLine = 0,
    WebPanel = 0,
    HTML = 0,
    Gauge = 0
}

/** Defines where a DashTileDefinition can be used*/
enum NSDashTileUsage {
    None = 0,
    Dashboard = 0,
    Selection = 0
}

/** State of delta*/
enum NSDeltaState {
    Unknown = 0,
    Draft = 0,
    Published = 0
}

/** Type and content of delta */
enum NSDeltaType {
    Unknown = 0,
    System = 0,
    WebPanel = 0,
    CustomFields = 0,
    Customized = 0
}

/** Indicates what design type this message is created with*/
enum NSDesignType {
    Unknown = 0,
    SOEditor = 0,
    Unlayer = 0
}

/** Value for field 'direction' in table 'doctmpl'.*/
enum NSDocTmplDirection {
    Unknown = 0,
    Incoming = 0,
    Outgoing = 0,
    SaintAll = 0
}

/** Is this document template some kind of appointment document, and if so what*/
enum NSDocTmplInvitationType {
    None = 0,
    New = 0,
    Changed = 0,
    Cancelled = 0
}

/** Is this document template some kind of quote document, and if so what*/
enum NSDocTmplPrivacyType {
    None = 0,
    PersonRegistered = 0
}

/** Is this document template some kind of quote document, and if so what*/
enum NSDocTmplQuoteType {
    None = 0,
    MailBody = 0,
    MainDocument = 0,
    QuoteLines = 0,
    ConfirmationMailBody = 0,
    ConfirmationLines = 0
}

/** Value for field 'record_type' in table 'doctmpl'.*/
enum NSDocTmplType {
    Unknown = 0,
    Appointment = 0,
    Document = 0,
    Email = 0,
    Fax = 0,
    Phone = 0,
    Todo = 0,
    MergeDraft = 0,
    MergeFinal = 0,
    SavedReport = 0
}

/** Locking semantics requested/applied to a document*/
enum NSDocumentLockSemantics {
    None = 0,
    Locking = 0,
    Versioning = 0
}

/** Hierarchy domain*/
enum NSDomain {
    Unknown = 0,
    ExtraTables = 0,
    ScreenDefinitions = 0,
    Scripts = 0,
    Selections = 0,
    ExternalDocuments = 0,
    UserGroups = 0,
    ExternalDocumentRelatedToSpmMessage = 0,
    Dashboards = 0,
    EmailFlows = 0
}

/** Units of duration - from seconds to centuries*/
enum NSDurationUnit {
    Unknown = 0,
    Second = 0,
    Minute = 0,
    Hour = 0,
    Day = 0,
    Week = 0,
    Month = 0,
    Quarter = 0,
    HalfYear = 0,
    Year = 0,
    Decade = 0,
    Century = 0,
    Millenium = 0
}

/** Access levels to a single field. Read and/or write.*/
enum NSEFieldRight {
    None = 0,
    Read = 0,
    Write = 0,
    Update = 0,
    Unused1 = 0,
    Unused2 = 0,
    Unused3 = 0,
    Unused4 = 0,
    Nullable = 0,
    UIHintMandatory = 0,
    UIHintReadOnly = 0,
    FULL = 0,
    UIHints = 0
}

enum NSEjUserStatus {
    StatusNone = 0,
    StatusNormal = 0,
    StatusNotAvailable = 0,
    StatusDeleted = 0,
    StatusReadOnly = 0,
    StatusSpm = 0,
    StatusSystem = 0
}

/** Status for adding attributes to an element in a statical list*/
enum NSElementStatus {
    None = 0,
    Skipped = 0
}

/** Possible statuses for an EmailAccount.*/
enum NSEmailAccountStatus {
    Unknown = 0,
    Deleted = 0,
    Failing = 0,
    Failed = 0,
    Ok = 0
}

enum NSEMailFlags {
    None = 0,
    Seen = 0,
    Deleted = 0,
    Recent = 0,
    Flagged = 0,
    Draft = 0,
    Answered = 0
}

/** Email/Mailing From field address algorithm*/
enum NSEmailFromType {
    FromOnlySpecified = 0,
    FromSalesContact = 0,
    FromSupportContact = 0
}

/** What type of delivery system to use for a mail merge*/
enum NSEMailMergeTargetType {
    BestFit = 0,
    Electronic = 0,
    Mail = 0,
    Fax = 0,
    Printer = 0,
    Xml = 0,
    XmlFax = 0
}

enum NSEMailPriority {
    NoPriority = 0,
    Highest = 0,
    High = 0,
    Normal = 0,
    Low = 0,
    Lowest = 0
}

/** Email/Mailing ReplyTo field address algorithm*/
enum NSEmailReplyToType {
    ReplyToOnlySpecified = 0,
    ReplyToSalesContact = 0,
    ReplyToSupportContact = 0,
    ReplyToEmpty = 0
}

/** What kind of email address - email, or some other communication type (chat, voip)*/
enum NSEmailType {
    Email = 0,
    Chat = 0,
    VoiP = 0
}

/** Actor type within the ERP system, related but not identitcal to SuperOffice Entity type*/
enum NSErpActorType {
    Unknown = 0,
    Customer = 0,
    Supplier = 0,
    Partner = 0,
    Person = 0,
    Project = 0,
    Employee = 0,
    Sale = 0
}

/** Response codes used by ErpSync services*/
enum NSErpSyncResponseCode {
    NoError = 0,
    ErrorConnectorHasConnections = 0,
    ErrorNotFound = 0
}

/** Table right is a combination of bits representing permissions on a row.*/
enum NSETableRight {
    None = 0,
    Select = 0,
    Update = 0,
    Insert = 0,
    Delete = 0,
    Filtering = 0,
    RestrictedUpdate = 0,
    Unused1 = 0,
    Uninitialized = 0,
    FULL = 0,
    WRITE = 0,
    URU = 0,
    UDR = 0,
    UR = 0,
    URI = 0,
    R = 0,
    RI = 0,
    RF = 0,
    F = 0,
    FI = 0
}

/** CrmScript Event triggers - when CRMScript is run based on user or system actions. */
enum NSEventHandlerType {
    Unknown = 0,
    NewTicket = 0,
    NewTicketFromCustomerCenter = 0,
    NewTicketFromEmail = 0,
    NewTicketFromCustomerCenterBeforeSave = 0,
    NewTicketFromSpmLink = 0,
    NewNotifyTicketFromForm = 0,
    NewTicketFromForm = 0,
    TicketSave = 0,
    TicketClosed = 0,
    TicketPostponed = 0,
    TicketDeleted = 0,
    TicketActivated = 0,
    TicketReopened = 0,
    TicketReopenedFromCustomerCenter = 0,
    TicketReopenedFromEmail = 0,
    TicketChangedPriority = 0,
    TicketChangedCategory = 0,
    TicketChangedOwnedBy = 0,
    TicketChangedPrimaryCustomer = 0,
    TicketChangedTicketStatus = 0,
    TicketChangedSlevel = 0,
    TicketMessageAdded = 0,
    TicketInternalMessageAdded = 0,
    TicketExternalMessageAdded = 0,
    TicketMessageSentimentCalculated = 0,
    CompactModeInjection = 0,
    CustomerCenterAuthentication = 0,
    ScheduledTaskFailed = 0,
    DbiTaskFailed = 0,
    CustomerSetSubscriptions = 0,
    ImportMailBeforeProcessing = 0,
    ImportMailAfterProcessing = 0,
    MainMenu = 0,
    ChatNewSession = 0,
    ChatSessionChangedStatus = 0,
    ChatBeforeSaveNewMessage = 0,
    ChatAfterSaveNewMessage = 0,
    ServiceScreenNewTicketLoad = 0,
    ServiceScreenNewQuickTicketLoad = 0,
    ServiceScreenListTicketMessagesLoad = 0,
    ServiceScreenAddMessageLoad = 0,
    ServiceScreenEditTicketLoad = 0,
    ServiceScreenViewCustomerLoad = 0,
    ServiceScreenEditCustomerLoad = 0,
    ServiceScreenViewCompanyLoad = 0,
    ServiceScreenEditCompanyLoad = 0,
    ServiceScreenForwardLoad = 0,
    ServiceScreenEditExtraTableLoad = 0,
    ServiceScreenNewTicketBeforeSubmit = 0,
    ServiceScreenNewQuickTicketBeforeSubmit = 0,
    ServiceScreenListTicketMessagesBeforeSubmit = 0,
    ServiceScreenAddMessageBeforeSubmit = 0,
    ServiceScreenEditTicketBeforeSubmit = 0,
    ServiceScreenViewCustomerBeforeSubmit = 0,
    ServiceScreenEditCustomerBeforeSubmit = 0,
    ServiceScreenViewCompanyBeforeSubmit = 0,
    ServiceScreenEditCompanyBeforeSubmit = 0,
    ServiceScreenForwardBeforeSubmit = 0,
    ServiceScreenEditExtraTableBeforeSubmit = 0,
    ServiceScreenNewTicketAfterSubmit = 0,
    ServiceScreenNewQuickTicketAfterSubmit = 0,
    ServiceScreenListTicketMessagesAfterSubmit = 0,
    ServiceScreenAddMessageAfterSubmit = 0,
    ServiceScreenEditTicketAfterSubmit = 0,
    ServiceScreenViewCustomerAfterSubmit = 0,
    ServiceScreenEditCustomerAfterSubmit = 0,
    ServiceScreenViewCompanyAfterSubmit = 0,
    ServiceScreenEditCompanyAfterSubmit = 0,
    ServiceScreenForwardAfterSubmit = 0,
    ServiceScreenEditExtraTableAfterSubmit = 0,
    SalesBeforeSaveAppointment = 0,
    SalesBeforeSaveStakeholder = 0,
    SalesBeforeSaveQuote = 0,
    SalesBeforeSaveDocument = 0,
    SalesBeforeSaveContact = 0,
    SalesBeforeSavePerson = 0,
    SalesBeforeSaveRelation = 0,
    SalesBeforeSaveSale = 0,
    SalesBeforeSaveProject = 0,
    SalesBeforeSaveSelection = 0,
    SalesBeforeSaveProjectMember = 0,
    SalesBeforeSaveSelectionMember = 0,
    SalesBeforeSaveQuoteLine = 0,
    SalesBeforeSaveApproveQuote = 0,
    SalesBeforeSaveRejectQuote = 0,
    SalesBeforeSaveTicket = 0,
    SalesAfterSaveAppointment = 0,
    SalesAfterSaveStakeholder = 0,
    SalesAfterSaveQuote = 0,
    SalesAfterSaveDocument = 0,
    SalesAfterSaveContact = 0,
    SalesAfterSavePerson = 0,
    SalesAfterSaveRelation = 0,
    SalesAfterSaveSale = 0,
    SalesAfterSaveProject = 0,
    SalesAfterSaveSelection = 0,
    SalesAfterSaveProjectMember = 0,
    SalesAfterSaveSelectionMember = 0,
    SalesAfterSaveQuoteLine = 0,
    SalesAfterSaveApproveQuote = 0,
    SalesAfterSaveRejectQuote = 0,
    SalesAfterSaveTicket = 0
}

/** Value for the executeOnEvent field in table externalapplication*/
enum NSExecuteOnEvent {
    Never = 0,
    Logon = 0,
    Logoff = 0,
    LocalUpdate = 0,
    Wait = 0
}

/** Describes what part of the external user should be changed.*/
enum NSExternalUserInfoModification {
    Unknown = 0,
    UserName = 0,
    Password = 0,
    Role = 0,
    Active = 0,
    All = 0
}

/** String, int, decimal, image, url, etc. How should the value be interpreted.*/
enum NSExtraDataFieldType {
    String = 0,
    Url = 0,
    Image = 0
}

/** Flag values for the CS extrafields dictionary*/
enum NSExtraFieldFlags {
    Neutral = 0,
    Searchable = 0,
    Public = 0,
    InNewTicket = 0,
    SetWhenClicked = 0,
    CannotChange = 0,
    DropDown = 0,
    Readable = 0,
    DontEscape = 0,
    Deleted = 0,
    IsId = 0,
    IsForeignId = 0,
    ReadOnly = 0,
    UseDefault = 0,
    ListRelations = 0,
    ViewInList = 0,
    HideHeaderIfEmpty = 0,
    HideFunctions = 0,
    NotEmpty = 0,
    Hidden = 0,
    Indexed = 0,
    ViewInSearch = 0
}

/** Access restrictions and mandatory status, if any.*/
enum NSFieldAccess {
    Normal = 0,
    Mandatory = 0,
    ReadOnly = 0
}

/** Datatype of the field in the database*/
enum NSFieldDataType {
    Undefined = 0,
    dbShortId = 0,
    dbDateTimeUTC = 0,
    dbDouble = 0,
    dbInt = 0,
    dbIntId = 0,
    dbDateTimeLocal = 0,
    dbUShort = 0,
    dbShort = 0,
    dbNull = 0,
    dbUInt = 0,
    dbBlob = 0,
    dbStringBlob = 0,
    dbString = 0,
    dbExtendedDateTimeLocal = 0,
    dbExtendedDateTimeUTC = 0,
    dbTimeLocal = 0,
    dbDateLocal = 0,
    dbIntIdArr = 0
}

/** Describes the different types of controls that can appear in the Configure connection dialog*/
enum NSFieldMetadataType {
    Checkbox = 0,
    Text = 0,
    Password = 0,
    Integer = 0,
    Double = 0,
    List = 0,
    Date = 0,
    Label = 0
}

/** Forms recaptcha mode*/
enum NSFormsRecaptchaMode {
    NotAvailable = 0,
    GlobalKeysExist = 0,
    KeysNeeded = 0
}

/** What is the status of this submission*/
enum NSFormSubmissionStatus {
    Unknown = 0,
    InProgress = 0,
    EmailVerification = 0,
    Submitted = 0,
    Processed = 0,
    Failed = 0
}

/** What kind of form is this*/
enum NSFormType {
    Normal = 0,
    Template = 0
}

/** What kind of time is this: 0 = Busy, 1 = Free*/
enum NSFreeBusy {
    Busy = 0,
    Free = 0
}

/** Freetext operator*/
enum NSFreeTextOperator {
    Contains = 0,
    StartsWith = 0,
    ExactMatch = 0
}

enum NSGeneratorEncoding {
    Text = 0,
    Html = 0,
    Xml = 0,
    MsWord = 0,
    MsExcel = 0,
    MsPowerpoint = 0,
    MsOffice2007 = 0,
    MsOffice2007Xml = 0,
    Url = 0,
    UrlUnicode = 0,
    Pdf = 0,
    Mime = 0,
    OpenDocument = 0,
    OpenDocumentXml = 0
}

/** Embedded images type*/
enum NSImageEmbedType {
    Link = 0,
    Inline = 0
}

/** Action being done for the import row*/
enum NSImportAction {
    Unknown = 0,
    PersonAdded = 0,
    PersonUpdated = 0,
    PersonNoChange = 0,
    ContactAdded = 0,
    ContactUpdated = 0,
    ContactNoChange = 0,
    ProductAdded = 0,
    ProductUpdated = 0,
    ProductNoChange = 0,
    Obs = 0,
    ObsERPDuplicate = 0
}

/** Import action for blank values*/
enum NSImportBlankAction {
    UsePersonName = 0,
    Skip = 0,
    ImportPersonWithoutContact = 0
}

/** Action for blank companys for import*/
enum NSImportCompanyDuplicateAction {
    UseBlankName = 0,
    UsePersonName = 0,
    Skip = 0
}

/** Contact duplicate matching for import*/
enum NSImportContactDuplicateMatch {
    Name = 0,
    NameDepartment = 0,
    Number = 0,
    Code = 0,
    OrgNr = 0,
    Id = 0
}

/** Duplicate action for import*/
enum NSImportDuplicateAction {
    Add = 0,
    MergeBlank = 0,
    Replace = 0,
    Skip = 0
}

/** Entitys type for import*/
enum NSImportEntityType {
    Unknown = 0,
    Person = 0,
    Contact = 0,
    Product = 0
}

/** Import new list item*/
enum NSImportNewListItem {
    AddItemToList = 0,
    SetToDefault = 0,
    SetToBlank = 0
}

/** Person duplicate matching for import*/
enum NSImportPersonDuplicateMatch {
    FullName = 0,
    EMailAddress = 0,
    MobilePhone = 0,
    Number = 0,
    None = 0,
    Id = 0
}

/** Import new list item*/
enum NSImportPhoneUrlsEmail {
    AddToList = 0,
    Replace = 0,
    Skip = 0
}

/** Product duplicate matching for import*/
enum NSImportProductDuplicateMatch {
    Name = 0,
    Code = 0,
    NameCode = 0,
    ErpKey = 0
}

/** Operators to be used between restrictions, describes how this restriction is related to the next one in an array*/
enum NSInterRestrictionOperator {
    None = 0,
    And = 0,
    Or = 0
}

/** Status if this appointment represents an invitation*/
enum NSInvitationStatus {
    Unknown = 0,
    None = 0,
    Accepted = 0,
    Hidden = 0,
    Invitation = 0,
    Moved = 0,
    Seen = 0,
    MovedSeen = 0,
    Declined = 0,
    Cancelled = 0
}

/** Used in the CheckLicenseStatusResult to describe how SOADMIN should handle*/
enum NSLicenseStatus {
    Ok = 0,
    NewLicenseAvailable = 0,
    NewCompanyNameAvailable = 0,
    NewSerialAvailable = 0,
    UseCustomMessage = 0,
    UseCustomMessageAndUrl = 0,
    ProblemWithLicense = 0,
    UnknownError = 0
}

/** Entire system, per database, or per associate*/
enum NSLicenseType {
    Unknown = 0,
    SiteLicense = 0,
    SatelliteLicense = 0,
    UserLicense = 0
}

/** The type of the locale text strings*/
enum NSLocalizedTextType {
    Unknown = 0,
    Label = 0,
    Table = 0,
    Column = 0,
    ImportField = 0,
    ImportObject = 0,
    ImportGUICategory = 0,
    StartupHints = 0,
    FunctionRightLabel = 0,
    FunctionRightDesc = 0,
    StatusMonitorName = 0,
    UdefContactLabel = 0,
    UdefPersonLabel = 0,
    UdefProjectLabel = 0,
    UdefSaleLabel = 0,
    UdefAppointmentLabel = 0,
    UdefDocumentLabel = 0,
    PushNotificationText = 0
}

/** Log events*/
enum NSLogEvent {
    None = 0,
    Create = 0,
    Edit = 0,
    Delete = 0,
    Lock = 0,
    Unlock = 0
}

/** Bits in login.flags*/
enum NSLoginFlags {
    HideIEWarning = 0
}

/** Service mailbox type*/
enum NSMailboxType {
    Unknown = 0,
    Pop = 0,
    Imap = 0,
    Mapi = 0,
    Facebook = 0,
    Pops = 0,
    Imaps = 0,
    SmsPlugin = 0,
    Mailgun = 0,
    ImapOAuth = 0
}

/** Ticket message actions*/
enum NSMessageActionType {
    None = 0,
    Reply = 0,
    ReplyAll = 0,
    Forward = 0,
    InternalComment = 0
}

/** Standard/predefined values for ticket message header*/
enum NSMessageHeaderStdItem {
    None = 0,
    Forward = 0,
    UnnamedAttachmentBlocked = 0,
    NoAutoReply = 0,
    SentAutoReplyToCustomersA = 0,
    SentAutoReplyToCustomersB = 0,
    CustomerReadFAQ = 0,
    ReplyTemplate = 0
}

/** Ticket message header modification options*/
enum NSMessageHeaderStdItemCol {
    None = 0,
    Name = 0,
    Value = 0
}

/** Value for field 'modified_appointment_fields' in table 'appointment'.*/
enum NSModifiedAppointmentFields {
    None = 0,
    Date = 0,
    Time = 0,
    Location = 0
}

/** Value for the navigation field in table externalapplication*/
enum NSNavigation {
    Invisible = 0,
    ToolboxMenu = 0,
    NavigatorButton = 0,
    ViewMenu = 0,
    SelectionTaskCard = 0,
    ContactCard = 0,
    ContactArchive = 0,
    ProjectCard = 0,
    ProjectArchive = 0,
    SaleCard = 0,
    PersonCard = 0,
    ActivityDialog = 0,
    DocumentDialog = 0,
    BrowserPanel = 0,
    ContSelectionTask = 0,
    AppntSelectionTask = 0,
    SaleSelectionTask = 0,
    DocSelectionTask = 0,
    ProjSelectionTask = 0,
    CompanyMinicard = 0,
    ProjectMinicard = 0,
    DiaryMinicard = 0,
    SelectionMinicard = 0,
    ButtonPanelTask = 0,
    AppointmentDialogTask = 0,
    SaleDialogTask = 0,
    DocumentDialogTask = 0,
    PersonDialogTask = 0,
    SaleMinicard = 0,
    SaleArchive = 0,
    AppntSelectionShadowTask = 0,
    SaleSelectionShadowTask = 0,
    DocSelectionShadowTask = 0,
    ProjSelectionShadowTask = 0,
    DiaryArchive = 0,
    SelectionContactArchive = 0,
    SelectionProjectArchive = 0,
    SelectionSaleArchive = 0,
    SelectionAppointmentArchive = 0,
    SelectionDocumentArchive = 0,
    ContSelectionCustomTask = 0,
    AppntSelectionCustomTask = 0,
    SaleSelectionCustomTask = 0,
    DocSelectionCustomTask = 0,
    ProjSelectionCustomTask = 0,
    CustomArchiveMiniCard = 0,
    SelectionCard = 0,
    ReportMinicard = 0,
    QuoteDialog = 0,
    QuoteDialogTask = 0,
    QuoteDialogArchive = 0,
    QuoteLineDialogTask = 0,
    QuoteLineDialog = 0,
    QuoteLineSelectionMainTask = 0,
    QuoteLineSelectionShadowTask = 0,
    SelectionQuoteLineArchive = 0,
    QuoteLineSelectionCustomTask = 0,
    FindSystem = 0,
    MailingSelectionTask = 0,
    ContactSelectionMailingsTask = 0,
    AppointmentSelectionMailingsTask = 0,
    SaleSelectionMailingsTask = 0,
    DocumentSelectionMailingsTask = 0,
    ProjectSelectionMailingsTask = 0,
    QuoteLineSelectionMailingsTask = 0,
    TopPanelNewMenu = 0,
    Dashboard = 0,
    PersonArchive = 0,
    PersonMinicard = 0,
    CompanyCardTask = 0,
    ProjectCardTask = 0,
    TicketCard = 0,
    TicketMinicard = 0
}

enum NSNetServerBuildType {
    Feature = 0,
    Stable = 0,
    Alpha = 0,
    Beta = 0,
    ReleaseCandidate = 0,
    Release = 0
}

/** Types of events that are sent through the Pocket Notification API, where they are paired with an entity id*/
enum NSNotificationEventType {
    Unknown = 0,
    NewTicket = 0,
    AppointmentInvitation = 0,
    AppointmentMoved = 0,
    AppointmentCancelled = 0,
    NewTicketMessage = 0,
    TicketActivated = 0,
    TicketEscalated = 0,
    QuoteApprovalRequest = 0,
    QuoteApprovalApproved = 0,
    QuoteApprovalDenied = 0,
    AppointmentDeclined = 0
}

/** Defines what type of content the notification contains*/
enum NSNotificationMessageType {
    Message = 0,
    ImportantMessage = 0,
    RemoteAction = 0,
    YesNoQuestion = 0,
    ShowWebPage = 0
}

/** Value for field 'DevicePlatform' in table 'PushNotificationService'*/
enum NSNotificationPlatform {
    Apple = 0,
    Google = 0,
    Microsoft = 0,
    AppleDeveloper = 0,
    AppleAdHoc = 0,
    GoogleDeveloper = 0
}

/** How to sort the Order by statement.*/
enum NSOrderBySortType {
    ASC = 0,
    DESC = 0
}

/** Male/female. No jokes please. To be used for selecting correct salutations and grammar. 0 = unknown, 1 = female, 2 = male*/
enum NSPersonGender {
    Unknown = 0,
    Female = 0,
    Male = 0
}

/** The type of Phone*/
enum NSPhoneType {
    Unknown = 0,
    ContactPhone = 0,
    ContactFax = 0,
    PersonDirectPhone = 0,
    PersonDirectFax = 0,
    PersonPrivate = 0,
    PersonMobile = 0,
    PersonPager = 0
}

/** Value for field 'accessflags' in table 'prefdesc'.*/
enum NSPrefDescAccessFlags {
    Unknown = 0,
    WizardMode = 0,
    Level0 = 0,
    adminGUI = 0,
    CRMGUI = 0
}

/** Value for field 'valueType' in table 'prefdesc'.*/
enum NSPrefDescValueType {
    Unknown = 0,
    Number = 0,
    Text = 0,
    Bool = 0,
    ListOfValues = 0,
    ListTableRef = 0,
    TimeList = 0,
    ContactID = 0,
    PersonID = 0,
    ProjectID = 0,
    SelectionID = 0,
    PosSize = 0,
    TimeZone = 0,
    Time = 0,
    Password = 0,
    MultiLineText = 0
}

/** Value for field 'deflevel' in table 'userpreference'.*/
enum NSPreferenceLevel {
    Undefined = 0,
    HardDefault = 0,
    SystemWide = 0,
    Database = 0,
    Group = 0,
    Individual = 0,
    PC = 0
}

/** Should this field be published by default?*/
enum NSPublishType {
    Undefined = 0,
    External = 0
}

/** The state of a quote-alternative or line: Ok / OkWithInfo / Warn / Error*/
enum NSQuoteStatus {
    Ok = 0,
    OkWithInfo = 0,
    Warning = 0,
    Error = 0
}

/** Possible actions for QuoteVersionButton states.*/
enum NSQuoteVersionButtonAction {
    None = 0,
    ValidateVersion = 0,
    Edit = 0,
    Send = 0,
    Approve = 0,
    Reject = 0,
    ValidateVersionAndSendIfPossible = 0,
    ValidateVersionAndPlaceOrderIfPossible = 0,
    CloneVersion = 0,
    SendConfirmation = 0,
    GetOrderState = 0,
    UpdatePrices = 0
}

/** State of a Quote Version*/
enum NSQuoteVersionState {
    Unknown = 0,
    Draft = 0,
    DraftNotCalculated = 0,
    DraftNeedsApproval = 0,
    DraftApproved = 0,
    DraftNotApproved = 0,
    Sent = 0,
    Archived = 0,
    Lost = 0,
    Sold = 0
}

/** The different types of recipient sorting available*/
enum NSRecipientSorting {
    None = 0,
    CountryZipCode = 0,
    CompanyName = 0,
    CompanyNumber = 0,
    PersonLastname = 0
}

/** Recipient type*/
enum NSRecipientType {
    To = 0,
    CC = 0,
    BCC = 0
}

/** Enumerator describing the different patterns for a daily recurrence*/
enum NSRecurrenceDailyPattern {
    Unknown = 0,
    EveryWorkday = 0,
    EveryWeekday = 0,
    EveryCyclicDay = 0
}

/** Enumerator describing how the series of recurring activities are terminated.*/
enum NSRecurrenceEndType {
    Unknown = 0,
    EndDate = 0,
    Counter = 0
}

/** Enumerator describing the different patterns for a monthly recurrence*/
enum NSRecurrenceMonthlyPattern {
    Unknown = 0,
    DayOfMonth = 0,
    WeekdayOfMonth = 0
}

/** Enumerator describing the main pattern of recurrence.*/
enum NSRecurrencePattern {
    Unknown = 0,
    Daily = 0,
    Weekly = 0,
    Monthly = 0,
    Yearly = 0,
    Custom = 0
}

/** Appointment recurrence change mode: only this, this and forward, stop*/
enum NSRecurrenceUpdateMode {
    Unknown = 0,
    OnlyThis = 0,
    ThisAndForward = 0,
    StopRecurrence = 0
}

/** Enumerator describing the different patterns for a yearly recurrence*/
enum NSRecurrenceYearlyPattern {
    Unknown = 0,
    DayOfMonth = 0,
    WeekdayOfMonth = 0
}

/** Value for flag field in refcounts*/
enum NSRefcountFlags {
    Unknown = 0,
    Allocate = 0,
    Unique = 0,
    ReadOnly = 0,
    AllowBlank = 0
}

/** Enum used to map registry values by reg_id*/
enum NSRegistry {
    RegistryEntry_End = 0,
    EjournalSender = 0,
    CleanerThreshold = 0,
    CleanerTolerance = 0,
    EjournalCronLast = 0,
    EjournalCronNow = 0,
    CleanerOnOff = 0,
    CleanerImportOnOff = 0,
    NotifyActiveTickets = 0,
    ActiveLinksInMessages = 0,
    SmtpTimeout = 0,
    ReplyTemplateCustomerNewCustomer = 0,
    ReplyTemplateCustomerCustomerReply = 0,
    ReplyTemplateCustomerPassword = 0,
    ReplyTemplateUserActiveTickets = 0,
    ReplyTemplateUserNewMessage = 0,
    ReplyTemplateUserTicketActivated = 0,
    ReplyTemplateUserTicketAlarm = 0,
    ReplyTemplateUserNewTicket = 0,
    SetupCompanyName = 0,
    SetupCompanyAddress = 0,
    NotifyActiveTicketsDays = 0,
    EjournalOutbox = 0,
    OutmailWrapColumn = 0,
    EnableBackdoor = 0,
    EjournalOutboxDelay = 0,
    DisableHtmlFiltering = 0,
    FaqTitleWeight = 0,
    ChatWhoisString = 0,
    FaqSuggestions = 0,
    ChatAvailableImage = 0,
    ChatUnavailableImage = 0,
    ImportMailTimeout = 0,
    ShowReplyTemplatesToCustomers = 0,
    LastRequestTicketLimit = 0,
    LastRequestDaysLimit = 0,
    NoEjOutbox = 0,
    IdleLimitCustomerSeconds = 0,
    ReplyTemplateUserTicketTakenOver = 0,
    EnableSpellCheck27 = 0,
    LogPath = 0,
    NumOfListedLinks = 0,
    ReplyTemplatePublishKbQuestion = 0,
    ReplyTemplatePublishKbAnswer = 0,
    InvoiceUpdateDone = 0,
    DefaultTimeToReplyOnNewTicket = 0,
    ShowAutoRepliesToCustomers = 0,
    EjournalOutboxDeleteSentMailAfter = 0,
    AllwaysSendMailToNewCustomers = 0,
    IdleLimitCustomerSecondsWeb = 0,
    ExternalCustomerAuthEnabled = 0,
    ExternalCustomerAuthURL = 0,
    DoNotTestSmtp = 0,
    DelayMailboxImport = 0,
    MaxLoginAttempts = 0,
    BlockLoginAttempts = 0,
    ReplyTemplateWeekStat = 0,
    WeekStatRecipient = 0,
    HideUserStatistics = 0,
    SystemTimeMode = 0,
    SMTPIgnoreLeadingDotEscaping = 0,
    BaseURLForFAQEntry = 0,
    BaseURLForFAQCategory = 0,
    SystemTimeModeInstalled = 0,
    BlockCustomerFAQParsing = 0,
    ChatUserIdleTime = 0,
    AlertChatMessages = 0,
    DisableExternalSpmUpdate = 0,
    SpmSMTPServer = 0,
    SpmDefaultFrom = 0,
    NotificationExpire = 0,
    CrystalReportsSoapEndpoint = 0,
    DoNotSearchBodyForTag = 0,
    ReplyTemplateHotlistNewMessage = 0,
    ReplyTemplateHotlistTicketActivated = 0,
    ReplyTemplateHotlistTicketAlarm = 0,
    ReplyTemplateHotlistTicketTakenOver = 0,
    LogChannels = 0,
    ShowTotalInvoiceUnits = 0,
    MinimumDiskSpace = 0,
    DecodingMailSorter = 0,
    ImportMail3ExpireTime = 0,
    ImportMail3ExpireTimeAnalyze = 0,
    StripNewLineInParser = 0,
    LastDiskSpaceWarningAttachments = 0,
    LastDiskSpaceWarningBase = 0,
    LastDiskSpaceWarningText = 0,
    EnableNewImportMail = 0,
    EnableEjStat = 0,
    SmsServiceId = 0,
    SmsServiceEndpoint = 0,
    MaximumSmsMessagesPerDay = 0,
    MaximumSmsMessagesPerRecipient = 0,
    CellphoneUpdateDone = 0,
    DefaultSmsCountry = 0,
    DbIntegratorEnableStreaming = 0,
    ScreenChooserNewTicket = 0,
    ScreenChooserListTicketTop = 0,
    ScreenChooserListTicketMessages = 0,
    ScreenChooserAddMessage = 0,
    ScreenChooserEditTicket = 0,
    ScreenChooserViewCustomer = 0,
    ScreenChooserViewCompany = 0,
    ScreenChooserTicketMainMenu = 0,
    MaximumCountRecipients = 0,
    EnableEditMessage = 0,
    EnableNewGui = 0,
    HideContactPersonPassword = 0,
    ShowBlogicMenu = 0,
    WwwPath = 0,
    UseParserInDBIntegrator = 0,
    CollapsableMessageStrings = 0,
    RefreshNotifyFrameDeprecated = 0,
    CopyLDAPSearchBase = 0,
    UseHtmlRedirect = 0,
    ImportMailProcPri = 0,
    KeepWarningLog = 0,
    KeepDbLog = 0,
    KeepFormKeys = 0,
    InternalMessageWhenNotCustomer = 0,
    SoapSystemUserPassword = 0,
    CreateExtraTableDbiFields = 0,
    UseOldMailInFilterRegExp = 0,
    NewInvoiceEntryFormat = 0,
    IgnoreReturnPath = 0,
    ConvertProfilesToClob = 0,
    ReportStartRootFolder = 0,
    ParseCustomerFields = 0,
    ArriveNewTicket = 0,
    ImportMessageAsAttachment = 0,
    DBIBetaRelease = 0,
    DBIExecutable = 0,
    MailFilterMinFaqValue = 0,
    AutoStartTimer = 0,
    ScreenChooserInvoiceStat = 0,
    LimitSearchExtraTableResult = 0,
    UseWebServiceSms = 0,
    LastLicenseInfo = 0,
    SmsSender = 0,
    SmsChannel = 0,
    UseSmsDeliveryReport = 0,
    UpdateTicketCustomersDone = 0,
    ScreenChooserHelpPage = 0,
    CustomerEncryptionMethod = 0,
    UpgradeCustomerPasswordStatus = 0,
    UpgradeScreenDefinitionsToScripts = 0,
    SpmUseHtmlEditor = 0,
    InvoiceEntrySumAdded = 0,
    LastnameFirst = 0,
    SpmUseDeliveryReport = 0,
    DoNotKickLoginSessions = 0,
    ScreenChooserUsers = 0,
    ScreenChooserPriorities = 0,
    UseSafeParserFunction = 0,
    ScreenChooserCategories = 0,
    UpdateCustomerEmails = 0,
    DirtyTicketSaveEvent = 0,
    PasteFaq = 0,
    EjSenderVersion = 0,
    DefaultTicketStatusOpen = 0,
    DefaultTicketStatusClosed = 0,
    DefaultTicketStatusInactive = 0,
    DefaultTicketStatusDeleted = 0,
    DefaultTicketStatusConnected = 0,
    UseOldHtmlSelectTreeLayout = 0,
    ScreenChooserKnowledgeListFolders = 0,
    ScreenChooserKnowledgeEditKbEntry = 0,
    ScreenChooserKnowledgeViewKbEntry = 0,
    ConvertRegScreenChoosersToTable = 0,
    SmsProvider = 0,
    PsWinComUsername = 0,
    PsWinComPassword = 0,
    PsWinComSender = 0,
    UpgradeNotPresentComment = 0,
    UseWordByWordKbSearch = 0,
    SearchSubjectBeforeMsgId = 0,
    UpgradeTicketStatusName = 0,
    UseOnlyOneCookie = 0,
    ViewCompanyWithPanes = 0,
    ViewCustomerWithPanes = 0,
    ReplacedLangFrWithSe = 0,
    ViewExtraTableEntryWithPanes = 0,
    OldMessageBeforeSignature = 0,
    ViewTicketWithPanes = 0,
    FixCreationScripts = 0,
    DefaultNoCustomerOnForwarding = 0,
    ForceHTTPS = 0,
    UseEjParserForTemplates = 0,
    CrossPostMergeTimeWindow = 0,
    UseAbsoluteURLsInHTML = 0,
    DelegateAlgorithm = 0,
    DisplayDataSources = 0,
    InlineImagesDefault = 0,
    LogoutUrl = 0,
    ProfilesConverted = 0,
    DefaultBlogicScreensOnEditTicket = 0,
    SearchToSelections = 0,
    PhoneUpdateDone = 0,
    FaqAddCommentsAccess = 0,
    FaqReadCommentsAccess = 0,
    SpmSMTPServerPort = 0,
    MapiServerAppendString = 0,
    CarrotUsername = 0,
    CarrotPassword = 0,
    UnicodeConvertedTemplateFolder = 0,
    SuperOfficeIntegrationPassword = 0,
    UpdateUserDateFormatsDone = 0,
    CellphoneAndPhoneUpdateDone = 0,
    UnpublishedWorkflowName = 0,
    PublishedWorkflowName = 0,
    ExpiredWorkflowName = 0,
    NotifyFramePidGain = 0,
    NotifyFramePidParamsDeprecated = 0,
    NotifyFrameServerLoad = 0,
    Tele2SmsUsername = 0,
    Tele2SmsPassword = 0,
    Tele2Endpoint = 0,
    UpdateFaqAccessToWorkflowDone = 0,
    UserSignaturesConvertedToHtml = 0,
    OracleIndexesUpdated = 0,
    SpmOnlyPrimaryOnTicketSelection = 0,
    SpmMsgTicketParserUpdateDone = 0,
    UserOldScreensOnEditTicketDone = 0,
    UseFullText = 0,
    HideIntegratedEjSpmBlock = 0,
    SelectCustomerColumns = 0,
    SelectCompanyColumns = 0,
    SelectTicketColumns = 0,
    UpdatedActivateField = 0,
    SpmImgDBCopied = 0,
    SecurityModelEnabled = 0,
    BlockPanesRenderMode = 0,
    UseMiddleName = 0,
    NSConvertedProfiles = 0,
    AllowSentryBypass = 0,
    CrmGroup = 0,
    CrmRoleAdmin = 0,
    CrmRoleStandard = 0,
    LastLicenseExpirationCheck = 0,
    ReplyTemplateLicenseExpirationWarning = 0,
    CrmRoleCustomer = 0,
    SystemNSKey = 0,
    AnonNSKey = 0,
    DBSchemaDirty = 0,
    NSGetKeyPath = 0,
    EmarketeerNewLinkGraceDate = 0,
    CustomNotifyEnabled = 0,
    ConverterDone = 0,
    NetServerKeepAlive = 0,
    TimeZoneForNetServer = 0,
    UseExtension = 0,
    CustomerEnableFAQAjax = 0,
    UseAttachmentFolders = 0,
    DoNotChangeSMRoles = 0,
    ShowAvatarsInCustomerCentre = 0,
    SearchEngineFilters = 0,
    UseNetServerSms = 0,
    NetServerSmsProvider = 0,
    NsPluginSender = 0,
    SetupFCGI = 0,
    UseFCGIImpersonation = 0,
    SoapUseExtension = 0,
    UseAutoSuppressHeader = 0,
    ExampleBounceFilterAdded = 0,
    SLinkCleanUpDone = 0,
    IncomingSmsBox = 0,
    AddedLegalHtmlCodeInUpgrade = 0,
    DefaultEditorContent = 0,
    UseBrowserSpellCheck = 0,
    UseCalltoOnPhoneLinks = 0,
    ShowSubmitSpinner = 0,
    AccessLicensePageWithoutLogin = 0,
    HideExportButton = 0,
    QueueTicketStatuses = 0,
    ImageResizerExecutable = 0,
    CleanupLinefeedInNSMail = 0,
    CheckHtmlValidityInSOEditor = 0,
    UpgradeCSParserConverted = 0,
    DefaultEditorBodyFont = 0,
    CustomCacheBustingParameter = 0,
    UseSha1OnLinks = 0,
    UpgradeRolesConverted = 0,
    DeleteInboxDays = 0,
    UserGroupsConverted = 0,
    UserAgentIsMobile = 0,
    UserAgentIsTablet = 0,
    DefaultStatusWhenTakingOwnership = 0,
    DisableUnauthenticatedCreationInCustomerCentre = 0,
    RegisterCustomerConfirmEmail = 0,
    ReplyTemplateCustomerConfirmEmail = 0,
    ReplyToAllOnlyLatestExternalMessage = 0,
    LastCleanedExpiredNotify = 0,
    eMarketingEditorInNewWindow = 0,
    FacebookCallbackKey = 0,
    MaxRowsForCharts = 0,
    SpmDefaultMailingRate = 0,
    SpmConcurrentSMTPThreads = 0,
    SpmHideNewMessageOption = 0,
    SpmTimeToRestartSenders = 0,
    ShowOldReportsMenu = 0,
    EmailSendingRetryLimit = 0,
    ThumbnailsIsDefaultMode = 0,
    UsageStatsWinNextRun = 0,
    UsageStatsWebNextRun = 0,
    UsageStatsDataAddNextRun = 0,
    UsageStatsTableSizeNextRun = 0,
    UserSyncResyncNextRun = 0,
    ForceIEEdgeMode = 0,
    CSPHeader = 0,
    NotifyTimeOfDayForReport = 0,
    EmailImplementation = 0,
    CurlMailTransferTimeout = 0,
    CurlDisableStartTls = 0,
    ReplyTemplatePrintTicket = 0,
    DoNotUseCompanyCountry = 0,
    MaxGridRows = 0,
    DoNotAllowMultipleLogins = 0,
    NsPluginConfig = 0,
    ReplyTemplateCustomerChatLog = 0,
    MailgunIncludeOutOfOffice = 0,
    TimeKeyTTL = 0,
    DefaultTrackAllLinks = 0,
    AddedOptionsFcgi = 0,
    MailgunRewriteSenderHeader = 0,
    OptimizedCustomerCenterListTickets = 0,
    QuickReplyMode = 0,
    ForceImmediateFileLogging = 0,
    TemporaryKeyTTL = 0,
    TemporaryKeyHardDeleteDelay = 0,
    ReplyTemplateNewLink = 0,
    UseLegacyHtmlConverter = 0,
    ClipMessagesLength = 0,
    StrictGDRPMode = 0,
    ImportMailCreateUnknownPersons = 0,
    ChatCheckForIdleSessions = 0,
    ImportmailCheckInvalidUTF8 = 0,
    RecipientControlAdvancedSearch = 0,
    UseCookieInCustomerCenter = 0,
    SandboxTicketMessages = 0,
    MailingsUseEnvelopeFrom = 0,
    MovedSystemScriptsToScreenChooser = 0,
    FastPersonRecipientSearch = 0,
    SanitizeMailingsHtml = 0,
    KeepExistingCustomerCenterTemplatesOnDisk = 0,
    SentimentCalculationTimeframe = 0,
    ComponentMaxWidth = 0,
    ReplyToPrimaryEmail = 0,
    TicketLogSystem = 0,
    AllowedMailingLinksDomains = 0,
    CCTAddMessage = 0,
    CCTCanceled = 0,
    CCTChangeCust = 0,
    CCTConfirmCustomer = 0,
    CCTDoneConfirmCustomer = 0,
    CCTDoneRegister = 0,
    CCTEMarketeerSimpleMessage = 0,
    CCTFramework = 0,
    CCTListTicket = 0,
    CCTListTickets = 0,
    CCTLoggedIn = 0,
    CCTLoggedOut = 0,
    CCTLogin = 0,
    CCTNewTicket = 0,
    CCTNoAccess = 0,
    CCTPasswordSent = 0,
    CCTRegisterCust = 0,
    CCTSendPassword = 0,
    CCTSubscription = 0,
    CCTTicketPosted = 0,
    CCTViewKBCategory = 0,
    CCTViewKBEntry = 0,
    CCTViewKBSearch = 0,
    CCTWelcome = 0,
    CCTUpdateSubscriptions = 0,
    CCTUpdateConsent = 0
}

/** Target type of relation. (Contact, person or both)*/
enum NSRelationTarget {
    None = 0,
    Contact = 0,
    Person = 0,
    Both = 0
}

/** Describes access level to get reply templaes*/
enum NSReplyTemplateAccessLevel {
    Full = 0,
    Read = 0,
    None = 0
}

/** Flags for the reply template body*/
enum NSReplyTemplateBodyFlags {
    ReplyTemplateBodyNone = 0,
    ReplyTemplateBodyDefault = 0,
    ReplyTemplateBodyIncludePlain = 0,
    ReplyTemplateBodyIncludeHtml = 0
}

/** Describes access level to get reply templaes*/
enum NSReplyTemplateFlags {
    ReplyTemplateCustomerNewCustomer = 0,
    ReplyTemplateCustomerCustomerReply = 0,
    ReplyTemplateCustomerPassword = 0,
    ReplyTemplateUserActiveTickets = 0,
    ReplyTemplateUserNewMessage = 0,
    ReplyTemplateUserTicketActivated = 0,
    ReplyTemplateUserTicketAlarm = 0,
    ReplyTemplateUserNewTicket = 0,
    ReplyTemplateAll = 0,
    ReplyTemplateNone = 0,
    ReplyTemplateUserTicketTakenOver = 0,
    ReplyTemplatePublishKbQuestion = 0,
    ReplyTemplatePublishKbAnswer = 0,
    ReplyTemplateWeekStat = 0,
    ReplyTemplateHotlistNewMessage = 0,
    ReplyTemplateHotlistTicketActivated = 0,
    ReplyTemplateHotlistTicketAlarm = 0,
    ReplyTemplateHotlistTicketTakenOver = 0,
    ReplyTemplateLicenseExpirationWarning = 0,
    ReplyTemplateCustomerConfirmEmail = 0,
    ReplyTemplatePrintTicket = 0,
    ReplyTemplateCustomerChatLog = 0,
    ReplyTemplateNewLink = 0
}

/** The avaliable category*/
enum NSReportCategory {
    None = 0,
    All = 0,
    Contact = 0,
    Project = 0,
    Sale = 0,
    Appointment = 0,
    Selection = 0,
    Person = 0,
    Diary = 0,
    Favorites = 0
}

enum NSReportLayout {
    Unknown = 0,
    List = 0,
    Label = 0,
    GroupList = 0,
    CrossTable = 0,
    CalendarWeek5 = 0,
    CalendarWeek7 = 0,
    CalendarMonth = 0,
    Text = 0
}

/** Describes the orientation of the paper when printing a report. The report layout must be 'Label'*/
enum NSReportPaperOrientation {
    None = 0,
    Portrait = 0,
    Landscape = 0
}

/** Type of responce*/
enum NSReturnType {
    None = 0,
    Message = 0,
    SoProtocol = 0,
    CustomGui = 0,
    Other = 0,
    URL = 0
}

/** Describes the available relation to owner types available for roles*/
enum NSRoleRelationToOwner {
    MyOwn = 0,
    PrimaryGroup = 0,
    OtherGroups = 0,
    OtherAssociates = 0,
    ExternalUser = 0,
    Anonymous = 0,
    MyCompany = 0,
    SameProject = 0
}

/** 0 = employee, 1 = external user, 2 = anonymous*/
enum NSRoleType {
    Employee = 0,
    ExternalUser = 0,
    Anonymous = 0,
    System = 0
}

/** Values for the 'done' field in the sale table*/
enum NSSaleDone {
    Unknown = 0,
    NotDone = 0,
    Done = 0
}

/** Value for the 'status' field in the sale table*/
enum NSSaleStatus {
    Unknown = 0,
    Open = 0,
    Sold = 0,
    Lost = 0,
    Stalled = 0,
    SaintAll = 0
}

/** CS system event types for custom logic hooking*/
enum NSScreenChooserType {
    None = 0,
    System = 0,
    ExtraTableEntry = 0,
    ExtraTableAll = 0,
    ExtraTableEdit = 0,
    NewTicket = 0,
    NewTicketFromCustomerCenter = 0,
    NewTicketFromEmail = 0,
    NewTicketFromCustomerCenterBeforeSave = 0,
    TicketClosed = 0,
    TicketPostponed = 0,
    TicketDeleted = 0,
    TicketActivated = 0,
    TicketReopened = 0,
    TicketReopenedFromCustomerCenter = 0,
    TicketReopenedFromEmail = 0,
    TicketChangedPriority = 0,
    TicketChangedCategory = 0,
    TicketChangedOwnedBy = 0,
    TicketChangedPrimaryCustomer = 0,
    TicketChangedTicketStatus = 0,
    TicketChangedSlevel = 0,
    TicketMessageAdded = 0,
    TicketInternalMessageAdded = 0,
    TicketExternalMessageAdded = 0,
    CompactModeInjection = 0,
    ScheduledTaskFailed = 0,
    DbiTaskFailed = 0
}

/** Selection system type - defines if this selection is one that is managed by the system, and what kind it is*/
enum NSSelectionSystemType {
    User = 0,
    TemporaryShortTermStatic = 0,
    PersonalForFind = 0,
    DashboardTileSelection = 0,
    PersonalForDashboard = 0,
    PersonalForDashboardSecondary = 0
}

/** Selection type - static/dynamic/combined. Works together with targetTable to define what kind of Selection this is.*/
enum NSSelectionType {
    Static = 0,
    Dynamic = 0,
    Combined = 0
}

/** How the selections in a combined selections should be put together*/
enum NSSelectionUnionType {
    Unknown = 0,
    SubtractRightFromLeft = 0,
    SubtractLeftFromRight = 0,
    Intersect = 0,
    XOR = 0,
    Union = 0
}

/** Sender email mode*/
enum NSSenderMailMode {
    UseDefaultSender = 0,
    UseOurContact = 0,
    UseSupportContact = 0,
    UseLoggedInUser = 0
}

/** Possible statuses for a ServiceAuth.*/
enum NSServiceAuthStatus {
    Unknown = 0,
    Initialized = 0,
    Error = 0
}

/** Status for sending to a particular recipient*/
enum NSShipmentAddrStatus {
    Unknown = 0,
    Ready = 0,
    Duplicate = 0,
    Blocked = 0,
    Sent = 0,
    Bounced = 0,
    Opened = 0,
    Clicked = 0,
    SoftBounced = 0,
    NoSubscription = 0,
    Complained = 0,
    TooManyBounces = 0
}

/** Bitmask defining what action should be taken*/
enum NSShipmentLinkAction {
    None = 0,
    SetPersonInterest = 0,
    RemovePersonInterest = 0,
    SetContactInterest = 0,
    RemoveContactInterest = 0,
    AddToSmSelection = 0,
    RemoveFromSmSelection = 0,
    AddToSmProject = 0,
    RemoveFromSmProject = 0,
    AddTask = 0,
    AddRequest = 0,
    AddToCsSelection = 0,
    RemoveFromCsSelection = 0,
    ExecuteScript = 0
}

/** Flags that control how the task is created*/
enum NSShipmentLinkTaskFlags {
    None = 0,
    AssignToOurContact = 0,
    UseNextAvailableTime = 0,
    IsAssignment = 0
}

/** Customer action type (clicked a link, viewed an image etc)*/
enum NSShipmentLinkType {
    Unknown = 0,
    Link = 0,
    Image = 0
}

/** Status of shipment list*/
enum NSShipmentListStatus {
    NotSent = 0,
    Sent = 0
}

/** Bitmask defining what type of shipment message this is*/
enum NSShipmentMessageType {
    Plain = 0,
    Html = 0,
    SourceView = 0,
    Sms = 0,
    Document = 0
}

/** Status for shipment (started, cancelled etc)*/
enum NSShipmentStatus {
    None = 0,
    Ok = 0,
    Canceled = 0,
    Waiting = 0,
    Started = 0,
    StatusFailed = 0,
    Retry = 0,
    Populating = 0,
    Deleted = 0,
    AwaitPopulate = 0,
    PopulatingOnly = 0,
    PopulateAborted = 0,
    PopulateError = 0,
    TooManyRecipients = 0
}

/** Value for the showState field in table externalapplication*/
enum NSShowState {
    Minimized = 0,
    Maximized = 0,
    Default = 0,
    ToolBar = 0,
    AddressBar = 0,
    StatusBar = 0,
    MenuBar = 0
}

/** Show Task Item In Client*/
enum NSShowTaskItemInClient {
    None = 0,
    Web = 0,
    Mobile = 0
}

/** Normal = 0, Maximized = 1, Minimized = 2*/
enum NSShowWindowState {
    Normal = 0,
    Maximized = 0,
    Minimized = 0
}

enum NSStatusScreenPanelType {
    None = 0,
    OpenRequestsPerCategory = 0,
    OpenRequestsPerTopCategory = 0,
    OpenRequestsPerUser = 0,
    OpenRequestsPerUserGroup = 0,
    OpenRequestsPerPriority = 0,
    OpenRequestsPerStatus = 0,
    OpenRequestsPerOrigin = 0,
    NumberOfCreatedRequestsPerDay = 0,
    NumberOfCreatedRequestsPerWeek = 0,
    NumberOfCreatedRequestsPerMonth = 0,
    UserResponseTimePerDay = 0,
    UserReponseTimePerWeek = 0,
    UserResponseTimePerMonth = 0,
    OwnOpenRequests = 0,
    UnassignedRequests = 0,
    Hotlist = 0,
    StatusScreen = 0
}

/** Enumeration that exposes what search types that are supported.*/
enum NSStringSearchType {
    Exact = 0,
    BeginsWith = 0,
    EndsWith = 0,
    Contains = 0
}

/** Value for field 'scope' in table 'systemevent'.*/
enum NSSystemEventScope {
    Undefined = 0,
    SystemWide = 0,
    Database = 0,
    Group = 0,
    User = 0
}

/** Target Entity of Tags*/
enum NSTagEntity {
    Global = 0,
    Ticket = 0
}

/** Target assignement levels*/
enum NSTargetAssignementLevel {
    None = 0,
    Company = 0,
    Group = 0,
    Associate = 0
}

/** Target entity type*/
enum NSTargetEntityType {
    None = 0,
    Sale = 0
}

/** Target level*/
enum NSTargetLevel {
    None = 0,
    Global = 0,
    Company = 0,
    UserGroup = 0,
    Associate = 0
}

/** Target measurement unit*/
enum NSTargetMeasurementUnit {
    None = 0,
    Amount = 0,
    Count = 0,
    Profit = 0
}

/** Target period type*/
enum NSTargetPeriodType {
    None = 0,
    Year = 0,
    HalfYear = 0,
    Quarter = 0,
    Month = 0
}

/** Value for field 'direction' in table 'task'. Controls icons used in GUI*/
enum NSTaskDirection {
    Unknown = 0,
    Incoming = 0,
    Outgoing = 0,
    SaintAll = 0
}

/** Task List Item Type*/
enum NSTaskListItemType {
    None = 0,
    Url = 0,
    CrmScript = 0,
    SoProtocol = 0
}

/** Value for field 'record_type' in table 'task'. Controls icons used in GUI*/
enum NSTaskType {
    Unknown = 0,
    Appointment = 0,
    Document = 0,
    Email = 0,
    Fax = 0,
    Phone = 0,
    ToDo = 0,
    MailMergeDraft = 0,
    MailMergeFinal = 0,
    Report = 0,
    SaintAll = 0
}

/** Domains for temporary keys.*/
enum NSTemporaryKeyDomain {
    Unknown = 0,
    MailingRecipient = 0,
    FormSubmitterRecipient = 0,
    ViewTicketInCustomerCenter = 0,
    LoginCustomerCenter = 0,
    PublicFaq = 0,
    ChangePasswordCustomerCenter = 0
}

/** Value for field 'type' in table 'text'.*/
enum NSTextType {
    Unknown = 0,
    ContactInfo = 0,
    PersonInfo = 0,
    Reserved1 = 0,
    AppointmentText = 0,
    DocumentText = 0,
    ProjectText = 0,
    SaleText = 0,
    Notepad = 0,
    Reserved2 = 0,
    Reserved3 = 0,
    ProjectInfo = 0,
    SelectionInfo = 0,
    ProjectMemberText = 0,
    SelectionText = 0,
    DayInfo = 0,
    LongPreference = 0,
    SearchCriteriaInfo = 0,
    SearchCriteriaGroupInfo = 0,
    RoleInfo = 0,
    UdefListSQL = 0,
    StatusMonitorInfo = 0,
    AudienceSignOnConfirmation = 0,
    AudienceSignOffConfirmation = 0,
    StatusMonitorDefaultTaskText = 0,
    SaleInfo = 0,
    NameExtension = 0,
    TooltipExtension = 0
}

/** Bitmask available ticket alert action*/
enum NSTicketAlertAction {
    ActionDelegate = 0,
    ActionEmail = 0,
    ActionEmailCustomer = 0,
    ActionEmailUser = 0,
    ActionEmailCategoryMaster = 0,
    ActionSms = 0,
    ActionSmsCustomer = 0,
    ActionSmsUser = 0,
    ActionSmsCategoryMaster = 0,
    ActionScript = 0
}

/** Status of a ticket/request*/
enum NSTicketBaseStatus {
    Unknown = 0,
    Active = 0,
    Closed = 0,
    Postponed = 0,
    Deleted = 0,
    Merged = 0,
    PostponedSpecific = 0,
    Postponed1Hour = 0,
    Postponed2Hours = 0,
    Postponed3Hours = 0,
    Postponed4Hours = 0,
    PostponedDay = 0,
    PostponedWeek = 0,
    PostponedMonth = 0
}

/** Default status for requests. Note that this is a preference which should be respected if making UI. It is not enforced by the APIs*/
enum NSTicketCategoryClosingStatus {
    UserDefined = 0,
    Active = 0,
    Closed = 0,
    Postponed = 0
}

/** The delegate method used for request assigned to this category*/
enum NSTicketCategoryDelegateMethod {
    Unknown = 0,
    Even = 0,
    Weighted = 0,
    Unfair = 0,
    Not = 0
}

/** Flags for the ticket category*/
enum NSTicketCategoryFlags {
    Unknown = 0,
    Internal = 0,
    OnlyLoggedInUsers = 0,
    DefaultToCategoryMaster = 0,
    ListInMain = 0,
    RedelegateNewMsg = 0,
    DelegateToOurContact = 0,
    PropagateReplyTemplate = 0,
    MembersOnly = 0,
    NotifyMembers = 0,
    AcceptWhenReplying = 0
}

/** Value representing action that caused a ticket to change*/
enum NSTicketLogAction {
    No_Logging = 0,
    Ticket_Unknown = 0,
    Ticket_CustomDescription = 0,
    Ticket_ImportTicketFromEmail = 0,
    Ticket_ImportMailNewTicket = 0,
    Ticket_ImportMailExistingTicket = 0,
    Ticket_AttachmentConnectedToTicket = 0,
    Ticket_TicketActivated = 0,
    Ticket_TicketEscalated = 0,
    Ticket_ConnectTwoTickets = 0,
    Ticket_MessageAddedToTicket = 0,
    Ticket_SendingSpmMessage = 0,
    Ticket_SavedFromEjScript = 0,
    Ticket_TicketEscalatedFromEjScript = 0,
    Ticket_SetValuesFromSoap = 0,
    Ticket_AddMessageFromSoap = 0,
    Ticket_NewTicketFromSoap = 0,
    Ticket_AddMessage = 0,
    Ticket_NewTicket = 0,
    Ticket_UserTakesOwnership = 0,
    Ticket_ChangeStatus = 0,
    Ticket_ChangeSecurityStatus = 0,
    Ticket_QuickSetExtraDateTime = 0,
    Ticket_QuickSetExtraDate = 0,
    Ticket_QuickSetExtraTime = 0,
    Ticket_QuickSetExtraField = 0,
    Ticket_SwapExtraField = 0,
    Ticket_ReadByUser = 0,
    Ticket_BatchOperation = 0,
    Ticket_BatchMarkAsRead = 0,
    Ticket_BatchMarkAsUnread = 0,
    Ticket_BatchCloseTicket = 0,
    Ticket_EditTicket = 0,
    Ticket_DeleteTicket = 0,
    Ticket_JoinTickets = 0,
    Ticket_EditMessage = 0,
    Ticket_CloseTicketAfterForward = 0,
    Ticket_CloseAfterMassMessage = 0,
    Ticket_CloseTicketFromSoap = 0,
    Ticket_ReadTicketFromSoap = 0,
    Ticket_UserDeletedOwneraction = 0,
    Ticket_NewTicketFromSpecialForm = 0,
    Ticket_TicketClosedByFAQ = 0,
    Ticket_NewTicketFromCustomer = 0,
    Ticket_AddMessageFromCustomer = 0,
    Ticket_ReadByCustomer = 0,
    Ticket_SetRepliedAtByMassMessage = 0,
    Ticket_TicketActivatedByBounce = 0,
    Ticket_AutoCategorized = 0,
    Message_Unknown = 0,
    Message_CustomDescription = 0,
    Message_Continue = 0,
    Message_ImportTicketFromEmail = 0,
    Message_ImportMailAddMessage = 0,
    Message_AddedDebugInfo = 0,
    Message_SendingReplyTemplate = 0,
    Message_SendingSMS = 0,
    Message_SendingSpmMessage = 0,
    Message_SavedFromEjScript = 0,
    Message_AddMessageFromSoap = 0,
    Message_AddMessage = 0,
    Message_NewTicket = 0,
    Message_EditTicket = 0,
    Message_EditMessage = 0,
    Message_ForwardMessage = 0,
    Message_AddMassMessage = 0,
    Message_NewMessageFromSpecialForm = 0,
    Message_TicketNotifyFAQ = 0,
    Message_NewTicketFromCustomer = 0,
    Message_AddMessageFromCustomer = 0,
    Message_BounceMessage = 0,
    Message_OutboxMessage = 0,
    Message_EditMessageFromSoap = 0,
    Message_InlineImagesConverted = 0
}

/** Value representing a ticket field that changed*/
enum NSTicketLogFieldChange {
    CreatedAt = 0,
    Title = 0,
    LastChanged = 0,
    ReadByOwner = 0,
    ReadByCustomer = 0,
    ClosedAt = 0,
    TimeToClose = 0,
    RealTimeToClose = 0,
    TimeToReply = 0,
    RealTimeToReply = 0,
    Author = 0,
    CreatedBy = 0,
    AlertLevel = 0,
    AlertTimeout = 0,
    ConnectId = 0,
    FilterId = 0,
    ReadStatus = 0,
    HasAttachment = 0,
    DisplayFilter = 0,
    AlertStop = 0,
    RepliedAt = 0,
    SLevel = 0,
    Category = 0,
    Priority = 0,
    CustId = 0,
    Status = 0,
    FirstReadByUser = 0,
    Activate = 0,
    OwnedBy = 0,
    AgentId = 0,
    DbiKey = 0,
    DbiLastSyncronized = 0,
    ExtraField = 0,
    FirstReadByOwner = 0,
    TicketStatus = 0,
    Deadline = 0,
    FilterAddress = 0,
    TimeSpentInternally = 0,
    TimeSpentExternally = 0,
    TimeSpentQueue = 0,
    RealTimeSpentInternally = 0,
    RealTimeSpentExternally = 0,
    RealTimeSpentQueue = 0,
    NumReplies = 0,
    NumMessages = 0,
    Tags = 0
}

/** Classification of ticket messages*/
enum NSTicketMessageCategory {
    Message = 0,
    Bounce = 0,
    OutboxFailed = 0
}

/** Indicates if the field body contains plain or html text*/
enum NSTicketMessageType {
    Unknown = 0,
    Plain = 0,
    Html = 0
}

/** Communication channel leading to ticket being created*/
enum NSTicketOrigin {
    Unknown = 0,
    Email = 0,
    SMS = 0,
    Fax = 0,
    Phone = 0,
    Facebook = 0,
    Twitter = 0,
    Internal = 0,
    CustomerCentre = 0,
    EMarketing = 0,
    AutoGenerated = 0,
    Chat = 0,
    Form = 0
}

/** The different types of escalate actions that can be set*/
enum NSTicketPriorityEscalateAction {
    ActionRead = 0,
    ActionChangedOwner = 0,
    ActionNewInfo = 0,
    ActionClosed = 0,
    ActionChangedPriority = 0,
    ActionNew = 0
}

/** The different types of escalate events that can be set*/
enum NSTicketPriorityEscalateEvent {
    None = 0,
    Stop = 0,
    Continue = 0,
    Restart = 0
}

/** Flags for the ticket priority*/
enum NSTicketPriorityFlags {
    Unknown = 0,
    External = 0,
    Default = 0,
    AlertSchedule = 0
}

/** Status of the ticket priority*/
enum NSTicketPriorityStatus {
    Unknown = 0,
    Normal = 0,
    Deleted = 0
}

/** Whether the owner has read the ticket or not (red, yellow, green)*/
enum NSTicketReadStatus {
    Unknown = 0,
    Green = 0,
    Yellow = 0,
    Red = 0
}

/** Indicates if a ticket is external or internal*/
enum NSTicketSecurityLevel {
    Unknown = 0,
    Internal = 0,
    External = 0
}

/** Which field in ticket we count time spent on*/
enum NSTicketStatusTimeCounter {
    None = 0,
    Internally = 0,
    Externally = 0,
    Queue = 0
}

/** Value for the encryptedComm field in traveller*/
enum NSTravelEncryptionChild {
    None = 0,
    Serial = 0,
    BF128 = 0
}

/** Value for the encryptedComm field in travelcurrent*/
enum NSTravelEncryptionOwn {
    None = 0,
    Serial = 0,
    BF128 = 0
}

/** Value for field type in traveltransctionlog*/
enum NSTrlogTransType {
    Unknown = 0,
    Insert = 0,
    Update = 0,
    Delete = 0,
    UpdateOwner = 0,
    OldUpdateContact = 0,
    OldUpdateProject = 0,
    DeleteAreaUserInclusion = 0,
    DeleteAreaUserAssignment = 0,
    PublishUdef = 0,
    UpdateFieldPart1 = 0,
    UpdateFieldPart2 = 0,
    UpdateFieldPart3 = 0,
    UpdateFieldPart4 = 0,
    UpdateFieldPart5 = 0,
    UpdateFieldPart6 = 0,
    UpdateFieldPart7 = 0,
    UpdateFieldPart8 = 0,
    UpdateContact = 0,
    UpdateProject = 0,
    TruncateTable = 0
}

/** Flag bits for extra information in TravelTransactionLog*/
enum NSTtlFlags {
    None = 0,
    Imported = 0,
    MassOperation = 0
}

/** Field type: 1 = Number, 2 = Short text, 3 = Long text, 4 = Date, 5 = Unlimited date, 6 = Checkbox, 7 = Drop-down listbox, 8 = Decimal*/
enum NSUDefFieldType {
    Number = 0,
    ShortText = 0,
    LongText = 0,
    Date = 0,
    UnlimitedDate = 0,
    Checkbox = 0,
    List = 0,
    Decimal = 0
}

/** Justification - 0 = default, left, right, center*/
enum NSUdefJustification {
    Default = 0,
    Left = 0,
    Center = 0,
    Right = 0
}

/** Same as the EUDefType enum in the C++ client, this is the DATABASE value used for udef definitions*/
enum NSUDefType {
    Invalid = 0,
    Contact = 0,
    Person = 0,
    Project = 0,
    Sale = 0,
    Temp = 0,
    Appointment = 0,
    Document = 0,
    None = 0
}

/** Upsert: Action to take on target table rows that do not match any incoming keys*/
enum NSUpsertNomatchAction {
    NoChange = 0,
    ZeroColumns = 0,
    DeleteRow = 0
}

/** Upsert: Action status for each row*/
enum NSUpsertRowActionStatus {
    Inserted = 0,
    Updated = 0,
    NoUpdateNeeded = 0,
    Deleted = 0,
    ColumnsZeroed = 0
}

/** Url encoding*/
enum NSUrlEncoding {
    Unknown = 0,
    None = 0,
    ANSI = 0,
    Unicode = 0
}

/** Type of user (or resource). Mapps functionally to associate type - but with different binary values.*/
enum NSUserType {
    Unknown = 0,
    InternalAssociate = 0,
    ResourceAssociate = 0,
    ExternalAssociate = 0,
    AnonymousAssociate = 0,
    SystemAssociate = 0
}

/** Has a pre-calculated value been overriden in a QuoteAlternative or QuoteLine, and in that case what & how?*/
enum NSValueOverride {
    None = 0,
    Total = 0,
    DiscountPercent = 0,
    DiscountAmount = 0,
    EarningPercent = 0,
    EarningAmount = 0
}

/** Default video-meeting status for meetings created in SuperOffice CRM*/
enum NSVideoMeetingStatus {
    NoChange = 0,
    VideoMeetingOn = 0,
    VideoMeetingOff = 0
}

/** The visibility of the record*/
enum NSVisibility {
    All = 0,
    Associate = 0,
    Group = 0
}

/** Webhook status: active, stopped, or tooManyErrors*/
enum NSWebhookState {
    Unknown = 0,
    Active = 0,
    Stopped = 0,
    TooManyErrors = 0
}

/** Enumerator for the days of the week*/
enum NSWeekday {
    Unknown = 0,
    Monday = 0,
    Tuesday = 0,
    Wednesday = 0,
    Thursday = 0,
    Friday = 0,
    Saturday = 0,
    Sunday = 0
}

/** Enumerator representing a week of the month*/
enum NSWeekOfMonth {
    Unknown = 0,
    First = 0,
    Second = 0,
    Third = 0,
    Fourth = 0,
    Last = 0
}

/** Chat Topic required fields in pre-form.*/
enum NSWidgetRequiredFields {
    None = 0,
    Email = 0,
    Name = 0,
    Company = 0,
    Phone = 0,
    Country = 0
}

/** Chat Topic widget_theme: classic(0) or modern(1).*/
enum NSWidgetTheme {
    Classic = 0,
    Modern = 0
}

/** Workflow definition status*/
enum NSWorkflowDefinitionStatus {
    None = 0,
    Stopped = 0,
    Paused = 0,
    Running = 0
}

/** Workflow Goal Type*/
enum NSWorkflowGoalType {
    None = 0,
    ContactUpdated = 0,
    SaleCreatedOnContact = 0,
    SaleCreatedOnCompany = 0,
    AppointmentCreated = 0,
    AddedToProject = 0,
    AddedToSelection = 0,
    FormSubmitted = 0,
    HadChat = 0,
    LinkClicked = 0,
    RequestCreated = 0
}

/** Workflow instance status*/
enum NSWorkflowInstanceStatus {
    None = 0,
    Idle = 0,
    Running = 0,
    Finished = 0,
    Suspended = 0,
    Faulted = 0,
    Cancelled = 0
}

/** Workflow Step Type*/
enum NSWorkflowStepType {
    None = 0,
    SendEmail = 0,
    SendSMS = 0,
    WaitForTime = 0,
    WaitForAction = 0,
    Split = 0,
    UpdateContact = 0,
    AddToList = 0,
    RemoveFromList = 0,
    CreateRequest = 0,
    CreateFollowUp = 0,
    CreateSale = 0,
    NotifyByEmail = 0,
    NotifyBySMS = 0,
    RunScript = 0
}

/** Workflow waiting step wait algorithm*/
enum NSWorkflowTimeWaitAlgorithm {
    None = 0,
    NumIntervals = 0,
    UntilSpecified = 0,
    UntilDateField = 0
}

/** Workflow waiting time interval type*/
enum NSWorkflowTimeWaitIntervalType {
    None = 0,
    Seconds = 0,
    Minutes = 0,
    Hours = 0,
    WorkingDays = 0,
    Days = 0,
    Weeks = 0
}

/** Workflow Trigger Type*/
enum NSWorkflowTriggerType {
    None = 0,
    SendEmail = 0,
    SendSMS = 0,
    WaitForTime = 0,
    WaitForAction = 0,
    Split = 0,
    UpdateContact = 0,
    AddToList = 0,
    RemoveFromList = 0,
    CreateRequest = 0,
    CreateFollowUp = 0,
    CreateSale = 0,
    NotifyByEmail = 0,
    NotifyBySMS = 0
}`;