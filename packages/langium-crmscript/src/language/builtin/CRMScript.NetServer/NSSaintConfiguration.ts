export const NSSaintConfiguration = `/** 
Definition of the three periods for status monitors and some other settings per saint entity.
*/
class NSSaintConfiguration {
    Bool GetEnabled();
    DateTime GetGenerationEnd();
    DateTime GetGenerationStart();
    Integer GetOwnerTable();
    Integer GetPeriod1();
    Integer GetPeriod2();
    Integer GetPeriod3();
    Integer GetRowsGenerated();
    Void SetEnabled(Bool enabled);
    Void SetGenerationEnd(DateTime generationEnd);
    Void SetGenerationStart(DateTime generationStart);
    Void SetOwnerTable(Integer ownerTable);
    Void SetPeriod1(Integer period1);
    Void SetPeriod2(Integer period2);
    Void SetPeriod3(Integer period3);
    Void SetRowsGenerated(Integer rowsGenerated);
}`;