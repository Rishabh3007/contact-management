import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        <div className="flex h-screen">
        <Sidebar />
        <div className='flex-grow overflow-y-auto'>
        <Outlet/>
        </div>
        </div>
    </>
  )
}

export default Layout