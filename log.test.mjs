import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { appendLine } from './log.mjs';

test('追加一行巡检记录', () => {
  const file = join(mkdtempSync(join(tmpdir(), 'canary-')), 'log.md');
  appendLine(file, '  第一行  ');
  assert.equal(readFileSync(file, 'utf8'), '第一行\n');
});

test('空行被拒绝', () => {
  assert.throws(() => appendLine('unused', '   '), /不能是空行/);
});
