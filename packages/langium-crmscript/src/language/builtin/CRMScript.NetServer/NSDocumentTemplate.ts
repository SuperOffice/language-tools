export const NSDocumentTemplate = `/**
The template a document is based on is stored in the SO arc\template folder on the server. This will return the name as displayed in the GUI, and not the physical document name, of the template the document object is based on.
*/
class NSDocumentTemplate {
    Integer GetAutoeventId();
    String GetDefaultOref();
    Integer GetDeleted();
    Integer GetDirection();
    Integer GetDocumentTemplateId();
    String GetFilename();
    String GetName();
    Integer GetQuoteDocType();
    NSDocTmplType GetRecordType();
    Integer GetSaveInDb();
    String GetTooltip();
    Void SetAutoeventId(Integer autoeventId);
    Void SetDefaultOref(String defaultOref);
    Void SetDeleted(Integer deleted);
    /**
    Sets the direction of a document template
    */
    Void SetDirection(Integer direction);
    Void SetDocumentTemplateId(Integer documentTemplateId);
    Void SetFilename(String filename);
    Void SetName(String name);
    Void SetQuoteDocType(Integer quoteDocType);
    Void SetRecordType(NSDocTmplType recordType);
    Void SetSaveInDb(Integer saveInDb);
    Void SetTooltip(String tooltip);
}`;
