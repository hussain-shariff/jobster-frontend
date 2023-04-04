import React from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'

function Home() {
  return (
    <div className="bg-[#12111d] h-screen relative overflow-hidden" > 
        <div className='absolute top-36 right-36 w-[400px] h-[400px] rounded-full bg-[#1e3850] opacity-70 blur-3xl hidden md:block'></div>
        <header>
            <NavBar/>
        </header>
        <main className='max-w-5xl mx-auto'>
            <HeroSection/>
        </main>
    </div>
  )
}

export default Home