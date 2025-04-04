export const NSPreferenceSpec = `/** 
Preference specification, consisting of the section name and key name.
*/
class NSPreferenceSpec {
    String GetKey();
    String GetSection();
    Void SetKey(String key);
    Void SetSection(String section);
}`;