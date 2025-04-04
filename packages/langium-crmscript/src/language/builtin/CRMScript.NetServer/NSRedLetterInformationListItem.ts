export const NSRedLetterInformationListItem = `/** 
Detailed information on red-letter days, including both holidays and other days with their individual texts.
*/
class NSRedLetterInformationListItem {
    DateTime GetDate();
    NSRedLetterDetails GetRedLetterDetails();
    NSRedLetterSummary GetRedLetterInformation();
    Void SetDate(DateTime date);
    Void SetRedLetterDetails(NSRedLetterDetails redLetterDetails);
    Void SetRedLetterInformation(NSRedLetterSummary redLetterInformation);
}`;