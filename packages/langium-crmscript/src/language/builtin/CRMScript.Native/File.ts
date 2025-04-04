export const File = `/** 
Represents a file. <strong>This class is not available in CRM Online.</strong><p></p>
Use open() before you call any other methods.
*/
class File {
    /** 
    Closes the file. The File object is then ready to open a new file.
    */
    Void close();
    /** 
    Returns true if a read passed the end of file has been attempted.
    */
    Bool eof();
    /** 
    Empties the output buffer, writing the data to the file.
    */
    Void flush();
    /** 
    Opens the file to be available for other calls.
    */
    Bool open(String filename, String mode);
    /** 
    Opens the file with a codepage to be available for other calls.
    */
    Bool open(String filename, String mode, String codepage);
    /** 
    Returns all text from the file.
    */
    String readAll();
    /** 
    Reads the file and returns binary data in a Byte array.
    */
    Byte[] readBinary();
    /** 
    Returns the next line from the file or a null string if no more data in the file.
    */
    String readLine();
    /** 
    Sets the current file pointer to the beginning of the file.
    */
    Void rewind();
    /** 
    Deletes the file.
    */
    Bool unlink();
    /** 
    Writes data to the file.
    */
    Void write(String data);
    /** 
    Writes binary data to file.
    */
    Void writeBinary(Byte[] data);
}`;