export const NSFavouriteAgent = `/** 
Agent used for retrieving and setting favorites.
*/
class NSFavouriteAgent {
    /** 
    Adds a record in a table as a favorite for an associate
    */
    Void AddFavourite(String tableName, Integer recordId, Integer associateId, String extraInfo);
    /** 
    Adds a list of record IDs as favorites for an associate
    */
    Void AddFavourites(String tableName, Integer[] recordIds, Integer associateId, String extraInfo);
    /** 
    Gets all favorites for a table and associate
    */
    NSFavourite[] GetFavourites(String tableName, Integer associateId);
    /** 
    Checks if a record in a table is a favorite for an associate
    */
    Bool IsFavourite(String tableName, Integer recordId, Integer associateId);
    /** 
    Removes all favorites for a table and associate
    */
    Void RemoveAllFavourites(String tableName, Integer associateId);
    /** 
    Removes favorite for a table, record ID, and associate
    */
    Void RemoveFavourite(String tableName, Integer recordId, Integer associateId);
    /** 
    Removes favorite using favorite ID
    */
    Void RemoveFavouritesById(Integer[] favoriteIds);
    /** 
    Toggles a record in a table as a favorite for an associate
    */
    Bool ToggleFavourite(String tableName, Integer recordId, Integer associateId, String extraInfo);
}`;