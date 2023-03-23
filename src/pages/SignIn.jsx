import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputForm from '../components/InputForm'
import sendLoginData from '../hooks/login';

function SignIn() {
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
            setloading
        )
        setformData({
            Email : "",
            Password : ""
        })
    }

  return (
    <form onSubmit={handleSubmit} className='h-screen bg-gradient-to-tr from-[#13101d] via-[#230e2e] to-[#2f1329]
        flex items-center justify-center'>
        <div className=' text-gray-500 flex flex-col gap-4 bg-[rgba(0,0,0,.1)] p-10 rounded-lg'>
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
            <button type='submit' className='bg-gradient-to-r from-green-200  to-pink-300 py-2 px-10 rounded-md 
            font-semibold hover:scale-105 transition ease-out duration-500 w-full text-black'>
                Sign in
                <ClipLoader
                    color='#230e2e'
                    loading={loading}
                    size={20}
                    className='ml-2 -mb-1'
                />
            </button>
            <ToastContainer/>
            <p className='text-gray-400 text-center'>Need an account?
                <Link to={'/register'}>
                    <span className='border px-2 py-1 rounded-md ml-2 cursor-pointer hover:border-blue-600
                    transition ease-out duration-500'>Sign up</span>
                </Link>
            </p>
        </div>
    </form>
  )
}

export default SignIn