export const Knowledge = `/** 
Knowledge class
*/
class Knowledge {
    /** 
    Builds a URL to the customer center to view a knowledge-base entry.
    */
    String buildExternalEntryURLWithParser(Integer kbId, Parser parser);
    /** 
    Rebuilds the FAQ search base based on the kbEntryId.
    */
    Void rebuildFaqSearch(Integer kbEntryId, String originalTitle);
}`;