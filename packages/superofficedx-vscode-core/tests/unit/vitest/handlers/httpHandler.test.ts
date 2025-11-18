import { describe, it, expect, beforeAll, beforeEach, afterEach, vi } from 'vitest';
import { HttpHandler } from '../../../../src/handlers/httpHandler';

describe('HttpHandler Test Suite', () => {
    let httpHandler: HttpHandler;
    let fetchMock: ReturnType<typeof vi.fn>;

    beforeAll(() => {
        httpHandler = new HttpHandler();
    });

    beforeEach(() => {
        // Mock the global fetch API
        fetchMock = vi.fn();
        global.fetch = fetchMock;
    });

    afterEach(() => {
        // Clear all mocks after each test
        vi.restoreAllMocks();
    });

    it('GET - should make a GET request and return data', async () => {
        const responseData = { success: true };
        fetchMock.mockResolvedValue(new Response(JSON.stringify(responseData), { status: 200 }));

        const result = await httpHandler.get<{ success: boolean }>('https://api.example.com/data');

        expect(fetchMock).toHaveBeenCalledOnce();
        expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/data', expect.any(Object));
        expect(result).toEqual(responseData);
    });

    it('POST - should make a POST request and return data', async () => {
        const requestBody = { name: 'test' };
        const responseData = { success: true };
        fetchMock.mockResolvedValue(new Response(JSON.stringify(responseData), { status: 200 }));

        const result = await httpHandler.post<{ success: boolean }>('https://api.example.com/data', requestBody);

        expect(fetchMock).toHaveBeenCalledOnce();
        expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/data', expect.objectContaining({
            method: 'POST'
        }));
        expect(result).toEqual(responseData);
    });

    it('PUT - should make a PUT request and return data', async () => {
        const requestBody = { name: 'updated' };
        const responseData = { success: true };
        fetchMock.mockResolvedValue(new Response(JSON.stringify(responseData), { status: 200 }));

        const result = await httpHandler.put<{ success: boolean }>('https://api.example.com/data', requestBody);

        expect(fetchMock).toHaveBeenCalledOnce();
        expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/data', expect.objectContaining({
            method: 'PUT'
        }));
        expect(result).toEqual(responseData);
    });

    it('DELETE - should make a DELETE request and return data', async () => {
        const responseData = { success: true };
        fetchMock.mockResolvedValue(new Response(JSON.stringify(responseData), { status: 200 }));

        const result = await httpHandler.delete<{ success: boolean }>('https://api.example.com/data');

        expect(fetchMock).toHaveBeenCalledOnce();
        expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/data', expect.objectContaining({
            method: 'DELETE'
        }));
        expect(result).toEqual(responseData);
    });

    it('should throw an error if response is not ok', async () => {
        fetchMock.mockResolvedValue(new Response(null, { status: 500 }));

        await expect(httpHandler.get('https://api.example.com/data'))
            .rejects
            .toThrow(/HTTP error! status: 500/);
    });
});
