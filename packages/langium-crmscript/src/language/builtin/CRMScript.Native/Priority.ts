export const Priority = `/** 
Used to handle priorities.
*/
class Priority {
    /** 
    Checks if the ticket should change its alert level based on the priority and action. If it is to change, the alert level and alert timeout for the ticket will be updated.
    */
    Void checkEscalating(Integer ticketId, Integer action);
}`;