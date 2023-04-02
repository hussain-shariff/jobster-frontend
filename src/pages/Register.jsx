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
    <form className='h-screen relative bg-[#070417]' onSubmit={handleSubmit}>
        <div className=' text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4
            flex flex-col bg-white/30 z-30 backdrop-blur-3xl p-10 rounded-md'>
            <h1 className='text-center font-semibol text-3xl z-40'>Sign up for Jobster</h1>
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
            <button className='bg-white py-1 px-10 rounded-md 
            font-semibold hover:scale-105 transition ease-out duration-500 w-full text-[#070417]'
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
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-72 h-72 bg-[#224668] blur-3xl"></div>
    </form>
  )
}

export default Register