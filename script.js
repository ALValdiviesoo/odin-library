let popup = document.querySelector('.popup');
let submit = document.querySelector('.submitBtn');

let myLibrary = [];

function Book(title, author, pages) {
  title = document.querySelector("#title");
  author = document.querySelector("#author");
  pages = document.querySelector("#pages");

  myLibrary.push({
    Title : title.value,
    Author : author.value,
    Pages : pages.value 
  })

  popup.classList.remove("openPopup");
}

function addBookToLibrary() {

}

// Popup function
function openPopup() {
  popup.classList.add("openPopup");
}