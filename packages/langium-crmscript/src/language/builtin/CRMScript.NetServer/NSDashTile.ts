export const NSDashTile = `/** 
Represents a tile in a dashboard configuration.
*/
class NSDashTile {
    /** 
    Gets the ID of the associated dashboard.
    */
    Integer GetDashboardId();
    /** 
    Gets the primary key ID of the dashboard tile.
    */
    Integer GetDashboardTileId();
    /** 
    Gets the tile definition entity.
    */
    NSDashTileDefinition GetDashTileDefinition();
    /** 
    Gets the height of the tile in the dashboard.
    */
    Integer GetHeight();
    /** 
    Gets the rank order of the tile.
    */
    Integer GetRank();
    /** 
    Gets the width of the tile in the dashboard.
    */
    Integer GetWidth();
    /** 
    Sets the ID of the associated dashboard.
    */
    Void SetDashboardId(Integer dashboardId);
    /** 
    Sets the primary key ID of the dashboard tile.
    */
    Void SetDashboardTileId(Integer tileId);
    /** 
    Sets the tile definition entity.
    */
    Void SetDashTileDefinition(NSDashTileDefinition definition);
    /** 
    Sets the height of the tile in the dashboard.
    */
    Void SetHeight(Integer height);
    /** 
    Sets the rank order of the tile.
    */
    Void SetRank(Integer rank);
    /** 
    Sets the width of the tile in the dashboard.
    */
    Void SetWidth(Integer width);
}`;