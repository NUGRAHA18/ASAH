// @flow

/**
 * Menjumlahkan dua angka.
 * @param {number} a - Angka pertama.
 * @param {number} b - Angka kedua.
 * @returns {number} Hasil penjumlahan.
 */
function tambah(a: number, b: number): number {
  return a + b;
}

// Penggunaan yang BENAR
const hasilBenar = tambah(10, 5);
console.log(hasilBenar); // Output: 15

// Penggunaan yang SALAH (akan dideteksi oleh Flow)
const hasilSalah = tambah(10, "5"); // Error! "5" adalah string, bukan number.
console.log(hasilSalah);
