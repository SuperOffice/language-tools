export const Rsa = `/** 
For creating and verifying RSA signatures in CRMScript.
*/
class Rsa {
    /** 
    Loads a private key. The password is optional and should be specified if needed. This method must be called in prior to creating a signature.
    */
    Bool loadPrivateKey(String privateKey, String password);
    /** 
    Loads a public key. This method must be called in prior to creating a signature.
    */
    Bool loadPublicKey(String publicKey);
    /** 
    This method will take an array of binary data and create a RSA signature using the provided hashing algorithm. The signature is returned as a byte array.
    The private key must be loaded prior to calling this method.
    */
    Byte[] createSignature(Byte[] data, Integer hashingAlgorithm);
    /** 
    This method takes a string of data and create a RSA signature using the provided hashing algorithm. This method is provided as a convenient way to create signatures for string data.
    Note that the string must be in UTF-8 encoding. If it is not, you need to use the more universal method taking a byte array as input.
    The private key must be loaded prior to calling this method.
    */
    Byte[] createSignature(String data, Integer hashingAlgorithm);
    /** 
    This method will try to verify the RSA signature given the data and return if it was a success or not. Although you should pass in the hashing algorithm, the underlying code will try other algorithms if the signature does not pass the provided algorithm. This might change in the future, so you should specify the correct algorithm.
    The public key must be loaded prior to calling this method.
    */
    Bool verifySignature(Byte[] data, Byte[] signature, Integer hashingAlgorithm);
    /** 
    This method will try to verify the RSA signature given the data and return if it was a success or not. Note that the string must be in UTF-8 encoding. If it is not, you need to use the more universal method taking a byte array as input. Although you should pass in the hashing algorithm, the underlying code will try other algorithms if the signature does not pass the provided algorithm. This might change in the future, so you should specify the correct algorithm.
    The public key must be loaded prior to calling this method.
    */
    Bool verifySignature(String data, Byte[] signature, Integer hashingAlgorithm);
    /** 
    A valid public key must have been loaded into the class. This method will use the public key and do an RSA encryption of the content.
    */
    Byte[] encrypt(Byte[] data);
    /** 
    A valid private key matching the public key must have been loaded into the class. 
    This method will use the private key and do an RSA decryption of the content. The returned byte array contains the decrypted data.
    */
    Byte[] decrypt(Byte[] data);
}`;