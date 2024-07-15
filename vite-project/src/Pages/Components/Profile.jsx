import React from 'react'
import { MdVerified } from "react-icons/md";
import Profile1 from '../../assets/image 1.png'

const Profile = ({ name, image, field }) => {
  return (
    <>
        <main className="md:w-[182px] w-full h-full md:h-[174px] rounded-[13px] relative">
               <div className=''>
                   <img src={ image } alt="Profile" className='rounded-[13px]'/>
               </div>

               <div className='w-full h-16 py-2 flex flex-col justify-center bg-[#E3E2E2] px-3 absolute top-36 rounded-b-[13px]'>

                     <div className="w-full flex items-center justify-between gap-1">
                        <p className='font-bold text-[12px] text-black'>{ name }</p>
                        <MdVerified className='fill-[#3897F0]'/>
                     </div>
                     
                     <p className='text-[12px] text-gray-500 font-light'>{ field }</p>
               </div>
        </main>
    </>
  )
}

export default Profile