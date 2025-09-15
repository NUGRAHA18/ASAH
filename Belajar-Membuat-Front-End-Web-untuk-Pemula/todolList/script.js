// Menunggu sampai seluruh konten halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  // 1. Mengambil elemen-elemen penting dari HTML
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  // Fungsi untuk menambah tugas baru
  function addTask() {
    const taskText = taskInput.value.trim(); // Ambil teks dan hapus spasi kosong

    // Validasi: jangan tambahkan tugas jika input kosong
    if (taskText === "") {
      alert("Silakan masukkan sebuah tugas.");
      return;
    }

    // 2. Membuat elemen-elemen untuk tugas baru
    const li = document.createElement("li"); // Buat list item <li>

    const taskSpan = document.createElement("span"); // Buat <span> untuk teks tugas
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement("button"); // Buat tombol hapus
    deleteButton.textContent = "Hapus";
    deleteButton.className = "delete-btn"; // Beri kelas untuk styling

    // 3. Menggabungkan elemen-elemen
    li.appendChild(taskSpan); // Masukkan <span> ke dalam <li>
    li.appendChild(deleteButton); // Masukkan tombol hapus ke dalam <li>
    taskList.appendChild(li); // Masukkan <li> yang sudah jadi ke dalam <ul>

    // 4. Bersihkan input field setelah tugas ditambahkan
    taskInput.value = "";
    taskInput.focus(); // Fokuskan kembali ke input field
  }

  // Fungsi untuk menangani klik pada daftar tugas
  function handleTaskListClick(event) {
    const item = event.target; // Mendapatkan elemen yang diklik

    // Jika yang diklik adalah tombol hapus
    if (item.classList.contains("delete-btn")) {
      const li = item.parentElement; // Dapatkan elemen <li> induknya
      taskList.removeChild(li); // Hapus <li> tersebut
    }
    // Jika yang diklik adalah list item (atau span di dalamnya)
    else if (item.tagName === "LI" || item.tagName === "SPAN") {
      const li = item.tagName === "LI" ? item : item.parentElement;
      li.classList.toggle("completed"); // Toggle kelas 'completed'
    }
  }

  // 5. Menambahkan Event Listeners
  addButton.addEventListener("click", addTask); // Klik tombol 'Tambah'
  taskInput.addEventListener("keyup", (event) => {
    // Tekan 'Enter' di input field
    if (event.key === "Enter") {
      addTask();
    }
  });

  taskList.addEventListener("click", handleTaskListClick); // Klik pada daftar tugas
});
