export const NSSaleStageEntity = `/** 
This entity represents a sale stage with a default percentage rating.
*/
class NSSaleStageEntity {
    Bool GetDeleted();
    Integer GetProbability();
    Integer GetRank();
    Integer GetSaleStageId();
    String GetTooltip();
    String GetValue();
    Void SetDeleted(Bool deleted);
    Void SetProbability(Integer probability);
    Void SetRank(Integer rank);
    Void SetSaleStageId(Integer saleStageId);
    Void SetTooltip(String tooltip);
    Void SetValue(String value);
}`;