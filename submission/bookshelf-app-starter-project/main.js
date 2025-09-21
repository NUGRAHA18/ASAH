const books = [];
const RENDER_EVENT = "render-book";
const STORAGE_KEY = "BOOKSHELF_APPS";
let editingBookId = null;

const incompleteList = document.getElementById("incompleteBookList");
const completeList = document.getElementById("completeBookList");
const submitForm = document.getElementById("bookForm");
const submitBtn = document.getElementById("bookFormSubmit");
const cancelBtn = document.getElementById("bookFormCancel");

// 🔹 Event DOM Loaded
document.addEventListener("DOMContentLoaded", function () {
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (editingBookId !== null) {
      updateBook(editingBookId);
    } else {
      addBook();
    }

    submitForm.reset();
    editingBookId = null;
    resetFormState();
  });

  cancelBtn.addEventListener("click", function () {
    submitForm.reset();
    editingBookId = null;
    resetFormState();
  });

  const searchInput = document.getElementById("searchBookTitle");
  searchInput.addEventListener("input", function () {
    searchBooks();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

// 🔹 Reset form state ke default (setelah submit atau batal)
function resetFormState() {
  submitBtn.innerHTML =
    "Masukkan Buku ke rak <span>Belum selesai dibaca</span>";
  submitBtn.style.backgroundColor = "#007bff"; // biru
  submitBtn.style.color = "#fff";
  cancelBtn.style.display = "none"; // sembunyikan batal
}

// 🔹 Tambah buku
function addBook() {
  const bookTitle = document.getElementById("bookFormTitle").value;
  const bookAuthor = document.getElementById("bookFormAuthor").value;
  const bookYear = document.getElementById("bookFormYear").value;
  const isComplete = document.getElementById("bookFormIsComplete").checked;
  const generatedID = generateId();

  const bookObject = generateBookObject(
    generatedID,
    bookTitle,
    bookAuthor,
    bookYear,
    isComplete
  );
  books.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

// 🔹 Update buku (edit)
function updateBook(bookId) {
  const bookTitle = document.getElementById("bookFormTitle").value;
  const bookAuthor = document.getElementById("bookFormAuthor").value;
  const bookYear = document.getElementById("bookFormYear").value;
  const isComplete = document.getElementById("bookFormIsComplete").checked;

  const targetBook = books.find((book) => book.id === bookId);
  if (!targetBook) return;

  targetBook.title = bookTitle;
  targetBook.author = bookAuthor;
  targetBook.year = bookYear;
  targetBook.isRead = isComplete;

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

// 🔹 Generate ID unik
function generateId() {
  return +new Date();
}

// 🔹 Buat objek buku
function generateBookObject(id, title, author, year, isRead) {
  return { id, title, author, year, isRead };
}

// 🔹 Render ulang daftar buku
document.addEventListener(RENDER_EVENT, function () {
  incompleteList.innerHTML = "";
  completeList.innerHTML = "";

  for (const bookItem of books) {
    const bookElement = createBookElement(bookItem);
    if (!bookItem.isRead) {
      incompleteList.append(bookElement);
    } else {
      completeList.append(bookElement);
    }
  }
});

// 🔹 Buat elemen buku
function createBookElement(bookObject) {
  const parentElement = document.createElement("div");
  parentElement.setAttribute("data-bookid", bookObject.id);
  parentElement.setAttribute("data-testid", "bookItem");

  const titleElement = document.createElement("h3");
  titleElement.setAttribute("data-testid", "bookItemTitle");
  titleElement.innerText = bookObject.title;

  const authorElement = document.createElement("p");
  authorElement.setAttribute("data-testid", "bookItemAuthor");
  authorElement.innerText = "Penulis: " + bookObject.author;

  const yearElement = document.createElement("p");
  yearElement.setAttribute("data-testid", "bookItemYear");
  yearElement.innerText = "Tahun: " + bookObject.year;

  // 🔹 Tombol aksi
  const actionElement = document.createElement("div");

  const buttonToggle = document.createElement("button");
  buttonToggle.setAttribute("data-testid", "bookItemIsCompleteButton");
  buttonToggle.innerText = bookObject.isRead
    ? "Belum selesai dibaca"
    : "Selesai dibaca";
  buttonToggle.addEventListener("click", function () {
    bookObject.isRead = !bookObject.isRead;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  });

  const buttonDelete = document.createElement("button");
  buttonDelete.setAttribute("data-testid", "bookItemDeleteButton");
  buttonDelete.innerText = "Hapus Buku";
  buttonDelete.addEventListener("click", function () {
    const bookIndex = books.findIndex((book) => book.id === bookObject.id);
    if (bookIndex === -1) return;
    books.splice(bookIndex, 1);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  });

  const buttonEdit = document.createElement("button");
  buttonEdit.setAttribute("data-testid", "bookItemEditButton");
  buttonEdit.innerText = "Edit Buku";
  buttonEdit.addEventListener("click", function () {
    loadBookToForm(bookObject);

    submitBtn.innerText = "Update Buku";
    submitBtn.style.backgroundColor = "#28a745"; // hijau
    submitBtn.style.color = "#fff";
    cancelBtn.style.display = "inline-block"; // tampilkan batal
    editingBookId = bookObject.id;
  });

  actionElement.append(buttonToggle, buttonDelete, buttonEdit);
  parentElement.append(titleElement, authorElement, yearElement, actionElement);

  return parentElement;
}

// 🔹 Cari buku (judul & penulis, realtime)
function searchBooks() {
  const searchBookTitle = document
    .getElementById("searchBookTitle")
    .value.toLowerCase();

  const bookItems = document.querySelectorAll("[data-testid='bookItem']");
  let foundCount = 0;

  for (const bookItem of bookItems) {
    const title = bookItem.querySelector("h3").innerText.toLowerCase();
    const author = bookItem.querySelector("p").innerText.toLowerCase();

    if (title.includes(searchBookTitle) || author.includes(searchBookTitle)) {
      bookItem.style.display = "block";
      foundCount++;
    } else {
      bookItem.style.display = "none";
    }
  }

  if (searchBookTitle !== "") {
    if (foundCount > 0) {
      alert(foundCount + " buku ditemukan");
    } else {
      alert("Tidak ada buku yang cocok dengan pencarian");
    }
  }
}

// 🔹 LocalStorage
function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
  }
}

function isStorageExist() {
  if (typeof Storage === "undefined") {
    alert("Browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  if (serializedData !== null) {
    const data = JSON.parse(serializedData);
    for (const book of data) {
      books.push(book);
    }
  }
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function loadBookToForm(bookObject) {
  document.getElementById("bookFormTitle").value = bookObject.title;
  document.getElementById("bookFormAuthor").value = bookObject.author;
  document.getElementById("bookFormYear").value = bookObject.year;
  document.getElementById("bookFormIsComplete").checked = bookObject.isRead;
}
