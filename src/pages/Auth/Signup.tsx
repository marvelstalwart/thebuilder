import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { TAccountType, TUserForm } from '../../types'
import {motion} from "framer-motion"
import SignupCard1 from '../../components/Auth/SignupCard1'
import { useSignupMutation } from '../../app/services/user'
import SignupCard2 from '../../components/Auth/SignupCard2'
export default function Signup() {
    let navigate = useNavigate()
    const [accountType, setAccountType] = React.useState<TAccountType|null>(null)
    const [disabled, setDisabled] = React.useState<boolean>(true)
    const [showFullForm, setShowFullForm] = React.useState<boolean>(false)
    const [triggerLazySignUp, {data: response, isSuccess, isError, error}] = useSignupMutation()
    const [formData, setFormData] = React.useState<TUserForm>({
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      password: undefined,
      role: accountType

    })
    const handleForm = (acctype: TAccountType)=> {
        setAccountType(acctype)
      

    }
    const handleChange = (e: any)=> {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

  
    const handleSubmit = (e: any)=> {
            e.preventDefault()
           
            triggerLazySignUp({...formData, role: accountType})
         
    }

    React.useEffect(()=> {
        setDisabled(accountType === null)
    },[accountType])

    React.useEffect(()=> {
        if (isSuccess) {
          navigate("/login")
        }
        if (isError) {
          console.log(error)
        }
    },[isSuccess, isError])
  return (
    <div className='w-full h-screen'>
    <div className='w-full h-full flex justify-center items-center'>
      {/* Login Card */}
            {
                    !showFullForm? 
                        <SignupCard1 handleForm={handleForm} setShowFullForm= {setShowFullForm}  disabled={disabled} accountType={accountType}/>
                    :
                    <SignupCard2 formData={formData} disabled={disabled} handleChange={handleChange} handleSubmit={handleSubmit}/>
            }
      </div>
      </div>
  )
}
