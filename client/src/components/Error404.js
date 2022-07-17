import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header';

const Error404 = () => {
  return (
    <>
    <Sidebar/>
    <Header/>
 
 
<section className="main bg-white flex justify-center items-center overflow-y-auto ml-[300px] z-0 top-0 w-[calc(100vw-300px)] right-0 mt-[70px] min-h-[calc(100vh-70px)]">
<div className='mt-[-90px] text-indigo-500'>
<p className='font-bold text-[75px]'>Error 404!</p>
<p className='font-semibold text-[25px]'>The page you are trying to access doesn't exist</p>
</div>
</section>
</>
  )
}

export default Error404