function memoize(fn) {
  const cache = {}; // tempat menyimpan hasil

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Ambil dari cache:", key);
      return cache[key];
    }

    console.log("Hitung baru:", key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function slowSquare(x) {
  let result = 0;
  for (let i = 0; i < 1e8; i++) {
    result = x * x;
  }
  return result;
}

const memoSquare = memoize(slowSquare);

console.log(memoSquare(5));
console.log(memoSquare(5));
console.log(memoSquare(10));
