
import About from './components/sections/about'
import Contact from './components/sections/contact'
import Experience from './components/sections/experience'
import Gallery from './components/sections/gallery'
import Header from './components/layout/header'
import Hero from './components/sections/hero'
import Services from './components/sections/services'
import Testimonials from './components/sections/testimonials'

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Header />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Gallery />
      <Testimonials />
      <Contact />

    </div>
  )
}

export default App
