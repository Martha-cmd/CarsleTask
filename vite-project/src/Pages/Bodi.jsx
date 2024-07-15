import React from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Profile from './Components/Profile';
import Profile1 from '../assets/image 1.png'
import Profile2 from '../assets/image 1-2.png'
import { GoHomeFill } from "react-icons/go";
import { FaUser, FaBell, FaWallet, FaUserPlus } from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";


const Bodi = () => {
    const users = [
        {name: "Emmanuel Chisom Eze", field: "Leadership & Business", image: Profile1},
        {name: "Stella Ogochukwu", field: "Professional/Expert", image: Profile2},
        {name: "Emmanuel Chisom Eze", field: "Leadership & Business", image: Profile1},
        {name: "Stella Ogochukwu", field: "Professional/Expert", image: Profile2},
        {name: "Emmanuel Chisom Eze", field: "Leadership & Business", image: Profile1},
        {name: "Stella Ogochukwu", field: "Professional/Expert", image: Profile2},
        {name: "Emmanuel Chisom Eze", field: "Leadership & Business", image: Profile1},
        {name: "Stella Ogochukwu", field: "Professional/Expert", image: Profile2},
        {name: "Emmanuel Chisom Eze", field: "Leadership & Business", image: Profile1},
        {name: "Stella Ogochukwu", field: "Professional/Expert", image: Profile2},
        {name: "Emmanuel Chisom Eze", field: "Leadership & Business", image: Profile1},
        {name: "Stella Ogochukwu", field: "Professional/Expert", image: Profile2}
    ]
  return (
    <>
       <main className="w-full h-full bg-[#FFFFFF] text-[#515359] lg:ml-[30%]">

      <div className='w-full lg:px-24 md:px-16 px-4 py-24 pb-40'>

      <div className="w-full flex lg:flex-row flex-col-reverse lg:gap-0 gap-5 justify-between">
                   <div className='w-[136px] h-[34px] bg-[#E3E2E2] flex justify-center items-center rounded gap-3'>
                        <p className='text-black'>Categories</p>
                        <IoIosArrowDown />
                    </div>

                    <div className='md:w-[372px] w-full h-[41px] bg-[#E3E2E2] rounded-[25px] py-2 px-5 flex gap-3 items-center'>
                        <HiOutlineSearch />
                            <p>Search</p>
                    </div>
       </div>

       <div className='w-full md:flex md:flex-wrap grid grid-cols-2 lg:gap-x-8 md:gap-x-4 gap-x-4 md:gap-y-16 gap-y-32 mt-20 justify-between'>

              {users.map((user, index) => (
                   <Profile 
                   key={index}
                   image={user.image}
                   name={user.name}
                   field={user.field}
                   />
              ))}
             
       </div>
      </div>

       <div className='fixed bottom-0 w-full bg-white px-12 md:py-10 py-5 flex justify-between z-[1000px] lg:hidden border-t-[1px] border-[#E3E2E2] rounded-t-[16px]'>

             <GoHomeFill size={24}/>
             <BiTargetLock size={24}/>
             <FaWallet size={24}/>
             <FaUserPlus size={25}/>
       </div>
       </main>
    </>
  )
}

export default Bodi