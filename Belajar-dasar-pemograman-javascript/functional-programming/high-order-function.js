//Fibonaci
// function fibonacciMemo(n, cache = {}) {
//   if (n in cache) {
//     return cache[n]; // kalau sudah pernah dihitung, ambil dari cache
//   }

//   if (n <= 1) {
//     cache[n] = n; // simpan hasil ke cache
//     return n;
//   }

//   cache[n] = fibonacciMemo(n - 1, cache) + fibonacciMemo(n - 2, cache);
//   return cache[n];
// }

// console.log(fibonacciMemo(6));

//contoh 1
// function memoize(fn) {
//   const cache = new Map();

//   //menngembalkan nilai berupa fungsi
//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     const result = fn(...args);
//     cache.set(key, result);

//     return result;
//   };
// }

// function sumArray(arr) {
//   if (arr.length === 0) return 0;
//   return arr[0] + sumArray(arr.slice(1));
// }

//contoh 2
function apply(operation, ...args) {
  // kita bisa menambahkan kode lain sebelum operation dijalankan.

  return operation(...args);
}

function sum(a, b, c) {
  return a + b + c;
}

function discount(disc, value) {
  return value - (disc / 100) * value;
}

const productPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, productPrice);

console.log("Product price:", productPrice); // Output: Product price: 400
console.log("With discount 25%:", withDiscount); // Output: With discount 25%: 300
