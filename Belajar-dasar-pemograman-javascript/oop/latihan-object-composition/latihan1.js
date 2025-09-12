/*createWizard("Gandalf")
   ├─> new Character("Gandalf")   // buat object
   ├─> canCastSpell()             // buat mixin
   ├─> Object.assign(...)         // gabungkan
   └─> return character           // hasil akhir
 */

//Latihan 1: Dasar Class
class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  move() {
    console.log(`${this.brand} is moving at speed ${this.speed} km/h`);
  }
}

const mobil = new Vehicle("Toyota", 90);
console.log(mobil.brand);
console.log(mobil.speed);
mobil.move();
