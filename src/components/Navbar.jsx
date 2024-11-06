import React from 'react'
import notification from "../assets/icons/navbar/notification-03.svg"
import dp from "../assets/icons/navbar/profilepic.svg"
import arrowDown from "../assets/icons/navbar/arrow-down-01.svg"
export default function Navbar() {
  return (
    <div className= 'fixed shadow-md bg-white h-[69px] w-full flex items-center px-10 z-10'>
      
            <div className='w-full flex justify-end  gap-4'>
                <div className='flex '>
            <input  className="bg-[#323133] p-[10px] outline-0 rounded-xl w-[415px] bg-opacity-[3%]" type="text" placeholder='Search'/>
            
            <div className=' pl-32 relative flex items-center'>
                    <div className='bg-red-500 w-4 h-4 rounded-full text-xs text-center text-white absolute m-0 p-0 top-0 right-0 mt-1 mr-[-4px]'>3</div>
            <img src={notification} alt='notification'/>


                </div>
                <div className='w-[1px] mx-4 h-full bg-[#AAAAAA] bg-opacity-[60%]'>

</div>
                </div>

                
                
                <div className='flex items-center gap-2 '>
                        <div className='w-10 h-10 rounded-full '>
                            <img alt='profile-picture' src={dp}/>
                        </div>
                        <div>
                            <p className='text-[#19111D]'>Daniel Oyeleke</p>
                        </div>
                        <img src={arrowDown} alt='drop-down icon'/>
                </div>
            </div>
       
        <div>

        </div>
    </div>
  )
}
