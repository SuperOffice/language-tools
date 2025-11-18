/**
 * HTTP-specific error with additional context
 */
export class HttpError extends Error {
    constructor(
        message: string,
        public readonly status?: number,
        public readonly url?: string,
        public readonly method?: string,
        public readonly response?: Response
    ) {
        super(message);
        this.name = 'HttpError';
    }
}

/**
 * Configuration options for HTTP requests
 */
export interface HttpRequestOptions {
    readonly headers?: Record<string, string>;
    readonly timeout?: number;
    readonly retries?: number;
}

/**
 * HTTP handler interface with improved typing and options
 */
export interface IHttpHandler {
    get<T>(url: string, options?: HttpRequestOptions): Promise<T>;
    post<T>(url: string, body: unknown, options?: HttpRequestOptions): Promise<T>;
    put<T>(url: string, body: unknown, options?: HttpRequestOptions): Promise<T>;
    delete<T>(url: string, options?: HttpRequestOptions): Promise<T>;
    patch<T>(url: string, body: unknown, options?: HttpRequestOptions): Promise<T>;
}

export class HttpHandler implements IHttpHandler {
    /**
     * Internal method to make HTTP requests
     * @param method - HTTP method (GET, POST, PUT, DELETE, PATCH)
     * @param url - Request URL
     * @param body - Request body (optional)
     * @param options - Request options including headers and timeout
     * @returns Promise resolving to the response data
     */
    private async request<T>(method: string, url: string, body?: unknown, options: HttpRequestOptions = {}): Promise<T> {
        const { headers = {}, timeout = 30000 } = options;

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeout);

            const requestHeaders: Record<string, string> = { ...headers };

            // Only set Content-Type for requests with body
            if (body !== undefined) {
                requestHeaders['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, {
                method,
                headers: requestHeaders,
                body: body ? JSON.stringify(body) : undefined,
                signal: controller.signal,
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new HttpError(
                    `HTTP ${response.status} ${response.statusText}`,
                    response.status,
                    url,
                    method,
                    response
                );
            }

            return response.json() as Promise<T>;
        }
        catch (error) {
            if (error instanceof HttpError) {
                throw error;
            }

            if (error instanceof Error && error.name === 'AbortError') {
                throw new HttpError(`Request timeout after ${timeout}ms`, undefined, url, method);
            }

            throw new HttpError(
                `Request failed: ${error instanceof Error ? error.message : String(error)}`,
                undefined,
                url,
                method
            );
        }
    }

    /**
     * Make a GET request
     * @param url - Request URL
     * @param options - Request options including headers and timeout
     * @returns Promise resolving to the response data
     */
    public async get<T>(url: string, options?: HttpRequestOptions): Promise<T> {
        return await this.request<T>('GET', url, undefined, options);
    }

    /**
     * Make a POST request
     * @param url - Request URL
     * @param body - Request body
     * @param options - Request options including headers and timeout
     * @returns Promise resolving to the response data
     */
    public async post<T>(url: string, body: unknown, options?: HttpRequestOptions): Promise<T> {
        return await this.request<T>('POST', url, body, options);
    }

    /**
     * Make a PUT request
     * @param url - Request URL
     * @param body - Request body
     * @param options - Request options including headers and timeout
     * @returns Promise resolving to the response data
     */
    public async put<T>(url: string, body: unknown, options?: HttpRequestOptions): Promise<T> {
        return await this.request<T>('PUT', url, body, options);
    }

    /**
     * Make a DELETE request
     * @param url - Request URL
     * @param options - Request options including headers and timeout
     * @returns Promise resolving to the response data
     */
    public async delete<T>(url: string, options?: HttpRequestOptions): Promise<T> {
        return await this.request<T>('DELETE', url, undefined, options);
    }

    /**
     * Make a PATCH request
     * @param url - Request URL
     * @param body - Request body
     * @param options - Request options including headers and timeout
     * @returns Promise resolving to the response data
     */
    public async patch<T>(url: string, body: unknown, options?: HttpRequestOptions): Promise<T> {
        return await this.request<T>('PATCH', url, body, options);
    }
}
