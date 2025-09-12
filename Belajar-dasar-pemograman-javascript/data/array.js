/**
 * ========================================
 * MODUL BELAJAR ARRAY JAVASCRIPT
 * ========================================
 * Array adalah struktur data yang digunakan untuk menyimpan
 * sekumpulan nilai (element) dalam satu variabel.
 *
 * Elemen dalam array memiliki indeks mulai dari 0.
 * Contoh: let arr = [10, 20, 30]; // arr[0] = 10
 */

// =====================
// Deklarasi & Inisialisasi
// =====================
let buah = ["apel", "mangga", "jeruk"];
console.log("Array buah:", buah);

// =====================
// Properti Array
// =====================

/**
 * 1. length -> Mengembalikan jumlah elemen dalam array
 */
console.log("Jumlah elemen:", buah.length);

// =====================
// Method Array
// =====================

/**
 * 1. toString() -> Mengubah array menjadi string (dipisahkan koma)
 */
console.log("toString():", buah.toString());

/**
 * 2. join(separator) -> Sama seperti toString, tapi separator bisa diubah
 */
console.log("join(' - '):", buah.join(" - "));

/**
 * 3. push() -> Menambahkan elemen di akhir array
 */
buah.push("pisang");
console.log("push():", buah);

/**
 * 4. pop() -> Menghapus elemen terakhir
 */
buah.pop();
console.log("pop():", buah);

/**
 * 5. unshift() -> Menambahkan elemen di awal
 */
buah.unshift("pepaya");
console.log("unshift():", buah);

/**
 * 6. shift() -> Menghapus elemen pertama
 */
buah.shift();
console.log("shift():", buah);

/**
 * 7. concat() -> Menggabungkan dua atau lebih array
 */
let sayur = ["bayam", "kangkung"];
let makanan = buah.concat(sayur);
console.log("concat():", makanan);

/**
 * 8. slice(start, end) -> Mengambil sebagian elemen array (tidak merubah array asli)
 */
let potong = makanan.slice(1, 3);
console.log("slice(1,3):", potong);

/**
 * 9. splice(start, deleteCount, item1, ...) -> Menambah/menghapus elemen
 */
makanan.splice(2, 1, "tomat"); // hapus 1 item mulai indeks 2, lalu tambahkan "tomat"
console.log("splice():", makanan);

/**
 * 10. indexOf() -> Mengembalikan indeks pertama dari suatu elemen
 */
console.log("indexOf('jeruk'):", makanan.indexOf("jeruk"));

/**
 * 11. lastIndexOf() -> Indeks terakhir suatu elemen
 */
let angka = [1, 2, 3, 2, 4, 2];
console.log("lastIndexOf(2):", angka.lastIndexOf(2));

/**
 * 12. includes() -> Mengecek apakah array memiliki elemen tertentu
 */
console.log("includes('mangga'):", buah.includes("mangga"));

/**
 * 13. find() -> Mengembalikan elemen pertama yang sesuai dengan kondisi
 */
let cari = angka.find((num) => num > 2);
console.log("find > 2:", cari);

/**
 * 14. findIndex() -> Sama seperti find, tapi kembalikan index
 */
console.log(
  "findIndex > 2:",
  angka.findIndex((num) => num > 2)
);

/**
 * 15. filter() -> Menghasilkan array baru dengan elemen yang sesuai kondisi
 */
let genap = angka.filter((num) => num % 2 === 0);
console.log("filter genap:", genap);

/**
 * 16. map() -> Membuat array baru hasil transformasi
 */
let kaliDua = angka.map((num) => num * 2);
console.log("map kali 2:", kaliDua);

/**
 * 17. forEach() -> Melakukan iterasi tiap elemen
 */
console.log("forEach():");
angka.forEach((num, i) => console.log(`Index ${i} = ${num}`));

/**
 * 18. reduce() -> Menggabungkan elemen array menjadi satu nilai
 */
let total = angka.reduce((acc, val) => acc + val, 0);
console.log("reduce jumlah:", total);

/**
 * 19. sort() -> Mengurutkan array (default string ascending)
 */
let abjad = ["d", "a", "c", "b"];
console.log("sort abjad:", abjad.sort());

// Sort angka dengan callback
let angka2 = [10, 5, 20, 1];
console.log(
  "sort angka:",
  angka2.sort((a, b) => a - b)
);

/**
 * 20. reverse() -> Membalik urutan array
 */
console.log("reverse angka2:", angka2.reverse());

/**
 * 21. flat() -> Menggabungkan array bersarang jadi satu level
 */
let nested = [1, [2, [3, 4]]];
console.log("flat(2):", nested.flat(2));

/**
 * 22. flatMap() -> Kombinasi map() dan flat()
 */
let kata = ["halo dunia", "belajar js"];
console.log(
  "flatMap():",
  kata.flatMap((str) => str.split(" "))
);
