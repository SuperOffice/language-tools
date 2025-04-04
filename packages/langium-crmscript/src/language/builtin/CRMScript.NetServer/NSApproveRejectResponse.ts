export const NSApproveRejectResponse = `/** 
Contains a PluginResponse and an appointment ID if the operation created one.
*/
class NSApproveRejectResponse {
    Integer GetCreatedAppointmentId();
    NSPluginResponse GetPluginResponse();
    Void SetCreatedAppointmentId(Integer createdAppointmentId);
    Void SetPluginResponse(NSPluginResponse pluginResponse);
}`;