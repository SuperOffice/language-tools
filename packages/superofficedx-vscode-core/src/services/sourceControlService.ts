import { ExtensionContext, SourceControl, SourceControlResourceGroup, SourceControlResourceState, window, Uri, scm } from 'vscode';
import { MockSuperofficeDataService } from './mockSuperofficeDataService';
import { SuperofficeScript, SuperofficeResourceChange } from '../models/superofficeScript';

/**
 * Source control service for SuperOffice scripts
 * Phase 2: VS Code SourceControl API integration with virtual file system
 */
export class SourceControlService {
    private _isInitialized = false;
    private sourceControl?: SourceControl;
    private changedResources?: SourceControlResourceGroup;
    private untrackedResources?: SourceControlResourceGroup;
    private scriptsInMemory: Map<string, SuperofficeScript> = new Map();

    constructor(
        private readonly dataService: MockSuperofficeDataService,
        private readonly context?: ExtensionContext
    ) {}

    /**
     * Initialize the source control service
     */
    public async initialize(): Promise<void> {
        if (this._isInitialized) {
            return;
        }

        console.log('SuperOffice Source Control Service: Initializing...');
        
        // Initialize source control if context is available (Phase 2)
        if (this.context) {
            await this.initializeSourceControl();
        }
        
        this._isInitialized = true;
    }

    /**
     * Initialize VS Code Source Control (Phase 2)
     */
    private async initializeSourceControl(): Promise<void> {
        if (!this.context) {
            return;
        }

        console.log('SuperOffice Source Control Service: Initializing VS Code SourceControl...');
        
        // Create source control instance
        this.sourceControl = scm.createSourceControl('superoffice', 'SuperOffice Scripts');
        this.sourceControl.quickDiffProvider = undefined; // Will be set later when QuickDiffProvider is registered
        
        // Create resource groups
        this.changedResources = this.sourceControl.createResourceGroup('changed', 'Changed Scripts');
        this.untrackedResources = this.sourceControl.createResourceGroup('untracked', 'New Scripts');
        
        // Add to subscriptions
        this.context.subscriptions.push(this.sourceControl);
        
        console.log('SuperOffice Source Control Service: SourceControl initialized');
    }

    /**
     * Refresh data from the data service
     * Phase 2: Updates source control view with script changes
     */
    public async refresh(): Promise<void> {
        console.log('SuperOffice Source Control Service: Refreshing...');

        try {
            const scripts = await this.dataService.getScripts();
            console.log(`SuperOffice Source Control Service: Found ${scripts.length} scripts`);

            // Update scripts in memory
            this.scriptsInMemory.clear();
            scripts.forEach(script => {
                this.scriptsInMemory.set(script.id, script);
                console.log(`- ${script.name} (${script.type})`);
            });

            // Update source control view if available (Phase 2)
            if (this.sourceControl) {
                await this.updateSourceControlView();
            }

            console.log('SuperOffice Source Control Service: Refresh completed');
        } catch (error) {
            console.error('SuperOffice Source Control Service: Error during refresh:', error);
            throw error;
        }
    }

    /**
     * Update source control view with current script states (Phase 2)
     */
    private async updateSourceControlView(): Promise<void> {
        if (!this.changedResources || !this.untrackedResources) {
            return;
        }

        console.log('SuperOffice Source Control Service: Updating source control view...');
        
        // For Phase 2, we'll show all scripts as "untracked" (new scripts)
        // In a real implementation, this would detect actual changes
        const resourceStates: SourceControlResourceState[] = [];
        
        for (const script of Array.from(this.scriptsInMemory.values())) {
            const resourceState = this.createResourceState(script);
            resourceStates.push(resourceState);
        }
        
        // Update resource groups
        this.changedResources.resourceStates = [];
        this.untrackedResources.resourceStates = resourceStates;
        
        console.log(`SuperOffice Source Control Service: Added ${resourceStates.length} scripts to source control view`);
    }

    /**
     * Create a SourceControlResourceState for a script (Phase 2)
     */
    private createResourceState(script: SuperofficeScript): SourceControlResourceState {
        const uri = this.createScriptUri(script);
        
        return {
            resourceUri: uri,
            command: {
                command: 'vscode.open',
                title: 'Open Script',
                arguments: [uri]
            },
            decorations: {
                tooltip: `${script.name} - ${script.description || 'No description'}\\nLast modified: ${script.lastModified.toLocaleString()}`,
                strikeThrough: false,
                faded: false
            }
        };
    }

    /**
     * Create a virtual URI for a script (Phase 2)
     */
    private createScriptUri(script: SuperofficeScript): Uri {
        // Create custom URI scheme: superoffice-script://script-id/script-name.ext
        const extension = this.getFileExtension(script.type);
        const fileName = `${script.name.replace(/[^a-zA-Z0-9]/g, '-')}.${extension}`;
        return Uri.parse(`superoffice-script://${script.id}/${fileName}`);
    }

    /**
     * Get file extension based on script type
     */
    private getFileExtension(scriptType: string): string {
        switch (scriptType) {
            case 'CRMScript':
                return 'crmscript';
            case 'MacroScript':
                return 'macro';
            case 'EjScript':
                return 'ejscript';
            default:
                return 'script';
        }
    }

