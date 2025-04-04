export const NSWindowPosSize = `/** 
Window and dialog position and size settings.
*/
class NSWindowPosSize {
    Integer GetAssociateId();
    Integer GetExtraId();
    String GetExtraInfo();
    Integer GetHeight();
    Integer GetLeftX();
    String GetOwnerWindow();
    Integer GetPersonId();
    Integer GetState();
    Integer GetUpperY();
    Integer GetWidth();
    Integer GetWindowPosSizeId();
    Void SetAssociateId(Integer associateId);
    Void SetExtraId(Integer extraId);
    Void SetExtraInfo(String extraInfo);
    Void SetHeight(Integer height);
    Void SetLeftX(Integer leftX);
    Void SetOwnerWindow(String ownerWindow);
    Void SetPersonId(Integer personId);
    Void SetState(Integer state);
    Void SetUpperY(Integer upperY);
    Void SetWidth(Integer width);
    Void SetWindowPosSizeId(Integer windowPosSizeId);
}`;