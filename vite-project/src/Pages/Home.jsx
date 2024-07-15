import React from 'react'
import SideBar from './SideBar'
import Bodi from './Bodi'

const Home = () => {
  return (
    <>
       <main className='w-full flex h-full bg-white relative justify-between'>
            <SideBar />
            <Bodi />
       </main>
    </>
  )
}

export default Home