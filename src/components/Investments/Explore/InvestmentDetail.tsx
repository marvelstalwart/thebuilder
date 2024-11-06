import React from 'react'
import location from "../../../assets/icons/Investments/location-01.svg"
import propertyImg1 from "../../../assets/img/investments/Frame 2085663279 (1).png"
import labelIcon from "../../../assets/icons/Investments/labelIcon.svg"
import bedroomIcon from "../../../assets/icons/Investments/bed-single-02.svg"
import bathRoomIcon from "../../../assets/icons/Investments/bathtub-01.svg"
import fitnessIcon from "../../../assets/icons/Investments/equipment-gym-03.svg"
import livingroomIcon from "../../../assets/icons/Investments/chair-05.svg"
import cropIcon from "../../../assets/icons/Investments/crop.svg"
import peopleIcon from "../../../assets/icons/Investments/user-multiple.svg"
import closeIcon from"../../../assets/icons/Investments/closeIcon.svg"
import {motion} from "framer-motion"


interface InvestmentDetailProps {
    setModalOpen:  React.Dispatch<React.SetStateAction<boolean>>
    modalOpen: boolean
}
export default function InvestmentDetail({setModalOpen, modalOpen}: InvestmentDetailProps) {
  return (
    <div className='w-full h-full p-4  bg-black bg-opacity-60  z-10 fixed top-0 left-0 flex items-center justify-center'>
    <motion.div 
        initial={{scale: 0}}
        animate={{scale: 1}}
        exit={{ scale: 0 }}
        
        style={{ transformOrigin: 'center' }}
    className='w-[50%]  rounded-2xl p-8 bg-white h-full overflow-y-auto '>
            <div className='w-full flex  justify-end '>
                    <img alt='closeIcon' src={closeIcon} className='cursor-pointer' onClick={()=> setModalOpen(!modalOpen)}/>

            </div>
            <div className='w-full pt-4'>
                <h2 className='mb-5 text-[#19111D] text-2xl text-center' >Maple Grove Apartments</h2>
                    {/* TODO: Image slideshow */}
                    {/* Image Slideshow */}

                    <div className='w-full h-[284px] rounded-lg overflow-hidden'>   
                        <img className="w-full h-full object-cover" alt='img' src={propertyImg1}/>
                    </div>
                    <div className='flex w-full justify-between pt-4'>
                        <div>
                            <h1 className='font-semibold text-xl text-[#19111D]'>Maple Grove Apartments</h1>
                            <div className='flex items-center gap-2'><img alt='location' src={location}/><p className='text-[#323133] '>Abeokuta, Ogun State</p></div>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <img alt="label" src={labelIcon}/>
                            <button className='bg-purple rounded-2xl text-white text-sm py-3 px-16'>Invest</button>
                        </div>



                    </div>
                    <div className='flex p-5 rounded-lg mt-6 items-center justify-between border-[0.5px] border-opacity-60 border-[#AAAAAA]'>
                                <div className=''>
                                    <img alt='bedroomIcon' className=" justify-self-center" src={bedroomIcon}/>
                                    <p className='text-[#323133] text-sm'>3 Bedrooms</p>
                                </div>
                                <div>
                                    <img alt='bathroomIcon' className=" justify-self-center"  src={bathRoomIcon}/>
                                    <p className='text-[#323133] text-sm'>2 Bathrooms</p>
                                </div>
                                <div>
                                    <img alt='fitness' className=" justify-self-center"  src={fitnessIcon}/>
                                    <p className='text-[#323133] text-sm'>Fitness Center</p>
                                </div>
                                <div>
                                    <img alt='chair' className=" justify-self-center"  src={livingroomIcon}/>
                                    <p className='text-[#323133] text-sm'>1 Living Room</p>
                                </div>
                                <div>
                                    <img alt='square' className=" justify-self-center"  src={cropIcon}/>
                                    <p className='text-[#323133] text-sm'>3,200 sq ft</p>
                                </div>
                        </div>
                        <div className='pt-[20px]'>
                            <h2 className='font-semibold text-3xl'>N4,500,000</h2>
                            <div className='w-full relative h-3 mt-[12px] rounded-lg bg-[#F2F1F0]'>
                                <div style={{width: `${35}%`}} className={`absolute h-full bg-purple rounded-xl`}></div>
                            </div>
                        
                            <div className='flex items-center gap-2 pt-2 '>
                                    <img alt='people' src={peopleIcon}/>
                                <p className='text-purple text-sm'>{42} investors</p>
                            </div>
                    </div>
                    <div className=' rounded-lg mt-6  border-[0.5px] border-opacity-60 border-[#AAAAAA] flex flex-col gap-4 p-4'>
                            <div className='flex w-full justify-between items-center'>
                                <h1 className='text-[#323133]'>
                                    Duration
                                </h1>
                                <p className='text-[#323133] text-lg'>3 years</p>
                            </div>
                            <div className='flex w-full justify-between items-center'>
                                <h1 className='text-[#323133]'>
                                   ROI
                                </h1>
                                <p className='text-[#323133] text-lg'>8%</p>
                            </div>
                            <div className='flex w-full justify-between items-center'>
                                <h1 className='text-[#323133]'>
                                    Risk level
                                </h1>
                                <p className='text-[#F88715]  bg-[#F88715] bg-opacity-10 py-1 px-4 rounded-md text-lg'>Medium</p>
                            </div>
                            <div className='flex w-full justify-between items-center'>
                                <h1 className='text-[#323133]'>
                                   Investment Type
                                </h1>
                                <p className='text-[#323133] text-lg'>Fixed Income</p>
                            </div>
                    </div>

            </div>
    </motion.div>
</div>
  )
}
