import React from 'react'
import {Link}  from 'react-router-dom'
import {motion} from "framer-motion"
import { TAccountType } from '../../types'


interface SignUpCard1Props {
    handleForm: (acctType: TAccountType)=> void,

    setShowFullForm: (value: React.SetStateAction<boolean>) => void
    disabled: boolean
    accountType: TAccountType | null
}

export default function SignupCard1({handleForm,  disabled, accountType, setShowFullForm}: SignUpCard1Props) {
  return (
    <div className='bg-white rounded-2xl h-fit w-[35%] p-16'>
    <div className='flex flex-col gap-2'>
      <h4 className='text-[#19111D] text-center text-[32px] font-normal'>Welcome</h4>
      <p className='text-[#323133] text-center'>What account would you like to open?</p>

                    <motion.form>
                <div className='mt-8 flex items-center justify-between w-full border-[1px] border-[#AAAAAA] rounded-lg py-6 px-4'>
                <p className='text-[#323133]'>Real estates and Landlord</p>
                <input onChange={()=>handleForm(TAccountType.REAL)} type='radio' name={TAccountType.REAL} checked={accountType===TAccountType.REAL} className='scale-150'/>
                </div>
                <div className='mt-4 flex items-center justify-between w-full border-[1px] border-[#AAAAAA] rounded-lg py-6 px-4'>
                <p className='text-[#323133]'>Investors and Rental</p>
                <input type='radio' onChange={()=>handleForm(TAccountType.IAR)}  name={TAccountType.IAR} checked={accountType === TAccountType.IAR} className='scale-150'/>
                </div>
                <button onClick={(e)=>setShowFullForm(true)} disabled={disabled} className={`w-full mt-8  text-white rounded-2xl p-4 text-base ${disabled? 'bg-gray-400': 'bg-purple'}`}>
                    Next
                </button>
                </motion.form>

      <div className='flex items-center w-full justify-center mt-4 '>
        
      <p >Have an account already? </p>&nbsp;<Link to="/login"><p className='text-purple'>Sign In</p></Link>
      </div>
     
    </div>
</div>
  )
}
