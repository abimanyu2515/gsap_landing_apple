import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import ProductViewer from './Components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Showcase from './Components/Showcase'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  )
}

export default App