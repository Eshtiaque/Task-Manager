import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const auth = getAuth(app);
    const handleLogOut = () => {
      logOut(auth)
        .then(result => {
          localStorage.removeItem('set-token-for-user');
          result;
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    return (
        <div className="navbar sticky top-0 z-50 bg-slate-400 border lg:rounded-full md:rounded-full bg-opacity-35">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/" >Home</Link></li>
            <li><Link to={"/dashboard/myTask"}>My Task</Link></li>
            <li><Link to={"/dashboard"}>Dashboard</Link></li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-2xl text-orange-500">TaSk <small className="text-black">Manager</small></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link  to="/" >Home</Link></li>
            <li><Link  to={"/dashboard/myTask"}>My Task</Link></li>
            <li><Link to={"/dashboard"}>Dashboard</Link></li>
          </ul>
        </div>
        <div className="navbar-end gap-2 ">
            <p className="hidden lg:block md:block">Hi ! {user?.displayName} </p>
          {
            user ?
            <Link to={"/login"} onClick={handleLogOut} className="btn rounded-full bg-orange-500 text-white  font-black">LogOut</Link>
            :
            <Link to={"/login"} className="btn rounded-full bg-orange-500 text-white  font-black">Login</Link>
          }
        </div>
      </div>
    );
};

export default Navbar;