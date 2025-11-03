import * as vscode from 'vscode';
import sinon from 'sinon';
import assert from 'assert';
import { registerCommands, CommandKeys } from '../../../commands';
import { HttpService, IHttpService, INodeService, NodeService } from '../../../services';
import { DIContainer, ServiceKeys } from '../../../container';
import { ScriptEntity } from '../../../types';

/**
 * Alternative approach: Create a test-specific container factory
 * This is often cleaner than mocking the container
 */
function createTestContainer(
    context: vscode.ExtensionContext,
    mockHttpService: IHttpService,
    mockNodeService: INodeService
): DIContainer {
    const container = new DIContainer();

    // Register the mocked services
    container.registerSingleton(ServiceKeys.ExtensionContext, () => context);
    container.registerSingleton(ServiceKeys.HttpService, () => mockHttpService);
    container.registerSingleton(ServiceKeys.NodeService, () => mockNodeService);

    // Register other services as needed (auth provider, etc.)
    // You might need to add more based on what your commands require

    return container;
}

suite('registerCommands - Alternative Approach', () => {
    let context: vscode.ExtensionContext;
    let mockHttpService: sinon.SinonStubbedInstance<IHttpService>;
    let mockNodeService: sinon.SinonStubbedInstance<INodeService>;

    // Get all command values from CommandKeys for dynamic testing
    const expectedCommands = Object.values(CommandKeys);

    setup(() => {
        // Mock VSCode extension context
        context = {
            subscriptions: [],
        } as unknown as vscode.ExtensionContext;

        // Create mock services
        mockHttpService = sinon.createStubInstance(HttpService);
        mockNodeService = sinon.createStubInstance(NodeService);
    });

    teardown(() => {
        sinon.restore();
    });

    test('should register commands using test container', () => {
        // Create test container with mocked dependencies
        const testContainer = createTestContainer(context, mockHttpService, mockNodeService);

        // Call registerCommands
        registerCommands(testContainer);

        // Check that the number of disposables matches the number of defined commands
        assert.strictEqual(
            context.subscriptions.length,
            expectedCommands.length,
            `Expected ${expectedCommands.length} commands to be registered: ${expectedCommands.join(', ')}`
        );

        // Check that each subscription is a valid disposable
        context.subscriptions.forEach((sub, index) => {
            assert.ok(typeof sub.dispose === 'function', `Subscription at index ${index} is not disposable`);
        });
    });

    test('should handle command execution with mocked services', () => {
        // This approach allows you to test actual command behavior with mocked dependencies
        const testContainer = createTestContainer(context, mockHttpService, mockNodeService);

        // Set up mock responses
        mockHttpService.getCrmScriptEntity.resolves({
            SourceCode: 'test script content',
            Name: 'Test Script'
        } as ScriptEntity);

        registerCommands(testContainer);

        // You can now test that the commands were registered correctly
        assert.ok(context.subscriptions.length > 0, 'Commands should be registered');

        // You could even test command execution here if needed
        // (though that might be better suited for integration tests)
    });
});
