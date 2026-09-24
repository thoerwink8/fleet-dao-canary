// 巡检任务改动的对象：往巡检记录里追加一行。
import { appendFileSync } from 'node:fs';

export function appendLine(file, line) {
  if (typeof line !== 'string' || line.trim() === '') throw new Error('巡检记录不能是空行');
  appendFileSync(file, `${line.trim()}\n`);
}
