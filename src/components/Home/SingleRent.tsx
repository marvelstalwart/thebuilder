import React from 'react'
import propertyImg1 from "../../assets/img/home/Property Image.png"
import location from "../../assets/icons/home/Vector (2).svg"
import {TRentInfo } from '../../types'
type TSingleRentProps = {
  rentInfo: TRentInfo
}
export default function SingleRent(rentInfo: TSingleRentProps) {
    const {name, img, days}= rentInfo.rentInfo
  return (
    <div className='  flex flex-col shadow-custom-opacity  bg-white rounded-xl'>
    {/* Each active investment */}
    
      <div className='flex flex-col gap-4 w-full justify-between  p-4 '>
        
          <div className='rounded-t-md w-[219px] h-[208px] overflow-hidden '>
            <img alt='propertyImg' src={img} className='w-full h-full   object-cover'/>
          </div>
          <div className='flex flex-col gap-2 justify-between'>
            <div>
              <h2 className='text-base font-semibold'>Maple Grove Apartments</h2>
              <div>
                  <span className=' flex gap-2 pt-2 text-[##323133CC] text-xs'><img alt='location' src={location}/><p> Abeokuta, Ogun State</p></span>
              </div>
            
            </div>
            <div className='flex pt-5 justify-between items-center'>
              <h6 className=' text-sm flex items-center gap-2'>Remaining Days: <p className='text-purple  font-semibold'>{days}</p></h6>

            </div>

          </div>
      </div>


  </div>
  )
}
