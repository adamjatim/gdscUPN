const prompt = require("prompt-sync")();
const dayjs = require('dayjs');
const fs = require("fs");

let books = [];

const showBook = () => {
  console.clear();

  if (books.length == 0) {
    console.log("No books to show");
  } else {
    for (const book of books) {
      console.log(`${book.title} (${book.interest}) - Rp.${book.price} - ${book.added}`+ "\n");
    }
  }

  prompt("Press Enter to continue...")
}

const addBook = () => {
  console.clear();
  const title = prompt("Insert book title: ");
  const interest = prompt("Insert Interest: ");
  const price = prompt("Insert the price: ");
  const added = dayjs().format("DD/MM/YYYY HH:mm:ss");

  books.push({
    title: title,
    interest: interest,
    price: price,
    added: added  
  });
  
};

const getBooks = () => {
  const data = fs.readFileSync("favorites.json");
  const books = JSON.parse(data); // mengembalikan file dari string menjadi object

  return books;
}

const save = () => {
  fs.writeFileSync("favorites.json", JSON.stringify(books));
}

books = getBooks(); // mengembalikan nilai books dari favorites.json

let running = true;

while (running === true) {
  console.clear();
  console.log(`##########################`);
  console.log(`#   LIBRARY BOOKS APPS   #`);
  console.log(`##########################`);
  console.log(`#  1. Add Book           #`);
  console.log(`#  2. Show Books         #`);
  console.log(`#  3. Exit               #`);
  console.log(`##########################`);
  const choice = prompt("Input opsi : ");


  if (choice == 1) {
    addBook();
  } else if (choice == 2) {
    showBook();
  } else if (choice == 3){
    save();
    running = false;
  } else {
    console.log("Invalid choice");
    prompt("Press enter to continue...")
  }
}
