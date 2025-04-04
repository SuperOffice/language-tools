export const XMLNode = `/** 
This class represents an XML DOM structure.
*/
class XMLNode {
    /** 
    Pass an object to copy.
    */
    constructor(XMLNode value);
    /** 
    Pass a string to parse and create a new object.
    */
    constructor(String value);
    /** 
    Creates a string containing the XMLNode as a formatted string. Child nodes are also included.
    */
    String toString(Integer indent);
    /** 
    Creates a string containing XML nodes formatted as a JSON document. Child nodes are also included.
    */
    String toJSON(Integer indent);
    /** 
    Add one node as a child node of the current node.
    */
    Void addChild(XMLNode node);
    /** 
    Returns an array of the current node's children.
    */
    XMLNode[] getChildren();
    /** 
    Sets an array of XMLNodes as the children of the current node.
    */
    Void setChildren(XMLNode[] children);
    /** 
    Gets the name of the XML tag.
    */
    String getName();
    /** 
    Sets the tag name of the node.
    */
    Void setName(String name);
    /** 
    Gets a parameter (attribute) from the node with a given name.
    */
    String getParameter(String name);
    /** 
    Sets a parameter with name and value. A node can have any number of parameters but all names must be unique.
    */
    Void setParameter(String name, String value);
    /** 
    Gets the text between two tags. For example, &gt;TAG>Returns this text&gt;/TAG>
    */
    String getText();
    /** 
    Sets the text between 2 tags.
    */
    Void setText(String text);
    /** 
    This function will return the value for the given path. The path should be a dot-separated string containing either names of nodes or indices.
    */
    String getValueFromPath(String path);
    /** 
    This function will return the XMLNode for the given path. The path should be a dot-separated string containing either names of nodes or indices.
    */
    XMLNode getNodeFromPath(String path);
}`;