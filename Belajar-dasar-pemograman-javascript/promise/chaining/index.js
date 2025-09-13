//Kode dengan Promise Chaining:
function getUserId() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. ID ditemukan");
      resolve(123);
    }, 4000);
  });
}

function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`2. Mengambil data untuk User ID : ${userId}`);
      resolve({
        id: userId,
        name: "Budi",
      });
    }, 4000);
  });
}

//Proses chaining
getUserId()
  .then((id) => {
    return fetchUserData(id);
  })

  .then((userData) => {
    console.log(`3. Halo, ${userData.name}`);
  });
