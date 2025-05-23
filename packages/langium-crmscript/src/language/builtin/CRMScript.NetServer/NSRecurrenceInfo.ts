export const NSRecurrenceInfo = `class NSRecurrenceInfo {
    NSRecurrenceDate[] GetDates();
    Integer GetDayPattern();
    DateTime GetEndDate();
    Bool GetIsRecurrence();
    Integer GetMonthPattern();
    Integer GetPattern();
    Integer GetRecurrenceCounter();
    Integer GetRecurrenceEndType();
    Integer GetRecurrenceId();
    DateTime GetStartDate();
    Integer GetWeekPattern();
    Integer GetYearPattern();
    Void SetDates(NSRecurrenceDate[] dates);
    Void SetDayPattern(Integer pattern);
    Void SetEndDate(DateTime date);
    Void SetIsRecurrence(Bool isRecurrence);
    Void SetMonthPattern(Integer pattern);
    Void SetPattern(Integer pattern);
    Void SetRecurrenceCounter(Integer counter);
    Void SetRecurrenceEndType(Integer endType);
    Void SetRecurrenceId(Integer id);
    Void SetStartDate(DateTime date);
    Void SetWeekPattern(Integer pattern);
    Void SetYearPattern(Integer pattern);
}`;