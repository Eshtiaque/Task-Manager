import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../Provider/AuthProvider';
import SingleTask from "./SingleTask";



const MyTask = () => {

    const { user } = useContext(AuthContext)
    const [Task, setTask] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch(`https://task-server-five-alpha.vercel.app/task/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTask(data);
            })
    }, [user])

    const handleSearch = () => {
        fetch(`https://task-server-five-alpha.vercel.app/searchText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTask(data);
            });
    };



    return (


        <div className="">
            <div className="search-box  text-center ps-2">
                <h1 className="text-orange-500 font-black text-3xl  items-center">My Task</h1>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="ps-3 p-1 mt-5 rounded-lg bg-gray-300 text-black"
                    placeholder="Search Task "
                />{" "}
                <button onClick={handleSearch} className="btn btn-sm items-center  bg-orange-400 text-white m-4 ">Search</button>
            </div>

            <div className="mt-1 mb-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:p-12 md:p-12">

                {
                    Task?.map(item => <>
                        <SingleTask
                            key={item._id}
                            item={item}
                        ></SingleTask>
                    </>

                    )
                }


            </div>
          

        </div >
    )
};

export default MyTask;
