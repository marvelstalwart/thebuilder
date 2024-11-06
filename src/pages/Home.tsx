import React, {useState} from 'react'
import Portfolio from '../components/Portfolio'
import { TInvestmentH, TRentInfo} from '../types'
import portfolioImg1 from "../assets/img/home/Property Image.png"
import portfolioImg2 from "../assets/img/home/Property Image.jpg"
import rentInfoImg1 from "../assets/img/home/Property Image (1).png"
import rentInfoImg2 from "../assets/img/home/Property Image (2).png"
import icon1 from "../assets/icons/home/icon1.svg"
import icon2 from "../assets/icons/home/icon2.svg"
import icon3 from "../assets/icons/home/icon3.svg"
import icon4 from "../assets/icons/home/icon4.svg"
import SingleInvestment from '../components/Home/SingleInvesment'
import {motion} from "framer-motion"
import { RootState } from '../app/store'
import { useSelector, UseSelector } from 'react-redux'
import SingleRent from '../components/Home/SingleRent'
export default function Home() {
  const token = useSelector((state: RootState)=>  state.user.token)
  const [investments, setInvestments] = useState<TInvestmentH[]>([
    {
      name: "Maple Grove Apartments",
      location: "Abeokuta, Ogun State",
      price: "250,000",
      ROI: 8.5,
      img: portfolioImg1
    },
    {
      name: "Maple Grove Apartments",
      location: "Abeokuta, Ogun State",
      price: "250,000",
      ROI: 8.5,
      img: portfolioImg2
    },
    {
      name: "Maple Grove Apartments",
      location: "Abeokuta, Ogun State",
      price: "250,000",
      ROI: 8.5,
      img: portfolioImg2
    }
  ])
  const [rentInfo, setRentInfo] = useState<TRentInfo[]>([
    {
      name: "Maple Grove Apartments",
      location: "Abeokuta, Ogun State",
      days: 185,
      img: rentInfoImg1
    },
    {
      name: "Maple Grove Apartments",
      location: "Abeokuta, Ogun State",
      days: 185,
      img: rentInfoImg2
    },
    {
      name: "Maple Grove Apartments",
      location: "Abeokuta, Ogun State",
      days: 185,
      img: rentInfoImg1
    }
  ])

  React.useEffect(()=> {
      console.log(token)
  },[])

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    className='font-mont h-full flex-1 overflow-x-hidden  w-full p-16'>
        <h4 className='text-2xl'>Overview</h4>
        {/* Portfolio  Overview section */}
            <Portfolio/>
            <div className='pt-16 flex flex-col gap-12 w-full'>
              <div className='w-full'>
                  <div>
                    <h4 className='text-2xl '>Active Investment (4)</h4>
                  </div>
                  <div className='flex  mt-[16px] p-4 rounded-xl  gap-4'>
                    {/* All Investments */}
                      {
                        investments.map((investment, i)=> (
                          <SingleInvestment investment={investment} key={i}/>
                        ))
                      }

                  </div>

              </div>

              <div className=''>
                  <div>
                    <h4 className='text-2xl '>Active Rent Tracker (3)</h4>
                  </div>
                  <div className='flex  mt-[16px]  p-4 rounded-xl  gap-4'>
                    {/* All Investments */}
                      {
                        rentInfo.map((rent, i)=> (
                          <SingleRent rentInfo={rent} key={i}/>
                        ))
                      }

                  </div>

              </div>
            </div>

            {/* Recent activities */}
            <div className='pt-16 w-full'>
              <div className='flex justify-between'>
              <h2 className='text-2xl'>Recent  Activities</h2>
              <h3 className='text-2xl'>See All</h3>
              </div>
              {/* Recent activities container */}
              <div className='flex flex-col gap-4 overflow-y-auto p-6 bg-white mt-4 rounded-xl '>
                
                <div className=''>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                          <img alt='icon' src={icon1}/>
                          <p className='text-base'>You successfully invested ₦250,000 in Maple Grove Apartments located at Abeokuta, Ogun State </p>
                    </div>

                    <div className='flex items-center gap-2 text-sm'>
                      <p> October 1, 2024</p>
                      <p> 10:30 AM</p>
                    </div>
  
                </div>

                                                   {/* Divider */}
                                                   <div className='h-[1px] mt-2 w-full  bg-gray-300'></div>


                  </div>

                  <div className=''>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                          <img alt='icon' src={icon2}/>
                          <p className='text-base'>You successfully invested ₦250,000 in Maple Grove Apartments located at Abeokuta, Ogun State </p>
                    </div>

                    <div className='flex items-center gap-2 text-sm'>
                      <p> October 1, 2024</p>
                      <p> 10:30 AM</p>
                    </div>
  
                </div>

                                                   {/* Divider */}
                                                   <div className='h-[1px] mt-2 w-full  bg-gray-300'></div>


                  </div>

                  <div className=''>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                          <img alt='icon' src={icon3}/>
                          <p className='text-base'>You successfully invested ₦250,000 in Maple Grove Apartments located at Abeokuta, Ogun State </p>
                    </div>

                    <div className='flex items-center gap-2 text-sm'>
                      <p> October 1, 2024</p>
                      <p> 10:30 AM</p>
                    </div>
  
                </div>

                                                   {/* Divider */}
                                                   <div className='h-[1px] mt-2 w-full  bg-gray-300'></div>


                  </div>

                  <div className=''>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                          <img alt='icon' src={icon4}/>
                          <p className='text-base'>You successfully invested ₦250,000 in Maple Grove Apartments located at Abeokuta, Ogun State </p>
                    </div>

                    <div className='flex items-center gap-2 text-sm'>
                      <p> October 1, 2024</p>
                      <p> 10:30 AM</p>
                    </div>
  
                </div>

                                                   {/* Divider */}
                                                   <div className='h-[1px] mt-2 w-full  bg-gray-300'></div>


                  </div>
              </div>
    
            </div>
        </motion.div>
  )
}
