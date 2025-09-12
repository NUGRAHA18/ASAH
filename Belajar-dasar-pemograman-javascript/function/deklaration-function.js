function fahrenheit(celcius) {
  if (celcius !== undefined && celcius !== null) {
    const hasil = (9 / 5) * celcius + 32;
    console.log(`Hasil konversi adalah :  ${hasil}`);
  } else {
    console.log("Gagal menghitung konversi");
  }
}

fahrenheit(30);
