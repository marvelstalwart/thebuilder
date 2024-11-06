import React from 'react'
import propertyImg1 from "../../assets/img/home/Property Image.png"
import location from "../../assets/icons/home/Vector (2).svg"
import { TInvestmentH } from '../../types'
type TSingleInvestmentProp = {
  investment : TInvestmentH
}
export default function SingleInvestment(investment: TSingleInvestmentProp) {
  return (
    <div className='  flex flex-col bg-white rounded-xl  shadow-custom-opacity  '>
    {/* Each active investment */}
    
      <div className='flex flex-col gap-4 w-full justify-between p-4  '>
        
          <div className='rounded-t-md w-[219px] h-[208px] overflow-hidden '>
            <img alt='propertyImg' src={investment.investment.img} className='w-full h-full object-cover'/>
          </div>
          <div className='flex flex-col gap-2 justify-between'>
            <div>
              <h2 className='text-base font-semibold'>Maple Grove Apartments</h2>
              <div>
                  <span className=' flex gap-2 pt-2 text-[##323133CC] text-xs'><img alt='location' src={location}/><p> Abeokuta, Ogun State</p></span>
              </div>
            
            </div>
            <div className='flex pt-5 justify-between items-center'>
              <h6 className='text-purple text-base font-semibold'>N250,000</h6>
              <p className='text-xs text-[##19111D] '>ROI: 8.5%</p>
            </div>

          </div>
      </div>


  </div>
  )
}
