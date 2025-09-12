function adjectivfy(adjective) {
  return function (noun) {
    return `${noun} ${adjective}.`;
  };
}

function multipleBy(x) {
  return function (y) {
    return x * y;
  };
}

const coolifier = adjectivfy("keren"); //addjective = keren, return function - > return noun & adj
const funnifier = adjectivfy("seru");

const multipleByFive = multipleBy(5);

console.log(coolifier("Dicoding")); // Output: Dicoding keren.
console.log(funnifier("JavaScript")); // Output: JavaScript seru.



//
function addOne(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

function compose(f, g) {
  return (x) => {
    return f(g(x));
  };
}

const addOneAndSquare = compose(square, addOne);

console.log(addOneAndSquare(2)); // output: 9
