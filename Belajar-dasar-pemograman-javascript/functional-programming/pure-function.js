//Pure Function : selalu memberikan hasil yang sama untuk input yang sama dan tidak mengubah data di luar diriny
function calculateTotalPrice(orderItems) {
  return orderItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

const items = [
  { price: 10000, quantity: 2 },
  { price: 5000, quantity: 3 },
  { price: 2000, quantity: 1 },
];

console.log(calculateTotalPrice(items)); // 35000

//Memfilter dan memtakan data tanpa mengubah array asli
function getActiveUsername(users) {
  return users.filter((user) => user.isActive).map((user) => user.username);
}

const users = [
  { username: "Agung", isActive: true },
  { username: "Budi", isActive: false },
  { username: "Citra", isActive: true },
];
console.log(getActiveUsername(users));

//Membuat Objet baru berdasarkan input tanpa mengubah input asli
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
  id: 1,
  name: "Agung",
  email: "agung@example.com",
};

const address = {
  street: "Jl. Merdeka No. 10",
  city: "Bandung",
  country: "Indonesia",
};

const profile = createUserProfile(user, address);
console.log(profile);

// Menggabungkan dua objek tanpa mengubah objek alsi
function mergeSetting(defaultSetting, userSettings) {
  return {
    ...defaultSetting,
    ...userSettings,
  };
}
const defaultSettings = {
  theme: "light",
  notifications: true,
  fontSize: 14,
};

const userSettings = {
  theme: "dark",
  fontSize: 16,
};

const settigs = mergeSetting(defaultSettings, userSettings);
console.log(settigs);
