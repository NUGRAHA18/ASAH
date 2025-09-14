// Fungsi ini hanya menerima string sebagai nama dan number sebagai tahun lahir
function perkenalkan(nama: string, tahunLahir: number): void {
  const umur: number = 2025 - tahunLahir; // Asumsi tahun sekarang 2025
  console.log(`Halo, nama saya ${nama}. Saya berumur ${umur} tahun.`);
}

// Memanggil fungsi dengan tipe data yang benar
perkenalkan("Budi", 2000);

// Jika Anda mencoba ini, VS Code akan memberi garis bawah merah (error)
// perkenalkan("Siti", "1995");
