export const NSQuoteVersionWorkflowState = `/** 
Information about possible button actions for the quote version dialog.
*/
class NSQuoteVersionWorkflowState {
    NSQuoteVersionButtonState[] GetActionButtons();
    NSQuoteVersionButtonState GetStateImage();
    NSQuoteVersionStatusInformation GetStatus();
    NSQuoteVersionButtonState GetUpdatePricesButton();
    Void SetActionButtons(NSQuoteVersionButtonState[] actionButtons);
    Void SetStateImage(NSQuoteVersionButtonState stateImage);
    Void SetStatus(NSQuoteVersionStatusInformation status);
    Void SetUpdatePricesButton(NSQuoteVersionButtonState updatePricesButton);
}`;