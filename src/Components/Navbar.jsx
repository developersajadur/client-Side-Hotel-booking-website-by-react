import { Link, NavLink } from "react-router-dom";
import "../style.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";


const Navbar = () => {

    const {user , logOutUser} = useContext(AuthContext)

    const handleLogOut = () => {
      logOutUser(user)
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch(error => {
        console.log(error);
      });
    }


    const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/rooms">Room</NavLink></li>
    <li><NavLink to="/blogs">Blog</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    return (
        <div className="navbar py-3 sticky top-0 z-50 bg-white  px-1 lg:px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-4xl font-bold">Hotel</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold flex gap-5">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {!user ? (
      <Link to="/login"><button className="btn btn-primary">Sign In</button></Link>
    ) : (
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><button onClick={handleLogOut}>Log Out</button></li>
      </ul>
    </div>
    )

    }
  </div>
</div>
    );
};

export default Navbar;