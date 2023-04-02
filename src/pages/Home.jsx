import React from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'

function Home() {
  return (
    <div className="bg-[#12111d] h-screen relative overflow-hidden" >        
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