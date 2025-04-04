export const NSVersionInfo = `/** 
An instance of this class represents information about one version of one document.
*/
class NSVersionInfo {
    Integer GetCheckedInByAssociateId();
    String GetCheckedInByName();
    DateTime GetCheckedInDate();
    String GetDescription();
    String GetDisplayText();
    Integer GetDocumentId();
    String GetExternalReference();
    String[] GetExtraFields();
    String GetVersionId();
    Void SetCheckedInByAssociateId(Integer checkedInByAssociateId);
    Void SetCheckedInByName(String checkedInByName);
    /** 
    Sets the date that this version was checked inThe date that this version was checked in and became official
    */
    Void SetCheckedInDate(DateTime checkedInDate);
    Void SetDescription(String description);
    Void SetDisplayText(String displayText);
    Void SetDocumentId(Integer documentId);
    Void SetExternalReference(String externalReference);
    Void SetExtraFields(String[] extraFields);
    Void SetVersionId(String versionId);
}`;