export const NSAIAgent = `/** 
AI services, such as Translation, Statistics, Sentiment analysis, backed by calls to Public Cloud providers.
*/
class NSAIAgent {
    /** 
    Given a (reasonably short) text, detect the language it is written in.
    */
    String DetectLanguage(String text);
    /** 
    Detect the sentiment of a (reasonably short) text. Sentiment analysis may cause a translation to be made, since sentiment analysis only supports a limited set of languages
    */
    NSSentiment DetectSentiment(String text);
    /** 
    Calling the HugoAI endpoint to fetch the current training status.
    */
    NSCategorizationStatusResponse GetTrainingStatus();
    /** 
    Given a ticket's ID, guess the ticket category it should be placed in.
    */
    Integer GuessCategory(Integer ticketId);
    /** 
    The category guesser training API will be called with an array of CategorizationTrainingItem during the (background, Batch) execution of this call.
    */
    String TrainCategoryGuesser(Integer selectionId, Integer maxItems, Integer maxTextLength);
    /** 
    Translate a text from one language to another.
    */
    String Translate(String text, String targetLanguage);
}`;