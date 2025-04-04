export const NSPocketNotificationMessage = `/** 
Describes behavior and content for a push notification message.
*/
class NSPocketNotificationMessage {
    DateTime GetDate();
    TimeSpan GetDuration();
    Map GetExtraValues();
    String GetMessage();
    Integer GetRecordId();
    Bool GetSilent();
    Integer GetTimeToLive();
    String GetTitle();
    Integer GetType();
    String GetUrl();
    Void SetDate(DateTime date);
    Void SetDuration(TimeSpan duration);
    Void SetExtraValues(Map extraValues);
    Void SetMessage(String message);
    Void SetRecordId(Integer recordId);
    Void SetSilent(Bool silent);
    Void SetTimeToLive(Integer timeToLive);
    Void SetTitle(String title);
    Void SetType(Integer type);
    Void SetUrl(String url);
}`;