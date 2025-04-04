export const Attachment = `/** 
Handles Service attachments.
*/
class Attachment {
    /** 
     * A string type
     * 
     * @returns {string}
     * @memberof Attachment
     * @description Dumps the attachment file to output.
     * 
    */
    Bool dump();
    /** 
    Dumps the attachment file to output. The optional parameter if true tells the browser to download the file, and not attempt to display it.
    */
    Bool dump(Bool download);
    /** 
    Returns the attachment as base64 encoded string.
    */
    String getBase64();
    /** 
    Constructs a download URL for the attachment.
    */
    String getDownloadUrl(Bool external, Bool saveToDisk);
    /** 
    Gets the whole attachment as a String without any special encoding.
    */
    String getRaw();
    /** 
    Gets a value from the attachment class.
    */
    String getValue(String name);
    /** 
    Loads a Service attachment from disk.
    */
    Bool load(Integer id);
    /** 
    Deletes the attachment record from the database and the attachment file from disk.
    */
    Void remove();
    /** 
    Saves the attachment to disk.
    */
    Integer save();
    /** 
    Creates a filename and saves a base64-coded attachment to disk.
    */
    Integer saveBase64(String attachment);
    /** 
    Sets a value on the attachment object.
    */
    Void setValue(String name, String value);
}`;