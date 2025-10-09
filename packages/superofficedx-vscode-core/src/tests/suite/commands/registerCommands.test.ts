import * as vscode from 'vscode';
import sinon from 'sinon';
import assert from 'assert';
import { registerCommands } from '../../../commands/registerCommands';
import { HttpService, IHttpService } from '../../../services/httpService';
import { INodeService, NodeService } from '../../../services/nodeService';

suite('registerCommands', () => {
    let context: vscode.ExtensionContext;
    let mockHttpService: sinon.SinonStubbedInstance<IHttpService>;
    let mockNodeService: sinon.SinonStubbedInstance<INodeService>;

    const expectedCommands = [
        "superOfficeDX.startNativeAppFlow",
        "superOfficeDX.viewScriptDetails",
        "superOfficeDX.previewScript",
        "superOfficeDX.downloadScript",
        "superOfficeDX.downloadScriptFolder",
        "superOfficeDX.executeTypeScript",
        "superOfficeDX.executeTypeScriptLocally",
        "superOfficeDX.uploadScript"
    ];

    setup(() => {
        // Mock VSCode extension context and dependencies
        context = {
            subscriptions: [],
        } as unknown as vscode.ExtensionContext;

        mockHttpService = sinon.createStubInstance(HttpService);
        mockNodeService = sinon.createStubInstance(NodeService);
    });

    teardown(() => {
        sinon.restore(); // Restore Sinon after each test
    });

    test('should register commands and add real disposables', () => {
        // Call registerCommands
        registerCommands(context, mockHttpService, mockNodeService);

        // Check that the number of disposables matches
        assert.strictEqual(
            context.subscriptions.length,
            expectedCommands.length,
            'Expected all commands to be added to context subscriptions'
        );

        // Check that each subscription is a valid disposable
        context.subscriptions.forEach((sub, index) => {
            assert.ok(typeof sub.dispose === 'function', `Subscription at index ${index} is not disposable`);
        });
    });
});
