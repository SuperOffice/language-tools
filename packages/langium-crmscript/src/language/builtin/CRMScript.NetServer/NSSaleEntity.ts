export const NSSaleEntity = `/** 
The Sale Entity contains the sale amount, currency, and sale members. Sales are linked to contacts, persons, and/or projects.
*/
class NSSaleEntity {
    Integer GetActiveErpLinks();
    Integer GetActiveLinks();
    Float GetAmount();
    NSAppointment GetAppointment();
    NSAssociate GetAssociate();
    NSCompetitor GetCompetitor();
    Integer GetCompleted();
    NSContact GetContact();
    NSAssociate GetCreatedBy();
    DateTime GetCreatedDate();
    NSCredited GetCredited();
    NSCurrency GetCurrency();
    /** 
    Gets the user-defined + extra fields on a SaleEntity as a map.
    */
    Map GetCustomFields();
    Float GetEarning();
    Float GetEarningPercent();
    /** 
    Gets the extra fields on SaleEntity as a map.
    */
    Map GetExtraFields();
    String GetHeading();
    Bool GetIsPublished();
    NSLink[] GetLinks();
    DateTime GetNextDueDate();
    String GetNumber();
    /** 
    A sale may also be connected to a person. This must be a contact person registered on the current contact. This does not mean that a person is required.
    */
    NSPerson GetPerson();
    String GetPostit();
    Integer GetProbability();
    /** 
    A sale may also be connected to a project, so you see the sale both on the company card, and on the project card. This does not mean that a project is required.
    */
    NSProject GetProject();
    DateTime GetPublishEventDate();
    DateTime GetPublishFrom();
    DateTime GetPublishTo();
    NSRating GetRating();
    NSReason GetReason();
    NSReasonSold GetReasonSold();
    NSReasonStalled GetReasonStalled();
    DateTime GetReopenDate();
    DateTime GetSaledate();
    Integer GetSaleId();
    NSSaleStakeholder[] GetSaleStakeholders();
    String GetSaleText();
    NSSaleType GetSaleType();
    NSSource GetSource();
    Integer GetStatus();
    NSAssociate GetUpdatedBy();
    DateTime GetUpdatedDate();
    /** 
    Gets the user-defined fields on the SaleEntity as a map.
    */
    Map GetUserDefinedFields();
    /** 
    Returns the user groups and/or users the SaleEntity item is visible for.
    */
    NSVisibleFor[] GetVisibleFor();
    Void SetActiveErpLinks(Integer activeErpLinks);
    Void SetActiveLinks(Integer activeLinks);
    Void SetAmount(Float amount);
    Void SetAppointment(NSAppointment appointment);
    Void SetAssociate(NSAssociate associate);
    Void SetCompetitor(NSCompetitor competitor);
    Void SetCompleted(Integer completed);
    Void SetContact(NSContact contact);
    Void SetCreatedBy(NSAssociate createdBy);
    /** 
    Registered date
    */
    Void SetCreatedDate(DateTime createdDate);
    Void SetCredited(NSCredited credited);
    Void SetCurrency(NSCurrency currency);
    /** 
    Sets the user-defined and extra fields on a SaleEntity with a map.
    */
    Void SetCustomFields(Map udefs);
    Void SetEarning(Float earning);
    Void SetEarningPercent(Float earningPercent);
    /** 
    Sets the extra field values on SaleEntity with a map.
    */
    Void SetExtraFields(Map extras);
    Void SetHeading(String heading);
    /** 
    Sets the visibility of the entity
    */
    Void SetIsPublished(Bool isPublished);
    Void SetLinks(NSLink[] links);
    /** 
     Maintained by the system, but very convenient for searching.
    */
    Void SetNextDueDate(DateTime nextDueDate);
    Void SetNumber(String number);
    /** 
    A sale may also be connected to a person. This must be a contact person registered on the current contact. This does not mean that a person is required.
    */
    Void SetPerson(NSPerson person);
    Void SetPostit(String postit);
    Void SetProbability(Integer probability);
    /** 
    A sale may also be connected to a project, so you see the sale both on the company card, and on the project card. This does not mean that a project is required.
    */
    Void SetProject(NSProject project);
    Void SetPublishEventDate(DateTime publishDate);
    /** 
    Sets the publish from date on a SaleEntity.
    */
    Void SetPublishFrom(DateTime publishFrom);
    /** 
    Sets the publish to date on SaleEntity.
    */
    Void SetPublishTo(DateTime publishTo);
    Void SetRating(NSRating rating);
    Void SetReason(NSReason reason);
    Void SetReasonSold(NSReasonSold reasonSold);
    Void SetReasonStalled(NSReasonStalled reasonStalled);
    Void SetReopenDate(DateTime reopenDate);
    Void SetSaledate(DateTime saledate);
    Void SetSaleId(Integer saleId);
    Void SetSaleStakeholders(NSSaleStakeholder[] saleStakeholders);
    Void SetSaleText(String saleText);
    Void SetSaleType(NSSaleType saleType);
    Void SetSource(NSSource source);
    Void SetStatus(Integer status);
    Void SetUpdatedBy(NSAssociate updatedBy);
    Void SetUpdatedDate(DateTime updatedDate);
    /** 
    Sets the user-defined fields on the SaleEntity as a map.
    */
    Void SetUserDefinedFields(Map udefs);
    /** 
    Sets the user groups and/or users the SaleEntity item is visible for.
    */
    Void SetVisibleFor(NSVisibleFor[] visibleFor);
}`;