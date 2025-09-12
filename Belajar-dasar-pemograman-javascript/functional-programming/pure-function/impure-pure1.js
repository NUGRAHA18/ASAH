const pajak = 0.05;
function calculateTotalPrice(items, percentageDiskon, isPromosi) {
  let subtotal = 0;
  //hitung subtotal
  for (let i of items) {
    subtotal += i.price * i.quantity;
  }

  //penerapan diskon
  if (percentageDiskon > 0 && !isPromosi) {
    subtotal = subtotal * (1 - percentageDiskon);
    isPromosi = true;
  }

  //penerapan pajak
  subtotal = subtotal * pajak;
  return subtotal;
}

const order1 = [
  { nama: "rinso", price: 2000, quantity: 2 },
  { nama: "pepsodent", price: 2000, quantity: 3 },
];

const order2 = [
  {
    nama: "dancow",
    price: 15000,
    quantity: 2,
  },
];

let isPromosi = false;

console.log("--- Panggilan Pertama ---");
const finalPrice1 = calculateTotalPrice(order1, 0.1, isPromosi);
console.log(`Harga Akhir Pesanan 1: $${finalPrice1.toFixed(2)}`);
console.log(`Apakah promo sudah digunakan? ${isPromosi}`);

console.log("--- Panggilan kedua ---");
const finalPrice2 = calculateTotalPrice(order2, 0.2, isPromosi);
console.log(`Harga Akhir Pesanan 2: $${finalPrice2.toFixed(2)}`);
console.log(`Apakah promo sudah digunakan? ${isPromosi}`);
