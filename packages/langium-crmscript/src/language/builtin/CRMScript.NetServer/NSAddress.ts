export const NSAddress = `/** 
Carrier object for Address.
*/
class NSAddress {
    /** 
    NSLocalizedField[] is a list of LocalizedFieldList objects. Used to store localized information such as formatted address data.
    */
    NSLocalizedField[][] GetLocalizedAddress();
    /** Latitude (that's north/south), decimal degrees, relative to WGS 84 ellipsoid. SuperOffice ASA is at 59.91892. This value needs no further grid reference or other qualifying information.*/
    Float GetWgs84Latitude();
    /** Longitude (that's East/west), decimal degrees, relative to WGS 84 ellipsoid. SuperOffice ASA is at 10.73159. This value needs no further grid reference or other qualifying information.*/
    Float GetWgs84Longitude();
    /** 
    NSLocalizedField[] is a list of LocalizedFieldList objects. Used to store localized information such as formatted address data.
    */
    Void SetLocalizedAddress(NSLocalizedField[][] list);
    /** Latitude (that's north/south), decimal degrees, relative to WGS 84 ellipsoid. SuperOffice ASA is at 59.91892. This value needs no further grid reference or other qualifying information.*/
    Void SetWgs84Latitude(Float latitude);
    /** Longitude (that's East/west), decimal degrees, relative to WGS 84 ellipsoid. SuperOffice ASA is at 10.73159. This value needs no further grid reference or other qualifying information.*/
    Void SetWgs84Longitude(Float longitude);
}`;