import React from 'react'
import { NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (   
  <section className='w-[300px] bg-gradient-to-r from-[#6FA6FF] to-indigo-500 sidebar py-[40px] z-[1]  text-white h-[100vh] fixed top-0 left-0'>
    <img className='h-[40px] px-[30px] mb-[60px]' src="./images/logo-white.png" alt="Logo" />
    <ul className='font-semibold  py-[30px] text-left mx-[20px] my-[20px]  bg-[white] text-[#333] rounded-md shadow-sm shadow-white'>
        <p className=' text-2xl px-[30px] w-[200px] mb-[20px]'>Dashboard</p>
       <NavLink to='/'> <li className='px-[30px] py-[15px] hover:bg-[#B5E9FF] transition-all '><img className='inline-block h-[16px] pr-2' src="./images/home.png" alt="" /><span className='transition-all'> Home</span></li></NavLink>
       <NavLink to='/addorder'>  <li className='px-[30px] py-[15px] hover:bg-[#B5E9FF] transition-all '><img className='inline-block h-[16px] pr-2' src="./images/active.png" alt="" /><span className='transition-all'>Add order</span></li></NavLink>
       <NavLink to='/activeorders'><li className='px-[30px] py-[15px] hover:bg-[#B5E9FF] transition-all '><img className='inline-block h-[16px] pr-2' src="./images/active.png" alt="" /><span className='transition-all'>Active orders</span></li></NavLink>
       {/* <NavLink to='/completedorders'> <li className='px-[30px] py-[15px] hover:bg-[#B5E9FF] transition-all '><img className='inline-block h-[16px] pr-2' src="./images/completed.png" alt="" /><span className='transition-all'> Completed Orders</span></li></NavLink> */}
       <NavLink to='/revenue'><li className='px-[30px] py-[15px] hover:bg-[#B5E9FF] transition-all '><img className='inline-block h-[16px] pr-2' src="./images/euro.png" alt="" /><span className='transition-all'> Revenue</span></li></NavLink>
       <NavLink to='/completedorders'><li className='px-[30px] py-[15px] hover:bg-[#B5E9FF] transition-all '><img className='inline-block h-[16px] pr-2' src="./images/euro.png" alt="" /><span className='transition-all'> Completed Orders</span></li></NavLink>
       <NavLink to='/subcontractors'><li className='px-[30px] py-[15px] hover:bg-[#B5E9FF] transition-all '><img className='inline-block h-[16px] pr-2' src="./images/profile.png" alt="" /><span className='transition-all'> SubContractors</span></li></NavLink>
       <NavLink to='/query'><li className='px-[30px] py-[15px] hover:bg-[#B5E9FF] transition-all '><img className='inline-block h-[16px] pr-2' src="./images/profile.png" alt="" /><span className='transition-all'> Query</span></li></NavLink>

       {/* <NavLink to='/edit'> <li className='px-[30px] py-[15px] hover:bg-[#B5E9FF] transition-all '><img className='inline-block h-[16px] pr-2' src="./images/profile.png" alt="" /><span className='transition-all'>Edit Info</span></li></NavLink> */}

    </ul>
  </section>

  )
}

export default Sidebar