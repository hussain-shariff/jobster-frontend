import React from 'react'

function HeroSection() {
  return (
    <div className='text-white max-w-xl text-center md:text-start relative mt-20'>
        <div className='absolute top-0 -left-4 w-72 h-72 rounded-full bg-[#36104b]  blur-2xl'></div>
        <div className='absolute top-0 right-20 w-72 h-72 rounded-full bg-[#2a3f52]  blur-2xl'></div>
        <div className='absolute top-44 right-44 w-72 h-72 rounded-full bg-pink-300  opacity-20 blur-3xl'></div>
        <div className='relative px-8 md:px-0'>
            <h1 className='text-4xl font-bold leading-tight md:text-5xl'>
                Unleash Your Job Search with Our Innovative Application Tool.
            </h1>
            <p className='mt-7 text-sm md:text-base'>Effortlessly create and manage job postings, 
            secure and confidential platform to protect your hiring data.</p>
            <button className='mt-7 bg-gradient-to-r from-[#8035eb] to-[#b24af2] py-2 px-10 rounded-lg font-semibold hover:scale-95 transition ease-out duration-500'>
                Register
            </button>
            <button className='transition ease-out duration-500 border-2 ml-7 border-[#8035eb] py-2 px-10 rounded-lg hover:bg-[#8035eb] font-semibold'>
                Sign In
            </button>
        </div>
    </div>
  )
}

export default HeroSection