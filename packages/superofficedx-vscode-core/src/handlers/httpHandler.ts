export interface IHttpHandler {
    get<T>(url: string, headers?: Record<string, string>): Promise<T>;
    post<T>(url: string, body: unknown, headers?: Record<string, string>): Promise<T>;
    put<T>(url: string, body: unknown, headers?: Record<string, string>): Promise<T>;
    delete<T>(url: string, headers?: Record<string, string>): Promise<T>;

}

export class HttpHandler implements IHttpHandler 
{
    private async request<T>(method: string, url: string, body?: unknown, headers: Record<string, string> = {}): Promise<T> {

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },
                body: body ? JSON.stringify(body) : undefined,
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            return response.json() as Promise<T>;
        }
        catch(error) 
        {
            throw new Error('Error sending request: ' + error);
        }
        
    }

    async get<T>(url: string, headers: Record<string, string> = {}): Promise<T> {
        return await this.request<T>('GET', url, undefined, headers);
    }

    async post<T>(url: string, body: unknown, headers: Record<string, string> = {}): Promise<T> {
        return await this.request<T>('POST', url, body, headers);
    }

    async put<T>(url: string, body: unknown, headers: Record<string, string> = {}): Promise<T> {
        return await this.request<T>('PUT', url, body, headers);
    }

    async delete<T>(url: string, headers: Record<string, string> = {}): Promise<T> {
        return await this.request<T>('DELETE', url, undefined, headers);
    }
}