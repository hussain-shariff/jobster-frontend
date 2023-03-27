import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputForm from '../components/InputForm'
import sendRegisterData from '../hooks/useRegister';
import { useNavigate } from "react-router-dom"

function Register() {
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const [formData, setformData] = useState({
        Username : "",
        Email : "",
        Password : ""
    })

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setloading(true)
        await sendRegisterData(
            formData.Username,
            formData.Email,
            formData.Password,
            setloading,
            navigate
            )
        setformData({
            Username : "",
            Email : "",
            Password : ""
        })
    }

  return (
    <form className='h-screen bg-gradient-to-bl from-[#120e3e]  to-[#000000]
    flex items-center justify-center' onSubmit={handleSubmit}>
        <div className=' text-white flex flex-col gap-4 bg-white/20 backdrop-blur-3xl p-10 rounded-xl'>
            <h1 className='text-center font-semibol text-3xl'>Sign up for Jobster</h1>
            <InputForm 
                name="Username"
                type="text"
                value = {formData.Username}
                autoComplete = ""
                setformData = { setformData }/>
            <InputForm 
                name="Email"
                type="email"
                value = {formData.Email}
                autoComplete ='email'
                setformData = { setformData }
                />
            <InputForm 
                name="Password"
                type="password"
                value = {formData.Password}
                autoComplete ='new-password'
                setformData = { setformData } />
            <button className='bg-gradient-to-r from-green-200  to-pink-200 py-2 px-10 rounded-md 
            font-semibold hover:scale-105 transition ease-out duration-500 w-full text-black'
            type='submit'>
                Complete Sign Up
                <ClipLoader
                    color='#230e2e'
                    loading={loading}
                    size={20}
                    className='ml-2 -mb-1'
                />
            </button>
            <p className='text-center'>Already have an account?
                <Link to={'/signIn'}>
                    <span className='border-b ml-2 cursor-pointer hover:border-blue-600
                    transition ease-out duration-500'>Sign in</span>
                </Link>
            </p>
        </div>
        <ToastContainer/>
    </form>
  )
}

export default Register