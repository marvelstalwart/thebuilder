import React from 'react'
import flag from "../../assets/icons/auth/flag.svg"
import { Link } from 'react-router-dom'
import { TUserForm } from '../../types'
interface SignupCard2Props {
    disabled: boolean,
    handleSubmit: (e: any)=> void
    formData: TUserForm
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SignupCard2({disabled, handleSubmit, handleChange, formData}: SignupCard2Props) {

  return (
    <div className='bg-white rounded-2xl h-fit w-[35%] p-16'>
    <div className='flex flex-col gap-2'>
      <h4 className='text-[#19111D] text-center text-[32px] font-normal'>Create new Account</h4>
      <p className='text-[#323133] text-center'>Enter your details to continue</p>

                <form>
                <div className='pt-8'>
                <p className='text-[#323133]'>First name</p>
                <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} required className='mt-2 border-[1px] border-[#AAAAAA] py-[10px] px-[16px] rounded-2xl w-full outline-none text-[#323133]'/>
            </div>
            <div className='pt-5'>
                <p className='text-[#323133]'>Last name</p>
                <input type='text' name='lastName' required value={formData.lastName} onChange={handleChange}  className='mt-2 border-[1px]  border-[#AAAAAA] py-[10px] px-[16px] rounded-2xl w-full outline-none text-[#323133]'/>
            </div>
            <div className='pt-5'>
                <p className='text-[#323133]'>Email</p>
                <input type='email' name='email' required value={formData.email} onChange={handleChange}  className='mt-2 border-[1px] border-[#AAAAAA] py-[10px] px-[16px] rounded-2xl w-full outline-none text-[#323133]'/>
            </div>
            <div className='pt-5'>
                <p className='text-[#323133]'>Mobile number</p>
                <div className='relative h-full'>
                <input type='text' name='phone' required  value={formData.phone} onChange={handleChange}  className='mt-2 border-[1px] border-[#AAAAAA] py-[10px] pl-12 px-[16px] rounded-2xl w-full outline-none text-[#323133]'/>
                <img alt='flag' src={flag} className='absolute  top-[50%] translate-y-[-50%] pl-4 pt-2'/>

                </div>
            </div>
            <div className='pt-5'>
                <p className='text-[#323133]'>Password</p>
                <input type='password' name='password' value={formData.password} onChange={handleChange}   required className='mt-2 border-[1px] border-[#AAAAAA] py-[10px] px-[16px] rounded-2xl w-full outline-none text-[#323133]'/>
            </div>
            <button onClick={(e)=>handleSubmit(e)}  disabled={disabled} className={`w-full mt-8  text-white rounded-2xl p-4 text-base ${disabled? 'bg-gray-400': 'bg-purple'}`}>
                    Create Account
                    </button>
            </form>


      <div className='flex items-center w-full justify-center mt-4 '>
        
      <p >Have an account already? </p>&nbsp;<Link to="/login"><p className='text-purple'>Sign In</p></Link>
      </div>
     
    </div>
</div>

  )
}
