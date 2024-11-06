import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveToken } from '../../features/auth/user'
import { useLoginMutation} from '../../app/services/user'
export default function Login() {
 
  const [formData, setFormData ] = React.useState({
    email:"",
    password: "" 
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [triggerLoginQuery, {data: token, isSuccess, error, isError}] = useLoginMutation()
  const handleChange = (e: any)=> {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = ()=> {
    triggerLoginQuery(formData)
    console.log(formData)
  }

  React.useEffect(()=>{
    if (isError){
      console.log(error)
    }
    if (isSuccess){
      dispatch(saveToken(token))
      navigate("/")
    }
  },[isError, isSuccess])

  return (
    <div className='w-full h-screen'>
      <div className='w-full h-full flex justify-center items-center'>
        {/* Login Card */}
                <div className='bg-white rounded-2xl h-fit w-[35%] p-16'>
                      <div className='flex flex-col gap-2'>
                        <h4 className='text-[#19111D] text-center text-[32px] font-normal'>Sign In</h4>
                        <p className='text-[#323133] text-center'>Welcome back! Please enter your details.</p>
                        <div className='pt-8'>
                          <p className='text-[#323133]'>Email</p>
                          <input type='email' name='email' value={formData.email} onChange={handleChange} required className='mt-2 border-[1px] border-[#AAAAAA] py-[10px] px-[16px] rounded-2xl w-full outline-none text-[#323133]'/>
                        </div>
                        <div>
                          <p className='text-[#323133]'>Password</p>
                          <input type='password' name='password' value={formData.password} onChange={handleChange} required className='mt-2 border-[1px] border-[#AAAAAA] py-[10px] px-[16px] rounded-2xl w-full outline-none text-[#323133]'/>
                        </div>
                        <div className='flex w-full justify-between items-center'>
                              <div className='flex items-center gap-2'>
                                <input type='checkbox' name='remember'/>
                                <p className='text-purple '>Remember me</p>
                              </div>
                              <p className='text-purple '>Forgot Password?</p>
                        </div>
                      
                          <button onClick={handleSubmit} className='w-full mt-8 bg-purple text-white rounded-2xl p-4 text-base'>
                            Login
                          </button>
                        
                   
                        <div className='flex items-center w-full justify-center mt-4 mb-[60px]'>
                          
                        <p >Have an account already? </p>&nbsp;<Link to="/signup"><p className='text-purple'>Sign Up</p></Link>
                        </div>
                       
                      </div>
                </div>
        </div>
        </div>
  )
}
