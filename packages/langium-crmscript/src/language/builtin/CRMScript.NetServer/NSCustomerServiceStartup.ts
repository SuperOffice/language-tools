export const NSCustomerServiceStartup = `/** 
Contains various data needed by Service for startup.<p></p>
<strong>Do not use this API, as it is for internal use and might change without notice.</strong>
*/
class NSCustomerServiceStartup {
    String GetRecaptchaSiteKey();
    Bool GetTimezoneEnabled();
    Integer GetTZOffset();
    Void SetRecaptchaSiteKey(String recaptchaSiteKey);
    Void SetTimezoneEnabled(Bool timezoneEnabled);
    Void SetTZOffset(Integer tZOffset);
}`;