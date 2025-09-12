/**
 * ========================================
 * MODUL BELAJAR SPREAD OPERATOR JAVASCRIPT
 * ========================================
 * Spread operator (...) digunakan untuk "menyebarkan" elemen
 * dari array, object, atau iterable lain menjadi elemen terpisah.
 *
 * Bisa digunakan untuk:
 * - Menyalin (copy)
 * - Menggabungkan (merge)
 * - Memperluas (expand)
 */

// =====================
// Spread pada Array
// =====================

let angka = [1, 2, 3];
let angkaBaru = [...angka, 4, 5];
console.log("Spread array:", angkaBaru);
// [1, 2, 3, 4, 5]

// Menyalin array
let copyArray = [...angka];
console.log("Copy array:", copyArray);

// Menggabungkan array
let arr1 = [10, 20];
let arr2 = [30, 40];
let gabungArray = [...arr1, ...arr2];
console.log("Gabungan array:", gabungArray);

// =====================
// Spread pada Object
// =====================

let obj1 = { nama: "Agung", umur: 21 };
let obj2 = { jurusan: "Informatika", umur: 22 };

let gabungObj = { ...obj1, ...obj2 };
console.log("Gabungan object:", gabungObj);
// { nama: 'Agung', umur: 22, jurusan: 'Informatika' }

// Copy object
let copyObj = { ...obj1 };
console.log("Copy object:", copyObj);

// Tambah property saat copy
let obj3 = { ...obj1, kota: "Bandung" };
console.log("Copy + tambahan:", obj3);

// =====================
// Spread pada Function Arguments
// =====================

function jumlah(a, b, c) {
  return a + b + c;
}

let nilai = [5, 10, 15];
console.log("Spread di argumen:", jumlah(...nilai));
// sama dengan jumlah(5, 10, 15)

// =====================
// Spread untuk String (iterable)
// =====================

let kata = "Belajar";
let huruf = [...kata];
console.log("Spread string:", huruf);
// ['B', 'e', 'l', 'a', 'j', 'a', 'r']

// =====================
// Spread dengan Set
// =====================
let set = new Set([1, 2, 3, 3, 4]);
let uniqueArr = [...set];
console.log("Spread Set -> Array:", uniqueArr);

// =====================
// Catatan penting
// =====================

// 1. Spread membuat salinan dangkal (shallow copy), bukan deep copy
let arrAsli = [
  [1, 2],
  [3, 4],
];
let arrCopy = [...arrAsli];
arrCopy[0][0] = 99;
console.log("Asli:", arrAsli); // ikut berubah!
console.log("Copy:", arrCopy);

// 2. Urutan spread penting
let objA = { a: 1, b: 2 };
let objB = { b: 99, c: 3 };
let result = { ...objA, ...objB };
console.log("ObjA + ObjB:", result);
// b = 99 (karena objB ditaruh belakangan, menimpa objA)
