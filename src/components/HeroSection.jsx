import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='text-white max-w-xl text-center md:text-start relative mt-20'>
        <div className='absolute -top-10 -left-4 w-72 h-96 rounded-full bg-[#460d64]  blur-3xl'></div>
        <div className='absolute top-8 right-10 w-72 h-96 rounded-full bg-[#1e3850]  blur-3xl'></div>
        <div className='relative px-8 md:px-0'>
            <h1 className='text-4xl font-bold md:leading-tight md:text-5xl'>
                Unleash Your Job Search with Our Innovative Application Tool.
            </h1>
            <p className='mt-7 text-sm md:text-base'>Effortlessly create and manage job postings, 
            secure and confidential platform to protect your hiring data.</p>
            <Link to={'/register'}>
                <button className='mt-7 bg-gradient-to-r from-[#711beb] to-[#b24af2] py-2 px-10 rounded-md font-semibold hover:scale-95 transition ease-out duration-500'>
                    Register
                </button>
            </Link>
            <Link to={'/signIn'}>
                <button className='transition ease-out duration-500 border-2 ml-7 border-[#b135eb] py-2 px-10 rounded-md hover:border-none hover:bg-[#8035eb] font-semibold'>
                    Sign In
                </button>
            </Link>
        </div>
        <img src="../public/main.svg" alt="" className='hidden absolute h-[400px] -top-5 left-[600px] md:block'/>
    </div>
  )
}

export default HeroSection