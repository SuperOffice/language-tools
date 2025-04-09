export const NSSelectionEntity = `class NSSelectionEntity {
    NSAssociate GetAssociate();
    String GetChartKey();
    Bool GetCompanyUnique();
    Bool GetCompleted();
    NSAssociate GetCreatedBy();
    DateTime GetCreatedDate();
    String GetDescription();
    Integer GetGroupIdx();
    Integer GetIncludePerson();
    DateTime GetLastLoaded();
    Integer GetLastLoadedBy();
    NSAssociate GetLastLoadedByAssociate();
    DateTime GetLastMembershipChange();
    Integer GetLastMembershipChangeBy();
    NSAssociate GetLastMembershipChangeByAssociate();
    /** 
    LeftSelectionId is used in combination with RightSelectionId and CombinationType to define an union of two selections when SelectionType=Combined.
    */
    Integer GetLeftSelectionId();
    String GetMailingsProviderName();
    String GetMainHeading();
    String GetMainProviderName();
    Integer GetMemberCount();
    String GetMemberTabHeading();
    String GetName();
    String GetPostit();
    Integer GetPostitTextId();
    /** 
    RightSelectionId  is used in combination with LeftSelectionId and CombinationType to define an union of two selections when SelectionType=Combined.
    */
    Integer GetRightSelectionId();
    NSSelectionCategory GetSelectionCategory();
    /** 
    Primary key
    */
    Integer GetSelectionId();
    Integer GetSelectionType();
    Integer GetSelectionUnionType();
    String GetShadowProviderName();
    String GetSoundEx();
    Integer GetSource();
    String GetTargetTableName();
    Integer GetTargetTableNumber();
    Integer GetTextId();
    NSAssociate GetUpdatedBy();
    Integer GetUpdatedCount();
    DateTime GetUpdatedDate();
    /** 
    Obsolete, but still maintained de-normalization of visiblefor
    */
    Integer GetVisibility();
    /** 
    Returns the user groups and/or users the SelectionEntity item is visible for.
    */
    NSVisibleFor[] GetVisibleFor();
    Void SetAssociate(NSAssociate associate);
    Void SetChartKey(String chartKey);
    Void SetCompanyUnique(Bool companyUnique);
    Void SetCompleted(Bool completed);
    Void SetCreatedBy(NSAssociate createdBy);
    Void SetCreatedDate(DateTime createdDate);
    Void SetDescription(String description);
    Void SetGroupIdx(Integer groupIdx);
    Void SetIncludePerson(Integer includePerson);
    Void SetLastLoaded(DateTime lastLoaded);
    Void SetLastLoadedBy(Integer lastLoadedBy);
    Void SetLastLoadedByAssociate(NSAssociate lastLoadedByAssociate);
    Void SetLastMembershipChange(DateTime lastMembershipChange);
    Void SetLastMembershipChangeBy(Integer lastMembershipChangeBy);
    Void SetLastMembershipChangeByAssociate(NSAssociate lastMembershipChangeByAssociate);
    /** 
    LeftSelectionId is used in combination with RightSelectionId and CombinationType to define an union of two selections when SelectionType=Combined.
    */
    Void SetLeftSelectionId(Integer leftSelectionId);
    Void SetMailingsProviderName(String mailingsProviderName);
    Void SetMainHeading(String mainHeading);
    Void SetMainProviderName(String mainProviderName);
    Void SetMemberCount(Integer memberCount);
    Void SetMemberTabHeading(String memberTabHeading);
    Void SetName(String name);
    Void SetPostit(String postit);
    Void SetPostitTextId(Integer postitTextId);
    /** 
    RightSelectionId  is used in combination with LeftSelectionId and CombinationType to define an union of two selections when SelectionType=Combined.
    */
    Void SetRightSelectionId(Integer rightSelectionId);
    Void SetSelectionCategory(NSSelectionCategory selectionCategory);
    Void SetSelectionId(Integer selectionId);
    Void SetSelectionType(Integer selectionType);
    Void SetSelectionUnionType(Integer selectionUnionType);
    Void SetShadowProviderName(String shadowProviderName);
    Void SetSoundEx(String soundEx);
    Void SetSource(Integer source);
    Void SetTargetTableName(String targetTableName);
    Void SetTargetTableNumber(Integer targetTableNumber);
    Void SetTextId(Integer textId);
    Void SetUpdatedBy(NSAssociate updatedBy);
    Void SetUpdatedCount(Integer updatedCount);
    Void SetUpdatedDate(DateTime updatedDate);
    /** 
    Obsolete, but still maintained de-normalization of visiblefor
    */
    Void SetVisibility(Integer visibility);
    /** 
    Sets the user-groups and/or users the SelectionEntity item is visible for.
    */
    Void SetVisibleFor(NSVisibleFor[] visibleFor);
}`;