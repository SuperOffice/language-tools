export const Enums = `/** Completed status enum common to appointments, documents and sales*/
enum NSActivityStatus {
    Unknown,
    NotStarted,
    Started,
    Completed
}

/** Is this an all day event: 0 = No, 1 = Yes*/
enum NSAllDayEvent {
    No,
    Yes
}

/** Value for the availableInState field in table externalapplication*/
enum NSAppAvailState {
    Always,
    CentralDb,
    SatelliteDb,
    TravelDb,
    SalesMarketingWeb,
    SalesMarketingPocket
}

/** Appointment and invitation synchronization info*/
enum NSAppointmentCautionWarning {
    OK,
    NotInSync,
    NotNotifiedByEmail,
    RecurrencePatternNotSupported,
    IncomingRecurrenceChangeNotSupported,
    ExternalParticipantsDateTimeMismatch
}

/** Value for field 'private' in table 'appointment'.*/
enum NSAppointmentPrivate {
    Public,
    PrivateUser,
    PrivateGroup
}

/** Value for field 'status' in table 'appointment'.*/
enum NSAppointmentStatus {
    UnknownOrPostIt,
    NotStarted,
    Started,
    Completed,
    Hidden,
    Booking,
    BookingMoved,
    BookingSeen,
    BookingMovedSeen,
    BookingDeclined,
    BookingDeleted,
    Assignment,
    AssignmentSeen,
    AssignmentDeclined
}

/** Value for field 'type' in table 'appointment'.*/
enum NSAppointmentType {
    Unknown,
    inDiary,
    inChecklist,
    Note,
    Document,
    SavedReport,
    BookingForDiary,
    BookingForChecklist,
    MergeDraft,
    MergeFinal
}

/** Behaviour in archives*/
enum NSArchiveBehaviour {
    None,
    InArchives,
    MultiSelectInArchives
}

/** Status if this appointment is in the process of being assigned to someone else*/
enum NSAssignmentStatus {
    Unknown,
    None,
    Assigning,
    Seen,
    Declined
}

/** Describes what source the associates should be retrieved from. */
enum NSAssociateSourceType {
    Unknown,
    History,
    DiaryViewList,
    Department,
    All
}

/** Field Type in table associate*/
enum NSAssociateType {
    NoPersonBit,
    AnonymousBit,
    NoCalenderBit,
    NoSentryBit,
    Employee,
    Resource,
    ExternalPerson,
    System,
    Anonymous
}

/** Value for field 'badge' in table 'ej_message'. Defines the initial source of a message.*/
enum NSBadgeType {
    Unknown,
    Reply,
    Forward,
    Comment,
    Incoming,
    Outgoing
}

/** Batch task cancel support*/
enum NSBatchTaskCancellationBehaviour {
    CanCancel,
    CancelWithWarning,
    CannotCancel
}

enum NSBatchTaskState {
    Unknown,
    New,
    Aquired,
    Started,
    Succeeded,
    Failed,
    SucceededManualCleanup,
    All
}

/** The link type, often synonymous with the blob type, of a BinaryObjectLink row*/
enum NSBlobLinkType {
    PersonImage,
    ProjectImage,
    EventImage,
    Thumbnail,
    StatusMonitorImage,
    BatchTask,
    ProductImage,
    ProductThumbnail,
    QuoteLineImage,
    QuoteLineThumbnail,
    AccessToken,
    RefreshToken,
    Dashboard,
    DashboardTile,
    ChatTopicImage,
    FormsBackgroundImage,
    ContactImage,
    DashboardHtmlTileData
}

/** The type of booking the appointment represents*/
enum NSBookingType {
    Unknown,
    None,
    Owner,
    Participant
}

/** Valid iCal methods*/
enum NSCalMethod {
    Unknown,
    Add,
    Cancel,
    Counter,
    DeclineCounter,
    Publish,
    Refresh,
    Reply,
    Request
}

/** iCal reply status*/
enum NSCalReplyStatus {
    Unknown,
    Accepted,
    Declined,
    Tentative
}

/** Different methods the user may use to change password*/
enum NSChangePasswordType {
    Email,
    Password
}

/** Chat Message Special type*/
enum NSChatMessageSpecialType {
    None,
    Welcome,
    Url,
    Block,
    NewSession,
    TransferedSession,
    Error,
    SessionDeleted,
    FaqSuccessQuestion,
    ClosedByUser,
    ClosedByCustomer,
    ClosedByIdle,
    TransferRejected,
    ReopenedByCustomer,
    ClickedOption,
    BotMessage,
    Options,
    IllegalFileType
}

/** Chat Message type*/
enum NSChatMessageType {
    Invalid,
    ToCustomer,
    ToUser,
    Special
}

/** Value for field 'flags' in table 'chat_session'.*/
enum NSChatSessionFlags {
    CustomerIsTyping,
    UserIsTyping
}

/** Chat Session status*/
enum NSChatSessionStatus {
    Invalid,
    PreChatForm,
    Faq,
    OfflineForm,
    InQueue,
    CustomerLast,
    UserLast,
    Finished,
    Deleted,
    Closed,
    RequestPosted,
    ClosedFromQueue
}

/** Value for field 'chat_status' in table 'ejuser'.*/
enum NSChatStatus {
    NotPresent,
    Present
}

/** Chat Topic flags*/
enum NSChatTopicFlag {
    None,
    PopupAlert,
    EmailAlert,
    CollectConsent,
    UseCustomQueueMessage,
    WidgetSizeLarge,
    OfflineCollectConsent,
    UseQueueOfflineForm
}

/** Chat widget size: normal or large*/
enum NSChatWidgetSize {
    Normal,
    Large
}

/** Enum listing the possible checkout states of a document, as seen from outside the document plugin*/
enum NSCheckoutState {
    NotCheckedOut,
    CheckedOutOwn,
    CheckedOutOther,
    LockingNotSupported
}

/** Color index of tasks*/
enum NSColorIndex {
    LightBlue,
    DarkBlue,
    LightGray,
    DarkGray,
    LightGreen,
    DarkGreen,
    LightYellow,
    DarkYellow,
    LightRed,
    DarkRed,
    BlueAlt1,
    BlueAlt2,
    BlueAlt3,
    GrayAlt1,
    GrayAlt2,
    GrayAlt3,
    GreenAlt1,
    GreenAlt2,
    GreenAlt3,
    YellowAlt1,
    YellowAlt2,
    YellowAlt3,
    RedAlt1,
    RedAlt2,
    RedAlt3
}

/** Command action*/
enum NSCommandAction {
    Implicit,
    YesNo,
    OkCancel,
    Ok
}

/** Result of an action*/
enum NSCommandActionResult {
    Implicit,
    Yes,
    Ok,
    No,
    Cancel
}

/** Conceptual image types*/
enum NSConceptualImageType {
    UndefinedImage,
    PersonImage,
    ProjectImage,
    EventImage,
    Thumbnail,
    StatusMonitorImage
}

/** Value for field 'type' in table 'cust_config'.*/
enum NSConfigType {
    Style,
    Options
}

/** Describes what type of activity/action there has been on a contact*/
enum NSContactAction {
    Unknown,
    Created,
    Updated,
    NewActivity,
    ActivityCompleted,
    PersonAdded,
    PersonUpdated,
    DocumentAdded,
    All
}

/** Describes what source the contacts should be retrieved from.*/
enum NSContactSourceType {
    Unknown,
    History,
    Diary,
    Favorites,
    All
}

/** Types of control used with user administration work with credentials*/
enum NSCredentialControlType {
    Static,
    Edit,
    Password,
    Link,
    Hidden
}

/** What kind of usage is this credential for*/
enum NSCredentialUsage {
    Outbound,
    Inbound,
    Session
}

/** Actor type within the CRM, system, a subset of the SuperOffice Entity types*/
enum NSCrmActorType {
    Unknown,
    Contact,
    Person,
    Project,
    Sale
}

/** Custom Field type: 1 = Number, 2 = Short text, 3 = Long text, 4 = Date, 5 = Unlimited date, 6 = Checkbox, 7 = Drop-down listbox, 8 = Decimal, 9 = DateTime, 10 = Time, 11 = TimeSpan, 12 = Relation, 13 = Attachment*/
enum NSCustomFieldType {
    Unknown,
    Integer,
    ShortText,
    LongText,
    Date,
    Blob,
    Checkbox,
    MdoList,
    Decimal,
    DateTime,
    Time,
    TimeSpan,
    RelationTo,
    Attachment,
    DynamicLink,
    ListText
}

/** Dashboard layout*/
enum NSDashboardLayout {
    None,
    One,
    TwoVerticalSplit,
    ThreeESplit,
    TwoHorizontalSplit,
    ThreeTSplit,
    Four
}

/** Dashboard tile entity type*/
enum NSDashboardTileEntityType {
    None,
    Company,
    Project,
    Sale,
    Product,
    Activity,
    Document,
    WebPanel,
    Followup
}

/** Dashboard tile option type*/
enum NSDashboardTileOptionType {
    None,
    String,
    Integer,
    Boolean,
    List
}

/** Dashboard tile type*/
enum NSDashboardTileType {
    None,
    Chart,
    Web,
    List,
    Bignum
}

/** Dashboard tile currency mode*/
enum NSDashTileCurrencyMode {
    None,
    Base,
    Own,
    Specified
}

/** Dashboard tile entity type (V2)*/
enum NSDashTileEntityType {
    None,
    Contact,
    Sale,
    Project,
    Appointment,
    Person
}

/** Dashboard tile measure*/
enum NSDashTileMeasure {
    None,
    CountAll,
    Sum,
    Average,
    Max,
    Min,
    Count
}

/** Dashboard tile chart type (V2)*/
enum NSDashTileType {
    None,
    Pie,
    List,
    BigNum,
    Bar,
    Line,
    Area,
    Column,
    CombinedBarLine,
    CombinedColumnLine,
    WebPanel,
    HTML,
    Gauge
}

/** Defines where a DashTileDefinition can be used*/
enum NSDashTileUsage {
    None,
    Dashboard,
    Selection
}

/** State of delta*/
enum NSDeltaState {
    Unknown,
    Draft,
    Published
}

/** Type and content of delta */
enum NSDeltaType {
    Unknown,
    System,
    WebPanel,
    CustomFields,
    Customized
}

/** Indicates what design type this message is created with*/
enum NSDesignType {
    Unknown,
    SOEditor,
    Unlayer
}

/** Value for field 'direction' in table 'doctmpl'.*/
enum NSDocTmplDirection {
    Unknown,
    Incoming,
    Outgoing,
    SaintAll
}

/** Is this document template some kind of appointment document, and if so what*/
enum NSDocTmplInvitationType {
    None,
    New,
    Changed,
    Cancelled
}

/** Is this document template some kind of quote document, and if so what*/
enum NSDocTmplPrivacyType {
    None,
    PersonRegistered
}

/** Is this document template some kind of quote document, and if so what*/
enum NSDocTmplQuoteType {
    None,
    MailBody,
    MainDocument,
    QuoteLines,
    ConfirmationMailBody,
    ConfirmationLines
}

/** Value for field 'record_type' in table 'doctmpl'.*/
enum NSDocTmplType {
    Unknown,
    Appointment,
    Document,
    Email,
    Fax,
    Phone,
    Todo,
    MergeDraft,
    MergeFinal,
    SavedReport
}

/** Locking semantics requested/applied to a document*/
enum NSDocumentLockSemantics {
    None,
    Locking,
    Versioning
}

/** Hierarchy domain*/
enum NSDomain {
    Unknown,
    ExtraTables,
    ScreenDefinitions,
    Scripts,
    Selections,
    ExternalDocuments,
    UserGroups,
    ExternalDocumentRelatedToSpmMessage,
    Dashboards,
    EmailFlows
}

/** Units of duration - from seconds to centuries*/
enum NSDurationUnit {
    Unknown,
    Second,
    Minute,
    Hour,
    Day,
    Week,
    Month,
    Quarter,
    HalfYear,
    Year,
    Decade,
    Century,
    Millenium
}

/** Access levels to a single field. Read and/or write.*/
enum NSEFieldRight {
    None,
    Read,
    Write,
    Update,
    Unused1,
    Unused2,
    Unused3,
    Unused4,
    Nullable,
    UIHintMandatory,
    UIHintReadOnly,
    FULL,
    UIHints
}

enum NSEjUserStatus {
    StatusNone,
    StatusNormal,
    StatusNotAvailable,
    StatusDeleted,
    StatusReadOnly,
    StatusSpm,
    StatusSystem
}

/** Status for adding attributes to an element in a statical list*/
enum NSElementStatus {
    None,
    Skipped
}

/** Possible statuses for an EmailAccount.*/
enum NSEmailAccountStatus {
    Unknown,
    Deleted,
    Failing,
    Failed,
    Ok
}

enum NSEMailFlags {
    None,
    Seen,
    Deleted,
    Recent,
    Flagged,
    Draft,
    Answered
}

/** Email/Mailing From field address algorithm*/
enum NSEmailFromType {
    FromOnlySpecified,
    FromSalesContact,
    FromSupportContact
}

/** What type of delivery system to use for a mail merge*/
enum NSEMailMergeTargetType {
    BestFit,
    Electronic,
    Mail,
    Fax,
    Printer,
    Xml,
    XmlFax
}

enum NSEMailPriority {
    NoPriority,
    Highest,
    High,
    Normal,
    Low,
    Lowest
}

/** Email/Mailing ReplyTo field address algorithm*/
enum NSEmailReplyToType {
    ReplyToOnlySpecified,
    ReplyToSalesContact,
    ReplyToSupportContact,
    ReplyToEmpty
}

/** What kind of email address - email, or some other communication type (chat, voip)*/
enum NSEmailType {
    Email,
    Chat,
    VoiP
}

/** Actor type within the ERP system, related but not identitcal to SuperOffice Entity type*/
enum NSErpActorType {
    Unknown,
    Customer,
    Supplier,
    Partner,
    Person,
    Project,
    Employee,
    Sale
}

/** Response codes used by ErpSync services*/
enum NSErpSyncResponseCode {
    NoError,
    ErrorConnectorHasConnections,
    ErrorNotFound
}

/** Table right is a combination of bits representing permissions on a row.*/
enum NSETableRight {
    None,
    Select,
    Update,
    Insert,
    Delete,
    Filtering,
    RestrictedUpdate,
    Unused1,
    Uninitialized,
    FULL,
    WRITE,
    URU,
    UDR,
    UR,
    URI,
    R,
    RI,
    RF,
    F,
    FI
}

/** CrmScript Event triggers - when CRMScript is run based on user or system actions. */
enum NSEventHandlerType {
    Unknown,
    NewTicket,
    NewTicketFromCustomerCenter,
    NewTicketFromEmail,
    NewTicketFromCustomerCenterBeforeSave,
    NewTicketFromSpmLink,
    NewNotifyTicketFromForm,
    NewTicketFromForm,
    TicketSave,
    TicketClosed,
    TicketPostponed,
    TicketDeleted,
    TicketActivated,
    TicketReopened,
    TicketReopenedFromCustomerCenter,
    TicketReopenedFromEmail,
    TicketChangedPriority,
    TicketChangedCategory,
    TicketChangedOwnedBy,
    TicketChangedPrimaryCustomer,
    TicketChangedTicketStatus,
    TicketChangedSlevel,
    TicketMessageAdded,
    TicketInternalMessageAdded,
    TicketExternalMessageAdded,
    TicketMessageSentimentCalculated,
    CompactModeInjection,
    CustomerCenterAuthentication,
    ScheduledTaskFailed,
    DbiTaskFailed,
    CustomerSetSubscriptions,
    ImportMailBeforeProcessing,
    ImportMailAfterProcessing,
    MainMenu,
    ChatNewSession,
    ChatSessionChangedStatus,
    ChatBeforeSaveNewMessage,
    ChatAfterSaveNewMessage,
    ServiceScreenNewTicketLoad,
    ServiceScreenNewQuickTicketLoad,
    ServiceScreenListTicketMessagesLoad,
    ServiceScreenAddMessageLoad,
    ServiceScreenEditTicketLoad,
    ServiceScreenViewCustomerLoad,
    ServiceScreenEditCustomerLoad,
    ServiceScreenViewCompanyLoad,
    ServiceScreenEditCompanyLoad,
    ServiceScreenForwardLoad,
    ServiceScreenEditExtraTableLoad,
    ServiceScreenNewTicketBeforeSubmit,
    ServiceScreenNewQuickTicketBeforeSubmit,
    ServiceScreenListTicketMessagesBeforeSubmit,
    ServiceScreenAddMessageBeforeSubmit,
    ServiceScreenEditTicketBeforeSubmit,
    ServiceScreenViewCustomerBeforeSubmit,
    ServiceScreenEditCustomerBeforeSubmit,
    ServiceScreenViewCompanyBeforeSubmit,
    ServiceScreenEditCompanyBeforeSubmit,
    ServiceScreenForwardBeforeSubmit,
    ServiceScreenEditExtraTableBeforeSubmit,
    ServiceScreenNewTicketAfterSubmit,
    ServiceScreenNewQuickTicketAfterSubmit,
    ServiceScreenListTicketMessagesAfterSubmit,
    ServiceScreenAddMessageAfterSubmit,
    ServiceScreenEditTicketAfterSubmit,
    ServiceScreenViewCustomerAfterSubmit,
    ServiceScreenEditCustomerAfterSubmit,
    ServiceScreenViewCompanyAfterSubmit,
    ServiceScreenEditCompanyAfterSubmit,
    ServiceScreenForwardAfterSubmit,
    ServiceScreenEditExtraTableAfterSubmit,
    SalesBeforeSaveAppointment,
    SalesBeforeSaveStakeholder,
    SalesBeforeSaveQuote,
    SalesBeforeSaveDocument,
    SalesBeforeSaveContact,
    SalesBeforeSavePerson,
    SalesBeforeSaveRelation,
    SalesBeforeSaveSale,
    SalesBeforeSaveProject,
    SalesBeforeSaveSelection,
    SalesBeforeSaveProjectMember,
    SalesBeforeSaveSelectionMember,
    SalesBeforeSaveQuoteLine,
    SalesBeforeSaveApproveQuote,
    SalesBeforeSaveRejectQuote,
    SalesBeforeSaveTicket,
    SalesAfterSaveAppointment,
    SalesAfterSaveStakeholder,
    SalesAfterSaveQuote,
    SalesAfterSaveDocument,
    SalesAfterSaveContact,
    SalesAfterSavePerson,
    SalesAfterSaveRelation,
    SalesAfterSaveSale,
    SalesAfterSaveProject,
    SalesAfterSaveSelection,
    SalesAfterSaveProjectMember,
    SalesAfterSaveSelectionMember,
    SalesAfterSaveQuoteLine,
    SalesAfterSaveApproveQuote,
    SalesAfterSaveRejectQuote,
    SalesAfterSaveTicket
}

/** Value for the executeOnEvent field in table externalapplication*/
enum NSExecuteOnEvent {
    Never,
    Logon,
    Logoff,
    LocalUpdate,
    Wait
}

/** Describes what part of the external user should be changed.*/
enum NSExternalUserInfoModification {
    Unknown,
    UserName,
    Password,
    Role,
    Active,
    All
}

/** String, int, decimal, image, url, etc. How should the value be interpreted.*/
enum NSExtraDataFieldType {
    String,
    Url,
    Image
}

/** Flag values for the CS extrafields dictionary*/
enum NSExtraFieldFlags {
    Neutral,
    Searchable,
    Public,
    InNewTicket,
    SetWhenClicked,
    CannotChange,
    DropDown,
    Readable,
    DontEscape,
    Deleted,
    IsId,
    IsForeignId,
    ReadOnly,
    UseDefault,
    ListRelations,
    ViewInList,
    HideHeaderIfEmpty,
    HideFunctions,
    NotEmpty,
    Hidden,
    Indexed,
    ViewInSearch
}

/** Access restrictions and mandatory status, if any.*/
enum NSFieldAccess {
    Normal,
    Mandatory,
    ReadOnly
}

/** Datatype of the field in the database*/
enum NSFieldDataType {
    Undefined,
    dbShortId,
    dbDateTimeUTC,
    dbDouble,
    dbInt,
    dbIntId,
    dbDateTimeLocal,
    dbUShort,
    dbShort,
    dbNull,
    dbUInt,
    dbBlob,
    dbStringBlob,
    dbString,
    dbExtendedDateTimeLocal,
    dbExtendedDateTimeUTC,
    dbTimeLocal,
    dbDateLocal,
    dbIntIdArr
}

/** Describes the different types of controls that can appear in the Configure connection dialog*/
enum NSFieldMetadataType {
    Checkbox,
    Text,
    Password,
    Integer,
    Double,
    List,
    Date,
    Label
}

/** Forms recaptcha mode*/
enum NSFormsRecaptchaMode {
    NotAvailable,
    GlobalKeysExist,
    KeysNeeded
}

/** What is the status of this submission*/
enum NSFormSubmissionStatus {
    Unknown,
    InProgress,
    EmailVerification,
    Submitted,
    Processed,
    Failed
}

/** What kind of form is this*/
enum NSFormType {
    Normal,
    Template
}

/** Freetext operator*/
enum NSFreeTextOperator {
    Contains,
    StartsWith,
    ExactMatch
}

enum NSGeneratorEncoding {
    Text,
    Html,
    Xml,
    MsWord,
    MsExcel,
    MsPowerpoint,
    MsOffice2007,
    MsOffice2007Xml,
    Url,
    UrlUnicode,
    Pdf,
    Mime,
    OpenDocument,
    OpenDocumentXml
}

/** Embedded images type*/
enum NSImageEmbedType {
    Link,
    Inline
}

/** Action being done for the import row*/
enum NSImportAction {
    Unknown,
    PersonAdded,
    PersonUpdated,
    PersonNoChange,
    ContactAdded,
    ContactUpdated,
    ContactNoChange,
    ProductAdded,
    ProductUpdated,
    ProductNoChange,
    Obs,
    ObsERPDuplicate
}

/** Import action for blank values*/
enum NSImportBlankAction {
    UsePersonName,
    Skip,
    ImportPersonWithoutContact
}

/** Action for blank companys for import*/
enum NSImportCompanyDuplicateAction {
    UseBlankName,
    UsePersonName,
    Skip
}

/** Contact duplicate matching for import*/
enum NSImportContactDuplicateMatch {
    Name,
    NameDepartment,
    Number,
    Code,
    OrgNr,
    Id
}

/** Duplicate action for import*/
enum NSImportDuplicateAction {
    Add,
    MergeBlank,
    Replace,
    Skip
}

/** Entitys type for import*/
enum NSImportEntityType {
    Unknown,
    Person,
    Contact,
    Product
}

/** Import new list item*/
enum NSImportNewListItem {
    AddItemToList,
    SetToDefault,
    SetToBlank
}

/** Person duplicate matching for import*/
enum NSImportPersonDuplicateMatch {
    FullName,
    EMailAddress,
    MobilePhone,
    Number,
    None,
    Id
}

/** Import new list item*/
enum NSImportPhoneUrlsEmail {
    AddToList,
    Replace,
    Skip
}

/** Product duplicate matching for import*/
enum NSImportProductDuplicateMatch {
    Name,
    Code,
    NameCode,
    ErpKey
}

/** Operators to be used between restrictions, describes how this restriction is related to the next one in an array*/
enum NSInterRestrictionOperator {
    None,
    And,
    Or
}

/** Status if this appointment represents an invitation*/
enum NSInvitationStatus {
    Unknown,
    None,
    Accepted,
    Hidden,
    Invitation,
    Moved,
    Seen,
    MovedSeen,
    Declined,
    Cancelled
}

/** Used in the CheckLicenseStatusResult to describe how SOADMIN should handle*/
enum NSLicenseStatus {
    Ok,
    NewLicenseAvailable,
    NewCompanyNameAvailable,
    NewSerialAvailable,
    UseCustomMessage,
    UseCustomMessageAndUrl,
    ProblemWithLicense,
    UnknownError
}

/** Entire system, per database, or per associate*/
enum NSLicenseType {
    Unknown,
    SiteLicense,
    SatelliteLicense,
    UserLicense
}

/** The type of the locale text strings*/
enum NSLocalizedTextType {
    Unknown,
    Label,
    Table,
    Column,
    ImportField,
    ImportObject,
    ImportGUICategory,
    StartupHints,
    FunctionRightLabel,
    FunctionRightDesc,
    StatusMonitorName,
    UdefContactLabel,
    UdefPersonLabel,
    UdefProjectLabel,
    UdefSaleLabel,
    UdefAppointmentLabel,
    UdefDocumentLabel,
    PushNotificationText
}

/** Log events*/
enum NSLogEvent {
    None,
    Create,
    Edit,
    Delete,
    Lock,
    Unlock
}

/** Bits in login.flags*/
enum NSLoginFlags {
    HideIEWarning
}

/** Service mailbox type*/
enum NSMailboxType {
    Unknown,
    Pop,
    Imap,
    Mapi,
    Facebook,
    Pops,
    Imaps,
    SmsPlugin,
    Mailgun,
    ImapOAuth
}

/** Ticket message actions*/
enum NSMessageActionType {
    None,
    Reply,
    ReplyAll,
    Forward,
    InternalComment
}

/** Standard/predefined values for ticket message header*/
enum NSMessageHeaderStdItem {
    None,
    Forward,
    UnnamedAttachmentBlocked,
    NoAutoReply,
    SentAutoReplyToCustomersA,
    SentAutoReplyToCustomersB,
    CustomerReadFAQ,
    ReplyTemplate
}

/** Ticket message header modification options*/
enum NSMessageHeaderStdItemCol {
    None,
    Name,
    Value
}

/** Value for field 'modified_appointment_fields' in table 'appointment'.*/
enum NSModifiedAppointmentFields {
    None,
    Date,
    Time,
    Location
}

/** Value for the navigation field in table externalapplication*/
enum NSNavigation {
    Invisible,
    ToolboxMenu,
    NavigatorButton,
    ViewMenu,
    SelectionTaskCard,
    ContactCard,
    ContactArchive,
    ProjectCard,
    ProjectArchive,
    SaleCard,
    PersonCard,
    ActivityDialog,
    DocumentDialog,
    BrowserPanel,
    ContSelectionTask,
    AppntSelectionTask,
    SaleSelectionTask,
    DocSelectionTask,
    ProjSelectionTask,
    CompanyMinicard,
    ProjectMinicard,
    DiaryMinicard,
    SelectionMinicard,
    ButtonPanelTask,
    AppointmentDialogTask,
    SaleDialogTask,
    DocumentDialogTask,
    PersonDialogTask,
    SaleMinicard,
    SaleArchive,
    AppntSelectionShadowTask,
    SaleSelectionShadowTask,
    DocSelectionShadowTask,
    ProjSelectionShadowTask,
    DiaryArchive,
    SelectionContactArchive,
    SelectionProjectArchive,
    SelectionSaleArchive,
    SelectionAppointmentArchive,
    SelectionDocumentArchive,
    ContSelectionCustomTask,
    AppntSelectionCustomTask,
    SaleSelectionCustomTask,
    DocSelectionCustomTask,
    ProjSelectionCustomTask,
    CustomArchiveMiniCard,
    SelectionCard,
    ReportMinicard,
    QuoteDialog,
    QuoteDialogTask,
    QuoteDialogArchive,
    QuoteLineDialogTask,
    QuoteLineDialog,
    QuoteLineSelectionMainTask,
    QuoteLineSelectionShadowTask,
    SelectionQuoteLineArchive,
    QuoteLineSelectionCustomTask,
    FindSystem,
    MailingSelectionTask,
    ContactSelectionMailingsTask,
    AppointmentSelectionMailingsTask,
    SaleSelectionMailingsTask,
    DocumentSelectionMailingsTask,
    ProjectSelectionMailingsTask,
    QuoteLineSelectionMailingsTask,
    TopPanelNewMenu,
    Dashboard,
    PersonArchive,
    PersonMinicard,
    CompanyCardTask,
    ProjectCardTask,
    TicketCard,
    TicketMinicard
}

enum NSNetServerBuildType {
    Feature,
    Stable,
    Alpha,
    Beta,
    ReleaseCandidate,
    Release
}

/** Types of events that are sent through the Pocket Notification API, where they are paired with an entity id*/
enum NSNotificationEventType {
    Unknown,
    NewTicket,
    AppointmentInvitation,
    AppointmentMoved,
    AppointmentCancelled,
    NewTicketMessage,
    TicketActivated,
    TicketEscalated,
    QuoteApprovalRequest,
    QuoteApprovalApproved,
    QuoteApprovalDenied,
    AppointmentDeclined
}

/** Defines what type of content the notification contains*/
enum NSNotificationMessageType {
    Message,
    ImportantMessage,
    RemoteAction,
    YesNoQuestion,
    ShowWebPage
}

/** Value for field 'DevicePlatform' in table 'PushNotificationService'*/
enum NSNotificationPlatform {
    Apple,
    Google,
    Microsoft,
    AppleDeveloper,
    AppleAdHoc,
    GoogleDeveloper
}

/** How to sort the Order by statement.*/
enum NSOrderBySortType {
    ASC,
    DESC
}

/** Male/female. No jokes please. To be used for selecting correct salutations and grammar. 0 = unknown, 1 = female, 2 = male*/
enum NSPersonGender {
    Unknown,
    Female,
    Male
}

/** The type of Phone*/
enum NSPhoneType {
    Unknown,
    ContactPhone,
    ContactFax,
    PersonDirectPhone,
    PersonDirectFax,
    PersonPrivate,
    PersonMobile,
    PersonPager
}

/** Value for field 'accessflags' in table 'prefdesc'.*/
enum NSPrefDescAccessFlags {
    Unknown,
    WizardMode,
    Level0,
    adminGUI,
    CRMGUI
}

/** Value for field 'valueType' in table 'prefdesc'.*/
enum NSPrefDescValueType {
    Unknown,
    Number,
    Text,
    Bool,
    ListOfValues,
    ListTableRef,
    TimeList,
    ContactID,
    PersonID,
    ProjectID,
    SelectionID,
    PosSize,
    TimeZone,
    Time,
    Password,
    MultiLineText
}

/** Value for field 'deflevel' in table 'userpreference'.*/
enum NSPreferenceLevel {
    Undefined,
    HardDefault,
    SystemWide,
    Database,
    Group,
    Individual,
    PC
}

/** Should this field be published by default?*/
enum NSPublishType {
    Undefined,
    External
}

/** The state of a quote-alternative or line: Ok / OkWithInfo / Warn / Error*/
enum NSQuoteStatus {
    Ok,
    OkWithInfo,
    Warning,
    Error
}

/** Possible actions for QuoteVersionButton states.*/
enum NSQuoteVersionButtonAction {
    None,
    ValidateVersion,
    Edit,
    Send,
    Approve,
    Reject,
    ValidateVersionAndSendIfPossible,
    ValidateVersionAndPlaceOrderIfPossible,
    CloneVersion,
    SendConfirmation,
    GetOrderState,
    UpdatePrices
}

/** State of a Quote Version*/
enum NSQuoteVersionState {
    Unknown,
    Draft,
    DraftNotCalculated,
    DraftNeedsApproval,
    DraftApproved,
    DraftNotApproved,
    Sent,
    Archived,
    Lost,
    Sold
}

/** The different types of recipient sorting available*/
enum NSRecipientSorting {
    None,
    CountryZipCode,
    CompanyName,
    CompanyNumber,
    PersonLastname
}

/** Recipient type*/
enum NSRecipientType {
    To,
    CC,
    BCC
}

/** Enumerator describing the different patterns for a daily recurrence*/
enum NSRecurrenceDailyPattern {
    Unknown,
    EveryWorkday,
    EveryWeekday,
    EveryCyclicDay
}

/** Enumerator describing how the series of recurring activities are terminated.*/
enum NSRecurrenceEndType {
    Unknown,
    EndDate,
    Counter
}

/** Enumerator describing the different patterns for a monthly recurrence*/
enum NSRecurrenceMonthlyPattern {
    Unknown,
    DayOfMonth,
    WeekdayOfMonth
}

/** Enumerator describing the main pattern of recurrence.*/
enum NSRecurrencePattern {
    Unknown,
    Daily,
    Weekly,
    Monthly,
    Yearly,
    Custom
}

/** Appointment recurrence change mode: only this, this and forward, stop*/
enum NSRecurrenceUpdateMode {
    Unknown,
    OnlyThis,
    ThisAndForward,
    StopRecurrence
}

/** Enumerator describing the different patterns for a yearly recurrence*/
enum NSRecurrenceYearlyPattern {
    Unknown,
    DayOfMonth,
    WeekdayOfMonth
}

/** Value for flag field in refcounts*/
enum NSRefcountFlags {
    Unknown,
    Allocate,
    Unique,
    ReadOnly,
    AllowBlank
}

/** Enum used to map registry values by reg_id*/
enum NSRegistry {
    RegistryEntry_End,
    EjournalSender,
    CleanerThreshold,
    CleanerTolerance,
    EjournalCronLast,
    EjournalCronNow,
    CleanerOnOff,
    CleanerImportOnOff,
    NotifyActiveTickets,
    ActiveLinksInMessages,
    SmtpTimeout,
    ReplyTemplateCustomerNewCustomer,
    ReplyTemplateCustomerCustomerReply,
    ReplyTemplateCustomerPassword,
    ReplyTemplateUserActiveTickets,
    ReplyTemplateUserNewMessage,
    ReplyTemplateUserTicketActivated,
    ReplyTemplateUserTicketAlarm,
    ReplyTemplateUserNewTicket,
    SetupCompanyName,
    SetupCompanyAddress,
    NotifyActiveTicketsDays,
    EjournalOutbox,
    OutmailWrapColumn,
    EnableBackdoor,
    EjournalOutboxDelay,
    DisableHtmlFiltering,
    FaqTitleWeight,
    ChatWhoisString,
    FaqSuggestions,
    ChatAvailableImage,
    ChatUnavailableImage,
    ImportMailTimeout,
    ShowReplyTemplatesToCustomers,
    LastRequestTicketLimit,
    LastRequestDaysLimit,
    NoEjOutbox,
    IdleLimitCustomerSeconds,
    ReplyTemplateUserTicketTakenOver,
    EnableSpellCheck27,
    LogPath,
    NumOfListedLinks,
    ReplyTemplatePublishKbQuestion,
    ReplyTemplatePublishKbAnswer,
    InvoiceUpdateDone,
    DefaultTimeToReplyOnNewTicket,
    ShowAutoRepliesToCustomers,
    EjournalOutboxDeleteSentMailAfter,
    AllwaysSendMailToNewCustomers,
    IdleLimitCustomerSecondsWeb,
    ExternalCustomerAuthEnabled,
    ExternalCustomerAuthURL,
    DoNotTestSmtp,
    DelayMailboxImport,
    MaxLoginAttempts,
    BlockLoginAttempts,
    ReplyTemplateWeekStat,
    WeekStatRecipient,
    HideUserStatistics,
    SystemTimeMode,
    SMTPIgnoreLeadingDotEscaping,
    BaseURLForFAQEntry,
    BaseURLForFAQCategory,
    SystemTimeModeInstalled,
    BlockCustomerFAQParsing,
    ChatUserIdleTime,
    AlertChatMessages,
    DisableExternalSpmUpdate,
    SpmSMTPServer,
    SpmDefaultFrom,
    NotificationExpire,
    CrystalReportsSoapEndpoint,
    DoNotSearchBodyForTag,
    ReplyTemplateHotlistNewMessage,
    ReplyTemplateHotlistTicketActivated,
    ReplyTemplateHotlistTicketAlarm,
    ReplyTemplateHotlistTicketTakenOver,
    LogChannels,
    ShowTotalInvoiceUnits,
    MinimumDiskSpace,
    DecodingMailSorter,
    ImportMail3ExpireTime,
    ImportMail3ExpireTimeAnalyze,
    StripNewLineInParser,
    LastDiskSpaceWarningAttachments,
    LastDiskSpaceWarningBase,
    LastDiskSpaceWarningText,
    EnableNewImportMail,
    EnableEjStat,
    SmsServiceId,
    SmsServiceEndpoint,
    MaximumSmsMessagesPerDay,
    MaximumSmsMessagesPerRecipient,
    CellphoneUpdateDone,
    DefaultSmsCountry,
    DbIntegratorEnableStreaming,
    ScreenChooserNewTicket,
    ScreenChooserListTicketTop,
    ScreenChooserListTicketMessages,
    ScreenChooserAddMessage,
    ScreenChooserEditTicket,
    ScreenChooserViewCustomer,
    ScreenChooserViewCompany,
    ScreenChooserTicketMainMenu,
    MaximumCountRecipients,
    EnableEditMessage,
    EnableNewGui,
    HideContactPersonPassword,
    ShowBlogicMenu,
    WwwPath,
    UseParserInDBIntegrator,
    CollapsableMessageStrings,
    RefreshNotifyFrameDeprecated,
    CopyLDAPSearchBase,
    UseHtmlRedirect,
    ImportMailProcPri,
    KeepWarningLog,
    KeepDbLog,
    KeepFormKeys,
    InternalMessageWhenNotCustomer,
    SoapSystemUserPassword,
    CreateExtraTableDbiFields,
    UseOldMailInFilterRegExp,
    NewInvoiceEntryFormat,
    IgnoreReturnPath,
    ConvertProfilesToClob,
    ReportStartRootFolder,
    ParseCustomerFields,
    ArriveNewTicket,
    ImportMessageAsAttachment,
    DBIBetaRelease,
    DBIExecutable,
    MailFilterMinFaqValue,
    AutoStartTimer,
    ScreenChooserInvoiceStat,
    LimitSearchExtraTableResult,
    UseWebServiceSms,
    LastLicenseInfo,
    SmsSender,
    SmsChannel,
    UseSmsDeliveryReport,
    UpdateTicketCustomersDone,
    ScreenChooserHelpPage,
    CustomerEncryptionMethod,
    UpgradeCustomerPasswordStatus,
    UpgradeScreenDefinitionsToScripts,
    SpmUseHtmlEditor,
    InvoiceEntrySumAdded,
    LastnameFirst,
    SpmUseDeliveryReport,
    DoNotKickLoginSessions,
    ScreenChooserUsers,
    ScreenChooserPriorities,
    UseSafeParserFunction,
    ScreenChooserCategories,
    UpdateCustomerEmails,
    DirtyTicketSaveEvent,
    PasteFaq,
    EjSenderVersion,
    DefaultTicketStatusOpen,
    DefaultTicketStatusClosed,
    DefaultTicketStatusInactive,
    DefaultTicketStatusDeleted,
    DefaultTicketStatusConnected,
    UseOldHtmlSelectTreeLayout,
    ScreenChooserKnowledgeListFolders,
    ScreenChooserKnowledgeEditKbEntry,
    ScreenChooserKnowledgeViewKbEntry,
    ConvertRegScreenChoosersToTable,
    SmsProvider,
    PsWinComUsername,
    PsWinComPassword,
    PsWinComSender,
    UpgradeNotPresentComment,
    UseWordByWordKbSearch,
    SearchSubjectBeforeMsgId,
    UpgradeTicketStatusName,
    UseOnlyOneCookie,
    ViewCompanyWithPanes,
    ViewCustomerWithPanes,
    ReplacedLangFrWithSe,
    ViewExtraTableEntryWithPanes,
    OldMessageBeforeSignature,
    ViewTicketWithPanes,
    FixCreationScripts,
    DefaultNoCustomerOnForwarding,
    ForceHTTPS,
    UseEjParserForTemplates,
    CrossPostMergeTimeWindow,
    UseAbsoluteURLsInHTML,
    DelegateAlgorithm,
    DisplayDataSources,
    InlineImagesDefault,
    LogoutUrl,
    ProfilesConverted,
    DefaultBlogicScreensOnEditTicket,
    SearchToSelections,
    PhoneUpdateDone,
    FaqAddCommentsAccess,
    FaqReadCommentsAccess,
    SpmSMTPServerPort,
    MapiServerAppendString,
    CarrotUsername,
    CarrotPassword,
    UnicodeConvertedTemplateFolder,
    SuperOfficeIntegrationPassword,
    UpdateUserDateFormatsDone,
    CellphoneAndPhoneUpdateDone,
    UnpublishedWorkflowName,
    PublishedWorkflowName,
    ExpiredWorkflowName,
    NotifyFramePidGain,
    NotifyFramePidParamsDeprecated,
    NotifyFrameServerLoad,
    Tele2SmsUsername,
    Tele2SmsPassword,
    Tele2Endpoint,
    UpdateFaqAccessToWorkflowDone,
    UserSignaturesConvertedToHtml,
    OracleIndexesUpdated,
    SpmOnlyPrimaryOnTicketSelection,
    SpmMsgTicketParserUpdateDone,
    UserOldScreensOnEditTicketDone,
    UseFullText,
    HideIntegratedEjSpmBlock,
    SelectCustomerColumns,
    SelectCompanyColumns,
    SelectTicketColumns,
    UpdatedActivateField,
    SpmImgDBCopied,
    SecurityModelEnabled,
    BlockPanesRenderMode,
    UseMiddleName,
    NSConvertedProfiles,
    AllowSentryBypass,
    CrmGroup,
    CrmRoleAdmin,
    CrmRoleStandard,
    LastLicenseExpirationCheck,
    ReplyTemplateLicenseExpirationWarning,
    CrmRoleCustomer,
    SystemNSKey,
    AnonNSKey,
    DBSchemaDirty,
    NSGetKeyPath,
    EmarketeerNewLinkGraceDate,
    CustomNotifyEnabled,
    ConverterDone,
    NetServerKeepAlive,
    TimeZoneForNetServer,
    UseExtension,
    CustomerEnableFAQAjax,
    UseAttachmentFolders,
    DoNotChangeSMRoles,
    ShowAvatarsInCustomerCentre,
    SearchEngineFilters,
    UseNetServerSms,
    NetServerSmsProvider,
    NsPluginSender,
    SetupFCGI,
    UseFCGIImpersonation,
    SoapUseExtension,
    UseAutoSuppressHeader,
    ExampleBounceFilterAdded,
    SLinkCleanUpDone,
    IncomingSmsBox,
    AddedLegalHtmlCodeInUpgrade,
    DefaultEditorContent,
    UseBrowserSpellCheck,
    UseCalltoOnPhoneLinks,
    ShowSubmitSpinner,
    AccessLicensePageWithoutLogin,
    HideExportButton,
    QueueTicketStatuses,
    ImageResizerExecutable,
    CleanupLinefeedInNSMail,
    CheckHtmlValidityInSOEditor,
    UpgradeCSParserConverted,
    DefaultEditorBodyFont,
    CustomCacheBustingParameter,
    UseSha1OnLinks,
    UpgradeRolesConverted,
    DeleteInboxDays,
    UserGroupsConverted,
    UserAgentIsMobile,
    UserAgentIsTablet,
    DefaultStatusWhenTakingOwnership,
    DisableUnauthenticatedCreationInCustomerCentre,
    RegisterCustomerConfirmEmail,
    ReplyTemplateCustomerConfirmEmail,
    ReplyToAllOnlyLatestExternalMessage,
    LastCleanedExpiredNotify,
    eMarketingEditorInNewWindow,
    FacebookCallbackKey,
    MaxRowsForCharts,
    SpmDefaultMailingRate,
    SpmConcurrentSMTPThreads,
    SpmHideNewMessageOption,
    SpmTimeToRestartSenders,
    ShowOldReportsMenu,
    EmailSendingRetryLimit,
    ThumbnailsIsDefaultMode,
    UsageStatsWinNextRun,
    UsageStatsWebNextRun,
    UsageStatsDataAddNextRun,
    UsageStatsTableSizeNextRun,
    UserSyncResyncNextRun,
    ForceIEEdgeMode,
    CSPHeader,
    NotifyTimeOfDayForReport,
    EmailImplementation,
    CurlMailTransferTimeout,
    CurlDisableStartTls,
    ReplyTemplatePrintTicket,
    DoNotUseCompanyCountry,
    MaxGridRows,
    DoNotAllowMultipleLogins,
    NsPluginConfig,
    ReplyTemplateCustomerChatLog,
    MailgunIncludeOutOfOffice,
    TimeKeyTTL,
    DefaultTrackAllLinks,
    AddedOptionsFcgi,
    MailgunRewriteSenderHeader,
    OptimizedCustomerCenterListTickets,
    QuickReplyMode,
    ForceImmediateFileLogging,
    TemporaryKeyTTL,
    TemporaryKeyHardDeleteDelay,
    ReplyTemplateNewLink,
    UseLegacyHtmlConverter,
    ClipMessagesLength,
    StrictGDRPMode,
    ImportMailCreateUnknownPersons,
    ChatCheckForIdleSessions,
    ImportmailCheckInvalidUTF8,
    RecipientControlAdvancedSearch,
    UseCookieInCustomerCenter,
    SandboxTicketMessages,
    MailingsUseEnvelopeFrom,
    MovedSystemScriptsToScreenChooser,
    FastPersonRecipientSearch,
    SanitizeMailingsHtml,
    KeepExistingCustomerCenterTemplatesOnDisk,
    SentimentCalculationTimeframe,
    ComponentMaxWidth,
    ReplyToPrimaryEmail,
    TicketLogSystem,
    AllowedMailingLinksDomains,
    CCTAddMessage,
    CCTCanceled,
    CCTChangeCust,
    CCTConfirmCustomer,
    CCTDoneConfirmCustomer,
    CCTDoneRegister,
    CCTEMarketeerSimpleMessage,
    CCTFramework,
    CCTListTicket,
    CCTListTickets,
    CCTLoggedIn,
    CCTLoggedOut,
    CCTLogin,
    CCTNewTicket,
    CCTNoAccess,
    CCTPasswordSent,
    CCTRegisterCust,
    CCTSendPassword,
    CCTSubscription,
    CCTTicketPosted,
    CCTViewKBCategory,
    CCTViewKBEntry,
    CCTViewKBSearch,
    CCTWelcome,
    CCTUpdateSubscriptions,
    CCTUpdateConsent
}

/** Target type of relation. (Contact, person or both)*/
enum NSRelationTarget {
    None,
    Contact,
    Person,
    Both
}

/** Describes access level to get reply templaes*/
enum NSReplyTemplateAccessLevel {
    Full,
    Read,
    None
}

/** Flags for the reply template body*/
enum NSReplyTemplateBodyFlags {
    ReplyTemplateBodyNone,
    ReplyTemplateBodyDefault,
    ReplyTemplateBodyIncludePlain,
    ReplyTemplateBodyIncludeHtml
}

/** Describes access level to get reply templaes*/
enum NSReplyTemplateFlags {
    ReplyTemplateCustomerNewCustomer,
    ReplyTemplateCustomerCustomerReply,
    ReplyTemplateCustomerPassword,
    ReplyTemplateUserActiveTickets,
    ReplyTemplateUserNewMessage,
    ReplyTemplateUserTicketActivated,
    ReplyTemplateUserTicketAlarm,
    ReplyTemplateUserNewTicket,
    ReplyTemplateAll,
    ReplyTemplateNone,
    ReplyTemplateUserTicketTakenOver,
    ReplyTemplatePublishKbQuestion,
    ReplyTemplatePublishKbAnswer,
    ReplyTemplateWeekStat,
    ReplyTemplateHotlistNewMessage,
    ReplyTemplateHotlistTicketActivated,
    ReplyTemplateHotlistTicketAlarm,
    ReplyTemplateHotlistTicketTakenOver,
    ReplyTemplateLicenseExpirationWarning,
    ReplyTemplateCustomerConfirmEmail,
    ReplyTemplatePrintTicket,
    ReplyTemplateCustomerChatLog,
    ReplyTemplateNewLink
}

/** The avaliable category*/
enum NSReportCategory {
    None,
    All,
    Contact,
    Project,
    Sale,
    Appointment,
    Selection,
    Person,
    Diary,
    Favorites
}

enum NSReportLayout {
    Unknown,
    List,
    Label,
    GroupList,
    CrossTable,
    CalendarWeek5,
    CalendarWeek7,
    CalendarMonth,
    Text
}

/** Describes the orientation of the paper when printing a report. The report layout must be 'Label'*/
enum NSReportPaperOrientation {
    None,
    Portrait,
    Landscape
}

/** Type of responce*/
enum NSReturnType {
    None,
    Message,
    SoProtocol,
    CustomGui,
    Other,
    URL
}

/** Describes the available relation to owner types available for roles*/
enum NSRoleRelationToOwner {
    MyOwn,
    PrimaryGroup,
    OtherGroups,
    OtherAssociates,
    ExternalUser,
    Anonymous,
    MyCompany,
    SameProject
}

/** 0 = employee, 1 = external user, 2 = anonymous*/
enum NSRoleType {
    Employee,
    ExternalUser,
    Anonymous,
    System
}

/** Values for the 'done' field in the sale table*/
enum NSSaleDone {
    Unknown,
    NotDone,
    Done
}

/** Value for the 'status' field in the sale table*/
enum NSSaleStatus {
    Unknown,
    Open,
    Sold,
    Lost,
    Stalled,
    SaintAll
}

/** CS system event types for custom logic hooking*/
enum NSScreenChooserType {
    None,
    System,
    ExtraTableEntry,
    ExtraTableAll,
    ExtraTableEdit,
    NewTicket,
    NewTicketFromCustomerCenter,
    NewTicketFromEmail,
    NewTicketFromCustomerCenterBeforeSave,
    TicketClosed,
    TicketPostponed,
    TicketDeleted,
    TicketActivated,
    TicketReopened,
    TicketReopenedFromCustomerCenter,
    TicketReopenedFromEmail,
    TicketChangedPriority,
    TicketChangedCategory,
    TicketChangedOwnedBy,
    TicketChangedPrimaryCustomer,
    TicketChangedTicketStatus,
    TicketChangedSlevel,
    TicketMessageAdded,
    TicketInternalMessageAdded,
    TicketExternalMessageAdded,
    CompactModeInjection,
    ScheduledTaskFailed,
    DbiTaskFailed
}

/** Selection system type - defines if this selection is one that is managed by the system, and what kind it is*/
enum NSSelectionSystemType {
    User,
    TemporaryShortTermStatic,
    PersonalForFind,
    DashboardTileSelection,
    PersonalForDashboard,
    PersonalForDashboardSecondary
}

/** Selection type - static/dynamic/combined. Works together with targetTable to define what kind of Selection this is.*/
enum NSSelectionType {
    Static,
    Dynamic,
    Combined
}

/** How the selections in a combined selections should be put together*/
enum NSSelectionUnionType {
    Unknown,
    SubtractRightFromLeft,
    SubtractLeftFromRight,
    Intersect,
    XOR,
    Union
}

/** Sender email mode*/
enum NSSenderMailMode {
    UseDefaultSender,
    UseOurContact,
    UseSupportContact,
    UseLoggedInUser
}

/** Possible statuses for a ServiceAuth.*/
enum NSServiceAuthStatus {
    Unknown,
    Initialized,
    Error
}

/** Status for sending to a particular recipient*/
enum NSShipmentAddrStatus {
    Unknown,
    Ready,
    Duplicate,
    Blocked,
    Sent,
    Bounced,
    Opened,
    Clicked,
    SoftBounced,
    NoSubscription,
    Complained,
    TooManyBounces
}

/** Bitmask defining what action should be taken*/
enum NSShipmentLinkAction {
    None,
    SetPersonInterest,
    RemovePersonInterest,
    SetContactInterest,
    RemoveContactInterest,
    AddToSmSelection,
    RemoveFromSmSelection,
    AddToSmProject,
    RemoveFromSmProject,
    AddTask,
    AddRequest,
    AddToCsSelection,
    RemoveFromCsSelection,
    ExecuteScript
}

/** Flags that control how the task is created*/
enum NSShipmentLinkTaskFlags {
    None,
    AssignToOurContact,
    UseNextAvailableTime,
    IsAssignment
}

/** Customer action type (clicked a link, viewed an image etc)*/
enum NSShipmentLinkType {
    Unknown,
    Link,
    Image
}

/** Status of shipment list*/
enum NSShipmentListStatus {
    NotSent,
    Sent
}

/** Bitmask defining what type of shipment message this is*/
enum NSShipmentMessageType {
    Plain,
    Html,
    SourceView,
    Sms,
    Document
}

/** Status for shipment (started, cancelled etc)*/
enum NSShipmentStatus {
    None,
    Ok,
    Canceled,
    Waiting,
    Started,
    StatusFailed,
    Retry,
    Populating,
    Deleted,
    AwaitPopulate,
    PopulatingOnly,
    PopulateAborted,
    PopulateError,
    TooManyRecipients
}

/** Value for the showState field in table externalapplication*/
enum NSShowState {
    Minimized,
    Maximized,
    Default,
    ToolBar,
    AddressBar,
    StatusBar,
    MenuBar
}

/** Show Task Item In Client*/
enum NSShowTaskItemInClient {
    None,
    Web,
    Mobile
}

enum NSStatusScreenPanelType {
    None,
    OpenRequestsPerCategory,
    OpenRequestsPerTopCategory,
    OpenRequestsPerUser,
    OpenRequestsPerUserGroup,
    OpenRequestsPerPriority,
    OpenRequestsPerStatus,
    OpenRequestsPerOrigin,
    NumberOfCreatedRequestsPerDay,
    NumberOfCreatedRequestsPerWeek,
    NumberOfCreatedRequestsPerMonth,
    UserResponseTimePerDay,
    UserReponseTimePerWeek,
    UserResponseTimePerMonth,
    OwnOpenRequests,
    UnassignedRequests,
    Hotlist,
    StatusScreen
}

/** Enumeration that exposes what search types that are supported.*/
enum NSStringSearchType {
    Exact,
    BeginsWith,
    EndsWith,
    Contains
}

/** Value for field 'scope' in table 'systemevent'.*/
enum NSSystemEventScope {
    Undefined,
    SystemWide,
    Database,
    Group,
    User
}

/** Target Entity of Tags*/
enum NSTagEntity {
    Global,
    Ticket
}

/** Target assignement levels*/
enum NSTargetAssignementLevel {
    None,
    Company,
    Group,
    Associate
}

/** Target entity type*/
enum NSTargetEntityType {
    None,
    Sale
}

/** Target level*/
enum NSTargetLevel {
    None,
    Global,
    Company,
    UserGroup,
    Associate
}

/** Target measurement unit*/
enum NSTargetMeasurementUnit {
    None,
    Amount,
    Count,
    Profit
}

/** Target period type*/
enum NSTargetPeriodType {
    None,
    Year,
    HalfYear,
    Quarter,
    Month
}

/** Value for field 'direction' in table 'task'. Controls icons used in GUI*/
enum NSTaskDirection {
    Unknown,
    Incoming,
    Outgoing,
    SaintAll
}

/** Task List Item Type*/
enum NSTaskListItemType {
    None,
    Url,
    CrmScript,
    SoProtocol
}

/** Value for field 'record_type' in table 'task'. Controls icons used in GUI*/
enum NSTaskType {
    Unknown,
    Appointment,
    Document,
    Email,
    Fax,
    Phone,
    ToDo,
    MailMergeDraft,
    MailMergeFinal,
    Report,
    SaintAll
}

/** Domains for temporary keys.*/
enum NSTemporaryKeyDomain {
    Unknown,
    MailingRecipient,
    FormSubmitterRecipient,
    ViewTicketInCustomerCenter,
    LoginCustomerCenter,
    PublicFaq,
    ChangePasswordCustomerCenter
}

/** Value for field 'type' in table 'text'.*/
enum NSTextType {
    Unknown,
    ContactInfo,
    PersonInfo,
    Reserved1,
    AppointmentText,
    DocumentText,
    ProjectText,
    SaleText,
    Notepad,
    Reserved2,
    Reserved3,
    ProjectInfo,
    SelectionInfo,
    ProjectMemberText,
    SelectionText,
    DayInfo,
    LongPreference,
    SearchCriteriaInfo,
    SearchCriteriaGroupInfo,
    RoleInfo,
    UdefListSQL,
    StatusMonitorInfo,
    AudienceSignOnConfirmation,
    AudienceSignOffConfirmation,
    StatusMonitorDefaultTaskText,
    SaleInfo,
    NameExtension,
    TooltipExtension
}

/** Bitmask available ticket alert action*/
enum NSTicketAlertAction {
    ActionDelegate,
    ActionEmail,
    ActionEmailCustomer,
    ActionEmailUser,
    ActionEmailCategoryMaster,
    ActionSms,
    ActionSmsCustomer,
    ActionSmsUser,
    ActionSmsCategoryMaster,
    ActionScript
}

/** Status of a ticket/request*/
enum NSTicketBaseStatus {
    Unknown,
    Active,
    Closed,
    Postponed,
    Deleted,
    Merged,
    PostponedSpecific,
    Postponed1Hour,
    Postponed2Hours,
    Postponed3Hours,
    Postponed4Hours,
    PostponedDay,
    PostponedWeek,
    PostponedMonth
}

/** Default status for requests. Note that this is a preference which should be respected if making UI. It is not enforced by the APIs*/
enum NSTicketCategoryClosingStatus {
    UserDefined,
    Active,
    Closed,
    Postponed
}

/** The delegate method used for request assigned to this category*/
enum NSTicketCategoryDelegateMethod {
    Unknown,
    Even,
    Weighted,
    Unfair,
    Not
}

/** Flags for the ticket category*/
enum NSTicketCategoryFlags {
    Unknown,
    Internal,
    OnlyLoggedInUsers,
    DefaultToCategoryMaster,
    ListInMain,
    RedelegateNewMsg,
    DelegateToOurContact,
    PropagateReplyTemplate,
    MembersOnly,
    NotifyMembers,
    AcceptWhenReplying
}

/** Value representing action that caused a ticket to change*/
enum NSTicketLogAction {
    No_Logging,
    Ticket_Unknown,
    Ticket_CustomDescription,
    Ticket_ImportTicketFromEmail,
    Ticket_ImportMailNewTicket,
    Ticket_ImportMailExistingTicket,
    Ticket_AttachmentConnectedToTicket,
    Ticket_TicketActivated,
    Ticket_TicketEscalated,
    Ticket_ConnectTwoTickets,
    Ticket_MessageAddedToTicket,
    Ticket_SendingSpmMessage,
    Ticket_SavedFromEjScript,
    Ticket_TicketEscalatedFromEjScript,
    Ticket_SetValuesFromSoap,
    Ticket_AddMessageFromSoap,
    Ticket_NewTicketFromSoap,
    Ticket_AddMessage,
    Ticket_NewTicket,
    Ticket_UserTakesOwnership,
    Ticket_ChangeStatus,
    Ticket_ChangeSecurityStatus,
    Ticket_QuickSetExtraDateTime,
    Ticket_QuickSetExtraDate,
    Ticket_QuickSetExtraTime,
    Ticket_QuickSetExtraField,
    Ticket_SwapExtraField,
    Ticket_ReadByUser,
    Ticket_BatchOperation,
    Ticket_BatchMarkAsRead,
    Ticket_BatchMarkAsUnread,
    Ticket_BatchCloseTicket,
    Ticket_EditTicket,
    Ticket_DeleteTicket,
    Ticket_JoinTickets,
    Ticket_EditMessage,
    Ticket_CloseTicketAfterForward,
    Ticket_CloseAfterMassMessage,
    Ticket_CloseTicketFromSoap,
    Ticket_ReadTicketFromSoap,
    Ticket_UserDeletedOwneraction,
    Ticket_NewTicketFromSpecialForm,
    Ticket_TicketClosedByFAQ,
    Ticket_NewTicketFromCustomer,
    Ticket_AddMessageFromCustomer,
    Ticket_ReadByCustomer,
    Ticket_SetRepliedAtByMassMessage,
    Ticket_TicketActivatedByBounce,
    Ticket_AutoCategorized,
    Message_Unknown,
    Message_CustomDescription,
    Message_Continue,
    Message_ImportTicketFromEmail,
    Message_ImportMailAddMessage,
    Message_AddedDebugInfo,
    Message_SendingReplyTemplate,
    Message_SendingSMS,
    Message_SendingSpmMessage,
    Message_SavedFromEjScript,
    Message_AddMessageFromSoap,
    Message_AddMessage,
    Message_NewTicket,
    Message_EditTicket,
    Message_EditMessage,
    Message_ForwardMessage,
    Message_AddMassMessage,
    Message_NewMessageFromSpecialForm,
    Message_TicketNotifyFAQ,
    Message_NewTicketFromCustomer,
    Message_AddMessageFromCustomer,
    Message_BounceMessage,
    Message_OutboxMessage,
    Message_EditMessageFromSoap,
    Message_InlineImagesConverted
}

/** Value representing a ticket field that changed*/
enum NSTicketLogFieldChange {
    CreatedAt,
    Title,
    LastChanged,
    ReadByOwner,
    ReadByCustomer,
    ClosedAt,
    TimeToClose,
    RealTimeToClose,
    TimeToReply,
    RealTimeToReply,
    Author,
    CreatedBy,
    AlertLevel,
    AlertTimeout,
    ConnectId,
    FilterId,
    ReadStatus,
    HasAttachment,
    DisplayFilter,
    AlertStop,
    RepliedAt,
    SLevel,
    Category,
    Priority,
    CustId,
    Status,
    FirstReadByUser,
    Activate,
    OwnedBy,
    AgentId,
    DbiKey,
    DbiLastSyncronized,
    ExtraField,
    FirstReadByOwner,
    TicketStatus,
    Deadline,
    FilterAddress,
    TimeSpentInternally,
    TimeSpentExternally,
    TimeSpentQueue,
    RealTimeSpentInternally,
    RealTimeSpentExternally,
    RealTimeSpentQueue,
    NumReplies,
    NumMessages,
    Tags
}

/** Classification of ticket messages*/
enum NSTicketMessageCategory {
    Message,
    Bounce,
    OutboxFailed
}

/** Indicates if the field body contains plain or html text*/
enum NSTicketMessageType {
    Unknown,
    Plain,
    Html
}

/** Communication channel leading to ticket being created*/
enum NSTicketOrigin {
    Unknown,
    Email,
    SMS,
    Fax,
    Phone,
    Facebook,
    Twitter,
    Internal,
    CustomerCentre,
    EMarketing,
    AutoGenerated,
    Chat,
    Form
}

/** The different types of escalate actions that can be set*/
enum NSTicketPriorityEscalateAction {
    ActionRead,
    ActionChangedOwner,
    ActionNewInfo,
    ActionClosed,
    ActionChangedPriority,
    ActionNew
}

/** The different types of escalate events that can be set*/
enum NSTicketPriorityEscalateEvent {
    None,
    Stop,
    Continue,
    Restart
}

/** Flags for the ticket priority*/
enum NSTicketPriorityFlags {
    Unknown,
    External,
    Default,
    AlertSchedule
}

/** Status of the ticket priority*/
enum NSTicketPriorityStatus {
    Unknown,
    Normal,
    Deleted
}

/** Whether the owner has read the ticket or not (red, yellow, green)*/
enum NSTicketReadStatus {
    Unknown,
    Green,
    Yellow,
    Red
}

/** Indicates if a ticket is external or internal*/
enum NSTicketSecurityLevel {
    Unknown,
    Internal,
    External
}

/** Which field in ticket we count time spent on*/
enum NSTicketStatusTimeCounter {
    None,
    Internally,
    Externally,
    Queue
}

/** Value for the encryptedComm field in traveller*/
enum NSTravelEncryptionChild {
    None,
    Serial,
    BF128
}

/** Value for the encryptedComm field in travelcurrent*/
enum NSTravelEncryptionOwn {
    None,
    Serial,
    BF128
}

/** Value for field type in traveltransctionlog*/
enum NSTrlogTransType {
    Unknown,
    Insert,
    Update,
    Delete,
    UpdateOwner,
    OldUpdateContact,
    OldUpdateProject,
    DeleteAreaUserInclusion,
    DeleteAreaUserAssignment,
    PublishUdef,
    UpdateFieldPart1,
    UpdateFieldPart2,
    UpdateFieldPart3,
    UpdateFieldPart4,
    UpdateFieldPart5,
    UpdateFieldPart6,
    UpdateFieldPart7,
    UpdateFieldPart8,
    UpdateContact,
    UpdateProject,
    TruncateTable
}

/** Flag bits for extra information in TravelTransactionLog*/
enum NSTtlFlags {
    None,
    Imported,
    MassOperation
}

/** Field type: 1 = Number, 2 = Short text, 3 = Long text, 4 = Date, 5 = Unlimited date, 6 = Checkbox, 7 = Drop-down listbox, 8 = Decimal*/
enum NSUDefFieldType {
    Number,
    ShortText,
    LongText,
    Date,
    UnlimitedDate,
    Checkbox,
    List,
    Decimal
}

/** Justification - 0 = default, left, right, center*/
enum NSUdefJustification {
    Default,
    Left,
    Center,
    Right
}

/** Same as the EUDefType enum in the C++ client, this is the DATABASE value used for udef definitions*/
enum NSUDefType {
    Invalid,
    Contact,
    Person,
    Project,
    Sale,
    Temp,
    Appointment,
    Document,
    None
}

/** Upsert: Action to take on target table rows that do not match any incoming keys*/
enum NSUpsertNomatchAction {
    NoChange,
    ZeroColumns,
    DeleteRow
}

/** Upsert: Action status for each row*/
enum NSUpsertRowActionStatus {
    Inserted,
    Updated,
    NoUpdateNeeded,
    Deleted,
    ColumnsZeroed
}

/** Url encoding*/
enum NSUrlEncoding {
    Unknown,
    None,
    ANSI,
    Unicode
}

/** Type of user (or resource). Mapps functionally to associate type - but with different binary values.*/
enum NSUserType {
    Unknown,
    InternalAssociate,
    ResourceAssociate,
    ExternalAssociate,
    AnonymousAssociate,
    SystemAssociate
}

/** Has a pre-calculated value been overriden in a QuoteAlternative or QuoteLine, and in that case what & how?*/
enum NSValueOverride {
    None,
    Total,
    DiscountPercent,
    DiscountAmount,
    EarningPercent,
    EarningAmount
}

/** Default video-meeting status for meetings created in SuperOffice CRM*/
enum NSVideoMeetingStatus {
    NoChange,
    VideoMeetingOn,
    VideoMeetingOff
}

/** The visibility of the record*/
enum NSVisibility {
    All,
    Associate,
    Group
}

/** Webhook status: active, stopped, or tooManyErrors*/
enum NSWebhookState {
    Unknown,
    Active,
    Stopped,
    TooManyErrors
}

/** Enumerator for the days of the week*/
enum NSWeekday {
    Unknown,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

/** Enumerator representing a week of the month*/
enum NSWeekOfMonth {
    Unknown,
    First,
    Second,
    Third,
    Fourth,
    Last
}

/** Chat Topic required fields in pre-form.*/
enum NSWidgetRequiredFields {
    None,
    Email,
    Name,
    Company,
    Phone,
    Country
}

/** Chat Topic widget_theme: classic(0) or modern(1).*/
enum NSWidgetTheme {
    Classic,
    Modern
}

/** Workflow definition status*/
enum NSWorkflowDefinitionStatus {
    None,
    Stopped,
    Paused,
    Running
}

/** Workflow Goal Type*/
enum NSWorkflowGoalType {
    None,
    ContactUpdated,
    SaleCreatedOnContact,
    SaleCreatedOnCompany,
    AppointmentCreated,
    AddedToProject,
    AddedToSelection,
    FormSubmitted,
    HadChat,
    LinkClicked,
    RequestCreated
}

/** Workflow instance status*/
enum NSWorkflowInstanceStatus {
    None,
    Idle,
    Running,
    Finished,
    Suspended,
    Faulted,
    Cancelled
}

/** Workflow Step Type*/
enum NSWorkflowStepType {
    None,
    SendEmail,
    SendSMS,
    WaitForTime,
    WaitForAction,
    Split,
    UpdateContact,
    AddToList,
    RemoveFromList,
    CreateRequest,
    CreateFollowUp,
    CreateSale,
    NotifyByEmail,
    NotifyBySMS,
    RunScript
}

/** Workflow waiting step wait algorithm*/
enum NSWorkflowTimeWaitAlgorithm {
    None,
    NumIntervals,
    UntilSpecified,
    UntilDateField
}

/** Workflow waiting time interval type*/
enum NSWorkflowTimeWaitIntervalType {
    None,
    Seconds,
    Minutes,
    Hours,
    WorkingDays,
    Days,
    Weeks
}

/** Workflow Trigger Type*/
enum NSWorkflowTriggerType {
    None,
    SendEmail,
    SendSMS,
    WaitForTime,
    WaitForAction,
    Split,
    UpdateContact,
    AddToList,
    RemoveFromList,
    CreateRequest,
    CreateFollowUp,
    CreateSale,
    NotifyByEmail,
    NotifyBySMS
}`;