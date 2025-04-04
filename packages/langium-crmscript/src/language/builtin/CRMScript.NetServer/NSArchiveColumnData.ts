export const NSArchiveColumnData = `/** 
Data carrier class for an item (cell) in an archive. Contains properties and members for three distinct values: The (visible) display value; the tooltip hint, and the link hint.
*/
class NSArchiveColumnData {
    String GetDisplayValue();
    String GetLinkHint();
    String GetTooltipHint();
    Void SetDisplayValue(String displayValue);
    Void SetLinkHint(String linkHint);
    Void SetTooltipHint(String tooltipHint);
}`;