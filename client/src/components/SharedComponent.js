import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const SharedComponent = () => {
  return (
  <>
 <Sidebar/>
    <Header/>
   <Outlet/>
  </>
  )
}

export default SharedComponent