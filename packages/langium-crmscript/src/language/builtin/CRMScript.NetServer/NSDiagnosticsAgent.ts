export const NSDiagnosticsAgent = `/** 
Diagnostics, usage data collection, caches, and flushing
*/
class NSDiagnosticsAgent {
    /** 
    Adds WebApp usage to existing log.
    */
    Void AddWebAppUsage(NSWebAppUsage[] webAppUsages);
    /** 
    Changes NetServer log settings.
    */
    Void ChangeLogSettings(Bool logWarning, Bool logInformation, Bool logSuccessAudit, Bool logFailureAudit, Bool logToEventLog, Bool logToSuperOffice, Bool logToFile, Bool logToTrace);
    /** 
    Collects and transmits usage statistics: Database Additions. If opted-out then this call does nothing. The call returns immediately (starting a background thread), and updates CS scheduler table to set the next run time.
    */
    Void CollectDataAdditions();
    /** 
    Collects and transmits usage statistics: Table Sizes. If opted-out then this call does nothing. The call returns immediately (starting a background thread), and updates CS scheduler table to set the next run time.<p></p>
    <pre><code>NSDiagnosticsAgent agent;
    agent.CollectTableSizes();</code></pre>
    */
    Void CollectTableSizes();
    /** 
    Collects and transmits usage statistics: Web-based clients Usage. If opted-out then this call does nothing. The call returns immediately (starting a background thread), and updates CS scheduler table to set the next run time.
    */
    Void CollectWebUsage();
    /** 
    Collects and transmits usage statistics: Windows CRM Client Usage. If opted-out then this call does nothing. The call returns immediately (starting a background thread), and updates CS scheduler table to set the next run time.<p></p>
    <pre><code>NSDiagnosticsAgent agent;
    agent.CollectWinUsage();</code></pre>
    */
    Void CollectWinUsage();
    /** 
    Flushes all NetServer caches
    */
    Void FlushCaches();
    /** 
    Flushes all NetServer caches named
    */
    Void FlushCachesByName(String[] cacheNames);
    /** 
    Gets the name of the caches that can be flushed
    */
    String[] GetCacheNames();
    /** 
    Gets all WebAppUsages for a given period, that match an optional search term
    */
    NSWebAppUsage[] GetWebAppUsagesForPeriod(DateTime fromDate, DateTime toDate, String searchTerm);
    /** 
    Logs a change in view state.
    */
    Void LogViewState(String viewState);
    /** 
    After upgrading to a new file set, there may be tasks that need to be done. Fpr example, import new TypicalSearches, if present. Tasks performed here need to be idempotent and independent of the actual upgrade jump (what was the previous version). They should complete in a reasonable time, not more than a few minutes maximum.
    */
    String PerformTasksAfterUpgrade();
    /** 
    Resynchronizes user information with SuperOffice Community, if opted-out then this call does nothing. The call returns immediately (starting a background thread), and updates CS scheduler table to set the next run time.
    */
    Void ResyncUsers();
    /** 
    Checks if viewState has been clicked at least once since a date.
    */
    Bool WebAppUsageExistsInPeriod(Integer associateId, String viewState, DateTime fromDate);
}`;