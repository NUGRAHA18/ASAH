//pure
//contoh 1 :
function calculateTotalPrice(orderItems) {
  return orderItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

const items = [
  {
    name: "rinso",
    price: 200,
    quantity: 3,
  },
  {
    name: "pepsodent",
    price: 100,
    quantity: 200,
  },
];

const total = calculateTotalPrice(items);
console.log(total);

//contoh 2 :

function getActiveUsernames(users) {
  return users.filter((user) => user.isActive).map((user) => user.username);
}

const users = [
  {
    username: "agung",
    isActive: true,
  },
  { namae: "bahlil", isActive: false },
];

const result = getActiveUsernames(users);
console.log(result);

//contoh 2 : membuat object baru berdasarkan input tanpa mengubah input asli
function createUserProfile(user, address) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: address.street,
      city: address.city,
      country: address.country,
    },
  };
}

const user = {
  id: 2,
  name: "agung",
  email: "@example.com",
};

const alamat = {
  street: "a",
  city: "b",
  country: "c",
};

console.log(createUserProfile(user, alamat));

// contoh 3 : Menggabungkan dua objek tanpa mengubah objek asli
function mergeSettings(defaultSettings, userSettings) {
  return {
    ...defaultSettings,
    ...userSettings,
  };
}

const settingDefault = [
  {
    name: "coffee machine",
    isActive: true,
    celcius: 90,
  },
  {
    name: "coffee machine",
    isActive: true,
    celcius: 90,
  },
];

const userDefault = {
  name: "coffee machine",
  isActive: false,
  celcius: 70,
};

const resultt = mergeSettings(settingDefault, userDefault);
console.log(resultt);

//
function max(arrayOfNumbers) {
  // menggunakan spread operator untuk menduplikasi nilai arrayOfNumbers
  return [...arrayOfNumbers].sort((a, b) => a - b).pop();
}

function registerEmail(person, emailnya) {
  // menggunakan spread operator untuk menduplikasi nilai person
  return { ...person, emailnya };
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest); // Output: 42
console.log(numbers); // Output: [ 10, 23, 24, 7, 42, 18 ]

const person = {
  name: "John",
  username: "johndoe",
};

const personWithEmail = registerEmail(person, "john@dicoding.com");

console.log(person); // Output: { name: 'John', username: 'johndoe' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
