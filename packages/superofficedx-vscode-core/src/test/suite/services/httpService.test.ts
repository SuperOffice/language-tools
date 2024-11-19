import * as assert from 'assert';
import * as sinon from 'sinon';
import { HttpService } from '../../../services/httpService';
import { IHttpHandler } from '../../../handlers/httpHandler';
import { IFileSystemService } from '../../../services/fileSystemService';
import { AuthFlow } from '../../../constants';
import { State } from '../../../types/index';

suite('HttpService Test Suite', () => {
    const environment = 'sod';
    const contextIdentifier = '12345';

    let httpService: HttpService;
    let httpHandlerMock: sinon.SinonStubbedInstance<IHttpHandler>;
    let fileSystemServiceMock: sinon.SinonStubbedInstance<IFileSystemService>;

    setup(() => {
        // Create mock instances for IHttpHandler and IFileSystemService
        httpHandlerMock = {
            get: sinon.stub(),
            post: sinon.stub(),
            put: sinon.stub(),
            delete: sinon.stub(),
        } as unknown as sinon.SinonStubbedInstance<IHttpHandler>;

        fileSystemServiceMock = {
            writeScriptToFile: sinon.stub(),
        } as unknown as sinon.SinonStubbedInstance<IFileSystemService>;

        // Initialize HttpService with mocked dependencies
        httpService = new HttpService(httpHandlerMock, fileSystemServiceMock);
    });

    teardown(() => {
        sinon.restore();
    });

    test('getTenantStateAsync - should return tenant state for valid environment and contextIdentifier', async () => {

        const expectedState: State = {
            ContextIdentifier: 'active',
            Endpoint: '',
            State: '',
            IsRunning: false,
            ValidUntil: new Date(),
            Api: ''
        }; // Example state structure

        // Mock the behavior of httpHandler.get to return a successful response
        httpHandlerMock.get.withArgs(AuthFlow.getStateUrl(environment, contextIdentifier)).resolves(expectedState);

        const result = await httpService.getTenantStateAsync(environment, contextIdentifier);

        // Assertions
        assert.deepStrictEqual(result, expectedState, 'Expected tenant state to match the mocked response');
        assert.strictEqual(httpHandlerMock.get.calledOnce, true, 'Expected httpHandler.get to be called once');
        assert.strictEqual(httpHandlerMock.get.firstCall.args[0], AuthFlow.getStateUrl(environment, contextIdentifier), 'Expected URL to match');
    });

    test('getTenantStateAsync - should throw an error if httpHandler.get fails', async () => {
        // Mock the behavior of httpHandler.get to throw an error
        httpHandlerMock.get.withArgs(AuthFlow.getStateUrl(environment, contextIdentifier)).rejects(new Error('Network error'));

        await assert.rejects(
            async () => {
                await httpService.getTenantStateAsync(environment, contextIdentifier);
            },
            (error: Error) => error.message === `Error getting state for ${contextIdentifier}`,
            'Expected error message to match'
        );

        assert.strictEqual(httpHandlerMock.get.calledOnce, true, 'Expected httpHandler.get to be called once');
    });

    // TODO: Add tests for the other methods?
});
