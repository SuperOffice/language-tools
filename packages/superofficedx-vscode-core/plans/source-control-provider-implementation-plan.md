# Source Control Provider Implementation Plan for SuperOffice Core Extension

## Overview

This document outlines a comprehensive plan for implementing a VS Code Source Control Provider within the `superofficedx-vscode-core` package. The implementation will follow the established patterns from Microsoft's source-control-sample and integrate with the existing DI container architecture.

## Architecture Design

### 1. Core Components

#### A. Extended Source Control Service (Phase 2)

```typescript
export class SourceControlService {
    // Phase 1 properties
    private _isInitialized = false;
    private readonly dataService: MockSuperofficeDataService;

    // Phase 2 additions
    private sourceControl?: vscode.SourceControl;
    private changedResources?: vscode.SourceControlResourceGroup;
    private untrackedResources?: vscode.SourceControlResourceGroup;
    private scriptsInMemory: Map<string, SuperofficeScript> = new Map();

    constructor(
        // Phase 1 - simplified
        dataService: MockSuperofficeDataService,
        // Phase 2 - add these back
        private readonly context?: vscode.ExtensionContext,
        private readonly authProvider?: SuperofficeAuthenticationProvider,
        private readonly httpService?: HttpService
    );

    // Phase 1 methods (existing)
    public async initialize(): Promise<void>;
    public async refresh(): Promise<void>;
    public getScriptsCount(): number;

    // Phase 2 additions
    public async initializeSourceControl(): Promise<void>;
    public async updateSourceControlView(): Promise<void>;
    public async commitChanges(message: string): Promise<void>;
    public async discardChanges(scriptIds?: string[]): Promise<void>;
    private createScriptUri(script: SuperofficeScript): vscode.Uri;
    private createResourceState(script: SuperofficeScript): vscode.SourceControlResourceState;
}

### 2. Integration Points

#### B. DI Container Integration

- Add new configuration keys to `configurationKeys.ts`:
  - `SourceControlService`
  - `SuperofficeQuickDiffProvider`
  - `SuperofficeDocumentContentProvider`
  - `MockSuperofficeDataService`
- Register new services in `serviceConfiguration.ts`
- Register new providers in `providerConfiguration.ts`
- Ensure proper dependency injection for all components

#### C. Command Integration

- Create `src/commands/handlers/sourceControlCommands.ts` following existing pattern
- Register in `commandRegistration.ts` alongside `authCommands` and `scriptCommands`
- Integrate with existing authentication flow
- Leverage existing HTTP service for API calls

#### C. Extension Activation

- Register source control provider in main `extension.ts`
- Hook into workspace folder events
- Initialize for existing authenticated sessions

## Implementation Details

### 1. Data Model

#### A. SuperOffice Script Entity

```typescript
export interface SuperofficeScript {
    id: string;
    name: string;
    description?: string;
    content: string;
    lastModified: Date;
    version?: number;
    type: 'CRMScript' | 'MacroScript' | 'EjScript';
    folderId?: string;
}
```

#### B. Change Detection Entity

```typescript
export interface SuperofficeResourceChange {
    uri: vscode.Uri;
    status: 'modified' | 'added' | 'deleted' | 'untracked';
    originalContent?: string;
    localContent?: string;
    remoteScript?: SuperofficeScript;
}
```

### 2. Configuration Keys

Add these keys to `src/container/configurations/configurationKeys.ts`:

```typescript
export const ConfigurationKeys = {
    // ... existing keys ...

    // Source Control
    SourceControlService: Symbol('SourceControlService'),
    SuperofficeQuickDiffProvider: Symbol('SuperofficeQuickDiffProvider'),
    SuperofficeDocumentContentProvider: Symbol('SuperofficeDocumentContentProvider'),
    MockSuperofficeDataService: Symbol('MockSuperofficeDataService'),

    // ... rest of existing keys ...
} as const;
```

### 3. Core Provider Implementation

#### B. QuickDiff Provider (Simplified)

```typescript
export class SuperofficeQuickDiffProvider implements vscode.QuickDiffProvider {
    constructor(
        private readonly dataService: MockSuperofficeDataService
    ) {}

    // QuickDiffProvider implementation
    provideOriginalResource(
        uri: vscode.Uri,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Uri> {
        // Return URI for original content
        if (uri.scheme === 'superoffice-script') {
            return uri.with({ scheme: 'superoffice-original' });
        }
        return null;
    }
}
```

#### C. Document Content Provider

```typescript
export class SuperofficeDocumentContentProvider implements vscode.TextDocumentContentProvider {
    constructor(
        private readonly dataService: MockSuperofficeDataService
    ) {}

