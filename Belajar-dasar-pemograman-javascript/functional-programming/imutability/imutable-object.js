const user = {
  name: "John",
  email: "john@dicoding.com",
};

// Membekukan objek user
Object.freeze(user);

// Mencoba mengubah properti dari objek yang dibekukan
user.email = "doe@dicoding.com";
console.log(user); // Output: { name: 'John', email: 'john@dicoding.com' }

//Namun, perlu diingat bahwa Object.freeze hanya membekukan tingkat pertama dari objek. Jika objek tersebut memiliki properti yang merupakan objek lain, properti tersebut masih dapat diubah. Untuk membuat objek benar-benar immutable, kita perlu membekukan setiap objek yang menjadi properti secara rekursi.

function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const prop = object[name];
    if (typeof prop == "object" && prop !== null) {
      deepFreeze(prop);
    }
  });

  return Object.freeze(object);
}

const complexUser = {
  name: "Bob",
  email: "bob@dicoding.com",
  preferences: {
    newsletter: true,
    notifications: "weekly",
    address: {
      city: "New York",
      zip: "10001",
    },
  },
};

deepFreeze(complexUser);

// Diabaikan
complexUser.preferences.address.city = "Los Angeles";

console.log(complexUser.preferences.address.city); // Output: 'New York'
