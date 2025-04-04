export const Pbes = `/** 
Used to provide encryption of data using a password. The encryption is a PBKDF2 cryptographic key derivation function. The underlying encryption algorithm is rc2. 
Note that all Service installations will be using the same salt.
*/
class Pbes {
    /** 
    The content in the data array will be encrypted using the supplied password. Since this is working on binary data, you must handle character sets if converting between byte data and strings.
    */
    Byte[] encrypt(Byte[] data, String password);
    /** 
    The content in the data array will be decrypted using the supplied password. Since this is working on binary data, you must handle character sets if converting between byte data and strings.
    Note that this method does not check if the password is the same as used when encrypting. If wrong password is used, you will get something else than the original data back.
    */
    Byte[] decrypt(Byte[] data, String password);
}`;