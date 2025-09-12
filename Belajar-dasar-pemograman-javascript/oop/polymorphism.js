class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class Android extends SmartPhones {
  constructor(color, brand, model, device) { //overriding constructor
    super(color, brand, model);              //overriding method
    this.device = device;
  }

  charging() {
    super.charging();
    console.log(`Charging ${this.model} with fast charger`);
  }

  splitScreen() {
    console.log("Android have a Split Screen");
  }
}

const android = new Android("white", "B", "Galaxy S21", "smart TV");

android.charging();
