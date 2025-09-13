import { makeCoffee, sendCoffie } from "./coffee.mjs";

const order = "kopi expresso";

makeCoffee(order)
  .then((value) => {
    return sendCoffie(value);
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
  });
