import React, {useState} from 'react'
import {motion} from "framer-motion"
import { TActiveTab } from '../types'
import Explore from '../components/Investments/Explore'
import IvstButtons from '../components/Investments/IvstButtons'
import InvestmentOverview from '../components/Investments/InvestmentOverview'
import MyInvestments from '../components/Investments/MyInvestments'
import Completed from '../components/Investments/Completed'
export default function Investments() {
  const [activeTab, setActiveTab] = useState<TActiveTab>("explore")
  return (
    <motion.div
    className='p-16'
    initial={{opacity: 0}} animate={{opacity: 1}}
    >
    <InvestmentOverview/>
      <IvstButtons activeTab ={activeTab} setActiveTab ={setActiveTab}/>
      {/* Explore */}
        {
          activeTab=== "explore" ?
          <Explore/>
          : activeTab ==="investments" ? <MyInvestments/>: activeTab==="completed"? <Completed/> : undefined
        }
     

      </motion.div>
  )
}
