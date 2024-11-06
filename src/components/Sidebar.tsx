import React, {useState} from 'react'
import dashboard from "../assets/icons/sidebar/dashboard-square-01.svg"
import rent from "../assets/icons/sidebar/Vector (3).svg"
import investment from "../assets/icons/sidebar/Vector (2).svg"
import payment from "../assets/icons/sidebar/Vector (4).svg"
import profile from "../assets/icons/sidebar/user.svg"
import support from "../assets/icons/sidebar/support.svg"
import logout from "../assets/icons/sidebar/logout-01.svg"
import {Link, useLocation} from "react-router-dom"

export default function Sidebar() {
    let location = useLocation()
    const [active, setActive] = useState<String>(location.pathname)
    console.log(location.pathname)
    const handleClick = (path: string)=> {
        setActive(path)
    }
  return (
    <div  className='z-20 min-h-full 
    w-[212px] fixed p-4 bg-purple flex flex-col  '>
        <div className='text-white font-mont font-semibold text-[28px]'>The builder</div>
        <div className='w-full flex flex-col items-center'>
        <ul className='pt-[80px] font-mont flex flex-col gap-[24px] w-full '>
            <Link to="/" onClick={()=> handleClick("/")}>
                <li className={`flex gap-2  cursor-pointer w-full px-4 py-2 rounded-md items-center text-[16px]  text-white ${active === "/" ? 'bg-[#FFFFFF] bg-opacity-5': undefined}`}>
                    <img className='w-[20px] h-[20px]' alt='dashboard' src={dashboard}/>
                    Overview
                </li>
            </Link>
            <Link to="/investments" onClick={()=> handleClick("/investments")}>
                <li className={`flex gap-2  px-4 py-2 rounded-md w-full cursor-pointer items-center text-[16px] ${active === "/investments" ? 'bg-[#FFFFFF] bg-opacity-5': undefined} text-white`}>
                    <img className='w-[20px] h-[20px]' alt='dashboard' src={investment}/>
                    Investment
                </li>
            
            </Link>
            <li className='flex gap-2 w-full px-4 py-2 cursor-pointer items-center text-[16px] text-white'>
                <img className='w-[20px] h-[20px]' alt='dashboard' src={rent}/>
               Rent
            </li>
            <li className='flex gap-2 w-full  px-4 py-2 cursor-pointer items-center text-[16px] text-white'>
                <img className='w-[20px] h-[20px]' alt='dashboard' src={payment}/>
               Payment
            </li>
            <li className='flex gap-2 w-full px-4 py-2 cursor-pointer  items-center text-[16px] text-white'>
                <img className='w-[20px] h-[20px]' alt='dashboard' src={profile}/>
               Profile
            </li>
            <li className='flex gap-2 w-full px-4 py-2 cursor-pointer items-center text-[16px] text-white'>
                <img className='w-[20px] h-[20px]' alt='dashboard' src={support}/>
               Support
            </li>
        </ul>

        </div>

        <div className='absolute bottom-0 w-[196px] p-4'>
            <div className='h-[1px] w-full bg-gray-400'></div>
            
            <Link to="/login">
            <div className='flex gap-4 pt-[16px] '>
                <img alt='logout-icon' src={logout} />
                <div className='text-white'>Log out</div>

            </div>
            </Link>
        </div>
        </div>
  )
}
