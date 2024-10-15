import { NavLink } from "react-router-dom";

import './Header.css'


const Header = () => {
    return (

       

        <nav className="flex justify-between">
            <ul><p className="text-[28px] font-work font-bold text-[#131313]">Book Vibe</p></ul>
            <ul className="flex font-work text-[#131313cc]">
                <li className="mr-[33px]"><NavLink  to="/" ClassName="nav-title"> <p>Home</p> </NavLink></li>

                <li className="mr-[33px]"><NavLink  to="/listed"> <p>Listed Books</p> </NavLink></li>

                <li className="mr-[33px]"><NavLink  to="/pagesto"> <p>Pages to Read</p> </NavLink></li>
            </ul>
            <ul className="font-work">
                <button className="btn btn-primary mr-[16px] text-white font-semibold bg-[#23BE0A]  rounded-[8px] border-none text-lg">Sign In</button>
                <button className="btn btn-primary text-white font-semibold bg-[#59C6D2]  rounded-[8px] border-none text-lg">Sign Up</button>
            </ul>
        </nav>
    );
};

export default Header;