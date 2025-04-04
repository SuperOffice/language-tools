export const NSMultiAlarmData = `/** 
Carrier object for MultiAlarmData.
*/
class NSMultiAlarmData {
    NSAlarmData[] GetAlarms();
    Integer GetPollingInterval();
    Integer GetSilentAfter();
    Void SetAlarms(NSAlarmData[] alarms);
    Void SetPollingInterval(Integer pollingInterval);
    Void SetSilentAfter(Integer silentAfter);
}`;