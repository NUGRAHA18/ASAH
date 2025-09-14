/**
 * File ini berisi fungsi-fungsi kalkulator sederhana.
 * @version 1.0.0
 * @author Budi
 */

/**
 * Menjumlahkan dua angka dan mengembalikan hasilnya.
 *
 * @param {number} a - Angka pertama.
 * @param {number} b - Angka kedua.
 * @returns {number} Hasil dari penjumlahan a dan b.
 */
function tambah(a, b) {
  return a + b;
}

/**
 * Menghitung harga setelah diskon.
 *
 * @param {number} harga - Harga awal barang.
 * @param {number} persentaseDiskon - Persentase diskon (misal: 20 untuk 20%).
 * @returns {number} Harga akhir setelah dipotong diskon.
 * @example
 * // Menghitung diskon 20% dari harga 100000
 * const hargaAkhir = hitungDiskon(100000, 20);
 * console.log(hargaAkhir); // Output: 80000
 */
function hitungDiskon(harga, persentaseDiskon) {
  const potongan = harga * (persentaseDiskon / 100);
  return harga - potongan;
}
