import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import InputForm from '../components/InputForm'

function Register() {
    const [formData, setformData] = useState({
        Username : "",
        Email : "",
        Password : ""
    })

    const sendRegisterData = async () =>{
        fetch('https://jobs-api-81wf.onrender.com/api/v1/auth/register', {
            method : "POST",
            headers : { 'content-type' : 'application/json'},
            body : JSON.stringify({
                username : formData.Username,
                email : formData.Email,
                password : formData.Password
            })
        })
            .then(res=> res.json())
            .then(json=> {
                localStorage.setItem('token', json.token)
                localStorage.setItem('user', json.user)
            })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await sendRegisterData()
        setformData({
            Username : "",
            Email : "",
            Password : ""
        })
    }

  return (
    <form className='h-screen bg-gradient-to-tr from-[#13101d] via-[#230e2e] to-[#2f1329] 
    flex items-center justify-center' onSubmit={handleSubmit}>
        <div className=' text-gray-500 flex flex-col gap-4 bg-[rgba(0,0,0,.1)] p-10 rounded-xl'>
            <h1 className='text-center text-white font-semibol text-3xl'>Sign up for Jobster</h1>
            <InputForm 
                name="Username"
                type="text"
                value = {formData.Username}
                placeholder="Elon Musk"
                autoComplete = ""
                setformData = { setformData }/>
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
            <button className='bg-gradient-to-r from-green-200  to-pink-300 py-2 px-10 rounded-md 
            font-semibold hover:scale-105 transition ease-out duration-500 w-full text-black'
            type='submit'>
                Complete Sign Up
            </button>
            <p className='text-gray-400 text-center mt-3'>Already have an account?
                <Link to={'/signIn'}>
                    <span className='border px-2 py-1 rounded-md ml-2 cursor-pointer hover:border-blue-600
                    transition ease-out duration-500'>Sign in</span>
                </Link>
            </p>
        </div>
    </form>
  )
}

export default Register