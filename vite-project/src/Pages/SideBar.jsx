import React, { useState } from 'react'
import { GoHomeFill } from "react-icons/go";
import { BiTargetLock } from "react-icons/bi";
import { FaUser, FaBell, FaWallet, FaUserPlus } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { RiSettingsFill } from "react-icons/ri";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

const SideBar = () => {
    const menuItems = [
         {icon: <GoHomeFill size={24}/>, text: 'Home'},
         {icon: <BiTargetLock size={24}/>, text: 'Explore'},
         {icon: <FaUser size={22}/>, text: 'Profile'},
         {icon: <FaBell size={24}/>, text: 'Notifications'},
         {icon: <FaWallet size={24}/>, text: 'Wallet'},
         {icon: <FaUserPlus size={25}/>, text: 'Your Circle'},
         {icon: <FaCircleCheck size={24}/>, text: 'Get Verified'},
         {icon: <RiSettingsFill size={26}/>, text: 'Settings'},
    ]

    const [active, setActive] = useState(null)

    const handleClick = (index) => {
          setActive(index);
    }


  return (
    <>
       <main className="w-[30%] h-[105vh] bg-[#f7f7f7] py-24 pt-32 text-[#33363F] lg:flex flex-col gap-5 fixed z-50 overflow-scroll cursor-pointer hidden">

               {menuItems.map((item, index) => (
                  <div key={index}
                   className={`flex gap-5 py-3 text-[17px] lg:px-20 md:px-12 ${active === index ? 'bg-[#E3E2E2] text-black font-semibold' : ''}`} onClick={() => handleClick(index)}
                   >
                  
                    {item.icon}
                    <p>{item.text}</p>
                  </div>
               ))}

               <button className='w-[198px] h-[59px] bg-[#FA6C6C] rounded-[10px] flex items-center justify-center gap-3 text-white text-[18px] lg:mx-20 md:mx-12 p-5 mt-5'>
                     <HiArrowLeftOnRectangle size={25}/>
                     <p>Log Out</p>
               </button>

       </main>
    </>
  )
}

export default SideBar