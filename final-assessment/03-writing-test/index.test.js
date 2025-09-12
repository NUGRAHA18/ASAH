import test from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("fungsi sum harus menghasilkan nilai yang benar", (t) => {
  // Pengujian dengan dua angka positif
  assert.strictEqual(sum(1, 2), 3);

  // Pengujian dengan angka nol
  assert.strictEqual(sum(0, 0), 0);

  // Pengujian dengan angka negatif
  assert.strictEqual(sum(-1, -1), -2);
});
