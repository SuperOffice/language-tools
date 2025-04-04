export const ReplyTemplate = `/** 
Represents a reply template.
*/
class ReplyTemplate {
    /** 
    Gets all attachment IDs belonging to a reply template.
    */
    Integer[] getAttachments(Integer lang);
    /** 
    Returns the reply template HTML body, in the language given by language. If language does not exists it will return default language.
    */
    String getHtmlBody(Integer language);
    /** 
    Returns the name of the reply template.
    */
    String getName();
    /** 
    Returns the reply template plain text body in the given language (if available). If language does not exists, it will return default language.
    */
    String getPlainBody(Integer language);
    /** 
    Returns the reply template SMS body, in the language given by language ID. If language does not exists it will return default language.
    */
    String getSmsBody(Integer language);
    /** 
    Returns the reply template subject, in the language given by language. If language does not exists it will return default language.
    */
    String getSubject(Integer language);
    /** 
    This function loads a reply template to the object.
    */
    Bool load(Integer id);
}`;