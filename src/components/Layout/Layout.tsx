import React from 'react'

import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import { Outlet, useLocation} from "react-router-dom"
export default function Layout() {
  const location  = useLocation()
  const hideLayout = location.pathname ==="/login" || location.pathname === '/signup'
  return (    <div className="flex">
      
    {!hideLayout &&  <Sidebar/>}
    <div className='flex-1'>
      {!hideLayout &&   <Navbar/>}

    <div className={`${hideLayout? '': 'ml-[212px] mt-[69px]'}`}>

          
          <Outlet/>
      

    </div>

    </div>

  </div>
  )
}
