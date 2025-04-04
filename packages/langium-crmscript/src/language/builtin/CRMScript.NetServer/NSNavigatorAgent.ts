export const NSNavigatorAgent = `/** 
Navigator stuff.
*/
class NSNavigatorAgent {
    NSNavigatorCompany[] GetNavigatorCompanies(String name);
    /** 
    Gets an NSNavigatorCompany object.
    */
    NSNavigatorCompany GetNavigatorCompany(Integer navigatorCompanyId);
    /** 
    Gets an array of NSNavigatorCompany objects.
    */
    NSNavigatorCompany[] GetNavigatorCompanyList(Integer[] navigatorCompanyIds);
}`;