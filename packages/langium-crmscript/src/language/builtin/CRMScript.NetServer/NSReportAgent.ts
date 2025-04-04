export const NSReportAgent = `/** 
Run reports, set favorites, labels.
*/
class NSReportAgent {
    /** 
    Sets default values into a new NSReportEntity.
    */
    NSReportEntity CreateDefaultReportEntity();
    /** 
    Sets default values into a new NSReportLabelLayoutEntity.
    */
    NSReportLabelLayoutEntity CreateDefaultReportLabelLayoutEntity();
    /** 
    Creates the report as favorite.
    */
    NSReportEntity CreateFavorite(Integer sourceId, String name, String description);
    /** 
    Deletes the report favorite.
    */
    Void DeleteFavorite(Integer reportEntityId);
    /** 
    Deletes the report with the given ID.
    */
    Bool DeleteReport(Integer reportId);
    /** 
    Deletes the NSReportLabelLayoutEntity
    */
    Void DeleteReportLabelLayoutEntity(Integer reportLabelLayoutEntity);
    /** 
    Generates the report in PDF format.
    */
    String GenerateReport(Integer reportId, Integer labelLayoutId, String filename, String language, String fileType, NSArchiveRestrictionInfo[] restrictions);
    /** 
    Gets an NSReportEntity object.
    */
    NSReportEntity GetReportEntity(Integer reportEntityId);
    /** 
    Gets an NSReportLabelLayoutEntity object.
    */
    NSReportLabelLayoutEntity GetReportLabelLayoutEntity(Integer reportLabelLayoutEntityId);
    /** 
    Takes the input stream and create a report. This stream must be on a valid XML format.
    */
    Integer ImportReport(String report);
    /** 
    Updates the existing NSReportEntity or creates a new NSReportEntity if the id parameter is 0
    */
    NSReportEntity SaveReportEntity(NSReportEntity reportEntity);
    /** 
    Updates the existing NSReportLabelLayoutEntity or creates a new NSReportLabelLayoutEntity if the ID parameter is 0.
    */
    NSReportLabelLayoutEntity SaveReportLabelLayoutEntity(NSReportLabelLayoutEntity reportLabelLayoutEntity);
    /** 
    Updates the favorite.
    */
    NSReportEntity UpdateFavorite(NSReportEntity reportEntity);
}`;