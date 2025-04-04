export const NSStatusMonitor = `/** 
Definition of all properties for a status monitor.
*/
class NSStatusMonitor {
    Integer GetDefaultTask();
    String GetDefaultTaskText();
    Bool GetDeleted();
    String GetDescription();
    DateTime GetGenerationStart();
    Bool GetIsVisual();
    DateTime GetLastGenerated();
    String GetName();
    Bool GetNeedsUpdate();
    Integer GetNumMatches();
    Integer GetNumNeedUpdate();
    Integer GetOwnerTable();
    Integer GetPictureId();
    Integer GetRank();
    Integer GetStatusMonitorId();
    Void SetDefaultTask(Integer defaultTask);
    Void SetDefaultTaskText(String defaultTaskText);
    Void SetDeleted(Bool deleted);
    Void SetDescription(String description);
    Void SetGenerationStart(DateTime generationStart);
    Void SetIsVisual(Bool isVisual);
    Void SetLastGenerated(DateTime lastGenerated);
    Void SetName(String name);
    Void SetNeedsUpdate(Bool needsUpdate);
    Void SetNumMatches(Integer numMatches);
    Void SetNumNeedUpdate(Integer numNeedUpdate);
    Void SetOwnerTable(Integer ownerTable);
    Void SetPictureId(Integer pictureId);
    Void SetRank(Integer rank);
    Void SetStatusMonitorId(Integer statusMonitorId);
}`;