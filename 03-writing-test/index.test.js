import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('menjumlahkan dua angka', () => {
    assert.strictEqual(sum(2, 3), 5);
    assert.strictEqual(sum(-1, 1), 0);
    assert.strictEqual(sum(0, 0), 0);
});