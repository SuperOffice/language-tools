export const NSDayInformationListItem = `/** 
Summary information about the activities and holidays for one day.
*/
class NSDayInformationListItem {
    NSActivitySummary GetActivityInformation();
    DateTime GetDate();
    NSRedLetterSummary GetRedLetterInformation();
    Void SetActivityInformation(NSActivitySummary activityInformation);
    Void SetDate(DateTime date);
    Void SetRedLetterInformation(NSRedLetterSummary redLetterInformation);
}`;