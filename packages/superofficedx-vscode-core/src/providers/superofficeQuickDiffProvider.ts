import { QuickDiffProvider, Uri, ProviderResult } from 'vscode';
import { MockSuperofficeDataService } from '../services/mockSuperofficeDataService';

/**
 * SuperOffice QuickDiff Provider for VS Code source control diff functionality
 * Provides original content for script comparisons
 */
export class SuperofficeQuickDiffProvider implements QuickDiffProvider {
    constructor(
        private readonly dataService: MockSuperofficeDataService
    ) { }

    /**
     * Provide the original resource URI for diff comparison
     * @param uri - The modified resource URI
     * @returns URI for the original content or null if not applicable
     */
    provideOriginalResource(uri: Uri): ProviderResult<Uri> {
        // Only handle our custom scheme
        if (uri.scheme === 'superoffice-script') {
            // Return URI with different scheme for original content
            return uri.with({ scheme: 'superoffice-original' });
        }

        return null;
    }

    /**
     * Extract script ID from URI path
     * @param uri - The URI to extract script ID from
     * @returns Script ID or null if not found
     */
    public extractScriptId(uri: Uri): string | null {
        if (uri.scheme === 'superoffice-script' || uri.scheme === 'superoffice-original') {
            // URI format: superoffice-script://script-id/script-name.ext
            const pathParts = uri.authority; // This contains the script-id
            return pathParts || null;
        }

        return null;
    }

    /**
     * Get script content for a given script ID
     * @param scriptId - The script ID
     * @returns Script content or null if not found
     */
    public async getScriptContent(scriptId: string): Promise<string | null> {
        try {
            const script = await this.dataService.getScriptAsync(scriptId);
            return script?.content || null;
        } catch (error) {
            console.error('SuperOffice QuickDiff: Error getting script content:', error);
            return null;
        }
    }
}
