// menerima argumen sebuah fungsi
function memoize(fn) {
  const cache = new Map();

  // mengembalikan nilai berupa fungsi
  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}

function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

/*
arr[0]
arr[1, 2, 3, 4]
arr.slice(1)
arr[2,3,4]
*/

const memoizedSumArray = memoize(sumArray);
const largeArray = Array.from({ length: 5 }, (_, i) => i + 1);

//pemanggilan ke-1
console.time("Memoized Sum First Call");
console.log("Total:", memoizedSumArray(largeArray));
console.timeEnd("Memoized Sum First Call");

//pemanggilan ke-2
console.time("Memoized Sum First Call");
console.log("Total:", memoizedSumArray(largeArray));
console.timeEnd("Memoized Sum First Call");
