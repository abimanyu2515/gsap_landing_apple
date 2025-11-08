import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";


const Highlights = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(() => {
    gsap.to(['.left-column', '.right-column'], {
      scrollTrigger: {
        trigger: '#highlights',
        start: isMobile ? 'bottom bottom' : 'top top',
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: 'power1.inOut',
    })
  })

  return (
    <div id="highlights">
      <h2>There's never been a better time to upgrade.</h2>
      <h3>Here's what you get with the new Macbook Pro.</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="laptop" />
            <p>Fly through demanding task upto 9.8x faster</p>
          </div>

          <div>
            <img src="/sun.png" alt="Sun" />
            <p>A stunning <br /> Liquid Retina XDR <br /> display</p>
          </div>
        </div>

        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>Built for <br /> <span>Apple Intelligence</span></p>
          </div>

          <div>
            <img src="/battery.png" alt="battery" />
            <p>Up to <span className='green-gradient'> &nbsp; 14 more hours &nbsp;</span> battery life <span className="text-dark-100"> &nbsp; (Up to 24 hours total.)</span> </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights