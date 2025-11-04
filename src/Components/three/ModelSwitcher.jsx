import { PresentationControls } from "@react-three/drei"
import { useRef } from "react"
import MacbookModel16 from "../models/Macbook-16"
import MacbookModel14 from "../models/Macbook-14"

const ModelSwitcher = ({ scale, isMobile }) => {

    const smallMacbookRef = useRef()
    const largeMacbookRef = useRef()

    const showLargeMacbook = scale === 0.08 || scale === 0.05

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: { mass: 1, tension: 0, friction: 26 }
    }
  return (
    <>
        <PresentationControls {...controlsConfig}>
            <group ref={largeMacbookRef}>
                <MacbookModel16 scale={0.06} position={[0,0,0]} />
            </group>
        </PresentationControls>

        <PresentationControls {...controlsConfig}>
            <group ref={smallMacbookRef}>
                <MacbookModel14 scale={0.06} position={[0,0,0]} />
            </group>
        </PresentationControls>
    </>
  )
}

export default ModelSwitcher