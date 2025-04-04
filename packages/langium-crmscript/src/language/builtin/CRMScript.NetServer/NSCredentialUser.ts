export const NSCredentialUser = `/** 
Information about a users credentials in a foreign system that can be bound to a SuperOffice user (associate)
*/
class NSCredentialUser {
    Bool GetCanCreatePerson();
    String[] GetColumns();
    String GetDisplayValue();
    String GetValue();
    Void SetCanCreatePerson(Bool canCreatePerson);
    Void SetColumns(String[] columns);
    Void SetDisplayValue(String displayValue);
    Void SetValue(String value);
}`;