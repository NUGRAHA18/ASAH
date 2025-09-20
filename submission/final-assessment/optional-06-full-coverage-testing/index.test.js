import test from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("fungsi sum harus menghasilkan nilai yang benar", (t) => {
  // 1. Pengujian dengan input angka positif
  assert.strictEqual(
    sum(1, 2),
    3,
    "seharusnya menjumlahkan dua angka positif dengan benar"
  );

  // 2. Pengujian dengan input bukan angka
  assert.strictEqual(
    sum("1", 2),
    0,
    "seharusnya mengembalikan 0 jika input pertama bukan angka"
  );
  assert.strictEqual(
    sum(1, "2"),
    0,
    "seharusnya mengembalikan 0 jika input kedua bukan angka"
  );
  assert.strictEqual(
    sum("1", "2"),
    0,
    "seharusnya mengembalikan 0 jika kedua input bukan angka"
  );

  // 3. Pengujian dengan input angka negatif
  assert.strictEqual(
    sum(-1, 2),
    0,
    "seharusnya mengembalikan 0 jika input pertama negatif"
  );
  assert.strictEqual(
    sum(1, -2),
    0,
    "seharusnya mengembalikan 0 jika input kedua negatif"
  );
  assert.strictEqual(
    sum(-1, -2),
    0,
    "seharusnya mengembalikan 0 jika kedua input negatif"
  );

  // Pengujian tambahan untuk memastikan coverage penuh
  assert.strictEqual(
    sum(0, 0),
    0,
    "seharusnya menjumlahkan angka nol dengan benar"
  );
});
