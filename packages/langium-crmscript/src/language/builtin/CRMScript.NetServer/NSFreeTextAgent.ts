export const NSFreeTextAgent = `/** 
This agent can be used to manage the free text system.
*/
class NSFreeTextAgent {
    /** 
    Adds the words in the string to the stop word list
    */
    Void AddWords(String stopWords);
    /** 
    Deletes the stop words with these IDs
    */
    Void DeleteStopWordsById(Integer[] stopWordIds);
    /** 
    Returns status for the free-text search words
    */
    NSFreeText GetStatus();
    /** 
    Returns the list of stop words
    */
    String[] GetStopWordList();
    /** 
    Returns the top used words in the free-text index table, sorted as most used first
    */
    NSMDOListItem[] GetSuggestedStopWords(Integer countWords);
    /** 
    Wipes and regenerates the free-text index by scanning the database (free-text search will be unavailable while this operation runs
    */
    NSBatchTaskInfo RegenerateIndex(Bool runAsBatch);
    Void SetAutoEnableTravelAreas(Bool autoEnable);
    /** 
    Sets free-text search to enabled (true) or disabled (false)
    */
    Void SetEnabled(Bool enabled);
    /** 
    Sets the operator used when matching multiple words
    */
    Void SetMultiWordOperator(Integer freeTextOperator);
    /** 
    Sets the operator used when matching single words
    */
    Void SetSingleWordOperator(Integer freeTextOperator);
}`;