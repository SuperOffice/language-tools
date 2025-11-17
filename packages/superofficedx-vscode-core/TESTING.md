# Vitest Testing Guide for superofficedx-vscode-core

This document outlines the vitest setup and best practices implemented for this package.

## Overview

We've migrated from Sinon to Vitest's built-in mocking capabilities for unit tests. Vitest provides a modern, fast, and batteries-included testing framework with excellent TypeScript support.

## Test Structure

### Unit Tests (Vitest)

Located in `src/tests/suite/`, these tests use vitest and run in a Node.js environment:

- `handlers/httpHandler.test.ts` - Tests HTTP request handling with mocked fetch
- `services/httpService.test.ts` - Tests service layer with mocked dependencies

### Integration Tests (VS Code Test Runner)

The following tests require the VS Code API and continue to use the `@vscode/test-cli` runner:

- `handlers/fileSystemHandler.test.ts` - Tests filesystem operations
- `commands/registerCommands.test.ts` - Tests command registration (requires full DI container)
- `providers/virtualFileSystemProvider.test.ts` - Tests VS Code virtual filesystem
- `superofficedx-vscode-core.test.ts` - Basic integration tests

Run integration tests with: `pnpm test:vscode`

## Vitest Best Practices Applied

### 1. Built-in Mocking

We use vitest's `vi` utilities instead of sinon:

```typescript
import { vi } from 'vitest';

// Creating mocks
const mockFn = vi.fn();

// Mocking return values
mockFn.mockResolvedValue({ data: 'test' });
mockFn.mockRejectedValue(new Error('test error'));

// Assertions
expect(mockFn).toHaveBeenCalledOnce();
expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
```

### 2. Global Mocking

For global APIs like `fetch`, we mock them directly:

```typescript
beforeEach(() => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;
});

afterEach(() => {
    vi.restoreAllMocks();
});
```

### 3. Module Aliasing for VS Code API

VS Code module is mocked via vitest config aliasing:

```typescript
// vitest.config.ts
{
    alias: {
        vscode: './src/tests/__mocks__/vscode.ts'
    }
}
```

The mock file (`src/tests/__mocks__/vscode.ts`) provides stubs for VS Code APIs.

### 4. Test Organization

Using vitest's `describe`, `it`, `beforeEach`, `afterEach`:

```typescript
describe('HttpHandler Test Suite', () => {
    let handler: HttpHandler;

    beforeEach(() => {
        handler = new HttpHandler();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should handle GET requests', async () => {
        // test implementation
    });
});
```

### 5. Type-Safe Mocking

Using `vi.mocked()` for better TypeScript support:

```typescript
const mockService = {
    get: vi.fn(),
    post: vi.fn()
};

vi.mocked(mockService.get).mockResolvedValue(data);
```

### 6. Coverage Configuration

Coverage is configured with realistic thresholds:

```typescript
coverage: {
    provider: 'v8',
    reporter: ['text', 'json', 'html'],
    thresholds: {
        lines: 3,
        functions: 10,
        branches: 50,
        statements: 3
    }
}
```

## Running Tests

```bash
# Run all vitest unit tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run VS Code integration tests (requires internet)
pnpm test:vscode
```

## Key Benefits of Vitest

1. **Fast**: Native ESM support, instant watch mode
2. **Built-in**: Mocking, coverage, assertions all included
3. **TypeScript**: First-class TypeScript support
4. **Compatible**: Jest-compatible API for easy migration
5. **Modern**: Uses Vite's transformation pipeline

## Migration from Sinon

| Sinon | Vitest |
|-------|--------|
| `sinon.stub()` | `vi.fn()` |
| `stub.resolves(value)` | `mock.mockResolvedValue(value)` |
| `stub.rejects(error)` | `mock.mockRejectedValue(error)` |
| `stub.calledOnce` | `expect(mock).toHaveBeenCalledOnce()` |
| `stub.withArgs(...)` | `mock.mockImplementation(...)` or `expect(mock).toHaveBeenCalledWith(...)` |
| `sinon.restore()` | `vi.restoreAllMocks()` or `vi.clearAllMocks()` |

## Future Improvements

1. Add more unit tests for services and handlers
2. Increase coverage thresholds as more tests are added
3. Consider snapshot testing for complex objects
4. Add integration tests that don't require VS Code API
