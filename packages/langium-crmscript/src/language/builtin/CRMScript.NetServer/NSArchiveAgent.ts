export const NSArchiveAgent = `/** 
ArchiveList functions of all kinds.
*/
class NSArchiveAgent {
    /** 
    Sets default values into a new NSArchiveListResult.
    */
    NSArchiveListResult CreateDefaultArchiveListResult();
    /** 
    Exports the target archive to a downloadable format.
    */
    NSExportArchiveResult ExportArchive(String providerName, String context, String[] desiredEntities, String[] columns, String exportType, String[] selectedRowIds, Integer estimatedRowCount);
    /** 
    Gets activity filter for the specified list.
    */
    NSActivityFilter GetActivityFilter();
    /** 
    Gets the configuration for one archive. The configuration is keyed by a combination of archive provider name and gui name.
    */
    NSArchiveConfiguration GetArchiveConfiguration(String guiName, String providerName);
    /** 
    Gets the configuration for one archive. The configuration is keyed by a combination of archive provider name (plus optional context), gui name, and optional table binding.
    */
    NSArchiveConfiguration GetArchiveConfigurationV2(String guiName, String providerName, String context, String ownerKeys);
    /** 
    Gets the configuration for one archive, with context parameter. The configuration is keyed by a combination of archive provider name and gui name.
    */
    NSArchiveConfiguration GetArchiveConfigurationWithContext(String guiName, String providerName, String context);
    /** 
    Gets a page of data for an archive.
    */
    NSArchiveListItem[] GetArchiveList(String guiName, String providerName, String[] entities, Integer page, Integer pageSize);
    /** 
    Gets a page of data for an archive using a restriction string.
    */
    NSArchiveListItem[] GetArchiveList2(String guiName, String providerName, String sortOrder, String restriction, String entities, Integer page, Integer pageSize);
    /** 
    Gets a page of results for an archive list, explicitly specifying the restrictions, orderby and chosen columns.
    */
    NSArchiveListItem[] GetArchiveListByColumns(String providerName, String[] columns, NSArchiveOrderByInfo[] sortOrder, NSArchiveRestrictionInfo[] restriction, String[] entities, Integer page, Integer pageSize);
    /** 
    Gets a page of results for an archive list, explicitly specifying the restrictions as a string, orderby and chosen columns.
    */
    NSArchiveListItem[] GetArchiveListByColumns2(String providerName, String columns, String sortOrder, String restrictions, String entities, Integer page, Integer pageSize);
    /** 
    Gets a page of results for an archive list with context parameter, explicitly specifying the restrictions, orderby and chosen columns.
    */
    NSArchiveListItem[] GetArchiveListByColumnsWithContext(String providerName, String[] columns, NSArchiveOrderByInfo[] sortOrder, NSArchiveRestrictionInfo[] restriction, String[] entities, Integer page, Integer pageSize, String context);
    /** 
    Gets a page of results for an archive list with context parameter, explicitly specifying the restrictions as a string, orderby and chosen columns.
    */
    NSArchiveListItem[] GetArchiveListByColumnsWithContext2(String providerName, String columns, String sortOrder, String restriction, String entities, Integer page, Integer pageSize, String context);
    /** 
    Gets a page of results for an archive list, explicitly specifying the restrictions, orderby and chosen columns; as well as a name/value string formatted set of options. The return value includes a header that has various extra information, in addition to the actual rows.
    */
    NSArchiveListResult GetArchiveListByColumnsWithHeader(String providerName, String[] columns, NSArchiveOrderByInfo[] sortOrder, NSArchiveRestrictionInfo[] restriction, String[] entities, Integer page, Integer pageSize, String options);
    /** 
    Gets a page of results for an archive list, explicitly specifying the restrictions as strings, orderby and chosen columns; as well as a name/value string formatted set of options.
    */
    NSArchiveListResult GetArchiveListByColumnsWithHeader2(String providerName, String columns, String sortOrder, String restriction, String entities, Integer page, Integer pageSize, String options);
    /** 
    Gets a page of results for an archive list, with context parameter, explicitly specifying the restrictions, orderby and chosen columns; as well as a name/value string formatted set of options.
    */
    NSArchiveListResult GetArchiveListByColumnsWithHeaderWithContext(String providerName, String[] columns, NSArchiveOrderByInfo[] sortOrder, NSArchiveRestrictionInfo[] restriction, String[] entities, Integer page, Integer pageSize, String options, String context);
    /** 
    Gets a page of results for an archive list, with context parameter, explicitly specifying the restrictions as strings, orderby and chosen columns; as well as a name/value string formatted set of options.
    */
    NSArchiveListResult GetArchiveListByColumnsWithHeaderWithContext2(String providerName, String columns, String sortOrder, String restriction, String entities, Integer page, Integer pageSize, String options, String context);
    /** 
    Gets a page of data for an archive, with context parameter. The columns returned will be those set as chosen columns, using either the SetChosenColumns service or the corresponding SelectableMDOList.SetSelected.
    */
    NSArchiveListItem[] GetArchiveListWithContext(String guiName, String providerName, NSArchiveOrderByInfo[] sortOrder, NSArchiveRestrictionInfo[] restriction, String[] entities, Integer page, Integer pageSize, String context);
    /** 
    Gets a page of data for an archive using restrictions as strings, with context parameter.
    */
    NSArchiveListItem[] GetArchiveListWithContext2(String guiName, String providerName, String sortOrder, String restriction, String entities, Integer page, Integer pageSize, String context);
    /** 
    Returns list of all columns supported by an archive provider. See also <xref href="CRMScript.NetServer.NSArchiveAgent.GetArchiveConfiguration(String,String)" data-throw-if-not-resolved="false"></xref>.
    */
    NSArchiveColumnInfo[] GetAvailableColumns(String providerName, String context);
    /** 
    Returns list of all entities supported by an archive provider. See also <xref href="CRMScript.NetServer.NSArchiveAgent.GetArchiveConfiguration(String,String)" data-throw-if-not-resolved="false"></xref>.
    */
    NSMDOListItem[] GetAvailableEntities(String providerName, String context);
    /** 
    Returns the associate IDs that belongs to the given groups.
    */
    Integer[] GetGroupAssociateIds(Integer[] groupIds);
    /** 
    Returns list of all archive provider names.
    */
    String[] GetProviderNames();
    /** 
    Sets activity filter for the specified list.
    */
    Void SetActivityFilter(NSActivityFilter activityFilter);
    /** 
    Sets the currently chosen columns for the given gui name/provider name combination.
    */
    Void SetChosenColumns(String guiName, String providerName, String[] chosenColumns);
    /** 
    Sets the currently chosen columns for the given gui name/provider name combination.
    */
    Void SetChosenColumnsV2(String guiName, String providerName, String context, String ownerKeys, String[] chosenColumns);
    /** 
    Sets the currently chosen entities for the given gui name/provider name combination.
    */
    Void SetChosenEntities(String guiName, String providerName, String[] entities);
    /** 
    Sets the currently chosen entities for the given gui name/provider name combination.
    */
    Void SetChosenEntitiesV2(String guiName, String providerName, String context, String ownerKeys, String[] entities);
    /** 
    Sets the column widths for the given set of columns and GUI name.
    */
    Void SetColumnWidths(String guiName, String[] columnWidths);
    /** 
    Sets the column widths for the given set of columns and GUI name.
    */
    Void SetColumnWidthsV2(String guiName, String providerName, String context, String ownerKeys, String[] columnWidths);
}`;