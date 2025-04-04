export const NSSmtpTestResult = `/** 
Carrier containing information about the result of a SMTP test.
*/
class NSSmtpTestResult {
    String GetErrorMessage();
    Bool GetSuccess();
    Void SetErrorMessage(String errorMessage);
    Void SetSuccess(Bool success);
}`;