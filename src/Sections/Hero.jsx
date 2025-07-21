import { useRef } from "react";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';

const Hero = () => {
  
  const headerImg = useRef(null)

  useGSAP(() => {

    gsap.from(headerImg.current, {
      scale: 1.8,
      opacity: 0.5,
      duration: 1
    })
  })

  return (
    <main className="hero w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden  relative bg-linear-to-r from-[#8279D9] to-indigo-900">
      <div className="relative w-full h-[25vw] overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'loop', delay: 1.2 }}
          className="hero-text-wrapper absolute left-0 top-20 translate-x-[12vw] flex gap-[30vw]">
          <h1 className="inline-block hero-h1 text-[10vw] text-white tracking-wider whitespace-nowrap px-4">
            CODING IS LOVE
          </h1>
          <h1 className="inline-block hero-h1 text-[10vw] text-white tracking-wider whitespace-nowrap px-4">
            CODING IS LOVE
          </h1>
          
        </motion.div>
      </div>

      <div className="hero-image absolute top-0 left-0 translate-x-[30%] size-[60%]" >
        <img src="/images/DigiArt.webp" alt="" ref={headerImg}/>
      </div>
     
    </main>
  );
};

export default Hero;