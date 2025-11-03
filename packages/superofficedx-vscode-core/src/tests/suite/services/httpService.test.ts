import * as assert from 'assert';
import * as sinon from 'sinon';
import { IHttpHandler } from '../../../handlers';
import { HttpService, IFileSystemService } from '../../../services';
import { State, UserClaims } from '../../../types/index';

suite('HttpService Test Suite', () => {
    // const environment = 'sod';
    // const contextIdentifier = '12345';

    let httpService: HttpService;
    let httpHandlerMock: sinon.SinonStubbedInstance<IHttpHandler>;
    let fileSystemServiceMock: sinon.SinonStubbedInstance<IFileSystemService>;

    const userClaims: UserClaims = {
        "http://schemes.superoffice.net/identity/ctx": "Cust26759",
        "http://schemes.superoffice.net/identity/netserver_url": "https://sod.superoffice.com/Cust26759/Remote/Services86/",
        "http://schemes.superoffice.net/identity/webapi_url": "https://sod.superoffice.com/Cust26759/api/",
        "iss": "https://sod.superoffice.com"
    };

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
            ContextIdentifier: 'Cust31038',
            Endpoint: '',
            State: 'Running',
            IsRunning: true,
            ValidUntil: new Date(),
            Api: ''
        };

        const stateUrl = `${userClaims.iss}/api/state/${userClaims["http://schemes.superoffice.net/identity/ctx"]}`;

        // Mock the behavior of httpHandler.get to return a successful response
        httpHandlerMock.get.withArgs(`${stateUrl}`).resolves(expectedState);

        const result = await httpService.getTenantState(userClaims);

        // Assertions
        assert.deepStrictEqual(result, expectedState, 'Expected tenant state to match the mocked response');
        assert.strictEqual(httpHandlerMock.get.calledOnce, true, 'Expected httpHandler.get to be called once');
        assert.strictEqual(httpHandlerMock.get.firstCall.args[0], stateUrl, 'Expected URL to match');
    });

    test('getTenantStateAsync - should throw an error if httpHandler.get fails', async () => {
        const stateUrl = `${userClaims.iss}/api/state/${userClaims["http://schemes.superoffice.net/identity/ctx"]}`;

        // Mock the behavior of httpHandler.get to throw an error
        httpHandlerMock.get.withArgs(`${stateUrl}`).rejects(new Error('Network error'));

        await assert.rejects(
            async () => {
                await httpService.getTenantState(userClaims);
            },
            (error: Error) => error.message === `Error getting state for ${userClaims["http://schemes.superoffice.net/identity/ctx"]}`,
            'Expected error message to match'
        );

        assert.strictEqual(httpHandlerMock.get.calledOnce, true, 'Expected httpHandler.get to be called once');
        assert.strictEqual(httpHandlerMock.get.firstCall.args[0], stateUrl, 'Expected URL to match');
    });
});
