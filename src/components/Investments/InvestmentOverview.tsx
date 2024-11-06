import React from 'react'
import plusIcon from "../../assets/icons/Investments/PlusIcon.svg"
export default function InvestmentOverview() {
  return (
    <div className='flex items-center flex-wrap justify-between pt-[16px]'>
    <div className='w-[268px] h-[104px] flex justify-between bg-white shadow-custom-opacity p-4 rounded-xl outline-1 '>
            <div className='h-full  flex flex-col w-full justify-between ' >
                <h4>Available Balance</h4>
                 <div className='flex w-full justify-between items-center'>
                <h5 className='text-2xl font-semibold'> N250K</h5>
                    <img alt='plus' src={plusIcon}/>
                 </div>
            </div>

    </div>
    <div className='w-[268px] h-[104px] flex justify-between shadow-custom-opacity bg-white p-4 rounded-xl outline-1'>
            <div className='h-full flex flex-col justify-between' >
                <h4>Total Investments </h4>
                <h5 className='text-2xl font-semibold'>0</h5>
            </div>
   
    </div>
    <div className='w-[268px] h-[104px] flex justify-between shadow-custom-opacity bg-white p-4 rounded-xl outline-1 '>
            <div className='h-full flex flex-col justify-between' >
                <h4>Current ROI</h4>
                <h5 className='text-2xl font-semibold'>N0.00</h5>
            </div>

    </div>
    <div className='w-[268px] h-[104px] flex justify-between shadow-custom-opacity bg-white p-4 rounded-xl outline-1 '>
            <div className='h-full flex flex-col justify-between' >
                <h4>Next Payout Date</h4>
                <h5 className='text-2xl font-semibold'>N0.00</h5>
            </div>

    </div>
</div>
  )
}
