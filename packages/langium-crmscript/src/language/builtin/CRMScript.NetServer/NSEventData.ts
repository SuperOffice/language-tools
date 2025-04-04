export const NSEventData = `/** 
Data related to event handlers.
*/
class NSEventData {
    Bool GetBlockExecution();
    String GetException();
    Map GetInputValues();
    String GetMessage();
    String GetNavigateTo();
    Map GetOutputValues();
    Map GetStateValues();
    Integer GetType();
    Void SetBlockExecution(Bool blockExecution);
    Void SetException(String exception);
    Void SetInputValues(Map inputValues);
    Void SetMessage(String message);
    Void SetNavigateTo(String navigateTo);
    Void SetOutputValues(Map outputValues);
    Void SetStateValues(Map stateValues);
    Void SetType(Integer type);
}`;