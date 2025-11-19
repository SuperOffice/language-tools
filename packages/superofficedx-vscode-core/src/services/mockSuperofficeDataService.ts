import { SuperofficeScript } from '../models/superofficeScript';

/**
 * Mock data service for SuperOffice scripts - provides dummy data for testing and development
 */
export class MockSuperofficeDataService {
    private static readonly MOCK_SCRIPTS: SuperofficeScript[] = [
        {
            id: 'script-001',
            name: 'Customer Validation Script',
            description: 'Validates customer data on save',
            content: '// Validate customer data\nfunction validateCustomer(customer) {\n  // Implementation here\n  return true;\n}',
            lastModified: new Date('2024-01-15'),
            version: 1,
            type: 'CRMScript',
            folderId: 'folder-customer',
            originalContent: '// Validate customer data\nfunction validateCustomer(customer) {\n  // Implementation here\n  return true;\n}',
            isModified: false
        },
        {
            id: 'script-002',
            name: 'Email Template Generator',
            description: 'Generates email templates for campaigns',
            content: '// Generate email template\nfunction generateTemplate(campaign) {\n  // Implementation here\n  return template;\n}',
            lastModified: new Date('2024-01-20'),
            version: 2,
            type: 'MacroScript',
            folderId: 'folder-email',
            originalContent: '// Generate email template\nfunction generateTemplate(campaign) {\n  // Implementation here\n  return template;\n}',
            isModified: false
        },
        {
            id: 'script-003',
            name: 'Data Migration Helper',
            description: 'Assists with data migration tasks',
            content: '// Data migration helper\nfunction migrateData(source, target) {\n  // Implementation here\n}',
            lastModified: new Date('2024-01-10'),
            version: 1,
            type: 'EjScript',
            folderId: 'folder-migration',
            originalContent: '// Data migration helper\nfunction migrateData(source, target) {\n  // Implementation here\n}',
            isModified: false
        }
    ];

    private scripts: SuperofficeScript[] = [...MockSuperofficeDataService.MOCK_SCRIPTS];

    /**
     * Get all scripts
     */
    public async getScripts(): Promise<SuperofficeScript[]> {
        // Simulate async operation
        return new Promise(resolve => {
            setTimeout(() => resolve([...this.scripts]), 100);
        });
    }

    /**
     * Get a specific script by ID (synchronous)
     */
    public getScript(id: string): SuperofficeScript | undefined {
        return this.scripts.find(s => s.id === id);
    }

    /**
     * Get a specific script by ID (async version for compatibility)
     */
    public async getScriptAsync(id: string): Promise<SuperofficeScript | undefined> {
        return new Promise(resolve => {
            setTimeout(() => {
                const script = this.scripts.find(s => s.id === id);
                resolve(script);
            }, 50);
        });
    }

    /**
     * Get all scripts (synchronous)
     */
    public getAllScripts(): SuperofficeScript[] {
        return [...this.scripts];
    }

    /**
     * Simulate modifying a script for testing source control
     */
    public modifyScript(scriptId: string, newContent: string): boolean {
        const script = this.scripts.find(s => s.id === scriptId);
        if (script) {
            if (!script.originalContent) {
                script.originalContent = script.content;
            }
            script.content = newContent;
            script.isModified = script.content !== script.originalContent;
            script.lastModified = new Date();
            return true;
        }
        return false;
    }

    /**
     * Update an existing script
     */
    public async updateScript(script: SuperofficeScript): Promise<SuperofficeScript> {
        return new Promise(resolve => {
            setTimeout(() => {
                const index = this.scripts.findIndex(s => s.id === script.id);
                if (index !== -1) {
                    const updatedScript = { ...script, lastModified: new Date() };
                    this.scripts[index] = updatedScript;
                    resolve(updatedScript);
                } else {
                    // If script doesn't exist, create it
                    const newScript = { ...script, lastModified: new Date() };
                    this.scripts.push(newScript);
                    resolve(newScript);
                }
            }, 100);
        });
    }

    /**
     * Create a new script
     */
    public async createScript(script: Partial<SuperofficeScript>): Promise<SuperofficeScript> {
        return new Promise(resolve => {
            setTimeout(() => {
                const newScript: SuperofficeScript = {
                    id: `script-${Date.now()}`,
                    name: script.name || 'Untitled Script',
                    description: script.description,
                    content: script.content || '// New script',
                    lastModified: new Date(),
                    version: 1,
                    type: script.type || 'CRMScript',
                    folderId: script.folderId,
                    originalContent: script.content || '// New script',
                    isModified: false
                };

                this.scripts.push(newScript);
                resolve(newScript);
            }, 100);
        });
    }

    /**
     * Delete a script
     */
    public async deleteScript(id: string): Promise<void> {
        return new Promise(resolve => {
            setTimeout(() => {
                const index = this.scripts.findIndex(s => s.id === id);
                if (index !== -1) {
                    this.scripts.splice(index, 1);
                }
                resolve();
            }, 50);
        });
    }

    /**
     * Reset scripts to initial mock data
     */
    public resetToDefaults(): void {
        this.scripts = [...MockSuperofficeDataService.MOCK_SCRIPTS];
    }

    /**
     * Get scripts count
     */
    public getScriptsCount(): number {
        return this.scripts.length;
    }
}
