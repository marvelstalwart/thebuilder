import React from 'react'
import peopleIcon from "../../../assets/icons/Investments/user-multiple.svg"
import img1 from "../../../assets/img/investments/image (1).png"
import location from "../../../assets/icons/Investments/location-01.svg"
import { TPropertyInfo } from '../../../types'

type InvestmentcardProps = {
    property: TPropertyInfo,
  
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function InvestmentCard({property, setModalOpen}: InvestmentcardProps) {
  return (
    <div className='bg-white shadow-custom-opacity rounded-lg p-6' >
    <div className='w-full h-[208px] rounded-t-xl'>
        <img alt='prop-img' className='w-full h-full' src={property.img}/>
    </div>
    <div className='flex items-center justify-between pt-2'>
        <div>
            <h2 className='font-semibold'>{property.name}</h2>
            <div className='flex gap-2 pt-2'><img alt='location' src={location}/><p className='text-[323133] text-xs opacity-80'>Abeokuta, Ogun State</p></div>
        </div>
        <div>
            <button className='rounded-md py-[10px] px-[30px] bg-purple text-white text-xs' onClick={()=> setModalOpen(true)}>View details</button>
        </div>
    </div>
    <div className='pt-[20px]'>
            <h2 className='font-semibold'>N4,500,000</h2>
            <div className='w-full relative h-2 mt-[12px] rounded-lg bg-[#F2F1F0]'>
                <div style={{width: `${property.percentageFilled}%`}} className={`absolute h-full bg-purple rounded-xl`}></div>
            </div>
         
            <div className='flex items-center gap-2 pt-2 '>
                    <img alt='people' src={peopleIcon}/>
                <p className='text-purple text-xs'>{property.investorCount} investors</p>
            </div>
    </div>
    </div>
  )
}
