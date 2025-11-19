import { TextDocumentContentProvider, Uri, CancellationToken } from 'vscode';
import { MockSuperofficeDataService } from '../services/mockSuperofficeDataService';

/**
 * SuperOffice Document Content Provider
 * Provides script content for virtual files with custom URI schemes
 */
export class SuperofficeDocumentContentProvider implements TextDocumentContentProvider {
    constructor(
        private readonly dataService: MockSuperofficeDataService
    ) {}

    /**
     * Provide text document content for custom URI schemes
     * @param uri - The URI to provide content for
     * @param _token - Cancellation token (unused in this implementation)
     * @returns Script content as string
     */
    async provideTextDocumentContent(uri: Uri, _token?: CancellationToken): Promise<string> {
        try {
            const scriptId = this.extractScriptId(uri);
            
            if (!scriptId) {
                return '// Error: Could not extract script ID from URI\\n// URI: ' + uri.toString();
            }

            const script = await this.dataService.getScriptAsync(scriptId);
            
            if (!script) {
                return `// Error: Script not found with ID: ${scriptId}\\n// URI: ${uri.toString()}`;
            }

            // For original content URI scheme, return the script content as-is
            // For modified content, in a real implementation this would show local changes
            return script.content;
            
        } catch (error) {
            console.error('SuperOffice Document Content Provider: Error providing content:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return `// Error loading script content: ${errorMessage}\\n// URI: ${uri.toString()}`;
        }
    }

    /**
     * Extract script ID from URI
     * Supports both superoffice-script:// and superoffice-original:// schemes
     * @param uri - The URI to extract script ID from
     * @returns Script ID or null if not found
     */
    private extractScriptId(uri: Uri): string | null {
        if (uri.scheme === 'superoffice-script' || uri.scheme === 'superoffice-original') {
            // URI format: superoffice-script://script-id/script-name.ext
            // The script ID is in the authority part
            return uri.authority || null;
        }
        
        return null;
    }

    /**
     * Handle URI changes (optional for TextDocumentContentProvider)
     * @param uri - The URI that changed
     */
    public notifyChange(uri: Uri): void {
        // In a real implementation, this would emit onDidChange event
        console.log(`SuperOffice Document Content Provider: Content changed for ${uri.toString()}`);
    }
}