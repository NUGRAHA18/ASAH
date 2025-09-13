function createTaks(nameTask, duration, successChange = 0.9) {
  console.log(`Memulai proses ${nameTask}`);

  return new Promise((resolve, reject) => {
    console.log(`⏳ Memulai: ${nameTask}...`);
    setTimeout(() => {
      if (Math.random() < successChange) {
        console.log(`✅ Selesai: ${nameTask}`);
        resolve(`${nameTask} berhasil`);
      } else {
        console.error(`❌ GAGAL: ${nameTask}`);
        reject(new Error(`Terjadi masalah saat ${nameTask}.`));
      }
    }, duration);
  });
}

const takeOrder = (order) =>
  createTaks(`Menerima pesanan ${order}`, 2000, 0.99);
const cekStok = () => createTaks("Cek stok", 1500, 0.95);
const grillBeans = () => createTaks("Menggiling kopi", 2000, 0.9);
const heatWater = () => createTaks("Pemanaskan Air", 2000, 0.9);
const brewCoffee = () => createTaks("Mengaduk kopi", 1500);
const serveCoffee = () => createTaks("Menyajikan kopi ke pelanggan", 1000);

export { takeOrder, cekStok, grillBeans, heatWater, brewCoffee, serveCoffee };