    async provideTextDocumentContent(
        uri: vscode.Uri,
        token: vscode.CancellationToken
    ): Promise<string> {
        // Extract script ID from URI and return content
        const scriptId = this.extractScriptId(uri);
        const script = await this.dataService.getScript(scriptId);
        return script?.content || '';
    }

    private extractScriptId(uri: vscode.Uri): string {
        // Parse custom URI to get script ID
        return uri.path.split('/')[0];
    }
}
```

### 2. DI Container Configuration Keys

Add these keys to `src/container/configurations/configurationKeys.ts`:

```typescript
export const ConfigurationKeys = {
    // ... existing keys ...

    // Source Control
    SourceControlService: Symbol('SourceControlService'),
    SuperofficeQuickDiffProvider: Symbol('SuperofficeQuickDiffProvider'),
    SuperofficeDocumentContentProvider: Symbol('SuperofficeDocumentContentProvider'),
    MockSuperofficeDataService: Symbol('MockSuperofficeDataService'),

    // ... rest of existing keys ...
} as const;
```

### 3. Dummy Data Implementation Strategy

For initial implementation and testing without live SuperOffice API integration:

#### A. Mock Data Service

```typescript
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
            folderId: 'folder-customer'
        },
        {
            id: 'script-002',
            name: 'Email Template Generator',
            description: 'Generates email templates for campaigns',
            content: '// Generate email template\nfunction generateTemplate(campaign) {\n  // Implementation here\n  return template;\n}',
            lastModified: new Date('2024-01-20'),
            version: 2,
            type: 'MacroScript',
            folderId: 'folder-email'
        },
        {
            id: 'script-003',
            name: 'Data Migration Helper',
            description: 'Assists with data migration tasks',
            content: '// Data migration helper\nfunction migrateData(source, target) {\n  // Implementation here\n}',
            lastModified: new Date('2024-01-25'),
            version: 1,
            type: 'EjScript',
            folderId: 'folder-migration'
        }
    ];

    public async getScripts(): Promise<SuperofficeScript[]>;
    public async getScript(id: string): Promise<SuperofficeScript>;
    public async updateScript(script: SuperofficeScript): Promise<SuperofficeScript>;
    public async createScript(script: Partial<SuperofficeScript>): Promise<SuperofficeScript>;
    public async deleteScript(id: string): Promise<void>;
}
```

#### B. File System Simulation

- Create dummy files in workspace that represent remote scripts
- Use `.superoffice` folder to store metadata
- Implement change detection by comparing file contents with "remote" versions

### 4. Command Contributions

Add to `package.json` contributions:

```json
{
  "contributes": {
    "commands": [
      {
        "command": "superoffice.sourceControl.refresh",
        "title": "Refresh",
        "icon": "$(refresh)"
      },
      {
        "command": "superoffice.sourceControl.pull",
        "title": "Pull Scripts",
        "icon": "$(cloud-download)"
      },
      {
        "command": "superoffice.sourceControl.push",
        "title": "Push Scripts",
        "icon": "$(cloud-upload)"
      },
      {
        "command": "superoffice.sourceControl.commit",
        "title": "Commit All",
        "icon": "$(check)"
      },
      {
        "command": "superoffice.sourceControl.discard",
        "title": "Discard Changes",
        "icon": "$(discard)"
      },
      {
        "command": "superoffice.sourceControl.openChanges",
        "title": "Open Changes"
      },
      {
        "command": "superoffice.sourceControl.openFile",
        "title": "Open File"
      }
    ],
    "menus": {
      "scm/title": [
        {
          "command": "superoffice.sourceControl.refresh",
          "group": "navigation",
          "when": "scmProvider == superoffice"
        },
        {
          "command": "superoffice.sourceControl.pull",
          "group": "navigation",
          "when": "scmProvider == superoffice"
        },
        {
          "command": "superoffice.sourceControl.push",
          "group": "navigation",
          "when": "scmProvider == superoffice"
        },
        {
          "command": "superoffice.sourceControl.commit",
          "group": "navigation",
          "when": "scmProvider == superoffice"
        }
      ],
      "scm/resourceGroup/context": [
        {
          "command": "superoffice.sourceControl.discard",
          "when": "scmProvider == superoffice"
        }
      ],
      "scm/resourceState/context": [
        {
          "command": "superoffice.sourceControl.openChanges",
          "when": "scmProvider == superoffice",
          "group": "navigation"
        },
        {
          "command": "superoffice.sourceControl.openFile",
          "when": "scmProvider == superoffice",
          "group": "navigation"
        },
        {
          "command": "superoffice.sourceControl.discard",
          "when": "scmProvider == superoffice",
          "group": "1_modification"
        }
      ]
    }
  }
}
```

### 5. Configuration Management

#### A. Settings Contribution

```json
{
  "contributes": {
    "configuration": {
      "title": "SuperOffice Source Control",
      "properties": {
        "superoffice.sourceControl.enabled": {
          "type": "boolean",
          "default": true,
          "description": "Enable SuperOffice source control integration"
        },
        "superoffice.sourceControl.autoRefresh": {
          "type": "boolean",
          "default": true,
          "description": "Automatically refresh when files change"
        },
        "superoffice.sourceControl.refreshInterval": {
          "type": "number",
          "default": 30,
          "description": "Auto refresh interval in seconds"
        },
        "superoffice.sourceControl.maxConcurrentOperations": {
          "type": "number",
          "default": 5,
          "description": "Maximum number of concurrent operations"
        }
      }
    }
  }
}
```

## File Structure

```text
packages/superofficedx-vscode-core/
├── src/
│   ├── providers/
│   │   ├── superofficeQuickDiffProvider.ts         # Repository operations (QuickDiffProvider)
│   │   ├── sourceControlResourceStateProvider.ts   # Resource state management
│   │   └── superofficeDocumentContentProvider.ts   # Document content for diffs
│   ├── services/
│   │   ├── sourceControlService.ts                # Main source control orchestration
│   │   └── mockSuperofficeDataService.ts          # Dummy data service
│   ├── commands/
│   │   └── handlers/
│   │       └── sourceControlCommands.ts           # Source control command handlers
│   ├── models/
│   │   ├── superofficeScript.ts                   # Script entity model
│   │   └── superofficeResourceChange.ts           # Change detection model
│   ├── container/
│   │   └── configurations/
│   │       ├── configurationKeys.ts               # Updated with source control keys
│   │       ├── serviceConfiguration.ts            # Register source control services
│   │       └── providerConfiguration.ts           # Register source control providers
│   └── utils/
│       ├── sourceControlUtils.ts                  # Source control utilities
│       └── diffUtils.ts                           # Diff operation utilities
├── plans/
│   └── source-control-provider-implementation-plan.md  # This document
└── resources/
    └── icons/                                      # Source control specific icons
