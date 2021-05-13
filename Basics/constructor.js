// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// Instantiate an Object
const book1 = new Book('Book One', 'John Doe', '2015');
const book2 = new Book('Book Two', 'Jane Doe', '2018');

console.log(book2);
