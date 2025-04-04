export const NSResourceAgent = `/** 
String resource substitution management.
*/
class NSResourceAgent {
    /** 
    Activates or deactivates a resource substitution for one or more cultures
    */
    Void ActivateResourceSubstitution(String resourceName, String culture, Bool isActive);
    /** 
    Permanently deletes a resource substitution for one or more cultures
    */
    Void DeleteResourceSubstitution(String resourceName, String culture);
    /** 
    Gets substitutions for some or all resources for one culture
    */
    NSResourceOverride[] GetResourceSubstitutions(String[] resourceNames, String culture, Bool activeOnly);
    /** 
    Determines if resource substitution/override is active, globally or for a subset of resources/cultures
    */
    NSResourceOverride[] IsResourceSubstitutionActive(String[] resourceNames, String culture);
    /** 
    Creates or updates a resource substitution
    */
    Void SetResourceSubstitution(String resourceName, String resourceValues, String culture, Bool isActive);
}`;