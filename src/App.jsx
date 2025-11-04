import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import ProductViewer from './Components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default App