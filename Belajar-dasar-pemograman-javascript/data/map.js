/**
 * ========================================
 * MODUL BELAJAR MAP JAVASCRIPT
 * ========================================
 * Map adalah koleksi pasangan key-value yang mirip object,
 * tapi lebih fleksibel: key bisa berupa tipe data apapun
 * (string, number, object, function, dll).
 *
 * Berbeda dengan Object:
 * - Map mempertahankan urutan penambahan elemen
 * - Memiliki properti dan method khusus
 */

// =====================
// Deklarasi & Inisialisasi
// =====================
let map = new Map();

// Menambahkan pasangan key-value dengan set()
map.set("nama", "Agung");
map.set(21, "umur");
map.set(true, "status aktif");
map.set({ kota: "Bandung" }, "alamat");

console.log("Map awal:", map);

// =====================
// Properti Map
// =====================

/**
 * 1. size -> Mengembalikan jumlah elemen dalam Map
 */
console.log("Jumlah elemen:", map.size);

// =====================
// Method Map
// =====================

/**
 * 1. set(key, value) -> Menambahkan atau update value berdasarkan key
 */
map.set("jurusan", "Informatika");
console.log("set():", map);

/**
 * 2. get(key) -> Mengambil value berdasarkan key
 */
console.log("get('nama'):", map.get("nama"));

/**
 * 3. has(key) -> Mengecek apakah key ada dalam Map
 */
console.log("has(21):", map.has(21));

/**
 * 4. delete(key) -> Menghapus pasangan key-value
 */
map.delete(true);
console.log("delete(true):", map);

/**
 * 5. clear() -> Menghapus semua elemen dalam Map
 */
let temp = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
temp.clear();
console.log("clear():", temp);

/**
 * 6. forEach(callback) -> Iterasi setiap pasangan key-value
 */
console.log("forEach():");
map.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

/**
 * 7. keys() -> Iterator untuk semua key
 */
console.log("keys():", [...map.keys()]);

/**
 * 8. values() -> Iterator untuk semua value
 */
console.log("values():", [...map.values()]);

/**
 * 9. entries() -> Iterator untuk semua pasangan [key, value]
 */
console.log("entries():", [...map.entries()]);

/**
 * 10. Iterasi langsung dengan for...of
 */
console.log("Iterasi for...of:");
for (let [key, value] of map) {
  console.log(`${key} = ${value}`);
}

// =====================
// Map dengan tipe data non-string sebagai key
// =====================
let objKey = { id: 1 };
let funcKey = function () {};
let arrKey = [1, 2, 3];

let complexMap = new Map();
complexMap.set(objKey, "Ini object");
complexMap.set(funcKey, "Ini function");
complexMap.set(arrKey, "Ini array");

console.log("Map dengan key kompleks:", complexMap);
console.log("Ambil value dari object key:", complexMap.get(objKey));
console.log("Ambil value dari function key:", complexMap.get(funcKey));
console.log("Ambil value dari array key:", complexMap.get(arrKey));

// =====================
// Konversi Map <-> Struktur Lain
// =====================

/**
 * 1. Map -> Array
 */
let arrDariMap = [...map];
console.log("Map ke Array:", arrDariMap);

/**
 * 2. Map -> Object (hanya jika key berupa string)
 */
let mapToObj = Object.fromEntries(map);
console.log("Map ke Object:", mapToObj);

/**
 * 3. Array -> Map
 */
let arr = [
  ["x", 10],
  ["y", 20],
];
let mapDariArray = new Map(arr);
console.log("Array ke Map:", mapDariArray);

/**
 * 4. Object -> Map
 */
let obj = { satu: 1, dua: 2 };
let mapDariObj = new Map(Object.entries(obj));
console.log("Object ke Map:", mapDariObj);
