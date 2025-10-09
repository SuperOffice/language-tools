export const NSArchiveConfiguration = `/**
Used to store and fetch the configuration of an archive. The configuration consists of entities and columns; entities correspond to archive provider entities and the checkboxes you see in the bottom of standard archives. Column configuration includes both what columns should be visible, what order they are in (left to right), and whether the archive rows should be sorted by one or more columns.<p></p>
Desired columns can be set through the selectable MDO list called archiveColumns:<provider name>, and entities can be set through the selectable MDO list archiveEntities:<provider name>. You can also use the SetChosenEntities and SetChosenColumns method of this service. The selectable MDO list implementation is suitable for data binding using mdo list controls.
*/
class NSArchiveConfiguration {
    NSArchiveColumnInfo[] GetArchiveColumnInfo();
    NSSelectableMDOListItem[] GetArchiveEntityInfo();
    NSArchiveOrderByInfo[] GetArchiveOrderByInfo();
    String GetOwnerKeys();
    Void SetArchiveColumnInfo(NSArchiveColumnInfo[] archiveColumnInfo);
    Void SetArchiveEntityInfo(NSSelectableMDOListItem[] archiveEntityInfo);
    Void SetArchiveOrderByInfo(NSArchiveColumnInfo[] archiveColumnInfo);
    Void SetOwnerKeys(String ownerKeys);
}`;
