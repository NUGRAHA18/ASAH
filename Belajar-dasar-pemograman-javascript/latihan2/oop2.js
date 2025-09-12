class Hewan {
  #berat;
  #usia;
  constructor(nama, berat, usia) {
    this.nama = nama;
    this.#berat = berat;
    this.#usia = usia;
  }

  getBerat() {
    return this.#berat;
  }

  getJumlahKaki() {
    return;
  }
  getUsia() {
    return this.#usia;
  }

  bersuara() {
    throw new Error("Hanya bisa diakses oleh child class");
  }
}

class Kucing extends Hewan {
  #jumlahKaki;
  constructor(nama, berat, usia, jumlahKaki) {
    super(nama, berat, usia);
    this.#jumlahKaki = jumlahKaki;
  }

  getJumlahKaki() {
    return this.#jumlahKaki;
  }

  bersuara() {
    return `Meow`;
  }
}

class Anjing extends Hewan {
  #ras;
  constructor(nama, berat, usia, ras) {
    super(nama, berat, usia);
    this.#ras = ras;
  }

  getRas() {
    return this.#ras;
  }

  bersuara() {
    return `Wolf`;
  }
}

const daftarHewan = [
  new Kucing("Milo", 40, 3, 4), // nama, berat, usia, jumlah kaki
  new Anjing("Buddy", 25, 5, 4, "golden"), // nama, berat, usia
];

daftarHewan.forEach((hewan) => {
  console.log(`
    Nama : ${hewan.nama} 
    suara : ${hewan.bersuara()}
    berat : ${hewan.getBerat()}
    usia : ${hewan.getUsia()}`);
  if (hewan instanceof Kucing) {
    console.log(`
    Jumlah Kaki :${hewan.getJumlahKaki()}`);
  }
  if (hewan instanceof Anjing) {
    console.log(`
    Ras : ${hewan.getRas()}`);
  }
});
