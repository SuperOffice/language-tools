export const HtmlElement = `/** 
Represents HTML elements in the SuperOffice UI.
*/
class HtmlElement {
    /** 
    Clears any selected values from elements that support this property.
    */
    Void clearValue();
    /** 
    Returns the value of a specific field.
    */
    String getFieldValue(String field);
    /** 
    Increments the index counter and returns.
    */
    Integer getNextTabIndex();
    /** 
    Retrieves the tabulator index string of the element<p></p>
    A variant of <code>getTabIndexString()</code> that omits element ID if it is the 1st element.
    */
    String getTabIndexString();
    /** 
    Retrieves the tabulator index string of the element and omits element ID if it is the 1st element.
    */
    String getTabIndexString(Bool noId);
    /** 
    Returns the element type. For example, HtmlAnchorLine or HtmlGrid.
    */
    String getTypeName();
    /** 
    Returns true if the HtmlElement says it is empty.
    */
    Bool isEmpty();
    /** 
    Toggles whether the element is visible or invisible.
    */
    Void setDisabled(Bool invisible);
    /** 
    Sets an error message above the element if the form is posted.
    */
    Void setErrorMessage(String errorMessage);
    /** 
    Sets one or more field values on an element.
    */
    Void setFieldValue(String name, Map values);
    /** 
    Called when the element should find its values from the CGI variables.
    */
    Void setFromCgi();
    /** 
    Sets an info message above the element if the form is posted.
    */
    Void setInfoMessage(String infoMessage);
    /** 
    Toggles whether the element can be edited (for those elements that support this property).
    */
    Void setNotEditable(Bool canEdit);
    /** 
    Sets the value of a specific element.
    */
    Void setValue(String value);
    /** 
    Returns the value of the element as a Bool.
    */
    Bool toBool();
    /** 
    Returns the element value as an integer.
    */
    Integer toInteger();
    /** 
    Returns the value of the element as a String.
    */
    String toString();
}`;