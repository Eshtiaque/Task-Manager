import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";





const Home = () => {


    useEffect(() => {
        AOS.init({ duration: 3000, mirror: true })
    }, [])


    return (
        <>
            <div data-aos="zoom-in" className="  flex items-center justify-center">


                <h1 className="text-3xl font-black text-center "> <br /> <p className="text-orange-500 ">Welcome to </p> <br /> <p className="lg:text-8xl 
                md:text-8xl text-6xl">Task Management</p>
                    <br /> <p className="lg:text-8xl md:text-8xl text-6xl">System</p><Link to={"/dashboard"} className="lg:text-8xl mt-9 text-orange-500  rounded-full "> <button><FaArrowRight />
                    </button> </Link ></h1>

            </div>
            <div data-aos="fade-up" className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-4 gap-28 lg:gap-2 text-center ms-16 mb-24 lg:mb-0 md:mb-24">
                <div className="card w-72 h-20 bg-black  shadow-xl image-full">

                    <div className="card-body ">
                        <h2 className="text-3xl font-black text-orange-400 text-center  ">1 </h2>
                        <p className="font-bold pt-1">Individual, team, or organization to complete projects</p>

                    </div>
                </div>
                <div className="card w-72 h-20 bg-black  shadow-xl image-full">

                    <div className="card-body ">
                        <h2 className="text-3xl font-black text-orange-400 text-center  ">2 </h2>
                        <p className="font-bold pt-1">Efficiently by organizing and prioritizing related tasks and handle carefully</p>

                    </div>
                </div>
                <div className="card w-72 h-20 bg-black  shadow-xl image-full">

                    <div className="card-body ">
                        <h2 className="text-3xl font-black text-orange-400 text-center  ">3 </h2>
                        <p className="font-bold pt-1">Planning, organizing, leading, and controlling.And Complete whole Process</p>

                    </div>
                </div>
                <div className="card w-72 h-20 bg-black  shadow-xl image-full">

                    <div className="card-body ">
                        <h2 className="text-3xl font-black text-orange-400 text-center  ">4</h2>
                        <p className="font-bold pt-1">Create an account on the website.
                            Add tasks,
                            Set due dates and Complete</p>

                    </div>
                </div>

            </div>

         




        </>

    );
};

export default Home;
