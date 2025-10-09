import { describe, it, expect, assert } from 'vitest';

describe('Math utilities', () => {
    it('adds numbers correctly', () => {
        expect(2 + 3).toBe(5);
    });

    it('produces error', () => {
        assert.isNotOk(false, 'This is an intentional failure for demonstration purposes.');
    });
});
