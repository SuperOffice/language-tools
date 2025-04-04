export const NSCredential = `/** 
Credentials supported for authentication
*/
class NSCredential {
    String GetDisplayValue();
    NSCredentialType GetType();
    String GetValue();
    Void SetDisplayValue(String displayValue);
    Void SetType(NSCredentialType type);
    Void SetValue(String value);
}`;