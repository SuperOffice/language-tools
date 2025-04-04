export const NSEntityElement = `/** 
Generic carrier object for entity elements such as Phone, EntityElement, Url. These elements do not have id and rank. These values are changed on each save, and should not be depended on. When used in a list or array the rank is the ascending list order. Carrier object for EntityElement.
*/
class NSEntityElement {
    String GetDescription();
    String GetStrippedValue();
    String GetValue();
    Void SetDescription(String description);
    Void SetStrippedValue(String value);
    Void SetValue(String value);
}`;