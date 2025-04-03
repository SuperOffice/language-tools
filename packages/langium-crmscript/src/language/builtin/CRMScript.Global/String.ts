export const String = `
/** 
A text string is a sequence of characters written with quotes.<p></p>
You can use single or double quotes, but they must always come in pairs. Quotes can also be nested, by alternating between single and double quotes.
*/
class String {
    /** 
    Pass a value to copy into a new object.
    */
    constructor(String value);
    /** 
    Pass a byte array to build a new object.
    */
    constructor(Byte[] byteArray);
    /** 
    Same as String(Byte[]), but also takes a code page identifier.
    */
    constructor(Byte[] byteArray, String codePage);
    /** 
    Pass a byte array to build a new object.
    */
    constructor(NSStream stream);
    /** 
    Same as String(NSStream), but also takes a code page identifier.
    */
    constructor(NSStream stream, String codePage);
    /** 
    Finds the length of a string. Returns the number of characters as an Integer.
    */
    Integer getLength();
    /** 
    Converts the string to its lowercase representation (all lowercase).
    */
    String toLower();
    /** 
    Converts the string to its uppercase representation (all uppercase).
    */
    String toUpper();
    /** 
    Determines if the string contains only lowercase letters. Will return true if no uppercase letters are found, otherwise false.
    */
    Bool isLower();
    /** 
    Determines if the string contains only uppercase letters. Will return true if no lowercase letters are found, otherwise false.
    */
    Bool isUpper();
    /** 
    Compare two string a returns true if they are equal.
    */
    Bool equals(String value);
    /** 
    Same as using toLower() on both strings before calling equals().
    */
    Bool equalsIgnoreCase(String value);
    /** 
    Matching start of a string. The pattern you wish to match against must be given as an input parameter.<p></p>
    The methods will return true if the beginning of your string matches the pattern, otherwise false.
    */
    Bool beginsWith(String substring);
    /** 
    Matching start of a string. The pattern you wish to match against must be given as an input parameter.<p></p>
    The methods will return true if the beginning of your string matches the pattern, otherwise false.
    */
    Bool caseBeginsWith(String substring);
    /** 
    Matching end of a string. The pattern you wish to match against must be given as an input parameter.<p></p>
    The methods will return true if the end of your string matches the pattern, otherwise false.
    */
    Bool endsWith(String substring);
    /** 
    Matching end of a string. The pattern you wish to match against must be given as an input parameter.<p></p>
    The methods will return true if the end of your string matches the pattern, otherwise false.
    */
    Bool caseEndsWith(String substring);
    /** 
    Two strings are lexicographic identical if they are the same length and they also contain the same characters in the same position.
    */
    Integer compare(String value);
    /** 
    Same as applying the standard dictionary or alphabetic order.
    */
    Integer caseCompare(String value);
    /** 
    Concatenates two strings and alters the original string.
    */
    Void append(String value);
    /** 
    Concatenates an ISO-8859-1 (Latin-1) character to the original string.
    */
    Void append(Byte character);
    /** 
    Inside your string, substitute all occurrences of one substring with another.
    */
    String substitute(String src, String dest);
    /** 
    Finds the 1st occurrence of the substring and returns the index it starts at.
    */
    Integer find(String substring);
    /** 
    Finds the 1st occurrence of the substring and returns the index it starts at. Returns -1 if not found.
    */
    Integer findCase(String substring);
    /** 
    Same as find() except it will return the position of the last occurrence of the pattern.
    */
    Integer findLast(String substring);
    /** 
    Creates a new String of a given length. It will copy characters from the original string starting at the given position.
    */
    String subString(Integer pos, Integer len);
    /** 
    If you don't know the exact segment length you wish to extract, one option is to copy from start until you encounter a given pattern (1st occurrence).<p></p>
    If the pattern is not found, a copy of this original string is returned.
    */
    String until(String pattern);
    /** 
    Same usage and result as until().
    */
    String before(String pattern);
    /** 
    Similar to before(), but will continue copying until the last occurrence of the pattern rather than stopping at the 1st.<p></p>
    Useful for example if you are parsing a path or URI and want everything except the document name.
    */
    String beforeLast(String pattern);
    /** 
    Another option is to start copying after you encounter the pattern and continue extracting until you reach the end of the original string.<p></p>
    If the pattern is not found in this, an empty string is returned.
    */
    String after(String pattern);
    /** 
    Similar to after(), but will not start copying until after the last occurrence of the pattern rather than starting after the 1st.
    */
    String afterLast(String pattern);
    /** 
    Splits the original string in multiple segments (an array of substrings). The original string is not altered.
    */
    String[] split(String delimiter);
    /** 
    Determines if the string exclusively contains uppercase and lowercase letters. Will return true if the restriction applies, otherwise false.
    */
    Bool isAlpha();
    /** 
    Determines if the string contains numeric characters [0-9] only.
    */
    Bool isDigit();
    /** 
    Combines the criteria of isAlpha() and isDigit(), and will return true if the string is restricted to any combination of lowercase and uppercase letters and digits [0-9].
    */
    Bool isAlphanumeric();
    /** 
    Returns true if the string is NULL/NUL/NIL, otherwise false. See example for isEmpty().
    */
    Bool isNull();
    /** 
    Returns true if the string is empty (&quot;&quot;) or NULL/NUL/NIL, meaning it contains no characters.
    */
    Bool isEmpty();
    /** 
    Converts a String to its boolean representation. Returns false if the String &quot;1&quot; or &quot;True&quot;, otherwise true.
    */
    Bool toBool();
    /** 
    Converts a String to its numeric representation.
    */
    Integer toInteger();
    /** 
    Converts a String to a Long.
    */
    Long toLong();
    /** 
    Converts a String to a Float.
    */
    Float toFloat();
    /** 
    Converts a String to a Date.
    */
    Date toDate();
    /** 
    Converts a String to a DateTime.
    */
    DateTime toDateTime();
    /** 
    Converts a String to a Time object.
    */
    Time toTime();
    /** 
    Converts a String to an array of bytes (ISO-8859-1).
    */
    Byte[] toByteArray();
    /** 
    Escape special characters of a string. Special characters are given as a parameter.
    */
    String escape(String chars);
    /** 
    Extracts the body content of a string containing an HTML document. If the convertBodyToDiv parameter is true, the body tag will be replaced with a div tag.
    */
    String extractHtmlBody(Bool convertBodyToDiv);
    /** 
    Extracts the head content of a string containing an HTML document. If the stripTitle parameter is true, the title tag will be excluded.
    */
    String extractHtmlHead(Bool stripTitle);
    /** 
    Tests if this string is an HTML document. The test is not fool-proof, but rather a simple test if the string begins with one of the standard opening tags for HTML documents.
    */
    Bool isHtmlDocument();
    /** 
    HTML decode the string.
    */
    String htmlDecode();
    /** 
    HTML encode the string.
    */
    String htmlEncode();
    /** 
    Returns an array of the names and email addresses in a String.<p></p>
    Format: a comma-separated list of &quot;name&quot;&gt;emailAddr>
    */
    Vector getEmails();
    /** 
    Checks if the string is a valid email address.
    */
    Bool isValidEmail();
    /** 
    This function will return and remove a line from this string. It is normally used to process a longer text, stored in a string, in a line-wise fashion.<p></p>
    The newline is returned as well. If there are not any newlines, then this whole string is returned, and this string is set to empty.
    */
    String getLine();
    /** 
    Returns the word at a given position from the string.
    */
    String getWord(Integer pos);
    /** 
    Returns true if it is possible to convert a string to an integer. If the string begins with a number it is possible to convert until an illegal character occurs.
    */
    Bool isNumber();
    /** 
    URL-decode the string.
    */
    String urlDecode();
    /** 
    URL-encode the string.
    */
    String urlEncode();
    /** 
    Returns a UTF-8 decoded string, possibly containing characters outside the character space of ISO-8859-1 (Latin-1).
    */
    String utf8Decode();
    /** 
    The characters are coded using the UTF-8 format, and the string returned consists of only ASCII characters, encoding the Unicode characters (outside ASCII/Latin-1) in UTF-8 format.
    */
    String utf8Encode();
    /** 
    XML decode the string.
    */
    String xmlDecode();
    /** 
    XML encode the string.
    */
    String xmlEncode();
    /** 
    Removes all characters except those listed from the string.
    */
    String keepChars(String charsToKeep);
    /** 
    Splits the current line separated with a delimiter.
    */
    String[] parseCSV(String delimiter);
    /** 
    Returns the string part of the specified culture from the multi-language string. These strings are typically used in SuperOffice list and description data.
    */
    String parseSOMultiLanguageString(Integer language);
    /** 
    This function will chop the current string after the specified number of characters and return the result. It will also append three dots at the end of the string. It will not change the current string.
    */
    String prettyChop(Integer length);
    /** 
    This function will quote the String with the quoteString. Each line of the String will start with quoteString, after calling quote.
    */
    String quote(String quoteString);
    /** 
    Uses regexp pattern on the String object. Support for sub-expressions is also present.<p></p>
    No matches will result in an array with length 0. res[0] will point to the entire matched string. res[1 ... n-1] will point to the matches of the sub-expressions.
    */
    String[] regexp(String pattern);
    /** 
    Remove all characters given by the parameter at the beginning of the String.
    */
    String stripLeading(String characters);
    /** 
    Remove all characters given by the parameter at the beginning and the end of the String.
    */
    String stripLeadingAndTrailing(String characters);
    /** 
    Remove all characters given by the parameter at the end of the String.
    */
    String stripTrailing(String characters);
    /** 
    This function will wrap the String in lines of wanted length
    */
    Void wrap(Integer length, Bool ignoreQuote);
}
`;