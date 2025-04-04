export const NSBatchTaskInfo = `/** 
Contains information about one batch task.
*/
class NSBatchTaskInfo {
    Integer GetAssociateId();
    String GetContext();
    DateTime GetCreated();
    String GetDatabaseSerialNumber();
    String GetDescription();
    Integer GetDetailsRecord();
    Integer GetDetailsTable();
    Integer GetId();
    Bool GetIsInternalTask();
    Bool GetIsSystemTask();
    DateTime GetLastStarted();
    String GetName();
    Map GetParameterObject();
    String GetProgressDescription();
    Integer GetProgressPercent();
    String GetRequest();
    /** 
    Maps to the response field in the batchtask table.
    */
    String GetResponse();
    /** 
    Maps to the result field in the batchtask table.
    */
    String GetResult();
    /** 
    Maps to the startcount field in the batchtask table.
    */
    Integer GetStartCount();
    /** 
    BatchTaskState of the task.
    */
    Integer GetState();
    /** 
    Task owner. If it is a System task, AssociateId = 0.
    */
    Void SetAssociateId(Integer associateId);
    /** 
    Context for the executing task.
    */
    Void SetContext(String context);
    Void SetCreated(DateTime created);
    /** 
    Serial number of the database the task is to run on.
    */
    Void SetDatabaseSerialNumber(String databaseSerialNumber);
    /** 
    Description of the task.
    */
    Void SetDescription(String description);
    /** 
    Record ID of a row in the DetailsTable containing more info about the task.
    */
    Void SetDetailsRecord(Integer detailsRecord);
    /** 
    ID of table with more information about the task.
    */
    Void SetDetailsTable(Integer detailsTable);
    /** 
    ID of the task.
    */
    Void SetId(Integer id);
    /** 
    If IsInternalTask is true, this task will not add a trace to the database.
    */
    Void SetIsInternalTask(Bool isInternalTask);
    /** 
    If IsSystemTask is true, the task is not initiated by an associate.
    */
    Void SetIsSystemTask(Bool isSystemTask);
    Void SetLastStarted(DateTime lastStarted);
    /** 
    Name of the task.
    */
    Void SetName(String name);
    /** 
    Serializes a Map to a binary blob and saves it in the BinaryObject table. The link to the BinaryObject will be set using DetailsTable and DetailsRecord.
    */
    Void SetParameterObject(Map parameterObject);
    /** 
    Descriptive text for the current stage
    */
    Void SetProgressDescription(String progressDescription);
    /** 
    Task progress, in percent of estimated total
    */
    Void SetProgressPercent(Integer progressPercent);
    /** 
    Maps to the request field in the batchtask table.
    */
    Void SetRequest(String request);
    /** 
    Maps to the response field in the batchtask table.
    */
    Void SetResponse(String response);
    /** 
    Maps to the result field in the batchtask table.
    */
    Void SetResult(String result);
    /** 
    Maps to the startcount field in the batchtask table.
    */
    Void SetStartCount(Integer startCount);
    /** 
    BatchTaskState of the task.
    */
    Void SetState(Integer state);
}`;