const{findAuthorById} = require("./books");

function totalBooksCount(books) {
  let result = books.length;
  return result;
}

function totalAccountsCount(accounts) {
  let result = accounts.length;
  return result;
}

function booksBorrowedCount(books) {
  //loop over books to access borrows key returned: false
  //if returned === false add to counter 
  let counter = 0;
  books.forEach((element) =>{
    let returns = element.borrows[0].returned;
    if(returns === false) counter++;
    return counter;
  });
return counter;
}

function getMostCommonGenres(books) {
  //return an array
  let returnArr = []; 
  let emptyObj = {};
  books.forEach(book => {
    emptyObj[book.genre] ? emptyObj[book.genre]++
    : emptyObj[book.genre] =1;
  });
  console.log(emptyObj);

  _keyValueArray(returnArr, emptyObj);
  // for(let i=0; i < Object.keys(emptyObj).length; i++){
  //   //.length is checking the kes in obj to see how long it is
  //   //that's how many times were itirating over it
  //   let name = Object.keys(emptyObj)[i];
  //   let count = Object.values(emptyObj)[i];
  //   returnArr[i] = {name, count};
  //   //console.log(returnArr[i]);
  //   //assign current key 
  //   //assign current value 
  //   //push to resultArr
  // }
  return returnArr.sort((compareA,compareB) => compareA.count < compareB.count ? 1: -1).slice(0,5);
  
  //split object up into object 
  //sort and slice result
   
   
}
//turn for loop into helper function later **
//and also the sort slice function into helper **

function getMostPopularBooks(books) {
  let newArr = [];
  //loop through books to check if @index 
  books.forEach(book => {
    let count = book.borrows.length;
    let name = book.title;
    newArr.push({name, count});

    //check length of book.borrows array
    //then add count to counter
  });
  return newArr.sort((compareA,compareB)=> compareA.count < compareB.count ? 1: -1).slice(0,5);
  //console.log(newArr);
}

function getMostPopularAuthors(books, authors) {
let returnThis = [];
let newObj = {};
books.forEach((book)=>{
let authorOfBook = findAuthorById(authors, book.authorId);
let count = book.borrows.length;
let authorName =`${authorOfBook.name.first} ${authorOfBook.name.last}`;
newObj[authorName] ? newObj[authorName]+= count : newObj[authorName] = count; 
//console.log(newObj);
});

_keyValueArray(returnThis, newObj);
// for(let i=0; i < Object.keys(newObj).length; i++){
//   let name = Object.keys(newObj)[i];
//     let count = Object.values(newObj)[i];
//     returnThis[i] = {name, count}; 
// }

return returnThis.sort((a, b)=> a.count < b.count ? 1: -1).slice(0,5);

}



//HELPER FUNCTIONS
function _sortSlice(array, length){
  //sorts 5 elements greatst to least
  array.sort((a, b) => a.count < b.count ? 1 : -1).slice(0, length);
}

function _keyValueArray(array, object){
  for(let i=0; i < Object.keys(object).length; i++){
    //.length is checking the kes in obj to see how long it is
    //that's how many times were itirating over it
    let name = Object.keys(object)[i];
    let count = Object.values(object)[i];
    array[i] = {name, count};
    
  }
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
