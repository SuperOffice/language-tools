export const NSBatchAgent = `/** 
Start, stop and monitor predefined batch tasks.
*/
class NSBatchAgent {
    /** 
    Deletes a batch task from the database.
    */
    Void DeleteBatchTask(Integer batchTaskId);
    /** 
    Deletes batch tasks from the database.
    */
    Void DeleteBatchTasks(Integer[] batchTaskIds);
    /** 
    Gets a single NSBatchTaskInfo based on ID.
    */
    NSBatchTaskInfo GetBatchTaskInfo(Integer id);
    /** 
    Gets an array of NSBatchTaskInfo for the provided associate IDs.
    */
    NSBatchTaskInfo[] GetBatchTaskInfosByAssociates(Integer[] associateIds);
    /** 
    Gets an array of NSBatchTaskInfo for the provided associate IDs and batch task state.
    */
    NSBatchTaskInfo[] GetBatchTaskInfosByAssociatesAndState(Integer[] associateIds, Integer state);
    /** 
    Gets an array of NSBatchTaskInfo for the provided associate IDs and batch task definition name.
    */
    NSBatchTaskInfo[] GetBatchTaskInfosByNameAndAssociates(String name, Integer[] associateIds);
    /** 
    Gets an array of NSBatchTaskInfo with state defined by a BatchTaskState and the batchtask definition name.
    */
    NSBatchTaskInfo[] GetBatchTaskInfosByNameAndState(String name, Integer state);
    /** 
    Gets an array of NSBatchTaskInfo with state defined by a BatchTaskState.
    */
    NSBatchTaskInfo[] GetBatchTaskInfosByState(Integer state);
    /** 
    Starts a batch job based on NSBatchTaskInfo.
    */
    Integer StartBatchJob(NSBatchTaskInfo batchTaskInfo);
    /** 
    Stops a batch job based on ID.
    */
    Bool StopBatchJob(Integer id);
    /** 
    Updates information about a BatchTask.
    */
    NSBatchTaskInfo UpdateBatchTask(NSBatchTaskInfo batchTaskInfo);
}`;