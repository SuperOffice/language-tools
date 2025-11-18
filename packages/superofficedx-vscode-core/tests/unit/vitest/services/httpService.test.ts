import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { IHttpHandler } from '../../../../src/handlers/httpHandler';
import { HttpService } from '../../../../src/services/httpService';
import { IFileSystemService } from '../../../../src/services/fileSystemService';
import { State } from '../../../../src/types/state';
import { UserClaims } from '../../../../src/types/userClaims';

describe('HttpService Test Suite', () => {
    let httpService: HttpService;
    let httpHandlerMock: IHttpHandler;
    let fileSystemServiceMock: IFileSystemService;

    const userClaims: UserClaims = {
        "http://schemes.superoffice.net/identity/ctx": "Cust26759",
        "http://schemes.superoffice.net/identity/netserver_url": "https://sod.superoffice.com/Cust26759/Remote/Services86/",
        "http://schemes.superoffice.net/identity/webapi_url": "https://sod.superoffice.com/Cust26759/api/",
        "iss": "https://sod.superoffice.com"
    };

    beforeEach(() => {
        // Create mock implementations using vi.fn()
        httpHandlerMock = {
            get: vi.fn(),
            post: vi.fn(),
            put: vi.fn(),
            delete: vi.fn(),
            patch: vi.fn(),
        };

        fileSystemServiceMock = {
            writeScriptToFile: vi.fn(),
        } as unknown as IFileSystemService;

        // Initialize HttpService with mocked dependencies
        httpService = new HttpService(httpHandlerMock, fileSystemServiceMock);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('getTenantStateAsync - should return tenant state for valid environment and contextIdentifier', async () => {
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
        vi.mocked(httpHandlerMock.get).mockResolvedValue(expectedState);

        const result = await httpService.getTenantState(userClaims);

        // Assertions using vitest matchers
        expect(result).toEqual(expectedState);
        expect(httpHandlerMock.get).toHaveBeenCalledOnce();
        expect(httpHandlerMock.get).toHaveBeenCalledWith(stateUrl);
    });

    it('getTenantStateAsync - should throw an error if httpHandler.get fails', async () => {
        const stateUrl = `${userClaims.iss}/api/state/${userClaims["http://schemes.superoffice.net/identity/ctx"]}`;

        // Mock the behavior of httpHandler.get to throw an error
        vi.mocked(httpHandlerMock.get).mockRejectedValue(new Error('Network error'));

        await expect(httpService.getTenantState(userClaims))
            .rejects
            .toThrow(`Error getting state for ${userClaims["http://schemes.superoffice.net/identity/ctx"]}`);

        expect(httpHandlerMock.get).toHaveBeenCalledOnce();
        expect(httpHandlerMock.get).toHaveBeenCalledWith(stateUrl);
    });
});
