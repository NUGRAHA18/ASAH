class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  acelerate() {
    return `${this.brand} bisa akselerasi`;
  }
}

class Car extends Vehicle {
  constructor(brand, wheel) {
    super(brand);
    this.wheel = wheel;
  }

  honk() {
    return `This ${this.brand} can honk too`;
  }
}

const mobil = new Car("toyota", "offroad");
console.log(mobil);
