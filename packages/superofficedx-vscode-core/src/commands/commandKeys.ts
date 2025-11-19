/**
 * Command registration keys for VS Code commands
 */
export const CommandKeys = {
    StartNativeAppFlow: 'superOfficeDX.startNativeAppFlow',
    ViewScriptDetails: 'superOfficeDX.viewScriptDetails',
    PreviewScript: 'superOfficeDX.previewScript',
    DownloadScript: 'superOfficeDX.downloadScript',
    DownloadScriptFolder: 'superOfficeDX.downloadScriptFolder',
    ExecuteTypeScript: 'superOfficeDX.executeTypeScript',
    ExecuteTypeScriptLocally: 'superOfficeDX.executeTypeScriptLocally',
    UploadScript: 'superOfficeDX.uploadScript',

    // Source Control commands
    SourceControlRefresh: 'superOfficeDX.sourceControl.refresh',
    SourceControlTestModify: 'superOfficeDX.sourceControl.testModify',
} as const;

/**
 * Type helper for command keys
 */
export type CommandKey = typeof CommandKeys[keyof typeof CommandKeys];