```

## Implementation Phases

### Phase 1: Basic Infrastructure (Week 1)

1. **DI Container Setup**:
   - Add configuration keys to `configurationKeys.ts`
   - Create basic service and provider registrations
   - Follow existing DI patterns

2. **Mock Data Service**:
   - Create `MockSuperofficeDataService` with dummy scripts
   - Register in `serviceConfiguration.ts`

3. **Basic Source Control Service**:
   - Create minimal `SourceControlService` with refresh functionality
   - Register in `serviceConfiguration.ts`
   - No VS Code SourceControl API integration yet (defer to Phase 2)
   - Simplified constructor with only MockSuperofficeDataService dependency for Phase 1
   - Additional dependencies (ExtensionContext, AuthProvider, HttpService) will be added in Phase 2

4. **Command Infrastructure**:
   - Create `sourceControlCommands.ts` handler following existing pattern
   - Register in `commandRegistration.ts`
   - Add minimal command to `package.json` (just refresh)

5. **Testing & Validation**:
   - Ensure DI container resolves all dependencies
   - Test basic command execution
   - Verify integration with existing extension activation

### Phase 2: VS Code Source Control Integration (Week 2)

**Key Architectural Decisions for Phase 2:**

- Extend existing `SourceControlService` (don't create new class)
- Use virtual file system approach for script representation
- Scripts will be represented as virtual files with custom URI scheme
- No local workspace folder dependency - purely virtual

1. **VS Code SourceControl API Integration**:
   - Extend existing `SourceControlService` with VS Code APIs
   - Add constructor parameters: ExtensionContext, AuthProvider, HttpService
   - Create VS Code SourceControl instance and resource groups
   - Register source control provider in extension activation

2. **Virtual File System Strategy**:
   - Use custom URI scheme: `superoffice-script://script-id/script-name.ext`
   - Represent scripts as virtual files in source control view
   - No local file watching needed - use polling or manual refresh
   - Scripts exist only in memory/remote - no local workspace files

3. **Provider Implementations**:
   - **Separate responsibilities**: Create distinct providers for different functions
   - `SuperofficeQuickDiffProvider` - implements QuickDiffProvider for VS Code
   - `SuperofficeDocumentContentProvider` - provides script content for diffs
   - Keep existing pattern: register in `providerConfiguration.ts`

4. **Change Detection Strategy**:
   - Compare in-memory script content with remote versions
   - Manual refresh-based (no file watchers for Phase 2)
   - Use script `lastModified` timestamps for change detection
   - Create SourceControlResourceState objects for changed scripts

