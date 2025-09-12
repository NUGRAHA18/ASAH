/*pendekatan impurerocessTransactions memiliki side effect karena mengubah variabel global (totalRevenue) dan juga bergantung pada nilai global (taxRate). Hal ini membuatnya tidak bisa diprediksi dan sulit diuji.*/

// let totalRevenue = 0;
// let taxRate = 0.1;

// function processTrancation(transaction) {
//   for (const t of transaction) {
//     const revenue = t.amout * (1 - taxRate);
//     totalRevenue += revenue;
//   }
// }

// const transaction1 = [{ amout: 200 }, { amout: 100 }];
// const transaction2 = [{ amout: 400 }, { amout: 400 }];

// processTrancation(transaction1);
// console.log(totalRevenue);

/* DIUBAH KE -> PURE FUNCTION*/
function calculateTotalRevenu(transaction, taxRate) {
  let total = 0;
  for (const i of transaction) {
    const revenue = i.amount * (1 - taxRate);
    total += revenue;
  }

  return total;
}
const transactions1 = [{ amount: 100 }, { amount: 200 }];
const transactions2 = [{ amount: 50 }, { amount: 150 }];
const currentTaxRate = 0.1;

const total1 = calculateTotalRevenu(transactions1, currentTaxRate);
console.log(total1);

//panggilan kedua, input yang sama tetap menghasilkan outpt yang sama.
const total2 = calculateTotalRevenu(transactions1, currentTaxRate);
console.log(total2);
