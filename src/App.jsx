import AboutMe from './components/aboutme/AboutMe'
import Header from './components/header/Header'
import HeroSection from './components/hero-section/HeroSection'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-900'>
    <Header />
    <HeroSection />
    <AboutMe />
    <Projects />
    </div>
  )
}

export default App