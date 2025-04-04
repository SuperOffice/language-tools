export const NSPreviewsAgent = `/** 
Gets preview strings from a hint.
*/
class NSPreviewsAgent {
    /** 
    Parses a Preview hint and return a Preview.The returned Preview string may contain resource string identifiers (in square brackets), to be processed by the resource manager.<p></p>
    The Preview hint is either a literal text, representing itself or a set of key/value pairs enclosed in curly braces. Each key is separated from its value by an equals sign, and each pair from the next by an ampersand, according to usual conventions.
    */
    String GetPreview(String previewHint);
}`;