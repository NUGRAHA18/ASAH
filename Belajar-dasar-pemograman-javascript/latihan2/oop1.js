class Karyawan {
  #id;
  #gajiDasar;
  constructor(nama, id, gajiDasar) {
    this.nama = nama;
    this.#id = id;
    this.#gajiDasar = gajiDasar;
  }

  getId() {
    return this.#id;
  }
  getGajiDasar() {
    return this.#gajiDasar;
  }

  hitungGaji() {
    throw new Error(
      "Metode hitungGaji() harus diimplementasikan oleh kelas anak."
    );
  }

  hitungGajiTahunan() {
    return this.hitungGaji() * 12;
  }
}
class KaryawanPenuhWaktu extends Karyawan {
  constructor(nama, id, gajiDasar, bonus) {
    super(nama, id, gajiDasar);
    this.bonus = bonus;
  }
  hitungGaji() {
    return this.getGajiDasar() + this.bonus;
  }
}

class KaryawanParuhWaktu extends Karyawan {
  constructor(nama, id, gajiDasar, jamKerja, upahPerJam) {
    super(nama, id, gajiDasar);
    this.jamKerja = jamKerja;
    this.upahPerJam = upahPerJam;
  }

  hitungGaji() {
    return this.getGajiDasar() + this.jamKerja * this.upahPerJam;
  }
}

const daftarKaryawan = [
  new KaryawanPenuhWaktu("Anya", "K-100", 5000000, 10000),
  new KaryawanParuhWaktu("Beni", "K-002", 0, 160, 50000),
];

// 5. Iterasi dan cetak gaji menggunakan polymorphism
console.log("Perhitungan Gaji Karyawan:");
// ...
console.log(daftarKaryawan);
daftarKaryawan.forEach((pegawai) => {
  console.log(`Nama ${pegawai.nama}, 
    Gaji Bulanan : ${pegawai.hitungGaji()}
    Gaji Tahunan : ${pegawai.hitungGajiTahunan()} `);
});

console.log(daftarKaryawan[0].hitungGajiTahunan());
