import { Link } from 'react-router-dom';
import './Home.css'
import Books from '../Books/Books';

const Home = () => {
    return (
        <div>
            <div className="flex justify-between w-full h-[554px] bg-[#1313130d] px-[120px] py-[136px] rounded-[24px] mt-[48px]">
                <div>
                    <h2 className="font-play text-[56px] font-bold text-[#131313]">Books to freshen up <br /> your bookshelf</h2>

                    <Link to="/listed"><button className="btn btn-primary font-work text-[20px] font-bold text-[#FFF] bg-[#23BE0A] border-none mt-[48px]">View The List</button></Link>
                </div>
                <div className=''>
                   
                 <img className='relative top-[-50px]' src="https://i.postimg.cc/LXkv5cRS/pngwing-1.png"></img>
                   
                </div>
            </div>

            <Books></Books>
        </div>
    );
};

export default Home;