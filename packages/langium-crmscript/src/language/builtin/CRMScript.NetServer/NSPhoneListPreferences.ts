export const NSPhoneListPreferences = `/** 
Search preferences for a phone list search.
*/
class NSPhoneListPreferences {
    Bool GetSearchCompany();
    Bool GetSearchDepartment();
    Bool GetSearchFirstname();
    Bool GetSearchLastname();
    Integer GetSearchModeCompany();
    Integer GetSearchModeDepartment();
    Integer GetSearchModeFirstname();
    Integer GetSearchModeLastname();
    Void SetSearchCompany(Bool searchCompany);
    Void SetSearchDepartment(Bool searchDepartment);
    Void SetSearchFirstname(Bool searchFirstname);
    Void SetSearchLastname(Bool searchLastname);
    Void SetSearchModeCompany(Integer searchMode);
    Void SetSearchModeDepartment(Integer searchMode);
    Void SetSearchModeFirstname(Integer searchMode);
    Void SetSearchModeLastname(Integer searchMode);
}`;