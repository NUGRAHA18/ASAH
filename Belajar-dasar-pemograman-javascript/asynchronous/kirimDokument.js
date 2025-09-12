function kirimDokumen(namaDokumen, callback) {
  console.log(`Proses pengiriman dokumen dimulai..${namaDokumen}`);
  setTimeout(() => {
    console.log("Data Dokumen telah dikirim");
    const isSuccess = Math.random() > 0.5;
    callback(isSuccess);
  }, 4000);
}

kirimDokumen("Laporan Tahunan.pdf", (isSuccess) => {
  if (isSuccess) {
    console.log("Pengiriman dokumen berhasil!");
  } else {
    console.log("Pengiriman dokumen gagal, coba lagi nanti.");
  }
});
