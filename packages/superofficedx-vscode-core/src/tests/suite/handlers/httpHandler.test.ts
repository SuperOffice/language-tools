import * as assert from 'assert';
import * as sinon from 'sinon';
import { HttpHandler } from '../../../handlers/httpHandler';


suite('HttpHandler Test Suite', () => {
    let httpHandler: HttpHandler;
    let fetchStub: sinon.SinonStub;

    suiteSetup(() => {
        httpHandler = new HttpHandler();
    });

    setup(() => {
        // Stub the fetch API
        fetchStub = sinon.stub(global, 'fetch');
    });

    teardown(() => {
        // Restore fetch after each test
        fetchStub.restore();
    });

    test('GET - should make a GET request and return data', async () => {
        const responseData = { success: true };
        fetchStub.resolves(new Response(JSON.stringify(responseData), { status: 200 }));

        const result = await httpHandler.get<{ success: boolean }>('https://api.example.com/data');
        assert.strictEqual(fetchStub.calledOnce, true, 'Expected fetch to be called once');
        assert.strictEqual(fetchStub.getCall(0).args[0], 'https://api.example.com/data', 'Expected URL to match');
        assert.deepStrictEqual(result, responseData, 'Expected response data to match');
    });

    test('POST - should make a POST request and return data', async () => {
        const requestBody = { name: 'test' };
        const responseData = { success: true };
        fetchStub.resolves(new Response(JSON.stringify(responseData), { status: 200 }));

        const result = await httpHandler.post<{ success: boolean }>('https://api.example.com/data', requestBody);
        assert.strictEqual(fetchStub.calledOnce, true, 'Expected fetch to be called once');
        assert.strictEqual(fetchStub.getCall(0).args[0], 'https://api.example.com/data', 'Expected URL to match');
        assert.strictEqual(fetchStub.getCall(0).args[1].method, 'POST', 'Expected method to be POST');
        assert.deepStrictEqual(result, responseData, 'Expected response data to match');
    });

    test('PUT - should make a PUT request and return data', async () => {
        const requestBody = { name: 'updated' };
        const responseData = { success: true };
        fetchStub.resolves(new Response(JSON.stringify(responseData), { status: 200 }));

        const result = await httpHandler.put<{ success: boolean }>('https://api.example.com/data', requestBody);
        assert.strictEqual(fetchStub.calledOnce, true, 'Expected fetch to be called once');
        assert.strictEqual(fetchStub.getCall(0).args[0], 'https://api.example.com/data', 'Expected URL to match');
        assert.strictEqual(fetchStub.getCall(0).args[1].method, 'PUT', 'Expected method to be PUT');
        assert.deepStrictEqual(result, responseData, 'Expected response data to match');
    });

    test('DELETE - should make a DELETE request and return data', async () => {
        const responseData = { success: true };
        fetchStub.resolves(new Response(JSON.stringify(responseData), { status: 200 }));

        const result = await httpHandler.delete<{ success: boolean }>('https://api.example.com/data');
        assert.strictEqual(fetchStub.calledOnce, true, 'Expected fetch to be called once');
        assert.strictEqual(fetchStub.getCall(0).args[0], 'https://api.example.com/data', 'Expected URL to match');
        assert.strictEqual(fetchStub.getCall(0).args[1].method, 'DELETE', 'Expected method to be DELETE');
        assert.deepStrictEqual(result, responseData, 'Expected response data to match');
    });

    test('should throw an error if response is not ok', async () => {
        fetchStub.resolves(new Response(null, { status: 500 }));

        await assert.rejects(
            () => httpHandler.get('https://api.example.com/data'),
            /HTTP error! status: 500/,
            'Expected an error to be thrown for non-OK response'
        );
    });
});
