import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='text-white text-center md:text-start relative mt-20'>
        <div className='absolute -top-5 left-14 w-80 h-80 rounded-full bg-[#460d64] blur-3xl'></div>
        <div className='relative px-8 md:px-0 flex flex-col md:flex-row gap-10 items-center justify-between md:items-start md:gap-0'>
            <div className=' max-w-xl'>
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
                    <button className='transition ease-out duration-500 border-2 ml-7 border-[#b135eb] py-2 px-10 rounded-md hover:bg-[#b135eb] font-semibold'>
                        Sign In
                    </button>
                </Link>
            </div>
            <div className='relative md:w-ful'>
                <img draggable="false" src="/hero.png" alt="" className=' relative z-20 h-[320px] md:h-[370px]'/>
                <div className='absolute top-0 left-18 w-[300px] h-[300px] rounded-full bg-[#1e3850] opacity-80 blur-3xl'></div>
            </div>
        </div>
    </div>
  )
}
export default HeroSection