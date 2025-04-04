export const NSAssociateAgent = `/** 
Associate utilities, notes, not user administration.
*/
class NSAssociateAgent {
    /** 
    Gets an NSAssociate object.
    */
    NSAssociate GetAssociate(Integer associateId);
    /** 
    Returns the associate that belongs to this person if the person is an associate.
    */
    NSAssociate GetAssociateByPersonId(Integer personId);
    /** 
    Retrieves a list of associates.
    */
    NSAssociate[] GetAssociateList(Integer[] associateIds);
    /** 
    Returns a array of associate based on DiaryGroupType and groupId.
    */
    NSAssociate[] GetAssociatesByGroup(Integer groupId, Integer type);
    /** 
    Returns an array of strings(notepad pages).
    */
    String[] GetNote(Integer associateId);
    /** 
    Logs off associates that are logged on to the Win client
    */
    Void LogOffWindowsUsers(Integer[] associateIds);
    /** 
    Saves an array of strings(notepad pages).
    */
    Void SaveNote(Integer associateId, String[] note);
}`;