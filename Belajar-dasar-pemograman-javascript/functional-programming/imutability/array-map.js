const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 32 },
  { name: "Diana", age: 16 },
];

// Buat fungsi pure kamu di sini
function processUsers(users) {
  const prosessedUser = users.map((user) => {
    return {
      ...user,
      isAdult: user.age >= 18,
    };
  });
  return prosessedUser;
}

const processedUsers = processUsers(users);

console.log("Array baru yang diproses:", processedUsers);
console.log("Array asli tidak berubah:", users);

/* Output yang diharapkan:
Array baru yang diproses: [
  { name: 'Alice', age: 25, isAdult: true },
  { name: 'Bob', age: 17, isAdult: false },
  { name: 'Charlie', age: 32, isAdult: true },
  { name: 'Diana', age: 16, isAdult: false }
]
Array asli tidak berubah: [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 32 },
  { name: 'Diana', age: 16 }
]
*/
