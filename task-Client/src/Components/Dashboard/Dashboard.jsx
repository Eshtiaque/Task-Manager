import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const Dashboard = () => {
    const { user ,logOut } = useContext(AuthContext);
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
        <div className="max-w-7xl  mx-auto">
        <Navbar></Navbar>
       <div className="drawer lg:mt-4 md:mt-4 pe-3 lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  justify- mt-9 ms-4">
                {/* Page content here */}
               
                
                <label htmlFor="my-drawer-2" className="btn-xs w-24 text-center mb-4 rounded-full pt-1 bg-orange-500 text-white drawer-button lg:hidden">My Menu</label>
                <Outlet></Outlet>
                

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
               <div className="hidden lg:block md:hidden mt-8">
               <hr /> 
                <p className="text-2xl text-center  text-orange-500 font-black">Menu</p>
                    <hr /> 
                </div>              
                     <ul className="menu rounded-lg lg:mt-8 md:mt-24 mt-16 p-4 w-80 h-96 bg-slate-200 m-1 text-base-content">
                    {/* Sidebar content here */}
                    
                    <li className="text-xl font-black"><Link to={"/dashboard/create"}>Create task</Link></li>
                    <li className="text-xl font-black"><Link to={"/dashboard/myTask"}>My Task </Link></li>
                   <li><div className="justify-center flex  ">
                   <Link onClick={handleLogOut} to={"/login"} className="btn w-3/4  fixed bottom-2 items-center rounded-full  text-white bg-orange-500">Logout</Link>
                    </div></li>

                </ul>
                <Footer/>
            </div>
           
        </div>
       
     </div>
    );
};

export default Dashboard;