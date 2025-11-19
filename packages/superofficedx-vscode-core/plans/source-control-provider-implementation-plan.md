# Source Control Provider Implementation Plan for SuperOffice Core Extension

## Overview

This document outlines a comprehensive plan for implementing a VS Code Source Control Provider within the `superofficedx-vscode-core` package. The implementation will follow the established patterns from Microsoft's source-control-sample and integrate with the existing DI container architecture.

## Architecture Design

### 1. Core Components

#### A. Main Source Control Provider (`SuperofficeSourceControl`)

- **Purpose**: Central orchestrator for all source control operations
- **Location**: `src/providers/superofficeSourceControl.ts`
- **Responsibilities**:
  - Creates and manages VS Code SourceControl instance
  - Coordinates between repository service and UI components
  - Handles workspace folder lifecycle
  - Manages file watching and change detection

#### B. Repository Service (`SuperofficeRepository`)

- **Purpose**: Interface to underlying SuperOffice data source
- **Location**: `src/services/superofficeRepositoryService.ts`
- **Responsibilities**:
  - Implements QuickDiffProvider for diff functionality
  - Manages script/document synchronization
  - Provides version history and comparison capabilities
  - Handles upload/download operations

#### C. Resource State Manager

- **Purpose**: Tracks and manages individual file states
- **Location**: `src/providers/sourceControlResourceStateProvider.ts`
- **Responsibilities**:
  - Creates SourceControlResourceState objects
  - Handles decorations (modified, deleted, added)
  - Provides diff commands for individual files

#### D. Document Content Provider

- **Purpose**: Provides original content for diff operations
- **Location**: `src/providers/superofficeDocumentContentProvider.ts`
- **Responsibilities**:
  - Implements TextDocumentContentProvider
  - Fetches remote content for comparisons
  - Handles custom URI schemes for SuperOffice resources

### 2. Integration Points

#### A. DI Container Integration

- Register new services in `providerConfiguration.ts`
- Add configuration keys to `configurationKeys.ts`
- Ensure proper dependency injection for all components

#### B. Command Integration

- Extend `commandRegistration.ts` with source control commands
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

### 2. Core Provider Implementation

#### A. SuperofficeSourceControl Class Structure

```typescript
export class SuperofficeSourceControl implements vscode.Disposable {
    private sourceControl: vscode.SourceControl;
    private changedResources: vscode.SourceControlResourceGroup;
    private untrackedResources: vscode.SourceControlResourceGroup;
    private repository: SuperofficeRepositoryService;
    private fileWatcher: vscode.FileSystemWatcher;

    constructor(
        context: vscode.ExtensionContext,
        workspaceFolder: vscode.WorkspaceFolder,
        authProvider: SuperofficeAuthenticationProvider,
        httpService: HttpService
    );

    // Public methods
    public async refresh(): Promise<void>;
    public async commitAll(message: string): Promise<void>;
    public async discardChanges(resources?: vscode.Uri[]): Promise<void>;
    public async pull(): Promise<void>;
    public async push(): Promise<void>;

    // Private methods
    private async updateChangedGroup(): Promise<void>;
    private onResourceChange(uri: vscode.Uri): void;
    private createResourceState(change: SuperofficeResourceChange): vscode.SourceControlResourceState;
}
```

#### B. Repository Service Structure

```typescript
export class SuperofficeRepositoryService implements vscode.QuickDiffProvider {
    constructor(
        private workspaceFolder: vscode.WorkspaceFolder,
        private httpService: HttpService,
        private authProvider: SuperofficeAuthenticationProvider
    );

    // QuickDiffProvider implementation
    provideOriginalResource(uri: vscode.Uri, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Uri>;

    // Repository operations
    public async getRemoteScripts(): Promise<SuperofficeScript[]>;
    public async downloadScript(scriptId: string): Promise<SuperofficeScript>;
    public async uploadScript(script: SuperofficeScript): Promise<SuperofficeScript>;
    public async getScriptHistory(scriptId: string): Promise<SuperofficeScript[]>;

    // Change detection
    public async detectChanges(): Promise<SuperofficeResourceChange[]>;
    public async getOriginalContent(uri: vscode.Uri): Promise<string>;
}
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

```
packages/superofficedx-vscode-core/
├── src/
│   ├── providers/
│   │   ├── superofficeSourceControl.ts              # Main source control provider
│   │   ├── sourceControlResourceStateProvider.ts   # Resource state management
│   │   └── superofficeDocumentContentProvider.ts   # Document content for diffs
│   ├── services/
│   │   ├── superofficeRepositoryService.ts         # Repository operations
│   │   └── mockSuperofficeDataService.ts          # Dummy data service
│   ├── commands/
│   │   └── sourceControlCommands.ts               # Source control specific commands
│   ├── models/
│   │   ├── superofficeScript.ts                   # Script entity model
│   │   └── superofficeResourceChange.ts           # Change detection model
│   ├── utils/
│   │   ├── sourceControlUtils.ts                  # Source control utilities
│   │   └── diffUtils.ts                           # Diff operation utilities
│   └── container/configurations/
│       └── sourceControlConfiguration.ts          # DI configuration for SC
├── plans/
│   └── source-control-provider-implementation-plan.md  # This document
└── resources/
    └── icons/                                      # Source control specific icons
```

## Implementation Phases

### Phase 1: Basic Infrastructure (Week 1)

1. Create mock data service with dummy scripts
2. Implement basic source control provider registration
3. Set up DI container configurations
4. Create basic repository service interface
5. Add command contributions to package.json

### Phase 2: Core Functionality (Week 2)

1. Implement file watching and change detection
2. Create resource state management
3. Add basic commit/discard operations
4. Implement refresh functionality
5. Basic UI integration with source control view

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
