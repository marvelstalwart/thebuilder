import React, {useState} from 'react'
import searchIcon from "../../assets/icons/Investments/search-01.svg"
import {motion, AnimatePresence} from "framer-motion"
import InvestmentCard from './Explore/InvestmentCard'

import { TPropertyInfo } from '../../types'
import { propInfo } from '../../data/data'
import InvestmentDetail from './Explore/InvestmentDetail'
export default function Explore() {
    const [properties, setProperties] = useState<TPropertyInfo[]>(propInfo)
    const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    className='w-full pt-8 '>
        <div className='flex w-full '>
    <div className='relative w-full'>
      <input className='w-[95%] outline-none bg-[#323133] bg-opacity-[3%] p-4 rounded-xl text-sm pl-7 text-[#AAAAAA] ' type="text" placeholder='Search Investment'/>
      <img className='absolute top-[50%] translate-y-[-50%] ml-2' alt='search' src={searchIcon}/>
    </div>
        <div className='flex items-center gap-2 text-base'>
            <div className="relative">
        <select className="appearance-none w-[151px] bg-[#323133] px-4 py-3 pr-10 text-[#323133] bg-opacity-[3%]  rounded-xl ">
            <option>Price</option>
        </select>
        <span className="absolute right-3 top-1/2 pl-30 transform text-[#AAAAAA] opacity-60 -translate-y-1/2 pointer-events-none text-xs">▼</span>
        </div>
        <div className="relative">
        <select className="appearance-none w-[151px] bg-[#323133] px-4 py-3 pr-10 text-[#323133] bg-opacity-[3%] rounded-xl ">
            <option>Location</option>
        </select>
        <span className="absolute right-3 top-1/2 pl-30 transform text-[#AAAAAA] opacity-60 -translate-y-1/2 pointer-events-none text-xs">▼</span>
        </div>
        <div className="relative">
        <select className="appearance-none w-[151px] bg-[#323133] px-4 py-3 pr-10 text-[#323133] bg-opacity-[3%]  rounded-xl ">
            <option>Property type</option>
        </select>
        <span className="absolute right-3 top-1/2 pl-30 transform text-[#AAAAAA] opacity-60 -translate-y-1/2 pointer-events-none text-xs">▼</span>
        </div>
        <div className="relative">
        <select className="appearance-none w-[151/px] bg-[#323133] px-4 py-3 pr-10 text-[#323133] bg-opacity-[3%] rounded-xl ">
            <option>Risk level</option>
        </select>
        <span className="absolute right-3 top-1/2 pl-30 transform text-[#AAAAAA] opacity-60 -translate-y-1/2 pointer-events-none text-xs">▼</span>
        </div>

        </div>

        </div>
        {/* Cards container */}
      <div className='flex gap-[25px] pt-[38px] flex-wrap'>
            {properties.map((prop, index)=> (
                <InvestmentCard property={prop} key={index} setModalOpen={setModalOpen}/>

            ))}

      </div>
     {
        <AnimatePresence>
                {
                    modalOpen ? <InvestmentDetail setModalOpen={setModalOpen} modalOpen={modalOpen}/> : undefined
                }
        </AnimatePresence>
     }
          
    
  </motion.div>
  )
}
