import { BiTimeFive } from 'react-icons/bi';
import { FcBusinessman } from 'react-icons/fc';
import { FiAlertCircle } from 'react-icons/fi';
import { BsShare } from 'react-icons/bs';
import SocialShare from './SocialShare';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { FaRegCircle } from "react-icons/fa";

const SingleTask = ({ item }) => {

    const { _id, title, description, date, name } = item;



    const [cardColor, setCardColor] = useState('');


    const handleButtonClick = () => {
        setCardColor(cardColor==='green'?'':'green');
      };
    return (
        <div className=''>

            <div className="card  w-full lg:p-2 bg-gray-300 shadow-xl" style={{ backgroundColor: cardColor }}>

                <div className="card-body">
                    
                    <h2 className="card-title text-orange-500 text-2xl">
                    
                    <button
                        onClick={handleButtonClick}
                        style={{ backgroundColor: 'slate', color: 'white', padding: '2px 2px', borderRadius: '5px', cursor: 'pointer', border: 'none' }}
                    >
                        {cardColor === '' ? <FaRegCircle />
 : <TiTick />
}
                     {/* <CiSquareCheck /> */}
                         
                    </button>
                     {title}

                    </h2>

                    <div>
                        {description}
                        <hr className='mt-2' />
                    </div>

                    <div className="flex items-center gap-1 "><BiTimeFive className='text-xl font-black' />Due :  {date}</div>
                    <p className='flex gap-1 items-center'><FcBusinessman className='text-xl  ' />Author Name: {name}</p>

                    <hr className='mt-2' />

                    <div className="card-actions justify-between items-center">
                        <div className='flex gap-5 mt-1 items-center '>
                            <button className="" onClick={() => document.getElementById('my_modal_4').showModal()}><FiAlertCircle className=" text-orange-500 rounded p-1 text-3xl" /></button>
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box bg-[#050816]">
                                    <h3 className="font-bold text-lg  italic text-orange-500">Important</h3>
                                    <p className="mt-3 text-orange-500 ">Copyright in Canada
                                        As of 2023, copyright in Canada applies to your work automatically and lasts the author’s lifetime plus 70 years past their death.

                                        Previously, the protection only lasted for 50 years past the author’s death. </p>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>

                            <button className="" onClick={() => document.getElementById('my_modal_2').showModal()}><BsShare className=" text-blue-800  rounded p-1 text-2xl" /></button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box bg-[#050816]">
                                    <h3 className="font-bold text-lg text-orange-500   italic">Share Your Blog ...</h3>
                                    <p className="mt-3 "><SocialShare ></SocialShare></p>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>


                            <Link to={`/dashboard/editTask/${_id}`}><FaRegEdit className='text-xl text-cyan-500 ' /></Link>
                            

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTask;