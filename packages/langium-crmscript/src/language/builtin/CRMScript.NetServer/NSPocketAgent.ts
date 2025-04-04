export const NSPocketAgent = `/** 
Agent with Pocket specific functionality.
*/
class NSPocketAgent {
    /** 
    Returns start-up data for SuperOffice Pocket CRM
    */
    NSPocketStartupData GetPocketStartupData(String[] tables, DateTime currentClientTime);
    /** 
    Retrieves current tag value for a device
    */
    String GetPushNotificationTagsForDevice(String deviceIdentifier);
    /** 
    Retrieves all registered devices for an associate
    */
    NSPocketDeviceInfo[] GetRegisteredDevices(Integer associateId);
    /** 
    Registers a device that should receive push notifications when notable events occur
    */
    Void RegisterDeviceForPushNotification(NSPocketDeviceInfo deviceInfo);
    /** 
    Executes the AppointmentAlarmBroker once
    */
    Void RunAppointmentAlarmBroker();
    /** 
    Sends a push notification to one or more associates
    */
    Void SendPushNotification(Integer[] associateIds, PocketNotificationMessage message);
    Void SetPushNotificationTagsForDevice(String deviceIdentifier, String tags);
    Void SetPushNotificationTagsForUser(Integer associateId, String tags);
}`;