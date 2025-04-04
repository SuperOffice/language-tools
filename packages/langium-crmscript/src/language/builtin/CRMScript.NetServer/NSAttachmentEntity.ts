export const NSAttachmentEntity = `class NSAttachmentEntity {
    Integer GetAttachmentId();
    Integer GetAttSize();
    String GetContentId();
    String GetContentType();
    Bool GetInlineImage();
    String GetName();
    Void SetAttachmentId(Integer attachmentId);
    Void SetAttSize(Integer attSize);
    Void SetContentId(String contentId);
    Void SetContentType(String contentType);
    Void SetInlineImage(Bool inlineImage);
    Void SetName(String name);
}`;