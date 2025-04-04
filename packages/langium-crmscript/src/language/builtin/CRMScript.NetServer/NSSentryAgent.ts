export const NSSentryAgent = `/** 
Data and function right queries.
*/
class NSSentryAgent {
    /** 
    Checks if the current associate can create appointments in diaries belonging all other associates. It checks only against associates that are diary owners.
    */
    Bool CanCreateAppointmentInAllDiaries();
    /** 
    Checks if the current associate can create appointments in diaries belonging to the associates listed in associateIds. Checks only against associates that are diary owners.
    */
    Bool CanCreateAppointmentInAssociateDiaries(Integer[] associateIds);
    /** 
    Checks if the current associate can create appointments in diaries belonging to the associates listed in associateIds. Checks only against associates who are diary owners.
    */
    Bool[] CanCreateAppointmentInEachAssociatesDiary(Integer[] associateIds);
    /** 
    Gets a string array of all functions rights for the role of the current associate.
    */
    String[] GetFunctionRights();
    /** 
    Returns an NSTableRight for a new row based on tableName parameter.
    */
    NSTableRight GetNewTableRight(String tableName);
    /** 
    Return the NSTableRight from the relationship between the current user and the given user and group.
    */
    NSTableRight GetTableRightByContactOwnership(String tableName, Integer contactId);
    /** 
    Return the NSTableRight from the relationship between the current user and the given user and group.
    */
    NSTableRight GetTableRightByOwnership(String tableName, Integer contactGroupId, Integer contactAssociateId);
    /** 
    Gets a boolean value indicating if the current user has the functional right.
    */
    Bool HasFunctionRight(String functionRight);
}`;