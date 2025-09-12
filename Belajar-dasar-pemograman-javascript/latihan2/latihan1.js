//Latihan 1: Kombinasi map dan filter
const books = [
  { title: "The Hobbit", rating: 4.5 },
  { title: "The Lord of the Rings", rating: 5.0 },
  { title: "The Chronicles of Narnia", rating: 4.2 },
  { title: "Harry Potter and the Sorcerer's Stone", rating: 4.8 },
  { title: "The Da Vinci Code", rating: 3.9 },
];

// Tulis kode Anda di sini
// ...
// ...
const bookRate = books
  .filter((book) => book.rating >= 4)
  .map((book) => book.title);
console.log(bookRate);
// Output yang diharapkan:
// [ 'The Hobbit', 'The Lord of the Rings', 'Harry Potter and the Sorcerer\'s Stone' ]

// Tulis kode Anda di sini
function countDown(n) {
  if (n < 0) {
    return;
  }
  console.log(n);
  countDown(n - 1);
  // ...
  // ...
}

countDown(3);

// Output yang diharapkan:
// 3
// 2
// 1
// 0

/*Latihan rekrusi 3 */
// Tulis kode Anda di sini
function isPalindrome(str) {
  // Anda harus menentukan kasus dasar (base case) di sini
  // ...
  // Anda juga harus menentukan langkah rekursif (recursive step)
  // ...

  const cleanedStr = str.toLowerCase().replace(/ /g, "");
  //Kasus dasar
  if (cleanedStr.length <= 1) {
    return true;
  }

  if (cleanedStr[0] !== cleanedStr[cleanedStr.length - 1]) {
    return false;
  }

  //panggil lagi dengan sisa string
  console.log(cleanedStr);
  return isPalindrome(cleanedStr.slice(1, -1));
}

console.log(isPalindrome("malam"));
console.log(isPalindrome("A Man  plan a canal panama"));
isPalindrome("hello");

const kata = "aa";
console.log(kata.length);
