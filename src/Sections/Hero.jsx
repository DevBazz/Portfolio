import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headerImg = useRef(null);
  const heroText = useRef(null);
  const heroMain = useRef(null);

  useGSAP(() => {
    gsap.from(headerImg.current, {
      scale: 1.8,
      opacity: 0.5,
      duration: 1,
    });

    gsap.from(heroText.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
    });
  });

  return (
    <main id="hero" className="relative w-full h-screen" ref={heroMain}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/DigiArt.webp"
          alt="Background"
          className="w-full h-full object-cover"
          ref={headerImg}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      </div>

      {/* Text Section */}
      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-10 text-white"
        ref={heroText}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[6.5vw] font-bold tracking-wide mt-52 md:mt-64">
          Build. Debug.{" "}
          <span className="bg-gradient-to-r from-[#8279D9] to-indigo-900 bg-clip-text text-transparent">
            Deploy.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mt-4 md:mt-6">
          Welcome to my portfolio
        </p>
      </div>
    </main>
  );
};

export default Hero;
