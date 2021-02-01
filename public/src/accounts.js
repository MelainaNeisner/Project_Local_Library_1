function findAccountById(accounts, id) {
  //returns the account obj that matches 
  //ID input 
  //accoutn is an array w/objects 
  //id is an input but also a key in the acc
  //object w/value of a string
  //use .find method to loop over accunts
  return result = accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  //objects are sorted alphabetically
  //take array accounts and 
  //spit out an array of last names 
  //let lastNames = accounts.name[last];
  //let sortable = [];
  //let newArr = Object.values(accounts);

  return accounts.sort((accA, accB)=>{
    return accA.name.last > accB.name.last ? 1: -1;
  });
}

function numberOfBorrows(account, books) {
  //returns a number 
  // function compares account.id to books.borrow.id
  //returning the number of times it shows up in books.borrow.id
 
  return books.reduce((acc, {borrows: borrowArr}) => {
    //acc is an accumulator array 
    //{borrows: borrowArr} is the arrray of borrowed values from books
    //currentValue is the starter 
    //console.log(borrowArr);
    let idList = borrowArr.map((borrow)=>borrow.id);
    console.log(idList);
    idList.forEach(element => {
      if(element === account.id)  acc++;
      return acc;
    });
    return acc;
  }, 0);
    //
    //make array out of brrows from book object
    //map over that array compare ids from account to ids in 
    //new array
    //looping over books w/reduce and creating an accumulator
    //arr w/acc


  
}

function getBooksPossessedByAccount(account, books, authors) {



  //USE FIND and filter
//   let result = [];
//   let checkedBooks = books.filter((book)=>
//    book.borrows[0].returned === false);
 
//  return result;
 return books.filter((book)=>{
   const recent = book.borrows[0];
   return !recent.returned && recent.id === account.id;

 })
 .map((book)=>{
   const author = authors.find((author)=> author.id === book.authorId);
   return {...book, author}
 });


  

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
