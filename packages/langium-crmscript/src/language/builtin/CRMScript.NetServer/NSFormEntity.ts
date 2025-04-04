export const NSFormEntity = `/** 
Definition and configuration of a Form.
*/
class NSFormEntity {
    /** 
    Indicates if this form is active or not
    */
    Bool GetActive();
    String GetConfig();
    String GetDescription();
    DateTime GetExpires();
    Integer GetFolderId();
    String GetFolderName();
    Integer GetFormId();
    String GetFormKey();
    Integer GetGroupId();
    Integer GetMaxSubmits();
    String GetName();
    Bool GetNewTicket();
    Integer GetRecaptchaMode();
    String GetRecipe();
    DateTime GetRegistered();
    Integer GetRegisteredAssociateId();
    Integer GetResponseShipmentId();
    Integer GetScriptId();
    Integer GetType();
    DateTime GetUpdated();
    Integer GetUpdatedAssociateId();
    Integer GetUpdatedCount();
    Void SetActive(Bool active);
    Void SetConfig(String config);
    Void SetDescription(String description);
    Void SetExpires(DateTime expires);
    Void SetFolderId(Integer folderId);
    Void SetFolderName(String folderName);
    Void SetFormId(Integer formId);
    Void SetFormKey(String formKey);
    Void SetGroupId(Integer groupId);
    Void SetMaxSubmits(Integer maxSubmits);
    Void SetName(String name);
    Void SetNewTicket(Bool newTicket);
    Void SetRecaptchaMode(Integer recaptchaMode);
    Void SetRecipe(String recipe);
    Void SetRegistered(DateTime registered);
    Void SetRegisteredAssociateId(Integer registeredAssociateId);
    Void SetResponseShipmentId(Integer responseShipmentId);
    Void SetScriptId(Integer scriptId);
    Void SetType(Integer type);
    Void SetUpdated(DateTime updated);
    Void SetUpdatedAssociateId(Integer updatedAssociateId);
    Void SetUpdatedCount(Integer updatedCount);
}`;