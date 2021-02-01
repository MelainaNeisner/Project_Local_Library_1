function findAuthorById(authors, id) {
  //authords array object 
  //id is a number 
  return authors.find((author) =>
  author.id === id);
}

function findBookById(books, id) {
  return books.find((book)=>
  book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
//returns an array with 2 arrays inside it 
//array 1 = that are not returned
//array 2 = that are currently not checked out
let borrowed = books.filter(book =>
  book.borrows[0].returned === false);

let inLibrary =  books.filter(book =>
  book.borrows[0].returned === true);

return [borrowed, inLibrary];
}


function getBorrowersForBook(book, accounts) {
  //returns an array of object key values from borrow (within book)
  //and 
  //for each and then push the account object
  //return the account object and adding the return key and value from the book object 
  //loop over book.borrows and if borrows.id 
  //using map to plug in the account 
  //if borrows.id === accounts.id add account info to 
   //let retrunObj = {};
  let result = [];
  book.borrows.forEach(element => {
    let acc = accounts.find(account => account.id === element.id);
    result.push({
        ...element,
        ...acc
    });
  });
  return result.slice(0, 10);  

  
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
