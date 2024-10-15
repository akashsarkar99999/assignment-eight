import { useLoaderData, useParams } from "react-router-dom";
import './BookDetails.css'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveBook } from "../../Utility/localStorage";


const BookDetails = () => {

  const books = useLoaderData();
  const {book_id} = useParams();
  const idInt = parseInt(book_id)
const book = books.find(book=>book.book_id ===idInt)
  


const handleRead =()=>{
    
    toast("you have apllied successfully")
    saveBook(bookId);
}



    

    return (
        <div className="mt-[52px] flex ">
            <div className="w-[537px] h-[711px] border flex justify-center p-[72px] bg-[#1313130d] rounded-[16px] mr-[48px]">
                <img className="" src={book.book_image}></img>
            </div>


            <div className="w-[537px] h-[711px] ">
                <h2 className="font-dis text-[40px] text-black font-bold">{book.book_name}</h2>

                <p className="font-medium text-[20px] text-[#131313cc] font-work mt-[16px]">By:{book.writer_name}</p>

                <hr className="mt-[24px]" />

                <p className="font-medium text-[20px] text-[#131313cc] font-work mt-[16px]">{book.book_type}</p>

                <hr className="mt-[24px]" />
                <p> <span className="font-bold text-black font-work">Review:</span> <span className="text-[#131313b3] font-work">{book.review}</span> </p>

                <div className="flex items-center justify-between font-medium font-work  text-[#23BE0A] mt-[24px]">
                    <p className="font-bold text-black font-work">Tag</p>

                    <p className="bg-[#23be0a0d] rounded-[30px] px-[16px] py-[7px]">
              {book.hash_tags[0]}
            </p>
                    <p className="bg-[#23be0a0d] rounded-[30px] px-[16px] py-[7px]">
              {book.hash_tags[1]}
            </p>
                    <p className="bg-[#23be0a0d] rounded-[30px] px-[16px] py-[7px]">
              {book.hash_tags[2]}
            </p>
                    <p className="bg-[#23be0a0d] rounded-[30px] px-[16px] py-[7px]">
              {book.hash_tags[3]}
            </p>

                </div>

                <hr className="mt-[24px]" />

                <div className="flex mt-[24px]">
                    <div className="text-[#131313b3] font-work mr-[59px]">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="font-semibold text-black font-work">
                        <p>{book.number_of_pages}</p>
                        <p>{book.publisher}</p>
                        <p>{book.year_of_publishing}</p>
                        <p>{book.rating}</p>
                    </div>
                </div>

                <div className="mt-[32px]">
                   <button className="btn font-work text-lg font-semibold text-black border-[#1313134d] rounded-[8px] bg-white" onClick={handleRead}>Read</button> 
                   <button onClick={handleRead} className="btn font-work text-lg font-semibold rounded-[8px] bg-[#50B1C9] ml-[16px]">Wishlish</button> 
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;