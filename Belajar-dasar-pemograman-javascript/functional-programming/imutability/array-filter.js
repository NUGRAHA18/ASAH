const truthyArray = [1, "", "Halo", 0, null, "Harry", 14].filter((item) =>
  Boolean(item)
);

console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]

//contoh lain
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

const eligibleForScholarshipStudents = students.filter(
  (student) => student.score > 85
);

console.log(eligibleForScholarshipStudents);

/**
 * Output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 *
 */
