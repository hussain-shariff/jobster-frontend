import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputForm from '../components/InputForm'
import sendLoginData from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const [formData, setformData] = useState({
        Email : "",
        Password : ""
    })

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setloading(true)
        await sendLoginData(
            formData.Email,
            formData.Password,
            setloading,
            navigate
        )
        setformData({
            Email : "",
            Password : ""
        })
    }

  return (
    <form onSubmit={handleSubmit} className=' min-h-screen bg-[#070417] overflow-hidden
         relative'>
        <div className=' text-white w-80 flex flex-col gap-4 p-10 rounded-md
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl bg-white/30 z-40'>
            <h1 className='text-center text-white font-semibol text-3xl'>Sign in to Jobster</h1>
            <InputForm 
                name="Email"
                type="email"
                value = {formData.Email}
                placeholder="elon@email.com"
                autoComplete ='email'
                setformData = { setformData } />
            <InputForm 
                name="Password"
                type="password"
                value = {formData.Password}
                placeholder=""
                autoComplete ='new-password'
                setformData = { setformData } />
            <button type='submit' className='bg-white py-1 px-10 rounded-md
            font-semibold hover:scale-105 transition ease-out duration-500 w-full text-black'>
                Sign in
                <ClipLoader
                    color='#230e2e'
                    loading={loading}
                    size={20}
                    className='ml-2 -mb-1'
                />
            </button>
            <p className='text-center'>Need an account?
                <Link to={'/register'}>
                    <span className='border-b ml-2 cursor-pointer hover:border-blue-600
                    transition ease-out duration-500'>Sign up</span>
                </Link>
            </p>
        </div>
        <ToastContainer/>
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-72 h-72 bg-[#224668] blur-3xl"></div>
    </form>
  )
}

export default SignIn