class BankAccount {
  // Properti privat
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Metode publik
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  // Metode publik untuk mengakses data privat
  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
console.log(myAccount.getBalance()); // Output: 150

// myAccount.#balance = 1000; // Ini akan menyebabkan SyntaxError!
