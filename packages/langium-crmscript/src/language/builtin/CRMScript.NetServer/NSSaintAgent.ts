export const NSSaintAgent = `/** 
Administration and maintenance of SAINT counters and statuses.
*/
class NSSaintAgent {
    /** 
    Sets default values into a new NSSaintConfiguration.
    */
    NSSaintConfiguration CreateDefaultSaintConfiguration();
    /** 
    Sets default values into a new NSStatusMonitor.
    */
    NSStatusMonitor CreateDefaultStatusMonitor();
    /** 
    Sets default values into a new NSStatusMonitorPeriods.
    */
    NSStatusMonitorPeriods CreateDefaultStatusMonitorPeriods();
    /** 
    Returns the NSStatusMonitorPeriods entity.
    */
    NSSaintConfiguration[] GetSaintConfigurations();
    /** 
    Gets a single status monitor based on its identity
    */
    NSStatusMonitor GetStatusMonitor(Integer id);
    /** 
    Returns the NSStatusMonitorPeriods entity.
    */
    NSStatusMonitorPeriods GetStatusMonitorPeriods();
    /** 
    Gets all active status monitors for a specified target
    */
    NSStatusMonitor[] GetStatusMonitors(Integer id, String type);
    /** 
    Regenerates the Saint counters* this can take several minutes
    */
    NSBatchTaskInfo RegenerateCounters(Bool runAsBatch);
    /** 
    Regenerates the given status monitor
    */
    Void RegenerateStatusMonitor(Integer statusMonitorId);
    /** 
    Regenerates status monitors
    */
    NSBatchTaskInfo RegenerateStatusMonitors(Bool runAsBatch);
    /** 
    Updates the existing NSSaintConfiguration or creates a new NSSaintConfiguration if the id parameter is 0.
    */
    NSSaintConfiguration SaveSaintConfiguration(NSSaintConfiguration saintConfiguration);
    /** 
    Updates the existing NSStatusMonitor or creates a new NSStatusMonitor if the id parameter is 0
    */
    NSStatusMonitor SaveStatusMonitor(NSStatusMonitor statusMonitor);
    /** 
    Updates the existing NSStatusMonitorPeriods or creates a new NSStatusMonitorPeriods if the id parameter is 0
    */
    NSStatusMonitorPeriods SaveStatusMonitorPeriods(NSStatusMonitorPeriods statusMonitorPeriods);
    /** 
    Sets rank order on status monitors
    */
    Void SetRankOnStatusMonitors(String type, Integer[] itemsIds);
}`;