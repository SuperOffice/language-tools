export const NSChatOpeningHours = `/** 
Chat topic opening hour. Carrier object for ChatOpeningHours.
*/
class NSChatOpeningHours {
    Bool GetFriEnabled();
    TimeSpan GetFriStart();
    /** 
    */
    TimeSpan GetFriStop();
    Bool GetMonEnabled();
    TimeSpan GetMonStart();
    TimeSpan GetMonStop();
    Bool GetSatEnabled();
    TimeSpan GetSatStart();
    TimeSpan GetSatStop();
    Bool GetSunEnabled();
    TimeSpan GetSunStart();
    TimeSpan GetSunStop();
    Bool GetThuEnabled();
    TimeSpan GetThuStart();
    TimeSpan GetThuStop();
    Bool GetTueEnabled();
    TimeSpan GetTueStart();
    TimeSpan GetTueStop();
    NSTimeZoneData GetTzLocation();
    Bool GetWedEnabled();
    TimeSpan GetWedStart();
    TimeSpan GetWedStop();
    Void SetFriEnabled(Bool friEnabled);
    Void SetFriStart(TimeSpan friStart);
    Void SetFriStop(TimeSpan friStop);
    Void SetMonEnabled(Bool monEnabled);
    Void SetMonStart(TimeSpan monStart);
    Void SetMonStop(TimeSpan monStop);
    Void SetSatEnabled(Bool satEnabled);
    Void SetSatStart(TimeSpan satStart);
    Void SetSatStop(TimeSpan satStop);
    Void SetSunEnabled(Bool sunEnabled);
    Void SetSunStart(TimeSpan sunStart);
    Void SetSunStop(TimeSpan sunStop);
    Void SetThuEnabled(Bool thuEnabled);
    Void SetThuStart(TimeSpan thuStart);
    Void SetThuStop(TimeSpan thuStop);
    Void SetTueEnabled(Bool tueEnabled);
    Void SetTueStart(TimeSpan tueStart);
    Void SetTueStop(TimeSpan tueStop);
    Void SetTzLocation(NSTimeZoneData tzLocation);
    Void SetWedEnabled(Bool wedEnabled);
    Void SetWedStart(TimeSpan wedStart);
    Void SetWedStop(TimeSpan wedStop);
}`;