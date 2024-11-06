import React from 'react'
import { TActiveTab } from '../../types'
type ButtonProps = {
    activeTab: TActiveTab,
    setActiveTab: React.Dispatch<React.SetStateAction<TActiveTab>>
}
export default function IvstButtons({activeTab, setActiveTab}: ButtonProps) {
  return (
    <div className='relative flex pt-[74px] gap-5 items-center font-semibold text-[#323133CC] text-base'>
    <button className={`py-2 px-5 ${activeTab=== "investments"?  ' border-b-2 border-purple': undefined}`} onClick={()=> setActiveTab("investments")}>
      My Investments
    </button>
    <button className={`py-2 px-5 ${activeTab=== "explore"?  ' border-b-2 border-purple': undefined}`} onClick={()=> setActiveTab("explore")}>
      Explore
    </button>
    <button className={`py-2 px-5 ${activeTab=== "completed"?  ' border-b-2 border-purple': undefined}`} onClick={()=> setActiveTab("completed")}>
      Completed
    </button>
    {/* Divider */}
    <div className='absolute w-full h-[0.5px] bg-[#AAAAAA99] bg-opacity-60 bottom-0 -z-10'>

    </div>
    
</div>
  )
}