    /**
     * Commit changes for scripts (Phase 2)
     * @param message Commit message
     * @param scriptIds Optional array of script IDs to commit. If not provided, commits all modified scripts
     */
    public async commitChanges(message: string, scriptIds?: string[]): Promise<void>;
    /**
     * Commit changes for a single script (Phase 2)
     * @param scriptId The script ID to commit
     * @param message Optional commit message
     */
    public async commitChanges(scriptId: string, message?: string): Promise<void>;
    public async commitChanges(messageOrScriptId: string, scriptIdsOrMessage?: string[] | string): Promise<void> {
        // Handle overloads
        let message: string;
        let scriptIds: string[] | undefined;
        
        if (Array.isArray(scriptIdsOrMessage) || scriptIdsOrMessage === undefined) {
            // First overload: commitChanges(message, scriptIds?)
            message = messageOrScriptId;
            scriptIds = scriptIdsOrMessage as string[] | undefined;
        } else {
            // Second overload: commitChanges(scriptId, message?)
            const scriptId = messageOrScriptId;
            message = (scriptIdsOrMessage as string) || `Commit changes to ${scriptId}`;
            scriptIds = [scriptId];
        }
        
        console.log(`SuperOffice Source Control Service: Committing changes with message: "${message}"`);
        
        try {
            const scriptsToCommit = scriptIds 
                ? scriptIds.map(id => this.scriptsInMemory.get(id)).filter(script => script !== undefined)
                : Array.from(this.scriptsInMemory.values()).filter(script => script.isModified);
            
            console.log(`SuperOffice Source Control Service: Committing ${scriptsToCommit.length} scripts`);
            
            // Update scripts to mark as committed
            for (const script of scriptsToCommit) {
                if (script) {
                    console.log(`- Committing: ${script.name}`);
                    script.originalContent = script.content;
                    script.isModified = false;
                }
            }
            
            // Refresh view after commit
            await this.updateSourceControlView();
            
            window.showInformationMessage(`SuperOffice: Successfully committed ${scriptsToCommit.length} script(s)`);
        } catch (error) {
            console.error('SuperOffice Source Control Service: Error during commit:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            window.showErrorMessage(`SuperOffice: Commit failed - ${errorMessage}`);
            throw error;
        }
    }

    /**
     * Discard changes for scripts (Phase 2)
     */
    public async discardChanges(scriptIds?: string[]): Promise<void> {
        console.log('SuperOffice Source Control Service: Discarding changes...');
        
        try {
            const scriptsToDiscard = scriptIds 
                ? scriptIds.map(id => this.scriptsInMemory.get(id)).filter(script => script !== undefined)
                : Array.from(this.scriptsInMemory.values());
                
            console.log(`SuperOffice Source Control Service: Discarding ${scriptsToDiscard.length} scripts`);
            
            // In Phase 2, we'll just log the operation
            // Real implementation would reset to remote versions
            for (const script of scriptsToDiscard) {
                if (script) {
                    console.log(`- Discarding: ${script.name}`);
                }
            }
            
            // Refresh view after discard
            await this.updateSourceControlView();
            
            window.showInformationMessage(`SuperOffice: Successfully discarded changes for ${scriptsToDiscard.length} scripts`);
        } catch (error) {
            console.error('SuperOffice Source Control Service: Error during discard:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            window.showErrorMessage(`SuperOffice: Discard failed - ${errorMessage}`);
            throw error;
        }
    }

    /**
     * Get all available scripts
     */
    public async getScripts(): Promise<SuperofficeScript[]> {
        return await this.dataService.getScripts();
    }

    /**
     * Get a specific script by ID
     */
    public async getScript(id: string): Promise<SuperofficeScript | undefined> {
        return await this.dataService.getScriptAsync(id);
    }

    /**
     * Detect changes (Phase 2: basic implementation)
     */
    public async detectChanges(): Promise<SuperofficeResourceChange[]> {
        console.log('SuperOffice Source Control Service: Detecting changes...');
        
        // Phase 2: Return empty array - real change detection would compare with remote versions
        return [];
    }

    /**
     * Get the number of scripts managed by the service
     */
    public getScriptsCount(): number {
        return this.dataService.getScriptsCount();
    }

    /**
     * Check if the service is initialized
     */
    public get isInitialized(): boolean {
        return this._isInitialized;
    }

    /**
     * Get the VS Code SourceControl instance (Phase 2)
     */
    public get sourceControlInstance(): SourceControl | undefined {
        return this.sourceControl;
    }

    /**
     * Get the data service for testing purposes
     */
    public getDataService(): MockSuperofficeDataService {
        return this.dataService;
    }

    /**
     * Reset data service to defaults (useful for testing)
     */
    public resetToDefaults(): void {
        console.log('SuperOffice Source Control Service: Resetting to defaults...');
        this.dataService.resetToDefaults();
    }

    /**
     * Dispose of resources
     */
    public dispose(): void {
        console.log('SuperOffice Source Control Service: Disposing...');
        
        // Dispose VS Code SourceControl if it exists
        if (this.sourceControl) {
            this.sourceControl.dispose();
            this.sourceControl = undefined;
        }
        
        // Clear memory
        this.scriptsInMemory.clear();
        this._isInitialized = false;
    }
}