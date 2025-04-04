export const NSCategorizationModelDetails = `/** 
Details about a categorization model in HugoAI. Carrier object for CategorizationModelDetails
*/
class NSCategorizationModelDetails {
    Float GetAccuracy();
    DateTime GetModelBuiltDateTime();
    Integer GetTicketCountForTraining();
    Void SetAccuracy(Float accuracy);
    Void SetModelBuiltDateTime(DateTime modelBuiltDateTime);
    Void SetTicketCountForTraining(Integer ticketCountForTraining);
}`;