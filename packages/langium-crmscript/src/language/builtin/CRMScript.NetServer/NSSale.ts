export const NSSale = `
class NSSale {
    Integer GetActiveErpLinks();
    Float GetAmount();
    String GetAssociateFullName();
    Integer GetAssociateId();
    Integer GetCompleted();
    Integer GetContactId();
    String GetContactName();
    String GetCurrency();
    String GetDescription();
    Float GetEarning();
    Float GetEarningPercent();
    DateTime GetNextDueDate();
    String GetNumber();
    String GetPersonFullName();
    Integer GetPersonId();
    Integer GetProbability();
    Integer GetProjectId();
    String GetProjectName();
    DateTime GetSaleDate();
    Integer GetSaleId();
    Integer GetSaleTypeId();
    String GetSaleTypeName();
    Integer GetStatus();
    String GetTitle();
    Float GetWeightedAmount();
    Void SetActiveErpLinks(Integer activeErpLinks);
    Void SetAmount(Float amount);
    Void SetAssociateFullName(String associateFullName);
    Void SetAssociateId(Integer associateId);
    Void SetCompleted(Integer completed);
    Void SetContactId(Integer contactId);
    Void SetContactName(String contactName);
    Void SetCurrency(String currency);
    Void SetDescription(String description);
    Void SetEarning(Float earning);
    Void SetEarningPercent(Float earningPercent);
    /** 
     Maintained by the system, but very convenient for searching.
    */
    Void SetNextDueDate(DateTime nextDueDate);
    /** 
    Alphanumeric user field
    */
    Void SetNumber(String number);
    Void SetPersonFullName(String personFullName);
    Void SetPersonId(Integer personId);
    Void SetProbability(Integer probability);
    Void SetProjectId(Integer projectId);
    Void SetProjectName(String projectName);
    Void SetSaleDate(DateTime saleDate);
    Void SetSaleId(Integer saleId);
    Void SetSaleTypeId(Integer saleTypeId);
    Void SetSaleTypeName(String saleTypeName);
    Void SetStatus(Integer status);
    Void SetTitle(String title);
    Void SetWeightedAmount(Float weightedAmount);
}
`;