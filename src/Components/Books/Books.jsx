import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res =>res.json())
        .then(data =>setBooks(data))
    } , [])

    return (
        <div >
            <div className="text-center">
            <h2 className="text-[40px] text-[#131313] mt-[100px] mb-[36px]">Books</h2>
            </div>
            <div className="grid grid-cols-3 gap-[24px] mb-[129px]">
                {
                  books.map(book=><Book key={book.book_id} book={book}></Book>) 
                }
            </div>
        </div>
    );
};

export default Books;