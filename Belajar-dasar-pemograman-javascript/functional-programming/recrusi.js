//dengan perulangan (tidak direkomendasikan di dalam FP)
function generatorAdd(n) {
  let count = [];
  for (let i = 1; i < n; i += 1) {
    count.push(i);
  }
  return count;
}

console.log(generatorAdd(3));

//dengan rekrusi
function generateArray(n) {
  if (n < 0) {
    return [];
  }

  return [...generateArray(n - 1), n];
}

console.log(generateArray(5));
