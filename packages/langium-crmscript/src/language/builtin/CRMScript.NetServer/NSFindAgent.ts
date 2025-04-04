export const NSFindAgent = `/** 
Find functions.
*/
class NSFindAgent {
    /** 
    Creates a restriction group, initialized with next rank etc.
    */
    NSArchiveRestrictionGroup CreateRestrictionGroup(String storageType, String providerName, String storageKey, String context);
    /** 
    Creates a restriction group, initialized with next rank etc.
    */
    Void DeleteRestrictionGroup(String storageType, String providerName, String storageKey, Integer rank, String context);
    /** 
    Executes a Find operation and return a page of results.
    */
    NSFindResults Find(String storageType, String providerName, String storageKey, Integer pageSize, Integer pageNumber);
    /** 
    Executes a Find operation and return a page of results.
    */
    NSFindResults FindFromRestrictions(NSArchiveRestrictionInfo[] restrictions, String providerName, Integer pageSize, Integer pageNumber);
    /** 
    Executes a Find operation and return a page of results.
    */
    NSFindResults FindFromRestrictions2(String restrictions, String providerName, Integer pageSize, Integer pageNumber);
    /** 
    Executes a Find operation and return a page of results.
    */
    NSFindResults FindFromRestrictionsColumns(NSArchiveRestrictionInfo[] restrictions, String providerName, String[] desiredColumns, Integer pageSize, Integer pageNumber);
    /** 
    Execute a Find operation and return a page of results.
    */
    NSFindResults FindFromRestrictionsColumns2(String restrictions, String providerName, String[] desiredColumns, Integer pageSize, Integer pageNumber);
    /** 
    Executes a Find operation and return a page of results.
    */
    NSFindResults FindFromRestrictionsColumnsOrderBy(String restrictions, String[] desiredColumns, Integer pageSize, Integer pageNumber);
    /** 
    Executes a Find operation and return a page of results.
    */
    NSFindResults FindFromRestrictionsColumnsOrderBy2(String restrictions, String providerName, String[] desiredColumns, String orderBy, Integer pageSize, Integer pageNumber);
    /** 
    Executes a Find operation and return a page of results.
    */
    NSFindResults FindOrderBy(String storageType, String providerName, String storageKey, Integer pageSize, Integer pageNumber);
    /** 
    Executes a Find operation and return a page of results.
    */
    NSFindResults FindOrderBy2(String storageType, String providerName, String storageKey, Integer pageSize, Integer pageNumber, String orderBy);
    /** 
    Executes a Find operation and return a page of results.
    */
    NSFindResults FindWithColumns(String storageType, String providerName, String[] desiredColumns, String storageKey, Integer pageSize, Integer pageNumber);
    /** 
    Execute a Find operation and return a page of results.
    */
    NSFindResults FindWithExtraRestrictions(String storageType, String providerName, String storageKey, NSArchiveRestrictionInfo[] extraRestrictions, NSArchiveOrderByInfo[] orderBy, String[] desiredColumns, Integer pageSize, Integer pageNumber);
    /** 
    Executes a Find operation and return a page of results.
    */
    NSFindResults FindWithExtraRestrictions2(String storageType, String providerName, String storageKey, String extraRestrictions, String orderBy, String desiredColumns, Integer pageSize, Integer pageNumber);
    /** 
    Gets a list of the column names corresponding to available restrictions for a certain archive provider and restriction storage provider. Such columns have CanRestrict set to true, and are supported by the given restriction storage provider.
    */
    String[] GetAvailableRestrictionColumns(String storageType, String providerName);
    /** 
    Gets criteria information from a set of saved criteria. The result contains the restrictions in two forms: fully populated NSArchiveRestrictionInfo objects, used to display details and for saving changes; and as a list suitable for an Archive control
    */
    NSCriteriaInformation GetCriteriaInformation(String storageType, String providerName, String storageKey, String[] staticColumns);
    /** 
    Gets criteria information from a set of saved criteria. The result contains the restrictions in two forms: fully populated NSArchiveRestrictionInfo objects, used to display details and for saving changes; and as a list suitable for an Archive control
    */
    NSCriteriaInformation GetCriteriaInformationWithContext(String storageType, String providerName, String storageKey, String[] staticColumns, String context);
    /** 
    Calculates the default desired columns, i.e., the result columns for a given search. The search is defined by a storage type, provider name and storage key, which are used to fetch the corresponding restrictions from the database (in the same way as Find does). If you want to specify the restriction directly, use the GetDefaultDesiredColumnsFromRestrictions method instead. This is the algorithm that is used by the Find service method.
    */
    NSArchiveColumnInfo[] GetDefaultDesiredColumns(String storageType, String providerName, String storageKey);
    /** 
    Calculate the default desired columns, i.e., the result columns for a given search. The search is defined by a provider name and a set of restrictions. This is the algorithm that is used by the Find service method.
    */
    NSArchiveColumnInfo[] GetDefaultDesiredColumnsFromRestrictions(String providerName, NSArchiveRestrictionInfo[] restrictions);
    /** 
    Calculate the default desired columns, i.e., the result columns for a given search. The search is defined by a provider name and a set of restrictions. This is the algorithm that is used by the Find service method.
    */
    NSArchiveColumnInfo[] GetDefaultDesiredColumnsFromRestrictions2(String providerName, String restrictions);
    /** 
    Calculates the default orderby columns for a given provider and a search. The search is specified by a storage type, provider name and storage key, and is fetched from the database. Default desired columns are then calculated for the search, and those columns are then used as the basis for calculating an order by. If you want to specify the desired columns directly, use the GetDefaultOrderByFromDesiredColumns method instead.  This is the same algorithm that is used by the Find service method.
    */
    NSArchiveOrderByInfo[] GetDefaultOrderBy(String storageType, String providerName, String storageKey);
    /** 
    Calculate the default orderby columns for a given provider and a set of desired columns. This is the same algorithm that is used by the Find service method.
    */
    NSArchiveOrderByInfo[] GetDefaultOrderByFromDesiredColumns(String providerName, String[] desiredColumns);
    /** 
    Return the restriction group with given rank or a blank carrier.
    */
    NSArchiveRestrictionGroup GetRestrictionGroup(String storageType, String providerName, String storageKey, Integer rank, String context);
    /** 
    Returns all the restriction groups.
    */
    NSArchiveRestrictionGroup[] GetRestrictionGroups(String storageType, String providerName, String storageKey, String context);
    /** 
    Gets criteria information from a set of saved criteria, for a specific set of columns. The result contains the restrictions in two forms: fully populated NSArchiveRestrictionInfo objects, used to display details and for saving changes; and as a list suitable for an Archive control. ALL columns specified in the call will be present in the results; those that do not have corresponding criteria set will have empty values and the default (first) operator, with the IsActive flag set to false.
    */
    NSCriteriaInformation GetSpecifiedCriteriaInformationWithDefaults(String storageType, String providerName, String storageKey, String[] desiredColumnNames, String[] staticColumns);
    /** 
    Gets criteria information from a set of saved criteria, for a specific set of columns. The result contains the restrictions in two forms: fully populated NSArchiveRestrictionInfo objects, used to display details and for saving changes; and as a list suitable for an Archive control. ALL columns specified in the call will be present in the results; those that do not have corresponding criteria set will have empty values and the default (first) operator, with the IsActive flag set to false.
    */
    NSCriteriaInformation GetSpecifiedCriteriaInformationWithDefaultsWithContext(String storageType, String providerName, String storageKey, String[] desiredColumnNames, String[] staticColumns, String context);
    /** 
    Takes an incoming set of minimally populated restrictions (name + operator is required), and populates all the other parts of the NSArchiveRestrictionInfo structure. This includes column information, display values (including list value lookup), and calculated/default values where the value hints specify read-only (R).
    */
    NSArchiveRestrictionInfo[] PopulateRestrictions(String providerName, NSArchiveRestrictionInfo[] restrictions);
    /** 
    Takes an incoming set of Restrictions (name + operator + any user-entered values), and populates/expands all values as specified by the operator's ValueHints, taking into account any values already there. Used for dynamic date periods; perhaps others in the future
    */
    NSArchiveRestrictionInfo[] PopulateRestrictionValues(NSArchiveRestrictionInfo[] restrictions);
    /** 
    Saves an array of restrictions as a restriction group for later use as search criteria (including as dynamic selection and Find).
    */
    Void SaveRestrictionGroup(String storageType, String providerName, String storageKey, NSArchiveRestrictionGroup restrictionGroup, String context);
    /** 
    Saves and re-ranks an array of restriction groups, returning the possibly modified array.
    */
    NSArchiveRestrictionGroup[] SaveRestrictionGroups(String storageType, String providerName, String storageKey, NSArchiveRestrictionGroup[] restrictionGroups, String context);
    /** 
    Saves an array of restrictions for later use as search criteria (including as dynamic selection and Find).
    */
    Void SaveRestrictions(String storageType, String providerName, String storageKey);
    /** 
    Saves an array of restrictions for later use as search criteria (including as dynamic selection and Find).
    */
    Void SaveRestrictions2(String storageType, String providerName, String storageKey, String restrictions);
    /** 
    Saves an array of restrictions for later use as search criteria (including as dynamic selection and Find). Then, return the same result as a call to GetCriteriaInformation would have done. The purpose is to encapsulate saving and updating of a GUI in one round trip.
    */
    NSCriteriaInformation SaveRestrictionsAndGetCriteriaInformation(String storageType, String providerName, String storageKey, NSArchiveRestrictionInfo[] restrictions, String[] staticColumns);
    /** 
    Saves an array of restrictions for later use as search criteria (including as dynamic selection and Find). Then, return the same result as a call to GetCriteriaInformation would have done. The purpose is to encapsulate saving and updating of a GUI in one round trip.
    */
    NSCriteriaInformation SaveRestrictionsAndGetCriteriaInformation2(String storageType, String providerName, String storageKey, String restrictions, String staticColumns);
    /** 
    Saves an array of restrictions for later use as search criteria (including as dynamic selection and Find).
    */
    Void SaveRestrictionsWithContext(String storageType, String providerName, String storageKey, NSArchiveRestrictionInfo[] restrictions, String context);
    /** 
    Saves an array of restrictions for later use as search criteria (including as dynamic selection and Find).
    */
    Void SaveRestrictionsWithContext2(String storageType, String providerName, String storageKey, String restrictions, String context);
}`;