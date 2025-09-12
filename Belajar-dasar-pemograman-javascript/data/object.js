/**
 * ========================================
 * MODUL BELAJAR OBJECT JAVASCRIPT
 * ========================================
 * Object adalah struktur data yang menyimpan pasangan
 * key (property) dan value (nilai).
 *
 * Key = string atau symbol
 * Value = tipe data apa pun (string, number, array, object, function, dll.)
 */

// =====================
// Deklarasi & Inisialisasi
// =====================
let mahasiswa = {
  nama: "Agung",
  umur: 21,
  jurusan: "Informatika",
  aktif: true,
  hobi: ["coding", "membaca"],
  alamat: {
    kota: "Bandung",
    provinsi: "Jawa Barat",
  },
  sapa: function () {
    return `Halo, saya ${this.nama} dari jurusan ${this.jurusan}`;
  },
};

console.log("Object mahasiswa:", mahasiswa);

// =====================
// Akses Property
// =====================
console.log("Akses dot:", mahasiswa.nama);
console.log("Akses bracket:", mahasiswa["umur"]);

// Memanggil method
console.log("Method:", mahasiswa.sapa());

// =====================
// Menambah / Mengubah Property
// =====================
mahasiswa.angkatan = 2022;
mahasiswa.umur = 22;
console.log("Update object:", mahasiswa);

// Menghapus property
delete mahasiswa.aktif;
console.log("Setelah delete aktif:", mahasiswa);

// =====================
// Method Built-in Object
// =====================

/**
 * 1. Object.keys(obj) -> Array dari semua property (key)
 */
console.log("Object.keys:", Object.keys(mahasiswa));

/**
 * 2. Object.values(obj) -> Array dari semua nilai (value)
 */
console.log("Object.values:", Object.values(mahasiswa));

/**
 * 3. Object.entries(obj) -> Array pasangan [key, value]
 */
console.log("Object.entries:", Object.entries(mahasiswa));

/**
 * 4. Object.assign(target, source) -> Menyalin property dari object lain
 */
let tambahan = { ipk: 3.75, beasiswa: true };
let gabungan = Object.assign({}, mahasiswa, tambahan);
console.log("Object.assign:", gabungan);

/**
 * 5. Object.freeze(obj) -> Membekukan object (tidak bisa diubah)
 */
let dataBeku = Object.freeze({ a: 1, b: 2 });
dataBeku.a = 100; // tidak berpengaruh
console.log("Object.freeze:", dataBeku);

/**
 * 6. Object.seal(obj) -> Tidak bisa menambah / menghapus property, tapi bisa mengubah
 */
let dataSeal = Object.seal({ x: 10, y: 20 });
dataSeal.x = 99; // boleh
delete dataSeal.y; // tidak bisa
console.log("Object.seal:", dataSeal);

/**
 * 7. Object.create(proto) -> Membuat object baru dengan prototype tertentu
 */
let proto = { jenis: "Manusia" };
let orang = Object.create(proto);
orang.nama = "Budi";
console.log("Object.create:", orang, orang.jenis);

/**
 * 8. Object.hasOwn(obj, prop) -> Mengecek apakah property dimiliki object (bukan dari prototype)
 */
console.log(
  "Object.hasOwn(mahasiswa, 'nama'):",
  Object.hasOwn(mahasiswa, "nama")
);
console.log(
  "Object.hasOwn(mahasiswa, 'toString'):",
  Object.hasOwn(mahasiswa, "toString")
);

/**
 * 9. Object.getOwnPropertyNames(obj) -> Semua property termasuk non-enumerable
 */
console.log(
  "Object.getOwnPropertyNames:",
  Object.getOwnPropertyNames(mahasiswa)
);

/**
 * 10. Object.getPrototypeOf(obj) -> Mengembalikan prototype object
 */
console.log("Object.getPrototypeOf:", Object.getPrototypeOf(mahasiswa));

/**
 * 11. Object.setPrototypeOf(obj, proto) -> Mengubah prototype object
 */
let hewan = { jenis: "Kucing" };
let sifat = { suara: "Meong" };
Object.setPrototypeOf(hewan, sifat);
console.log("Object.setPrototypeOf:", hewan, hewan.suara);

/**
 * 12. Object.defineProperty(obj, prop, descriptor)
 * -> Menambah / modifikasi property dengan aturan khusus
 */
let produk = {};
Object.defineProperty(produk, "nama", {
  value: "Laptop",
  writable: false, // tidak bisa diubah
  enumerable: true, // bisa ditampilkan dalam loop
  configurable: false, // tidak bisa dihapus
});
console.log("Object.defineProperty:", produk);
produk.nama = "HP"; // tidak berpengaruh
console.log("Setelah coba ubah:", produk);

/**
 * 13. Object.defineProperties(obj, props)
 * -> Menambahkan banyak property sekaligus
 */
Object.defineProperties(produk, {
  harga: { value: 10000000, writable: true },
  garansi: { value: "1 tahun" },
});
console.log("Object.defineProperties:", produk);

/**
 * 14. Object.fromEntries(array) -> Mengubah array pasangan [key, value] jadi object
 */
let arrEntries = [
  ["brand", "Asus"],
  ["tipe", "ROG"],
];
let objBaru = Object.fromEntries(arrEntries);
console.log("Object.fromEntries:", objBaru);

/**
 * 15. Object.is(value1, value2) -> Mengecek kesamaan (mirip === tapi lebih ketat untuk NaN)
 */
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true
console.log("NaN === NaN:", NaN === NaN); // false

/**
 * 16. Iterasi Object
 */
console.log("Iterasi for...in:");
for (let key in mahasiswa) {
  console.log(`${key}: ${mahasiswa[key]}`);
}

console.log("Iterasi Object.entries:");
Object.entries(mahasiswa).forEach(([k, v]) => {
  console.log(`${k} => ${v}`);
});
