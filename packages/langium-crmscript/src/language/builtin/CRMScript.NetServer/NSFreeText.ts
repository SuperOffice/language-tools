export const NSFreeText = `/** 
Used to manage freetext search.
*/
class NSFreeText {
    Bool GetAutoEnableTravelAreas();
    Integer GetCountWords();
    Bool GetFreeTextEnabled();
    DateTime GetLastGenerated();
    Integer GetMultiWordOperator();
    Integer GetOccurrences();
    Integer GetSingleWordOperator();
    Void SetAutoEnableTravelAreas(Bool autoEnableTravelAreas);
    Void SetCountWords(Integer countWords);
    Void SetFreeTextEnabled(Bool freeTextEnabled);
    Void SetLastGenerated(DateTime lastGenerated);
    Void SetMultiWordOperator(Integer multiWordOperator);
    Void SetOccurrences(Integer occurrences);
    Void SetSingleWordOperator(Integer singleWordOperator);
}`;