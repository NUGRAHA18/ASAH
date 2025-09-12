//contoh
function cekStokProduk(namaProduk, callback) {
  console.log("Mengecek ketersediaan stok : ", namaProduk);
  setTimeout(() => {
    callback();
  }, 2000);
}

// Panggil fungsi dengan produk yang tersedia
cekStokProduk("laptop", (isAvailable) => {
  if (isAvailable) {
    console.log("Stok laptop tersedia! Produk dapat ditambahkan ke keranjang.");
  } else {
    console.log("Stok laptop tidak tersedia.");
  }
});
