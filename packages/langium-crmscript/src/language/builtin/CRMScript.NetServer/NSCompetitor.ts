export const NSCompetitor = `/** 
Carrier object for Competitor.
*/
class NSCompetitor {
    Integer GetId();
    String GetTooltip();
    String GetValue();
    /** 
    Sets the primary key (ID) for the NSCompetitor.
    */
    Void SetId(Integer id);
    /** 
    Sets the tooltip description for the NSCompetitor list item.
    */
    Void SetTooltip(String tooltip);
    /** 
    Sets the name of the NSCompetitor item.
    */
    Void SetValue(String value);
}`;