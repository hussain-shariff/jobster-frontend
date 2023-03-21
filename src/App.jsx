import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"

function App() {

  return (
    <div className="bg-[#12111d] h-screen relative overflow-hidden" >
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#2a3f52] blur-3xl opacity-50"></div>
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#36104b] blur-3xl opacity-50"></div>
      <header>
        <NavBar/>
      </header>
      <main className='max-w-5xl mx-auto'>
        <HeroSection/>
      </main>
    </div>
  )
}

export default App
