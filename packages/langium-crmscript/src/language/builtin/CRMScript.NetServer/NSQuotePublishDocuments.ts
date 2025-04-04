export const NSQuotePublishDocuments = `/** 
Prepare the documents required to publish a quote - Email, main document as pdf, quoted products as pdf, attachments.
*/
class NSQuotePublishDocuments {
    String GetErrorMessage();
    String GetMailBody();
    String GetMailSubject();
    Integer[] GetQuoteAttachmentIds();
    Integer GetQuoteDocumentId();
    Integer GetQuotedProductsId();
    String GetToEmail();
    String GetToFullName();
    Void SetErrorMessage(String errorMessage);
    Void SetMailBody(String mailBody);
    Void SetMailSubject(String mailSubject);
    Void SetQuoteAttachmentIds(Integer[] quoteAttachmentIds);
    Void SetQuoteDocumentId(Integer quoteDocumentId);
    Void SetQuotedProductsId(Integer quotedProductsId);
    Void SetToEmail(String toEmail);
    Void SetToFullName(String toFullName);
}`;