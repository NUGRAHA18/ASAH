//Contoh 1
// Fungsi yang akan digunakan sebagai callback
const cetakStatus = (pesan) => {
  console.log(pesan);
};

function pesanKopi(tipeKopi, callback) {
  const estimasi = 3000;
  console.log("kopi sedang dibuat, tunggu 5 detik");
  setTimeout(() => {
    callback(`Kopi ${tipeKopi} siap disajikan!`);
  });
}
//
pesanKopi("latte", cetakStatus);

/* Output yang diharapkan (akan muncul setelah 3 detik):
Kopi latte siap disajikan!
*/

//contoho 2:
