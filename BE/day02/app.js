// expression : sebuah kode yang memilki sebuah nilai.
// ex : 
//  const nama = "Adam";
//  console.log(nama);   <-- expression

// statment : menjalan sesuatu.
// ex : 
//  console.log();   <-- statment

// pada umumnya pada saat kita ingin membuat sebuah variabel maka :

// const bookName = "Kambing Jantan";
// const bookInterest = "Lucu dan penulisan yang rapi";
// const bookAdded = "17/12/2023";

// object : pengelompokan suatu data

// const book = {
//   name: "Kambing Jantan",
//   interest: "Lucu dan penulisan yang rapi",
//   added: "17/12/2023"
// };

// cara mencetak obj

// console.log(book);
// Output :
//  {
//    name: "Kambing Jantan",
//    interest: "Lucu dan penulisan yang rapi",
//    added: "17/12/2023"
//  }

// console.log(book.name);
// Output :
//  {
//    name: "Kambing Jantan"
//  } 

// object juga bisa digunakan kedalam function()

// const print = () => {
//   console.log("print");
// }

// call : print();

// function print() {
//   console.log("print");
// }

// call : print();

// yang membedakan adalah, jika menggunakan regular function(), sifatnya seperti function, dapat dipanggil dibaris mana saja.
// namun jika menggunakan arrow function(), harus sesuai dengan kaidah variabel, tidak bisa dipanggil jika belum di inisialisasi / dideklarasikan.

// const print = (book) => {
//   console.log(`Nama Buku: ${book.name}`);
//   console.log(`Ketertarikan: ${book.interest}`);
//   console.log(`Ditambahkan pada: ${book.added}`);
// }

// pada sekarang kita akan mengenal package namanya promt-sync
// npm install prompt-sync

// how to use it :
// const prompt = require("prompt-sync")();
// const name = prompt(<question ?>);
// console.log(name);

// const prompt = require("prompt-sync")();
// const name = prompt("Who are you ?");
// console.log(name);

// const prompt = require("prompt-sync")();
// const book = {
//   nama: "",
//   interest: "",
//   price: 0,
//   added: "",
// };

// let nama = "Heaven";
// nama = "Novan"

// const prompt = require("prompt-sync")();
// const book = {
//   name: "Kambing Jantan",
//   interest: "",
//   price: 0,
//   added: "",
// };

// console.log(book.name); // "Kambing Jantan"
// book.name = "Gajah Marmut";
// console.log(book.name); // "Gajah Marmut"

// const prompt = require("prompt-sync")();
// const book = {
//   name: "Kambing Jantan",
//   interest: "",
//   price: 0,
//   added: "",
// };

// book.name = prompt("Masukkan judul: ");
// book.interest = prompt("Masukkan ketertarikan: ");
// book.price = prompt("Masukkan Harga: ");
// book.added = prompt("Masukkan Tanggal: ")

// console.log(`Judul: ${book.name}`);
// console.log(`Ketertarikan: ${book.interest}`);
// console.log(`Harga: ${book.price}`);
// console.log(`Tanggal: ${book.added}`);

// const year = new Date().getFullYear();
// const month = new Date().getMonth() + 1; // karena bulan di JS itu menggunakan konsep array index
// const date = new Date().getDate();

// console.log(`${date}/${month}/${year}`);

// untuk mengatasi masalah tersebut ada package di js yang namanya dayjs
// npm install dayjs

const prompt = require("prompt-sync")();
const dayjs = require('dayjs');

const books = [];

const book = {
  name: "Kambing Jantan",
  interest: "",
  price: 0,
  added: "",
};

console.log(books);

console.log(`Judul: ${book.name}`);
console.log(`Ketertarikan: ${book.interest}`);
console.log(`Harga: ${book.price}`);
console.log(`Tanggal: ${book.added}`);

for (let index = 0; index < 2; index++) {
  const element = array[index];
  book.name = prompt("Masukkan judul: ");
  book.interest = prompt("Masukkan ketertarikan: ");
  book.price = prompt("Masukkan Harga: ");
  book.added = dayjs().format("DD/MM/YYYY HH:mm:ss");

  books.push(book);
}