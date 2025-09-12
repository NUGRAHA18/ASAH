// 1. Buat class Animal
class Animal {
  constructor(name, age, isMammal) {
    this.name = name; // properti name
    this.age = age; // properti age
    this.isMammal = isMammal; // properti isMammal
  }
}

// 2. Buat class Rabbit (turunan dari Animal)
class Rabbit extends Animal {
  constructor(name, age) {
    super(name, age, true); // isMammal otomatis true
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

// 3. Buat class Eagle (turunan dari Animal)
class Eagle extends Animal {
  constructor(name, age) {
    super(name, age, false); // isMammal otomatis false
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

// 4. Buat instance dari Rabbit
const myRabbit = new Rabbit("Labi", 2);

// 5. Buat instance dari Eagle
const myEagle = new Eagle("Elo", 4);

// Cek hasil
console.log(myRabbit.name); // "Labi"
console.log(myRabbit.age); // 2
console.log(myRabbit.isMammal); // true ✅
console.log(myRabbit.eat()); // "Labi sedang makan!"

console.log(myEagle.name); // "Elo"
console.log(myEagle.age); // 4
console.log(myEagle.isMammal); // false ✅
console.log(myEagle.fly()); // "Elo sedang terbang!"
