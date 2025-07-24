import { useRef } from "react";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const Hero = () => {
  
  const headerImg = useRef(null)
  const heroText = useRef(null)
  const heroMain = useRef(null)

  useGSAP(() => {


    gsap.from(headerImg.current, {
      scale: 1.8,
      opacity: 0.5,
      duration: 1
    })
    
  })

  return (
    <main className="w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden relative" ref={heroMain}>
      <div className="relative w-full h-[25vw] overflow-hidden">
        <div
          className=" absolute left-0 top-20 translate-x-[12vw] flex gap-[30vw]" ref={heroText}>
          <h1 className="inline-block hero-h1 text-[10vw] text-white tracking-wider whitespace-nowrap px-4">
            CODING IS <span className="bg-gradient-to-r from-[#827ace] to-indigo-900 bg-clip-text text-transparent">LIFE</span>
          </h1>
          <h1 className="inline-block hero-h1 text-[10vw] text-white tracking-wider whitespace-nowrap px-4">
            CODING IS <span className="bg-gradient-to-r from-[#8279D9] to-indigo-900 bg-clip-text text-transparent">LIFE</span>
          </h1>
        </div>

      </div>

      <div className="hero-image absolute top-0 left-0 translate-x-[30%] size-[60%]" >
        <img src="/images/DigiArt.webp" alt="" ref={headerImg}/>
      </div>
     
    </main>
  );
};

export default Hero;