export const NSAddressSyncData = `/** 
Carrier object for AddressSyncData.
*/
class NSAddressSyncData {
    String GetAddress1();
    String GetAddress2();
    String GetAddress3();
    Integer GetAddressId();
    Integer GetAddressType();
    String GetCity();
    String GetCounty();
    String GetFormattedAddress();
    Float GetLatitude();
    Float GetLongitude();
    String GetState();
    String GetZipCode();
    Void SetAddress1(String address1);
    Void SetAddress2(String address2);
    Void SetAddress3(String address3);
    /** 
    Primary key
    */
    Void SetAddressId(Integer addressId);
    Void SetAddressType(Integer addressType);
    Void SetCity(String city);
    Void SetCounty(String county);
    Void SetFormattedAddress(String formattedAddress);
    Void SetLatitude(Float latitude);
    Void SetLongitude(Float longitude);
    Void SetState(String state);
    Void SetZipCode(String zipCode);
}`;