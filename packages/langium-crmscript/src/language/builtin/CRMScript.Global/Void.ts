export const Void = `
/** 
Adds an action to the Screen definition associated with this script (when the script is the load script for a Screen). An action is essentially a connection between a button with a given name and a script. When a button in the screen is pressed, the list of actions is checked, and the action with the matching button name (e.g. "ok", "cancel", "addSomething") will be found and the script will be executed.
*/
Void addAction(String button, String script, Bool doCheck);
/** 
Adds a message to a chat session.
*/
Integer addChatMessage(Integer sessionId, String message, Integer type, String author, Integer specialType, String specialParams);
/** 
Adds a message to a chat session and sets when the message will show up.
*/
Integer addChatMessage(Integer sessionId, String message, Integer type, String author, Integer specialType, String specialParams, DateTime whenPosted);
/** 
Adds an HTML element to the associated screen when this script is executed as the load script for a screen.
*/
HtmlElement addHtmlElement(Integer id, String name, Integer type, Map config);
/** 
Adds an HTML element to the associated screen with a zero-based position when this script is executed as the load script for a screen.
*/
HtmlElement addHtmlElement(Integer id, String name, Integer type, Map config, Integer position);
/** 
Adds an HTML element to the associated screen when this script is executed as the load script for a screen.
*/
HtmlElement addHtmlElement(Integer id, String name, Integer type, String config);
/** 
Adds an HTML element to the associated screen with a zero-based position when this script is executed as the load script for a screen.
*/
HtmlElement addHtmlElement(Integer id, String name, Integer type, String config, Integer position);
/** 
Throws an AssertException if condition is false. The exception contains the line number where the assert occurred.
*/
Void assert(Bool condition);
/** 
Throws an AssertException if the two parameters are not equal. Specifically: if bool1!=bool2. The exception contains the line number where the assert occurred.
*/
Void assertEquals(Bool bool1, Bool bool2);
/** 
Throws an AssertException if the two parameters are not equal. Specifically: if float1!=float2. The exception contains the line number where the assert occurred.
*/
Void assertEquals(Float float1, Float float2);
/** 
Throws an AssertException if the two parameters are not equal. Specifically: if integer1!=integer2. The exception contains the line number where the assert occurred.
*/
Void assertEquals(Integer integer1, Integer integer2);
/** 
Throws an AssertException if the two parameters are not equal. Specifically: if string1!=string2. The exception contains the line number where the assert occurred.
*/
Void assertEquals(String string1, String string2);
/** 
Checks a customer's username and password. Returns personId if successful, otherwise a null Integer.
*/
Integer authenticateCustomer(String username, String password);
/** 
Returns all POST and GET variables for the current URL.
*/
String buildUrl();
/** 
Checks if the CGI HTTP request was of type POST.
*/
Bool cgiWasPost();
/** 
Checks if it is ok to send a receipt to the indicated email address.
*/
Bool checkReply(String email);
/** 
Takes several strings, each containing an HTML document, and combines them into one HTML string.
*/
String combineHtmlStrings(Vector htmlStrings);
/** 
Converts a status given by its integer identifier to its string representation.
*/
String convertStatus(Integer status);
/** 
Copies the content of a CRM Document, given the ID, to a new Service attachment.
*/
Integer copyCRMDocumentToAttachment(Integer crmDocId);
/** 
Pauses the script if it is in debug mode (see enableDebug). Stores the info string in the database entry for the current debug session so that it can be viewed in the debugger.
*/
Void debugWait(String info);
/** 
Decodes a base64-encoded string into a byte array.
*/
Byte[] decodeBase64(String base64);
/** 
Decodes a base64-encoded string into an NSStream.
*/
NSStream decodeBase64AsStream(String base64);
/** 
Decodes the value returned by for example NetServer archives, i.e [I:23], and returns the value as a string.
*/
String decodeDBValue(String dbValue);
/** 
Enables debugging for the current script, with the given ID. If the executing environment contains the same debugId, then this script will enter debug mode.
*/
Void enableDebug(String debugId);
/** 
Encodes bytes to a base32 string.
*/
String encodeBase32(Byte[] data);
/** 
Encodes bytes to a base64 string.
*/
String encodeBase64(Byte[] data);
/** 
Encodes bytes to a base64 string specifying if the encoded data should be wrapped with new lines or not.
*/
String encodeBase64(Byte[] data, Bool wrapLines);
/** 
Encodes bytes to a base64 string.
*/
String encodeBase64(NSStream data);
/** 
Encodes bytes to a base64 string specifying if the encoded data should be wrapped with new lines or not.
*/
String encodeBase64(NSStream data, Bool wrapLines);
/** 
Generates and returns a hash from a specified key-value pair using the HMAC SHA1 encoding algorithm.
*/
Byte[] encodeHMACSHA1(Byte[] key, Byte[] value);
/** 
Generates and returns a hash from a specified key-value pair using the HMAC SHA1 encoding algorithm.
*/
String encodeHMACSHA1(String key, String value);
/** 
Generates and returns a hash from a specified key-value pair using the HMAC SHA256 encoding algorithm.
*/
Byte[] encodeHMACSHA256(String key, String value);
/** 
Generates and returns a hash from a specified key-value pair using the HMAC SHA512 encoding algorithm.
*/
Byte[] encodeHMACSHA512(String key, String value);
/** 
Generates and returns a hash from a specified value using the SHA1 encoding algorithm.
*/
String encodeSHA1(String value);
/** 
Generates and returns a hash from a specified key-value pair using the HMAC SHA256 encoding algorithm.
*/
String encodeSHA256(String key, String value);
/** 
Manually starts a DBI agent schedule. It is possible to supply a map of parameter values used by the schedule.
*/
Void executeDbiAgentSchedule(Integer scheduleId, Map values);
/** 
The outermost function for executing a macro.
*/
String executeMacro(String parameters);
String executeScript(String script, Map values);
/** 
Executes the specified SQL statement. <strong>This function is not available in CRM Online!</strong>
*/
Void executeSQLQuery(String sql);
/** 
Exits running the rest of the script and displays a message with text from the parameter.
*/
Void exitWithMessage(String message);
/** 
Searches FAQ using the same search engine as the customer pages do and fills the parser with the result.
*/
" faqSearch(Integer root, Integer access, String message, Parser null, Integer max);
/** 
If you have configured any categories to use specified ReplyTemplates, use this method to calculate the ReplyTemplate ID.
*/
Integer findReplyTemplateToMerge(Integer categoryId);
/** 
Flushes the caches in NetServer.
*/
Void flushCaches();
/** If there is a script trace enabled for the current script, with the exception-only flag set, calling this method with true as the parameter will make the trace become saved, just like if there was an unhandled exception.
*/
Void forceSaveTrace(Bool doSave);
/** Forwards preformatted email.
*/
Void forwardMail(String mail, String to, Integer ticketId);
/** 
Returns a reference to the active user instance.
*/
User getActiveUser();
/** 
Returns the ID of the agent matching the parameter.
*/
Integer getAgentId(String idString);
/** 
Returns the ID of the agent schedule with the given name.
*/
Integer getAgentScheduleId(String name);
/** 
Gets the total byte size of the specified attachments.
*/
Integer getAttachmentsSize(Integer[] attachmentIds);
/** 
Finds category ID from the category's full name.
*/
Integer getCategoryIdFromFullname(String name);
/** 
Returns the raw content of the HTTP request.
*/
String getCgiContent();
/** 
Returns the cgiUrl value from the config table. For example, http://ejournal.company.com
*/
String getCgiUrl();
/** 
Returns the CGI variable with the given name.
*/
String getCgiVariable(String varName);
/** 
Returns a string array of all CGI variables matching the given name
*/
String[] getCgiVariableArray(String name);
/** 
Returns a map of all CGI variables.
*/
Map getCgiVariables();
/** 
Returns the CGI cookie with the given name. <strong>This method is not available in CRM Online.</strong>
*/
String getCookie(String name);
/** 
Gets the value of the given key from the map of values common to all of the SuperOffice web applications running.
*/
String getCurrent(String key);
/** 
Returns the current date.
*/
Date getCurrentDate();
/** 
Returns the current date and time.
*/
DateTime getCurrentDateTime();
/** 
Gets the current time.
*/
Time getCurrentTime();
/** 
Returns the main email of the specified customer.
*/
String getCustomerMainEmail(Integer custId);
/** 
Used to access the global DBI control object, which is used for database integration.
*/
DbiControl getDbiControl();
/** 
Returns the default config for an element type given a table and language.
*/
String getDefaultElementConfig(Integer type, String table, String language);
/** 
Returns the ID of the document with the given name.
*/
Integer getDocumentId(String name);
/** 
Returns the OS environment variable with the given name. <strong>This method is not available in CRM Online.</strong>
*/
String getEnvVariable(String name);
/** 
Returns an EventData object connected to the current event.
*/
" getEventData();
/** 
Returns the executable with the full path that the current script is running in.
*/
String getExecutable();
/** 
Returns the external URL of the program module specified by progId (if available).
*/
String getExternalProgram(Integer progId);
/** 
Returns the external URL of the program module specified after getProgram.
*/
String getExternalProgramAdmin();
/** 
Returns the external URL of the program module specified after getProgram.
*/
String getExternalProgramAjax();
/** 
Returns the external URL of the program module specified after getProgram.
*/
String getExternalProgramBlogic();
/** 
Returns the external URL of the program module specified after getProgram.
*/
String getExternalProgramChat();
/** 
Returns the external URL of the program module specified after getProgram.
*/
String getExternalProgramCustomer();
/** 
Returns the external URL of the program module specified after getProgram.
*/
String getExternalProgramDocument();
/** 
Returns the external URL of the program module specified after getProgram.
*/
String getExternalProgramHelp();
/** 
Returns the external URL of the program module specified after getProgram.
*/
String getExternalProgramKnowledge();
/** 
Returns the external URL of the program module specified after getProgram.
*/
String getExternalProgramRms();
/** 
Returns the external URL of the program module specified after getProgram.
*/
String getExternalProgramSoap();
/** 
Returns the external URL of the program module specified after getProgram.
*/
String getExternalProgramStat();
/** 
Returns the external URL of the program module specified after getProgram.
*/
String getExternalProgramTicket();
/** 
Returns the ExtraTable instance for the given name.
*/
ExtraTable getExtraTable(String name);
/** 
Returns an array containing the IDs of all favorites in the given table.
*/
Integer[] getFavourites(String table);
/** 
Returns an array with the description of all CRMScript functions defined in the system.
*/
String[][] getFunctionList();
/** 
Returns a global and static map.
*/
Map getGlobalStaticMap();
/** 
Gets a value from the global variables.
*/
String getGlobalVariable(String name);
/** 
Returns a reference to an HtmlElement in the associated screen.
*/
HtmlElement getHtmlElement(String name);
/** 
Gets the index of the specified HTML element. This is useful if you want to insert elements after a particular HTML element, and you do not know the index of it.
*/
Integer getHtmlElementIndex(String name);
/** 
Returns the name of the element with the given index.
*/
String getHtmlElementName(Integer index);
/** 
Returns the value of the specified header name.
*/
String getHttpHeader(String headerName);
/** 
Converts a language variable to a string in the language of the current user or, if provided, corresponding to a specific language code.
*/
String getLanguageVariable(String langVar);
/** 
Converts a language variable to a string in the language of the current user or, if provided, corresponding to a specific language code.
*/
String getLanguageVariable(String langVar, String langCode);
/** 
Returns the local timezone.
*/
TimeZone getLocalTimeZone();
/** 
Returns a reference to the global MainMenu instance.
*/
MainMenu getMainMenu();
/** 
Returns the username supplied from the web server.
*/
String getNtUser();
/** 
Returns the current number of the HtmlElements in the current screen.
*/
Integer getNumHtmlElements();
/** 
Returns a reference to the global Parser instance.
*/
Parser getParser();
/** 
Returns the value of the given parameter in the global Parser instance.
*/
String getParserParameter(String name);
/** 
Returns the value of the given parameter at the zero-based index in the global Parser instance.
*/
String getParserParameter(String name, Integer index);
/** 
Returns the number of values for the given parameters in the global Parser object.
*/
Integer getParserParameterCount(String paramName);
/** 
Returns the (first) value for the given variable from the global Parser instance.
*/
String getParserVariable(String varName);
/** 
Returns the (first) value for the given variable from the global Parser instance at the zero-based row of the parser-query result set.
*/
String getParserVariable(String varName, Integer row);
/** 
Returns a variable from the global Parser instance as a comma-separated string.
*/
String getParserVariableAsCSV(String paramName, Bool forceQuoting);
/** 
Returns the number of values for the specified value in the global Parser instance.
*/
Integer getParserVariableCount(String varName);
/** 
Returns the PID of the executable that the script is running in.
*/
Integer getPID();
/** 
Returns the ID of the priority with the given name.
*/
Integer getPriorityIdFromName(String name);
/** 
Returns the URL of the program module specified by progId.
*/
String getProgram(Integer progId);
/** 
Returns the URL of the program module specified after getProgram.
*/
String getProgramAdmin();
/** 
Returns the URL of the program module specified after getProgram.
*/
String getProgramAjax();
/** 
Returns the URL of the program module specified after getProgram.
*/
String getProgramBlogic();
/** 
Returns the URL of the program module specified after getProgram.
*/
String getProgramChat();
/** 
Returns the URL of the program module specified after getProgram.
*/
String getProgramCustomer();
/** 
Returns the URL of the program module specified after getProgram.
*/
String getProgramDocument();
/** 
Returns the URL of the program module specified after getProgram.
*/
String getProgramHelp();
/** 
Returns the URL of the knowledge base (document.exe).
*/
String getProgramKnowledge();
/** 
Returns the URL of the program module specified after getProgram.
*/
String getProgramRms();
/** 
Returns the URL of the program module specified after getProgram.
*/
String getProgramSoap();
/** 
Returns the URL of the program module specified after getProgram.
*/
String getProgramStat();
/** 
Returns the URL of the program module specified after getProgram.
*/
String getProgramTicket();
/** 
Returns reply template text as specified by the parameters.
*/
String getReplyTemplateBody(Integer id, Bool useHTML, Integer langId);
/** 
Returns reply template subject.
*/
String getReplyTemplateSubject(Integer id, Integer langId);
/** 
Returns the config of the screen element with the given index in the current screen definition.
*/
Map getScreenElementConfig(Integer index);
/** 
Returns the ID of the screen element with the given index in the current screen definition.
*/
Integer getScreenElementId(Integer index);
/** 
Returns the name of the screen element with the given index in the current screen definition.
*/
String getScreenElementName(Integer index);
/** 
Returns the type of the screen element with the given index in the current screen definition.
*/
Integer getScreenElementType(Integer index);
/** 
Returns the ID of the script matching the parameter
*/
Integer getScriptId(String idString);
/** 
Returns the IDs of the objects in the selection with the given ID.
*/
Integer[] getSelectionIds(Integer id);
/** 
Makes it possible to store variables in the database which the web application can use as long as a session lives. That is until a user logs out.
*/
String getSessionVariable(String name);
/** 
Returns a map containing all session variables for the current session.
*/
Map getSessionVariables();
/** 
Returns the ID of the status with the given name.
*/
Integer getStatusIdFromName(String name);
/** 
Gets the system flags. This is the same value as is stored in the database table config.flags.
*/
Integer getSystemFlags();
/** 
Returns the active system language.
*/
String getSystemLang();
/** 
Returns the active user language.
*/
String getUserLang();
/** 
Gets username from the user ID.
*/
String getUsername(Integer userId);
/** 
Returns the value in the global environment (used for communication between the script the calling context).
*/
String getVariable(String name);
/** 
Returns a map containing all run time environment variables (available through getVariable()).
*/
Map getVariables();
/** 
Returns a map of the current system warnings.
*/
Map getWarnings();
/** 
Converts the given HTML text to plain text.
*/
String htmlConvToText(String text);
/** 
Returns the code of the given language ID.
*/
String idToLang(Integer langId);
/** 
Installs a package provided as xml.
*/
String installPackage(String xml);
/** 
Checks if invoice types exist in the database.
*/
Bool invoiceTypesExists();
/** 
Validates if it is a valid phonenumber
*/
Bool isValidPhoneNumber(String nr, Bool isMultiple);
/** 
Returns the ID of the given language code.
*/
Integer langToId(String langCode);
/** 
Writes a message to the new log (the one in the database), which can be accessed with "rms?action=newLog".
*/
Void log(String msg);
/** 
Writes a message to the log file.
*/
Void logMessage(String message);
/** 
Used to create a random password of length p, with the given seed charactersCreates and returns a random password of the given length. You can optionally pass the given seed characters.
*/
String makePassword(Integer length);
/** 
Used to create a random password of length p, with the given seed charactersCreates and returns a random password of the given length.
*/
String makePassword(Integer length, String seed);
/** 
Allocates a new map and maps the given value to the string "value".
*/
Map mapValue(String value);
/** 
Returns a modulo b. This can also be done with the syntax "a % b".
*/
Integer modulo(Integer a, Integer b);
/** 
Parses a JSON document and generate a tree of XMLNode's.
*/
" parseJSON(String jsonDocument);
/** 
Parses a JSON document and generate a tree of XMLNode's.
*/
" parseJSON2(String jsonDocument);
/** 
Parses an XML document and generate a tree of XMLNode's.
*/
XMLNode parseXML(String xmlDocument);
/** 
Pauses or unpauses script tracing, depending on the parameter. Multiple calls to pauseTracing(true) must be matched with an equal number of calls to pauseTracing(false) to unpause.
*/
Integer pauseTracing(Bool pause);
/** 
The pow function returns base raised to the expth power.
*/
Float pow(Float base, Float exp);
/** 
Prints the string to the screen.
*/
Void print(String s);
/** 
Outputs the bytes to the standard output stream. You can pass the data to encode as either Byte[] or NSStream.
*/
Void printBinary(Byte[] data);
/** 
Outputs the bytes to the standard output stream. You can pass the data to encode as either Byte[] or NSStream.
*/
Void printBinary(NSStream data);
/** 
Adds the input debug to the debug string which will be shown in the debug window.
*/
Void printDebug(String debug);
/** 
Prints lines into standard output without appending \r\n in p_line.
*/
Void printLine(String line);
/** 
Returns a random value between min and max. The seed is set by the cgi application when it is invoked.
*/
Integer rand(Integer min, Integer max);
/** 
Reloads mailings selections and schedule to send again immediately.
*/
Bool reloadAndSendShipment(Integer shipmentId);
/** 
Removes the element with the given index
*/
Void removeHtmlElement(Integer index);
/** 
Removes the package with the given name.
*/
String removePackage(String name);
/** 
Resets a chat session and places it in queue/pre-chat-form/offline-form depending on the topic's settings.
*/
Void resetChat(Integer sessionId);
/** 
Executes the program (given command) and returns what was sent to stdout. <strong>This method is not available in CRM Online.</strong>
*/
String runProgram(String command);
/** 
Executes the program (given command) with a codepage and returns what was sent to stdout. <strong>This method is not available in CRM Online.</strong>
*/
String runProgram(String command, String codepage);
/** 
Saves all cgi attachments with the given name.
*/
Integer[] saveAllCgiAttachments(String name);
/** 
Saves the attachment in cgi variable with the name given and returns the ID of the attachment record in the attachment table.
*/
Integer saveCgiAttachment(String varName);
/** 
Changes the status of a chat session.
*/
Void setChatStatus(Integer sessionId, Integer status);
/** 
<strong>This method is not available in CRM Online.</strong>
*/
Void setCookie(String name, String value, Bool persistent);
/** 
Maps the given key and value in the map of the values common for all the SuperOffice web applications running.
*/
Void setCurrent(String key, String value);
/** 
Sets all the elements of the associated screen from the global CGI instance. This is normally done when a screen is loaded/reloaded but after the load script.*/
Void setFromCgi();
/** Sets the value of a global variable (used for communication between different scripts).
*/
Void setGlobalVariable(String name, String value);
/** 
Sets the value of a hidden variable in the associated screen. Hidden variables are values that are carried through a screen, and which can be accessed by the following scripts.
*/
Void setHidden(String name, String value);
/** 
Used to set focus to first control in screens.
*/
Void setPageFocusFirstControl(Bool p0);
/** 
Void setPageOnLoad(String onLoad)
*/
Void setPageOnLoad(String onLoad);
/** 
Sets the page meta refresh to the specified seconds, thus making the screen refresh.
*/
Void setPageRefresh(Integer seconds);
/** 
Alters the page title. You will be able to set the text after the version information.
*/
Void setPageTitle(String title);
/** 
Sets (adds) a variable to the global Parser instance.
*/
Void setParserVariable(String name, String value);
/** 
Writes a SessionObject entry to the databaseWrites a SessionObject entry to the database.
*/
String setSessionVariable(String name, String value);
/** 
Sets or clears the "User is typing" flag of a chat session.
*/
Void setUserIsTyping(Integer sessionId, Bool isTyping);
/** 
Sets the value in the global environment (used for communication between the script the calling context).
*/
Void setVariable(String name, String value);
/** 
Simple two-way data encryption.  Data -&gt; Encrypted data -&gt; data
*/
Byte[] simpleTwoWay(Byte[] data);
/** 
Sleeps (give up CPU) for some time.
*/
Void sleep(Float second);
/** 
Returns the type of a variable (will automatically be up-casted to generic).
*/
String getTypeName(Generic value);
/** 
Returns a variable from the run-time environment given its name and independent of its type.
*/
Generic getGenericValue(Generic struct, String name);
/** 
Returns a variable from the run-time environment given its name and independent of its type.<p></p>
You can optionally provide a struct to scope the variable.
*/
Generic getGenericValue(String name);
/** 
Converts a Generic variable to a Bool (explicit downcast). Together with getTypeName(), this function can be used to get an explicit typed variable.
*/
Bool GenericToBool(Generic value);
/** 
Converts a Generic variable to a Integer (explicit downcast). Together with getTypeName(), this function can be used to get an explicit typed variable.
*/
Integer GenericToInteger(Generic value);
/** 
Converts a Generic variable to a Float. Together with getTypeName(), this function can be used to get an explicit typed variable.
*/
Float GenericToFloat(Generic value);
/** 
Converts a Generic variable to a String (explicit downcast). Together with getTypeName(), this function can be used to get an explicit typed variable.
*/
String GenericToString(Generic value);
/** 
Returns the string representation of a variable. The argument is automatically be up-casted to a Generic.
*/
String convertGenericToString(Generic variable);
/** 
Sets the value of a variable from a string. It supports only basic types.<p></p>
In combination with for example getStructMembers() and getGenericValue(), this function can be used to iterate a struct and set all its members programmatically instead of having to explicit hard-code each one of them.
*/
Void setGenericFromString(Generic generic, String value);
/** 
Converts a Generic variable to a Date (explicit downcast). Together with getTypeName(), this function can be used to get an explicit typed variable.
*/
Date GenericToDate(Generic value);
/** 
Converts a Generic variable to a DateTime (explicit downcast). Together with getTypeName(), this function can be used to get an explicit typed variable.
*/
DateTime GenericToDateTime(Generic value);
/** 
Converts a Generic variable to a Time (explicit downcast). Together with getTypeName(), this function can be used to get an explicit typed variable.
*/
Time GenericToTime(Generic value);
/** 
Converts a Generic variable to a TimeSpan (explicit downcast). Together with getTypeName(), this function can be used to get an explicit typed variable.
*/
TimeSpan GenericToTimeSpan(Generic value);
/** 
Converts a Generic variable to a Byte (explicit downcast). Together with getTypeName(), this function can be used to get an explicit typed variable.
*/
Byte GenericToByte(Generic value);
/** 
Converts a Generic variable to an array of Generic (explicit downcast). Typically, this function is used when traversing the members of a struct, and one of the members is an array. This can be tested with getTypeDimensions(), and then GenericToArray() can be used to access the sub-elements of the array for further (recursive) processing.
*/
Generic[] GenericToArray(Generic value);
/** 
Returns the number of array dimensions for a variable. The argument is automatically up-casted to a Generic.
*/
Integer getTypeDimensions(Generic value);
/** 
Checks whether a variable is a struct or not. Any variable can be checked. The argument is automatically up-casted to a Generic.
*/
Bool typeIsStruct(Generic value);
/** 
Returns the variable names of a struct given its name. It does not includes functions in the list.
*/
String[] getStructMembers(String name);
`;