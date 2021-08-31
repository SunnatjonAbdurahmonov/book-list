window.addEventListener("DOMContentLoaded", () => {
  const bookTitle = document.querySelector("#title"),
    bookAuthor = document.querySelector("#author"),
    bookYear = document.querySelector("#year"),
    addBook = document.querySelector("#submit"),
    bookList = document.querySelector("#book-list");

  addBook.addEventListener("click", (event) => {
    event.preventDefault();

    if (bookTitle == "" && bookAuthor == "" && bookYear == "") {
      alert("OOPS!");
    } else {
      const newRow = document.createElement("tr");

      // Create new title
      const newTitle = document.createElement("th");
      newTitle.innerHTML = bookTitle.value;
      newRow.appendChild(newTitle);

      // Create new author
      const newAuthor = document.createElement("th");
      newAuthor.innerHTML = bookAuthor.value;
      newRow.appendChild(newAuthor);

      // Create new year
      const newYear = document.createElement("th");
      newYear.innerHTML = bookYear.value;
      newRow.appendChild(newYear);

      bookList.appendChild(newRow);

      bookTitle.value = "";
      bookAuthor.value = "";
      bookYear.value = "";

      if (bookTitle.value === '' && bookAuthor.value === '' && bookYear.value === "") {
        alert("Oops Write Your book!");
      }
    }
  });
});
