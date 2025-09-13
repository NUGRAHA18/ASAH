import {
  takeOrder,
  cekStok,
  grillBeans,
  heatWater,
  brewCoffee,
  serveCoffee,
} from "./coffee-shop.mjs";

function main() {
  const order = "Coffee arabian";
  console.log("----Memulai Proses Pesan Kopi----");

  takeOrder(order)
    .then(() => {
      return cekStok();
    })
    .then(() => {
      console.log("Menyiapkan bahan secara bersamaan");
      return Promise.all([grillBeans(), heatWater()]);
    })
    .then((preparationResult) => {
      console.log("👍 Semua bahan siap!", preparationResult);
      return brewCoffee();
    })
    .then(() => {
      return serveCoffee();
    })
    .then(() => {
      console.log("🎉🎉 Pesanan selesai dan telah disajikan! Nikmati kopinya!");
    })

    //Jaringan pengaman untuk MENANGKAP kegagalan dari langkap manapun
    .catch((error) => {
      console.error(`\n💥 Proses pesanan dibatalkan!`);
      console.error(`Penyebab: ${error.message}`);
    })

    .finally(() => {
      console.log("--- Proses Pesanan Kopi Selesai ---");
    });
}

main();
