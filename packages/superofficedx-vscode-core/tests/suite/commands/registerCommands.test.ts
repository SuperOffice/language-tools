import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import * as vscode from 'vscode';
import { registerCommands } from '../../../src/commands/commandRegistration';
import { CommandKeys } from '../../../src/commands/commandKeys';
import { IHttpService } from '../../../src/services/httpService';
import { INodeService } from '../../../src/services/nodeService';
import { SuperofficeAuthenticationProvider } from '../../../src/providers/superofficeAuthenticationProvider';
import { DIContainer } from '../../../src/container/core/diContainer';
import { ConfigurationKeys } from '../../../src/container/configurations/configurationKeys';
import { ScriptEntity } from '../../../src/types/odata/script';

/**
 * Alternative approach: Create a test-specific container factory
 * This is often cleaner than mocking the container
 */
function createTestContainer(
    context: vscode.ExtensionContext,
    mockHttpService: IHttpService,
    mockNodeService: INodeService,
    mockAuthProvider: SuperofficeAuthenticationProvider
): DIContainer {
    const container = new DIContainer();

    // Register the mocked services
    container.registerSingleton(ConfigurationKeys.ExtensionContext, () => context);
    container.registerSingleton(ConfigurationKeys.HttpService, () => mockHttpService);
    container.registerSingleton(ConfigurationKeys.NodeService, () => mockNodeService);
    container.registerSingleton(ConfigurationKeys.AuthenticationProvider, () => mockAuthProvider);

    // Register other services as needed (auth provider, etc.)
    // You might need to add more based on what your commands require

    return container;
}

describe('registerCommands - Alternative Approach', () => {
    let context: vscode.ExtensionContext;
    let mockHttpService: IHttpService;
    let mockNodeService: INodeService;
    let mockAuthProvider: SuperofficeAuthenticationProvider;

    // Get all command values from CommandKeys for dynamic testing
    const expectedCommands = Object.values(CommandKeys);

    beforeEach(() => {
        // Mock VSCode extension context
        context = {
            subscriptions: [],
        } as unknown as vscode.ExtensionContext;

        // Create mock services using vitest
        mockHttpService = {
            getTenantState: vi.fn(),
            getCrmScriptEntity: vi.fn(),
            getCrmScriptByUniqueIdentifier: vi.fn(),
            getScriptsInFolder: vi.fn(),
            executeScript: vi.fn(),
            validateScript: vi.fn(),
            saveScript: vi.fn(),
        } as unknown as IHttpService;

        mockNodeService = {
            getChildren: vi.fn(),
            getParent: vi.fn(),
            getNodeById: vi.fn(),
        } as unknown as INodeService;

        // Create mock authentication provider
        mockAuthProvider = {
            onDidChangeSessions: vi.fn(),
            getSessions: vi.fn().mockResolvedValue([]),
            createSession: vi.fn(),
            removeSession: vi.fn(),
            dispose: vi.fn(),
        } as unknown as SuperofficeAuthenticationProvider;
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should register commands using test container', () => {
        // Create test container with mocked dependencies
        const testContainer = createTestContainer(context, mockHttpService, mockNodeService, mockAuthProvider);

        // Call registerCommands
        registerCommands(testContainer);

        // Check that the number of disposables matches the number of defined commands
        expect(context.subscriptions.length).toBe(expectedCommands.length);

        // Check that each subscription is a valid disposable
        context.subscriptions.forEach((sub) => {
            expect(typeof sub.dispose).toBe('function');
        });
    });

    it('should handle command execution with mocked services', () => {
        // This approach allows you to test actual command behavior with mocked dependencies
        const testContainer = createTestContainer(context, mockHttpService, mockNodeService, mockAuthProvider);

        // Set up mock responses
        vi.mocked(mockHttpService.getCrmScriptEntity).mockResolvedValue({
            SourceCode: 'test script content',
            Name: 'Test Script'
        } as ScriptEntity);

        registerCommands(testContainer);

        // You can now test that the commands were registered correctly
        expect(context.subscriptions.length).toBeGreaterThan(0);

        // You could even test command execution here if needed
        // (though that might be better suited for integration tests)
    });
});
