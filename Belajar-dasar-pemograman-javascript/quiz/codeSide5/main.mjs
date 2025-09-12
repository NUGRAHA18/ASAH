import { API, sampleErrorData, sampleSuccessData } from './support.mjs';

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */
function processData(data) {
  // 1. Ubah setiap item di array 'data' menjadi sebuah promise dari API.fetch
  const promises = data.map(item => API.fetch(item.delay, item.simulateError));

  // 2. Gunakan Promise.all untuk menunggu semua promise selesai.
  // Metode ini akan otomatis melempar error (reject) jika salah satu promise gagal,
  // atau mengembalikan hasil (resolve) jika semua berhasil.
  return Promise.all(promises);
}

processData(sampleErrorData).then(console.log).catch(console.log); // Output: Error: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // Output: ['Data from delay 100', 'Data from delay 50']