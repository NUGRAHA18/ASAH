//pada array
function max(arrayOfNumbers) {
  return arrayOfNumbers.sort((a, b) => a - b).pop();
}

const numberss = [10, 23, 24, 7, 42, 18];
const largestt = max(numberss);
/*Fungsi max adalah fungsi yang mengembalikan elemen bernilai terbesar dari array yang dikirimkan melalui argumen. Sepintas, fungsi max terlihat pure karena tidak mengakses nilai selain dalam argumennya. Namun, karena dalam implementasinya kita menggunakan fungsi sort dan pop, fungsi max jadi memiliki efek samping, yaitu mengubah nilai array numbers yang diberikan melalui argumen. Efek samping ini mungkin saja tidak terduga karena tujuan fungsi tersebut hanya mengembalikan elemen yang paling besar. */

//pada objek
function registerEmail(person, email) {
  return Object.assign(person, { email });
}

const personn = {
  name: "agung",
  age: 20,
};

const personWithEmaiil = registerEmail(personn, "john@dicoding.com");
console.log(personWithEmaiil);

//Selain pada array, perubahan data juga banyak terjadi dalam object. Salah satunya adalah penggunaan fungsi Object.assign yang dapat mengubah nilai pada sebuah objek yang sudah terbentuk sebelumnya.

//SOLUSINYA
// /proses duplikasi data dapat dilakukan dengan mudah menggunakan sintaksis spread operator.

function max(arrayOfNumbers) {
  // menggunakan spread operator untuk menduplikasi nilai arrayOfNumbers
  return [...arrayOfNumbers].sort((a, b) => a - b).pop();
}

function registerEmail(person, email) {
  // menggunakan spread operator untuk menduplikasi nilai person
  return { ...person, email };
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest); // Output: 42
console.log(numbers); // Output: [ 10, 23, 24, 7, 42, 18 ]

const person = {
  name: "John",
  username: "johndoe",
};

const personWithEmail = registerEmail(person, "john@dicoding.com");

console.log(person); // Output: { name: 'John', username: 'johndoe' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
