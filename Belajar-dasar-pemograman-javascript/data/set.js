/**
 * ========================================
 * MODUL BELAJAR SET JAVASCRIPT
 * ========================================
 * Set adalah koleksi nilai unik (tidak ada duplikat).
 * Urutan penyimpanan mengikuti urutan saat ditambahkan.
 *
 * Berbeda dengan Array:
 * - Elemen dalam Set tidak punya indeks
 * - Tidak bisa ada elemen ganda (duplikat otomatis dihapus)
 */

// =====================
// Deklarasi & Inisialisasi
// =====================
let set = new Set([1, 2, 3, 3, 4]); // duplikat "3" akan dihapus
console.log("Set awal:", set);

// =====================
// Properti Set
// =====================

/**
 * 1. size -> Mengembalikan jumlah elemen dalam Set
 */
console.log("Jumlah elemen:", set.size);

// =====================
// Method Set
// =====================

/**
 * 1. add(value) -> Menambahkan elemen baru (jika belum ada)
 */
set.add(5);
set.add(2); // tidak ditambahkan karena sudah ada
console.log("add():", set);

/**
 * 2. has(value) -> Mengecek apakah nilai ada dalam Set
 */
console.log("has(3):", set.has(3));
console.log("has(10):", set.has(10));

/**
 * 3. delete(value) -> Menghapus elemen tertentu
 */
set.delete(4);
console.log("delete(4):", set);

/**
 * 4. clear() -> Menghapus semua elemen
 */
let temp = new Set([10, 20, 30]);
temp.clear();
console.log("clear():", temp);

/**
 * 5. forEach(callback) -> Iterasi setiap elemen
 */
console.log("forEach():");
set.forEach((value) => {
  console.log(value);
});

/**
 * 6. values() -> Iterator untuk semua nilai
 */
console.log("values():", [...set.values()]);

/**
 * 7. keys() -> Sama dengan values() (disediakan untuk konsistensi dengan Map)
 */
console.log("keys():", [...set.keys()]);

/**
 * 8. entries() -> Pasangan [value, value], agar konsisten dengan Map
 */
console.log("entries():", [...set.entries()]);

/**
 * 9. Iterasi langsung dengan for...of
 */
console.log("Iterasi for...of:");
for (let value of set) {
  console.log(value);
}

// =====================
// Operasi Set Lanjutan
// =====================

/**
 * 1. Union (gabungan dua Set)
 */
let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);
let union = new Set([...setA, ...setB]);
console.log("Union:", union);

/**
 * 2. Intersection (irisan dua Set)
 */
let intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log("Intersection:", intersection);

/**
 * 3. Difference (selisih)
 */
let difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log("Difference (A - B):", difference);

/**
 * 4. Subset (apakah semua elemen A ada di B)
 */
let subset = [...setA].every((x) => setB.has(x));
console.log("Apakah A subset dari B?:", subset);

// =====================
// Konversi Set <-> Struktur Lain
// =====================

/**
 * 1. Set -> Array
 */
let arrDariSet = [...setA];
console.log("Set ke Array:", arrDariSet);

/**
 * 2. Array -> Set
 */
let arr = [1, 2, 2, 3, 4, 4];
let setDariArr = new Set(arr);
console.log("Array ke Set:", setDariArr);
