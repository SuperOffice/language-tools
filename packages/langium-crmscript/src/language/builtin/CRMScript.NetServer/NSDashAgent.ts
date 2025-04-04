export const NSDashAgent = `/** 
Carrier object for managing various dashboard operations.
*/
class NSDashAgent {
    /** 
    Adds a new tile to the specified dashboard.
    */
    NSDashTile AddNewTileToDashboard(Integer dashboardId, NSDashTileDefinition tileDefinition);
    /** 
    Adds an existing tile to a specified dashboard.
    */
    NSDashTile AddTileToDashboard(Integer dashboardId, Integer tileId);
    /** 
    Copies the specified tile selection.
    */
    Integer CopyTileSelection(Integer selectionId);
    /** 
    Creates a dash tile selection based on the specified entity.
    */
    Integer CreateDashTileSelectionFromEntity(String entity);
    /** 
    Generates a default dashboard.
    */
    NSDash CreateDefaultDash();
    /** 
    Generates a default collection of dashboards.
    */
    NSDashCollection CreateDefaultDashCollection();
    /** 
    Creates a default theme for dashboards.
    */
    NSDashTheme CreateDefaultDashTheme();
    /** 
    Generates a default tile for dashboards.
    */
    NSDashTile CreateDefaultDashTile();
    /** 
    Creates a default definition for a dashboard tile.
    */
    NSDashTileDefinition CreateDefaultDashTileDefinition();
    /** 
    Generates a default preview dashboard.
    */
    NSPreviewDash CreateDefaultPreviewDash();
    /** 
    Creates a default tile for preview dashboards.
    */
    NSPreviewDashTile CreateDefaultPreviewDashTile();
    /** 
    Creates a default tile for the specified entity.
    */
    NSDashTile CreateDefaultTileForEntity(String entity);
    /** 
    Deletes a specified dashboard.
    */
    Void DeleteDash(Integer dashId);
    /** 
    Deletes the specified dashboard theme.
    */
    Void DeleteDashTheme(Integer themeId);
    /** 
    Deletes a specified dashboard tile.
    */
    Void DeleteDashTile(Integer tileId);
    /** 
    Deletes the specified tile definition.
    */
    Void DeleteDashTileDefinition(Integer tileDefinitionId);
    /** 
    Creates a copy of the specified dashboard with a new name.
    */
    NSDash DuplicateDashboard(Integer dashId, String newName);
    /** 
    Duplicates a tile with a new name.
    */
    NSDashTile DuplicateTile(Integer tileId, String newName);
    /** 
    Retrieves a specific dashboard by ID.
    */
    NSDash GetDash(Integer dashId);
    /** 
    Retrieves the current collection of dashboards.
    */
    NSDashCollection GetDashCollection();
    /** 
    Retrieves a list of dashboards based on an array of IDs.
    */
    NSDash[] GetDashList(Integer[] dashIds);
    /** 
    Retrieves a specific dashboard theme by ID.
    */
    NSDashTheme GetDashTheme(Integer themeId);
    /** 
    Retrieves a specific tile from a dashboard by ID.
    */
    NSDashTile GetDashTile(Integer tileId);
    /** 
    Retrieves a tile definition by ID.
    */
    NSDashTileDefinition GetDashTileDefinition(Integer tileDefinitionId);
    /** 
    Retrieves the HTML content for a specific dashboard tile.
    */
    NSDashTileHtml GetDashTileHtml(Integer tileId, String context);
    /** 
    Retrieves a list of HTML content for all tiles in a dashboard.
    */
    NSDashTileHtml[] GetDashTileHtmlList(Integer dashId);
    /** 
    Retrieves all tiles in the specified dashboard.
    */
    NSDashTile[] GetDashTiles(Integer dashId);
    /** 
    Retrieves a preview version of a specific dashboard.
    */
    NSPreviewDash GetPreviewDash(Integer dashId);
    /** 
    Retrieves the secondary temporary tile selection by ID.
    */
    Integer GetSecondaryTempTileSelection(Integer selectionId);
    /** 
    Retrieves the temporary tile selection by ID.
    */
    Integer GetTempTileSelection(Integer selectionId);
    /** 
    Saves the specified dashboard with given data.
    */
    NSDash SaveDash(NSDash dashData);
    /** 
    Saves the specified dashboard theme.
    */
    NSDashTheme SaveDashTheme(NSDashTheme theme);
    /** 
    Saves the specified dashboard tile.
    */
    NSDashTile SaveDashTile(NSDashTile tile);
    /** 
    Saves the specified dashboard tile definition.
    */
    NSDashTileDefinition SaveDashTileDefinition(NSDashTileDefinition tileDefinition);
    /** 
    Saves a list of HTML content for dashboard tiles.
    */
    NSDashTileHtml[] SaveDashTileHtmlList(Integer dashId, NSDashTileHtml[] tileHtmlList);
    /** 
    Saves multiple tiles for the specified dashboard.
    */
    Void SaveDashTiles(Integer dashId, NSDashTile[] tiles);
}`;