export const NSDocumentPreview = `/** 
Document data intended for preview purposes. Carrier object for DocumentPreview.
*/
class NSDocumentPreview {
    String GetName();
    Integer GetSize();
    NSStream GetStream();
    String GetType();
    Void SetName(String name);
    Void SetSize(Integer size);
    Void SetStream(NSStream stream);
    Void SetType(String type);
}`;