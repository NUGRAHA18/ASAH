// A. Dapatkan elemen DOM yang dibutuhkan
const ulTask = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");

// B. Fungsi untuk membuat dan menambahkan elemen baru
function createTaskElement(taskText) {
  const newLi = document.createElement("li");
  newLi.classList.add("task-item");

  const newSpan = document.createElement("span");
  newSpan.classList.add("task-text");
  newSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Hapus";

  newLi.append(newSpan, deleteBtn);
  ulTask.append(newLi);
}

// C. Menambahkan tugas baru
addTaskBtn.addEventListener("click", () => {
  // Gunakan .trim() untuk memastikan input tidak hanya berisi spasi
  const text = taskInput.value.trim();

  if (text !== "") {
    createTaskElement(text);
    // Kosongkan input setelah tugas berhasil ditambahkan
    taskInput.value = "";
  } else {
    alert("Input tidak boleh kosong!");
  }
});

// D. Menangani penghapusan tugas dengan event delegation
ulTask.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const taskItem = event.target.parentElement;
    if (taskItem) {
      taskItem.remove();
    }
  }
});
