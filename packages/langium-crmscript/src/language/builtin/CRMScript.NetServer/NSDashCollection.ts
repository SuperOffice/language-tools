export const NSDashCollection = `/** 
Carrier object for NSDashCollection.
*/
class NSDashCollection {
    /** 
    Returns the associates favourite dashboards.
    */
    NSDash[] GetFavourites();
    /** 
    Returns dashboards pinned to the associate.
    */
    NSDash[] GetPinned();
    /** 
    Returns other dashboards.
    */
    NSDash[] GetOther();
    /** 
    Set associates favourite dashboards.
    */
    Void SetFavourites(NSDash[] dashboards);
    /** 
    Sets dashboards pinned to the associate.
    */
    Void SetPinned(NSDash[] dashboards);
    /** 
    Sets other dashboards.
    */
    Void SetOther(NSDash[] dashboards);
}`;