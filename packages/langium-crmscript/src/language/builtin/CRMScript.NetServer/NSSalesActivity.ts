export const NSSalesActivity = `class NSSalesActivity {
    NSContact[] GetRequestedContacts();
    NSPerson GetRequestedPerson();
    NSPerson GetSalesRep();
    Void SetRequestedContacts(NSContact[] requestedContacts);
    Void SetRequestedPerson(NSPerson requestedPerson);
    Void SetSalesRep(NSPerson salesRep);
}`;