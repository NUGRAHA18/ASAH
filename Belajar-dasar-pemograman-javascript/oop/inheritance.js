class Smartphones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`This Phone is charging`);
  }
}

class android extends Smartphones {
  splitScreen() {
    console.log("android have a split screeen");
  }
}

class ios extends Smartphones {
  AirDrop() {
    console.log("Ios have a airdrop");
  }
}

const IOS = new ios("Black", "A", "12 Pro Max");
const ANDROID = new android("Red", "B", "Galaxy");
ANDROID.charging();
ANDROID.splitScreen();

IOS.charging();
IOS.AirDrop();

console.log(IOS instanceof Smartphones);
console.log(ANDROID instanceof Smartphones);