5. **Basic Operations**:
   - Refresh: Update source control view with script changes
   - Commit: Upload modified scripts to SuperOffice
   - Discard: Reset scripts to remote versions
   - Authentication: Show appropriate messages when not authenticated

### Phase 3: Advanced Features (Week 3)

1. Implement QuickDiff provider for inline diff
2. Add document content provider for comparisons
3. Create comprehensive diff viewing
4. Add pull/push operations
5. Enhanced error handling and logging

### Phase 4: Polish & Testing (Week 4)

1. Comprehensive unit tests
2. Integration tests with mock data
3. Performance optimization
4. Documentation and code cleanup
5. Prepare for real API integration

## DI Container Configuration

### Service Registration

Update `src/container/configurations/serviceConfiguration.ts`:

```typescript
export function configureServices(container: DIContainer): void {
    // ... existing service registrations ...

    // Source Control Services
    container.registerSingleton(ConfigurationKeys.MockSuperofficeDataService, () =>
        new MockSuperofficeDataService()
    );

    container.registerSingleton(ConfigurationKeys.SourceControlService, () =>
        new SourceControlService(
            container.resolve(ConfigurationKeys.ExtensionContext),
            container.resolve(ConfigurationKeys.AuthenticationProvider),
            container.resolve(ConfigurationKeys.HttpService),
            container.resolve(ConfigurationKeys.MockSuperofficeDataService)
        )
    );
}
```

### Provider Registration

Update `src/container/configurations/providerConfiguration.ts`:

```typescript
export function configureProviders(container: DIContainer): void {
    // ... existing provider registrations ...

    // Source Control Providers (Phase 2)
    container.registerSingleton(ConfigurationKeys.SuperofficeQuickDiffProvider, () =>
        new SuperofficeQuickDiffProvider(
            container.resolve(ConfigurationKeys.HttpService),
            container.resolve(ConfigurationKeys.AuthenticationProvider),
            container.resolve(ConfigurationKeys.MockSuperofficeDataService)
        )
    );

    container.registerSingleton(ConfigurationKeys.SuperofficeDocumentContentProvider, () =>
        new SuperofficeDocumentContentProvider(
            container.resolve(ConfigurationKeys.MockSuperofficeDataService)
        )
    );
}
```

### Extension Activation Update

Update `src/extension.ts` for Phase 2:

```typescript
export async function activate(context: ExtensionContext): Promise<void> {
    // ... existing code ...

    // Resolve source control service (Phase 2)
    const sourceControlService = container.resolve<SourceControlService>(ConfigurationKeys.SourceControlService);

    // Initialize source control (Phase 2)
    await sourceControlService.initialize();

    // ... rest of existing code ...
}
```

## Integration Considerations

### 1. Authentication Integration

- Leverage existing `SuperofficeAuthenticationProvider`
- Ensure source control operations respect authentication state
- Handle authentication failures gracefully
- Integrate with session change events

### 2. HTTP Service Integration

- Use existing `HttpService` for API calls
- Implement proper error handling and retries
- Add request/response logging for debugging
- Handle rate limiting and throttling

### 3. Workspace Management

- Support multi-root workspaces
- Handle workspace folder additions/removals
- Manage multiple SuperOffice environments
- Proper cleanup on workspace close

### 4. Error Handling Strategy

- Graceful degradation when offline
- Clear error messages for users
- Proper logging for debugging
- Recovery mechanisms for failed operations

## Testing Strategy

### 1. Unit Tests

- Mock all VS Code APIs
- Test individual provider methods
- Validate change detection logic
- Test error conditions and edge cases

### 2. Integration Tests

- Test with mock data service
- Validate UI interactions
- Test workspace lifecycle events
- Validate command execution

### 3. Manual Testing Scenarios

- Create/modify/delete script files
- Test refresh operations
- Validate diff viewing
- Test commit/discard operations
- Test multi-workspace scenarios

## Future Enhancements

### 1. Real API Integration

- Replace mock service with actual SuperOffice API calls
- Handle authentication with SuperOffice systems
- Implement proper error handling for API failures
- Add offline support with local caching

### 2. Advanced Features

- Conflict resolution for concurrent edits
- Branch-like functionality for script versions
- Code review integration
- Automated testing integration

### 3. Performance Optimizations

- Lazy loading of script content
- Caching strategies for frequently accessed scripts
- Background synchronization
- Incremental change detection

## Conclusion

This implementation plan provides a comprehensive roadmap for adding source control functionality to the SuperOffice Core extension. The design leverages existing infrastructure while following VS Code best practices and the proven patterns from Microsoft's source control sample. The phased approach ensures steady progress while maintaining code quality and testability throughout the development process.

The dummy data approach allows for complete functionality development and testing without requiring immediate API integration, making the implementation more manageable and testable.
