class CoffeMachine {
  #temperature = 90;
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this.#temperature = this.#defaultTemperature();
  }

  set temperature(temperature) {
    console.log("You are not allowed to change the temperature");
  }

  get temperature() {
    return this.#temperature;
  }

  #defaultTemperature() {
    return 90;
  }
}

const coffee = new CoffeMachine(100);
console.log(coffee.temperature);
coffee.temperature = 60;
console.log(coffee.temperature);
