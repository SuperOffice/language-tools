export const NSCustomerCenterConfig = `/** 
Contains configuration when displaying the Customer Center. Carrier object for CustomerCenterConfig.
*/
class NSCustomerCenterConfig {
    String GetConfig();
    Integer GetCustConfigId();
    Integer GetCustLangId();
    DateTime GetRegistered();
    Integer GetRegisteredAssociateId();
    Integer GetType();
    DateTime GetUpdated();
    Integer GetUpdatedAssociateId();
    Void SetConfig(String config);
    Void SetCustConfigId(Integer custConfigId);
    Void SetCustLangId(Integer custLangId);
    Void SetRegistered(DateTime registered);
    Void SetRegisteredAssociateId(Integer registeredAssociateId);
    Void SetType(Integer type);
    Void SetRegiSetUpdated(DateTime updated);
    Void SetUpdatedAssociateId(Integer updatedAssociateId);
}`;