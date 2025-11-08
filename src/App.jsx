import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import ProductViewer from './Components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Showcase from './Components/Showcase'
import Performance from './Components/Performance'
import Highlights from './Components/Highlights'
import Features from './Components/Features'
import Footer from './Components/Footer'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Highlights />
      <Features />
      <Footer />
    </main>
  )
}

export default App