export const NSChangedData = `/** 
Generic carrier, used in return values to indicate what data NetServer has changed 'behind the scenes' so clients can know what to update.
*/
class NSChangedData {
    NSChangedDataItem[] GetAddedRecords();
    NSChangedDataItem[] GetDeletedRecords();
    NSChangedDataItem[] GetUpdatedRecords();
    Void SetAddedRecords(NSChangedDataItem[] addedRecords);
    Void SetDeletedRecords(NSChangedDataItem[] deletedRecords);
    /** 
    IDs of updated records.
    */
    Void SetUpdatedRecords(NSChangedDataItem[] updatedRecords);
}`;