array.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [
  initialValue,
]);

// [...] adalah opsional parameter
//Inilah contoh penggunaan ketika kita ingin menjumlahkan total nilai siswa seperti di bawah ini.
const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore); // Output: 313
