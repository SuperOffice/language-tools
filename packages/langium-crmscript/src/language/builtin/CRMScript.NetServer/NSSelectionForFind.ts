export const NSSelectionForFind = `class NSSelectionForFind {
    Bool GetCanSaveAsSelection();
    String GetFilterScreenHeading();
    String GetMainHeading();
    String GetProviderName();
    String GetSelectionEntityHeading();
    Integer GetSelectionId();
    Void SetCanSaveAsSelection(Bool canSaveAsSelection);
    /** 
    'Find sale', or whatever is appropriate for the Find<entity>filter page; this string will contain resource references
    */
    Void SetFilterScreenHeading(String filterScreenHeading);
    Void SetMainHeading(String mainHeading);
    Void SetProviderName(String providerName);
    Void SetSelectionEntityHeading(String selectionEntityHeading);
    Void SetSelectionId(Integer selectionId);
}`;