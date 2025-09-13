//proses concurrency
/*semua atau tidak sama sekali" (all or nothing) yang menjadi ciri khasnya.

✅ Skenario Sukses: Ia akan sabar menunggu sampai setiap Promise di dalamnya selesai dan berhasil (resolved). Baru setelah itu blok .then() dieksekusi dengan membawa hasil dari semua Promise tersebut dalam sebuah array.

❌ Skenario Gagal: Begitu ada satu Promise saja yang gagal (rejected), ia tidak akan peduli dengan Promise lainnya (meskipun Promise lain itu mungkin akan berhasil). Proses akan langsung berhenti dan melompat ke blok .catch() untuk menangani error tersebut.*/

const promise1 = new Promise((resolve) =>
  setTimeout(() => {
    resolve(1);
  }, 1000)
);

const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => {
    reject(new Error("Ups !"));
  }, 1000)
);

const promise3 = new Promise((resolve) =>
  setTimeout(() => {
    resolve(3);
  }, 3000)
);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("Success");
    console.log(values);
  })
  .catch((error) => {
    console.log("Failed");
    console.log(error.message);
  });
