//versi iteratif(loop)
function factorialIterative(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}

//console.log(factorialIterative(5));

//versi rekursif
function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}
 
console.log(factorialRecursive(4));
/**
 n = 5 -> 
 */
