export const NSDashTileDefinition = `/** 
Defines a dashboard tile with various settings.
*/
class NSDashTileDefinition {
    /** 
    Returns the currency code for the dashboard tile.
    */
    String GetCurrencyCode();
    /** 
    Retrieves the currency mode of the dashboard tile.
    */
    Integer GetCurrencyMode();
    /** 
    Gets the primary key ID of the dashboard tile definition.
    */
    Integer GetDashboardTileDefinitionId();
    /** 
    Retrieves the default height of the dashboard tile.
    */
    Integer GetDefaultHeight();
    /** 
    Retrieves the default width of the dashboard tile.
    */
    Integer GetDefaultWidth();
    /** 
    Retrieves the description of the dashboard tile.
    */
    String GetDescription();
    /** 
    Retrieves the entity name measured by the dashboard tile.
    */
    String GetEntityName();
    /** 
    Retrieves the entity type of the dashboard tile.
    */
    Integer GetEntityType();
    /** 
    Retrieves the JSON formatted layout configuration of the dashboard tile.
    */
    String GetLayoutConfig();
    /** 
    Retrieves the measure type of the dashboard tile.
    */
    Integer GetMeasure();
    /** 
    Retrieves the field used to group data in the dashboard tile.
    */
    String GetMeasureByField();
    /** 
    Retrieves the field to be measured by the dashboard tile.
    */
    String GetMeasureField();
    /** 
    Retrieves the name of the dashboard tile.
    */
    String GetName();
    /** 
    Retrieves the provider name used with this entity type.
    */
    String GetProviderName();
    /** 
    Retrieves the secondary selection ID for period comparisons.
    */
    Integer GetSecondarySelectionId();
    /** 
    Gets the selection criteria ID of the tile definition.
    */
    Integer GetSelectionId();
    /** 
    Retrieves the sort field for the dashboard tile.
    */
    String GetSortBy();
    /** 
    Retrieves the type of the dashboard tile.
    */
    Integer GetTileType();
    /** 
    Retrieves where the dashboard tile can be used.
    */
    Integer GetUsage();
    /** 
    Sets the currency code for the dashboard tile.
    */
    Void SetCurrencyCode(String currencyCode);
    /** 
    Sets the currency mode of the dashboard tile.
    */
    Void SetCurrencyMode(Integer mode);
    /** 
    Sets the primary key ID of the dashboard tile definition.
    */
    Void SetDashboardTileDefinitionId(Integer id);
    /** 
    Sets the default height of the dashboard tile.
    */
    Void SetDefaultHeight(Integer height);
    /** 
    Sets the default width of the dashboard tile.
    */
    Void SetDefaultWidth(Integer width);
    /** 
    Sets the description of the dashboard tile.
    */
    Void SetDescription(String description);
    /** 
    Sets the entity name measured by the dashboard tile.
    */
    Void SetEntityName(String entityName);
    /** 
    Sets the entity type of the dashboard tile.
    */
    Void SetEntityType(Integer entityType);
    /** 
    Sets the JSON formatted layout configuration of the dashboard tile.
    */
    Void SetLayoutConfig(String layoutConfig);
    /** 
    Sets the measure type of the dashboard tile.
    */
    Void SetMeasure(Integer measure);
    /** 
    Sets the field to group data in the dashboard tile.
    */
    Void SetMeasureByField(String measureByField);
    /** 
    Sets the field to be measured by the dashboard tile.
    */
    Void SetMeasureField(String measureField);
    /** 
    Sets the name of the dashboard tile.
    */
    Void SetName(String name);
    /** 
    Sets the provider name for the specified entity type.
    */
    Void SetProviderName(String providerName);
    /** 
    Sets the secondary selection ID for period comparisons.
    */
    Void SetSecondarySelectionId(Integer secondarySelectionId);
    /** 
    Sets the selection ID for the tile definition criteria.
    */
    Void SetSelectionId(Integer selectionId);
    /** 
    Sets the sort field for the dashboard tile.
    */
    Void SetSortBy(String sortBy);
    /** 
    Sets the type of the dashboard tile.
    */
    Void SetTileType(Integer type);
    /** 
    Sets where the dashboard tile can be used.
    */
    Void SetUsage(Integer usage);
}`;