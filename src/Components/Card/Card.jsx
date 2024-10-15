

const Card = () => {
    return (
        <div className="">
            <div className=" w-[374px] h-[482px]  mb-4 p-[24px] rounded-[16px] border-[2px] border-[#13131326] ">
          <div className="w-[326px] h-[230px] bg-[#F3F3F3] rounded-[16px] ">
            <img
              className="relative left-[85px] top-[25px]"
              src={book_image}
              alt=""
            />
          </div>

          <div className="font-medium font-work  text-[#23BE0A] flex justify-between mt-[24px]">
            <p className="bg-[#23be0a0d] rounded-[30px] px-[16px] py-[7px]">
              {hash_tags[0]}
            </p>
            <p className="bg-[#23be0a0d] rounded-[30px] px-[16px] py-[7px]">
              {hash_tags[1]}
            </p>
            <p className="bg-[#23be0a0d] rounded-[30px] px-[16px] py-[7px]">
              {hash_tags[2]}
            </p>
            <p className="bg-[#23be0a0d] rounded-[30px] px-[16px] py-[7px]">
              {hash_tags[3]}
            </p>
          </div>

          <h2 className="font-bold text-[24px] font-play text-[#131313] mt-[16px]">
            {book_name}
          </h2>
          <p className="font-medium mt-[16px] text-[#131313c9]">
            By:{writer_name}
          </p>

          <hr className="mt-[20px]" />

          <div className="flex justify-between font-medium text-[#131313cc] font-work mt-[10px]">
            <p>{book_type}</p>
            <div className="flex items-center">
              <p>{rating}</p>

              <IoIosStarOutline />
            </div>
          </div>
        </div>
        </div>
    );
};

export default Card;