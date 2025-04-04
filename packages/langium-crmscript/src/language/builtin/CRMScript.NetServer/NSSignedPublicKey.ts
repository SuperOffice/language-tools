export const NSSignedPublicKey = `/** 
Represents all licenses for this owner at this site.
*/
class NSSignedPublicKey {
    DateTime GetExpiryDate();
    NSDSAParameters GetKey();
    String GetOwnerName();
    String GetSignature();
    DateTime GetSignDate();
    Void SetExpiryDate(DateTime expiryDate);
    Void SetKey(NSDSAParameters key);
    Void SetOwnerName(String ownerName);
    Void SetSignature(String signature);
    Void SetSignDate(DateTime signDate);
}`;