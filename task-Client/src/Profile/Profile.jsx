import { useContext, useEffect, } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {

    const { user , } = useContext(AuthContext);

    useEffect(() => {
        AOS.init({ duration: 3000, mirror: true })
    }, [])


    return (
        <div>

            <div className="lg:text-4xl font-black text-center">
                <h1>Hi !</h1>
                <h1 className="lg:text-8xl md:text-6xl text-4xl text-orange-500">{user?.displayName}</h1>

                <p className="lg:text-2xl text-2xl mt-8">Email : {user?.email}</p>
                <div className="text-2xl mt-8 mb-16 items-center text-center flex justify-center">

                    
                    <img className="w-48 h-48 rounded-full" src={user?.photoURL} alt="" />
                </div>


            </div>
            <div data-aos="fade-up" className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-4 gap-28 text-center  mb-48 lg:mb-0 md:mb-24">
                <div className="card lg:w-48 md:w-48 h-20 bg-black  shadow-xl image-full">

                    <div className="card-body ">
                        <h2 className="text-3xl font-black text-orange-400 text-center  ">1 </h2>
                        <p className="font-bold pt-1">Individual, team, or organization to complete projects for social work and people</p>

                    </div>
                </div>
                <div className="card lg:w-48 md:w-48 h-20 bg-black  shadow-xl image-full">

                    <div className="card-body ">
                        <h2 className="text-3xl font-black text-orange-400 text-center  ">2 </h2>
                        <p className="font-bold pt-1">Efficiently by organizing and prioritizing related tasks and handle carefully</p>

                    </div>
                </div>
                <div className="card lg:w-48 md:w-48 h-20 bg-black  shadow-xl image-full">

                    <div className="card-body ">
                        <h2 className="text-3xl font-black text-orange-400 text-center  ">3 </h2>
                        <p className="font-bold pt-1">Planning, organizing, leading, and controlling.And Complete whole Process</p>

                    </div>
                </div>
                <div className="card lg:w-48 md:w-48 h-20 bg-black  shadow-xl image-full">

                    <div className="card-body ">
                        <h2 className="text-3xl font-black text-orange-400 text-center  ">4</h2>
                        <p className="font-bold pt-1">Create an account on the website.
                            Add tasks,
                            Set due dates and Complete</p>

                    </div>
                </div>

            </div>
           
        </div>

    );
};

export default Profile;