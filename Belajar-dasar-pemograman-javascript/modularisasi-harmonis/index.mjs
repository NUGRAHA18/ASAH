import {
  restaurantStok,
  isMachineActive,
  isMachineWell,
} from "./inventory.mjs";

function preOrder(
  requestOrder,
  jumlahDipesan,
  stock,
  isMachineActive,
  isMachineWell = true
) {
  if (!isMachineActive) {
    console.log("mesin belum aktif");
    return;
  }

  if (!isMachineWell) {
    console.log("mesin bermasalah");
  }

  if (typeof stock !== "object" || stock === null) {
    console.log("tipe data harus object");
    return;
  }

  if (!stock.hasOwnProperty(requestOrder)) {
    console.log("menu tidak tersedia");
    return;
  }

  if (stock[requestOrder] <= 0) {
    console.log("stok habis");
    return;
  }

  if (jumlahDipesan > stock[requestOrder]) {
    console.log("Stok tidak mencukupi");
    return;
  }

  makeOrder(requestOrder, stock);
}

function makeOrder(requestOrder, jumlahDipesan, stock) {
  stock[requestOrder] -= jumlahDipesan;
  console.log(
    `${requestOrder} berhasil dipesan. Sisa stok: ${stock[requestOrder]}`
  );
}

const makannan = "mieAyam";
const jumlahPesanan = 100;

preOrder(makannan, jumlahPesanan, restaurantStok, {
  isMachineActive,
  isMachineWell,
});
