function cetakNilai(inputan) {
  for (let i = 0; i < inputan.length; i++) {
    if (typeof inputan[i] !== "number") {
      throw new Error("inputan harus number");
    }

    const grade = inputan[i];
    let predikat;
    if (grade >= 90) {
      predikat = "A";
    } else if (grade >= 80) {
      predikat = "B";
    } else if (grade >= 70) {
      predikat = "C";
    } else {
      predikat = "D";
    }

    console.log(`Nilai : ${grade}, Predikat (${predikat})`);
  }
}

try {
  const studentGrades = [95, 85, 65, 80, 70];
  cetakNilai(studentGrades);
} catch (err) {
  console.log("Erorr", err.message);
} finally {
  console.log("Program telah selesai dijalankan!");
}

/*flow 
- diberikan data dengan nilai-nilai
- fungsi harus memiliki parameter nilai tersebut
- iterasi terhadap nilai yang ada
- cek setiap iterasi apakah number -> jika tidak tampilkan error 
- pembuatan variabel untuk menentukan predikat
- pengkondisian untuk nilai -> menentukan predika
- cetak iterasi nilai beserta predikat
- gunakan try catch
*/
