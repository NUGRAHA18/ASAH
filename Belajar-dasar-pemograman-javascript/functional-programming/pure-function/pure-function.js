// Data yang diberikan
const users = [
  { id: 1, name: "Budi", age: 25, isVerified: true },
  { id: 2, name: "Siti", age: 17, isVerified: false },
  { id: 3, name: "Tono", age: 30, isVerified: true },
  { id: 4, name: "Ani", age: 22, isVerified: true },
  { id: 5, name: "Dodo", age: 19, isVerified: false },
];

// Buat fungsi pure kamu di sini
function getVerifiedUsers(users, minAge) {
  // ...
  const filterUser = users.filter((user) => {
    return user.isVerified && user.age >= minAge;
  });
  return filterUser;
}

// Uji fungsi
const verifiedUsers = getVerifiedUsers(users, 20);
console.log(
  "Pengguna yang terverifikasi dan memenuhi syarat usia:",
  verifiedUsers
);
console.log("Array asli (users) tidak berubah:", users);

/* Output yang diharapkan:
Pengguna yang terverifikasi dan memenuhi syarat usia: [
  { id: 1, name: 'Budi', age: 25, isVerified: true },
  { id: 3, name: 'Tono', age: 30, isVerified: true },
  { id: 4, name: 'Ani', age: 22, isVerified: true },
]
Array asli (users) tidak berubah: [
  { id: 1, name: 'Budi', age: 25, isVerified: true },
  { id: 2, name: 'Siti', age: 17, isVerified: false },
  { id: 3, name: 'Tono', age: 30, isVerified: true },
  { id: 4, name: 'Ani', age: 22, isVerified: true },
  { id: 5, name: 'Dodo', age: 19, isVerified: false },
]
*/
