const getStoreBook =()=>{
    const StoredBook = localStorage.getItem('books')

    if(StoredBook){
        return JSON.parse(StoredBook);

    }
    return [];
}


const saveBook = id =>{
const storedBooks =getStoreBook();
const exists = storedBooks.find(bookId =>bookId===book_id)
if(!exists){
  storedBooks.push(book_id);
  localStorage.setItem('books', JSON.stringify(storedBooks))
}
}

export{saveBook, getStoreBook }