import React from 'react'
import balanceIcon from "../assets/icons/home/Stat Icon Container.svg"
import view from "../assets/icons/home/view.svg"
import investmentsIcon from "../assets/icons/home/Stat Icon Container (1).svg"
import portfolioIcon from "../assets/icons/home/Stat Icon Container (2).svg"
import returnsIcon from "../assets/icons/home/Stat Icon Container (3).svg"


export default function Portfolio() {
  return (
    <div className='flex items-center flex-wrap justify-between pt-[16px]'>
    <div className='w-[268px] h-[104px] shadow-custom-opacity flex justify-between bg-white p-4 rounded-xl outline-1 '>
            <div className='h-full flex flex-col justify-between ' >
                <h4>Available Balance</h4>
                <h5 className='text-2xl font-semibold'> N0.00</h5>
            </div>
            <div className='flex flex-col justify-between '>
                <div className='w-full flex justify-end'>
                <img alt='balance' className="w-[24px] h-[24px]" src={balanceIcon}/>

                </div>
                <div className='text-[10px] flex gap-2'>Hide balance <span><img alt='hide' className='w-[16px] h-[16px]' src={view}/></span> </div>
            </div>
    </div>
    <div className='w-[268px] h-[104px] flex justify-between shadow-custom-opacity  bg-white p-4 rounded-xl outline-1 '>
            <div className='h-full flex flex-col justify-between' >
                <h4>Total Investments </h4>
                <h5 className='text-2xl font-semibold'>0</h5>
            </div>
            <div className='flex flex-col justify-between'>
                <img alt='investments-icon' className="w-[24px] h-[24px]" src={investmentsIcon}/>

            </div>
    </div>
    <div className='w-[268px] h-[104px] flex justify-between shadow-custom-opacity  bg-white p-4 rounded-xl outline-1 '>
            <div className='h-full flex flex-col justify-between' >
                <h4>Portfolio Value</h4>
                <h5 className='text-2xl font-semibold'>N0.00</h5>
            </div>
            <div className='flex flex-col justify-between'>
                <img alt='portfolio-icon' className="w-[24px] h-[24px]" src={portfolioIcon}/>

            </div>
    </div>
    <div className='w-[268px] h-[104px] flex justify-between shadow-custom-opacity  bg-white p-4 rounded-xl outline-1 '>
            <div className='h-full flex flex-col justify-between' >
                <h4>Pending Returns</h4>
                <h5 className='text-2xl font-semibold'>N0.00</h5>
            </div>
            <div className='flex flex-col justify-between'>
                <img alt='returns-icon' className="w-[24px] h-[24px]" src={returnsIcon}/>

            </div>
    </div>
</div>
  )
}
