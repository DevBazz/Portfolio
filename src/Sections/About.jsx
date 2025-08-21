import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const helloWorld = useRef(null);
  const aboutText = useRef(null);
  const summaryText = useRef(null);
  const aboutDiv = useRef(null);
  const helloWorldDiv = useRef(null);

  const aboutStr = `About Me`.split("");
  const animationCharacters = `HELLO WORLD`.split("");

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: helloWorldDiv.current,
        start: "top 30%",
      },
      repeat: -1,
      repeatDelay: 1.5,
    });

    tl.to(".char", {
      y: -70,
      ease: "power1.inOut",
      stagger: 0.1,
    })
      .to(".char", {
        rotate: -360,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.1,
      })
      .to(".char", {
        y: 0,
        duration: 1,
        ease: "back.out(2)",
        stagger: 0.1,
      });
  }, { scope: helloWorld });

  useGSAP(() => {
    gsap.set(aboutText.current, { x: 400 });
    gsap.set(summaryText.current, { opacity: 0, y: 20 });

    gsap.from(".about .half-str", {
      scrollTrigger: {
        trigger: aboutText.current,
        start: "top 50%",
        end: "top 80%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      onComplete: () => {
        gsap.to(aboutText.current, {
          x: 0,
          duration: 2,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.to(summaryText.current, {
              y: 5,
              opacity: 1,
              duration: 1,
              ease: "linear",
            });
          },
        });
      },
    });

    gsap.from(".about .sec-str", {
      scrollTrigger: {
        trigger: aboutText.current,
        start: "top 50%",
        end: "top 80%",
      },
      y: 100,
      opacity: 0,
      stagger: -0.2,
    });
  }, { scope: aboutText });

  return (
    <section id="about" className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12">
      {/* About Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-[10vw] tracking-normal py-16 lg:h-[90vh]" ref={aboutDiv}>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] font-bold text-white about text-center lg:text-left" ref={aboutText}>
          {aboutStr.map((char, index) => (
            index < 4 ? 
              <span key={index} className="half-str inline-block">{char === " " ? "\u00A0" : char}</span> : 
              <span key={index} className={`sec-str inline-block ${index >= 6 ? "bg-gradient-to-r from-[#8279D9] to-indigo-900 bg-clip-text text-transparent" : ""}`}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </h2>

        <p className="text-[3.3vw] sm:text-lg md:text-xl lg:text-[1.6vw] text-white leading-relaxed tracking-wide max-w-[90%] sm:max-w-[80%] lg:max-w-[48vw] text-center lg:text-left mt-6 lg:mt-0" ref={summaryText}>
          Hi, I'm Bazan, a passionate Web Developer with a solid foundation in both front-end and back-end technologies. I specialize in building responsive, user-focused interfaces and seamlessly integrating them with dynamic backend systems. With hands-on experience in modern JavaScript frameworks, DOM manipulation, and web animations, I strive to create interactive and high-performance digital experiences. Whether it's designing smooth UI flows or optimizing code for scalability, I bring ideas to life with precision and creativity.
        </p>
      </div>

      {/* Hello World Section */}
      <div className="text-white w-full min-h-[40vh] lg:h-[75vh] flex flex-col items-center justify-center gap-6 sm:gap-8 shadow-[0_4px_10px_-2px_#4f46e5] px-4 sm:px-6 text-center" ref={helloWorldDiv}>
        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] font-bold tracking-wide" ref={helloWorld}>
          {animationCharacters.map((char, index) => (
            <span
              key={index}
              className={`${index < 6 ? "char inline-block" : "char inline-block bg-gradient-to-r from-[#8279D9] to-indigo-900 bg-clip-text text-transparent"}`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-[2vw] max-w-[90%] sm:max-w-[70%] lg:max-w-[30vw]">
          I fell in Love with Web Development, when I wrote these magical words
        </p>
      </div>
    </section>
  );
};

export default About;
