/*impure function:
:memberikan hasil yang bebeda atau memiliki side effect (efek samping) yang memodifikasi sesuatu di luar fungsinya.*/
let count = 0;
function increment() {
  count++;
}

increment();
increment();
increment();
console.log(count); //output 3

//mengakses waktu sistem
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

console.log(getCurrentTime());

// Mengubah status objek yang diterima sebagai paramter
function updateUser(user) {
  user.name = "updated Name";
}

//Menulis ke berkas
const fs = require("fs");
function writeToFile(data) {
  fs.writeFileSync("data.txt", data);
}


