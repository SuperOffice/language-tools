export const NSExtAppEntity = `/** 
Contains information on an external application.
*/
class NSExtAppEntity {
    Bool GetDeleted();
    NSExecuteOnEvent GetExecuteOnEvent();
    Integer GetExtAppId();
    String GetFilename();
    Integer GetIcon();
    String GetName();
    Bool GetOnCentral();
    Bool GetOnSalesMarketingPocket();
    Bool GetOnSatellite();
    Bool GetOnTravel();
    String GetParameters();
    String GetPath();
    Integer GetRank();
    Bool GetShowInAddressBar();
    Bool GetShowInMenuBar();
    Bool GetShowInStatusBar();
    Bool GetShowInToolBar();
    Integer GetShowState();
    String GetTooltip();
    Integer GetVisibleIn();
    Bool GetWaitToFinish();
    String GetWorkdir();
    Void SetDeleted(Bool deleted);
    Void SetExecuteOnEvent(NSExecuteOnEvent executeOnEvent);
    Void SetExtAppId(Integer extAppId);
    Void SetFilename(String filename);
    Void SetIcon(Integer icon);
    Void SetName(String name);
    Void SetOnCentral(Bool onCentral);
    Void SetOnSalesMarketingPocket(Bool onSalesMarketingPocket);
    Void SetOnSatellite(Bool onSatellite);
    Void SetOnTravel(Bool onTravel);
    Void SetParameters(String parameters);
    Void SetPath(String path);
    Void SetRank(Integer rank);
    Void SetShowInAddressBar(Bool showInAddressBar);
    Void SetShowInMenuBar(Bool showInMenuBar);
    Void SetShowInStatusBar(Bool showInStatusBar);
    Void SetShowInToolBar(Bool showInToolBar);
    Void SetShowState(Integer showState);
    Void SetTooltip(String tooltip);
    Void SetVisibleIn(Integer visibleIn);
    Void SetWaitToFinish(Bool waitToFinish);
    Void SetWorkdir(String workdir);
}`;