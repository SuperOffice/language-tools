export const NSImportLine = `/** 
Used to import data into the system. Representing one entity that will be imported.
*/
class NSImportLine {
    String GetExternalKey();
    Integer GetOperation();
    Bool GetSelected();
    Integer GetType();
    String[] GetValues();
    Void SetExternalKey(String externalKey);
    Void SetOperation(Integer operation);
    Void SetSelected(Bool selected);
    Void SetType(Integer type);
    Void SetValues(String[] values);
}`;