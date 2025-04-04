export const DbiControl = `/** 
Used for communicating with DBI agents to share data with external systems.
*/
class DbiControl {
    /** 
    When fetching data from external system, this function is called repeatedly.
    */
    Map getObject();
    /** 
    Returns the value of the given parameter.
    */
    String getParameter(String name);
    /** 
    Retrieves parameters for a DBI setup.
    */
    Map getParameters();
    /** 
    Saves a parameter to the object.
    */
    Void saveParameter(String name, String val);
    /** 
    This function will send an object to the external system agent, during a DBI integration session.
    */
    Void sendObject(Map values);
    /** 
    Allows you to set parameter values that are sent to the external DBI agent.
    */
    Void setParameter(String name, String val);
}`;