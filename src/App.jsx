import AboutMe from './components/aboutme/AboutMe'
import Header from './components/header/Header'
import HeroSection from './components/hero-section/HeroSection'

function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <Header />
    <HeroSection />
    <AboutMe />
    </div>
  )
}

export default App