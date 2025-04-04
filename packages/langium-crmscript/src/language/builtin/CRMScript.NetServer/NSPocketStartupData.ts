export const NSPocketStartupData = `/** 
The Pocket Service. The service implements pocket specific stuff, like consolidated post-login stuff.
*/
class NSPocketStartupData {
    NSTimeZoneData GetBaseLocaleTimeZoneData();
    String GetCustomData();
    Bool GetIsPushNotificationEnabled();
    Integer GetNotificationsCount();
    Integer GetOverdueSalesCount();
    NSTimeZoneData GetPhoneLocaleTimeZoneData();
    NSPreference[] GetPocketPreferences();
    NSWebPanelEntity[] GetSystemWebPanels();
    Integer[] GetTableRights();
    Void SetBaseLocaleTimeZoneData(NSTimeZoneData baseLocaleTimeZoneData);
    Void SetCustomData(String customData);
    Void SetIsPushNotificationEnabled(Bool isPushNotificationEnabled);
    Void SetNotificationsCount(Integer notificationsCount);
    Void SetOverdueSalesCount(Integer overdueSalesCount);
    Void SetPhoneLocaleTimeZoneData(NSTimeZoneData phoneLocaleTimeZoneData);
    Void SetPocketPreferences(NSPreference[] pocketPreferences);
    Void SetSystemWebPanels(NSWebPanelEntity[] systemWebPanels);
    Void SetTableRights(Integer[] tableRights);
}`;