import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const helloWorld = useRef(null);
  const aboutText = useRef(null)
  const summaryText = useRef(null)
  const aboutDiv = useRef(null)

  const aboutStr = `About Me`.split("");
  const animationCharacters = `HELLO WORLD`.split("")

//   useGSAP(() => {
//   const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

//   tl.to(".char", {
//     y: -70,
//     ease: "power1.inOut",
//     stagger: 0.1,
//   })
//     .to(".char", {
//       rotate: -360,
//       duration: 1,
//       ease: "power1.inOut",
//       stagger: 0.1,
//     })
//     .to(".char", {
//       y: 0,
//       duration: 1,
//       ease: "back.out(2)",
//       stagger: 0.1,
//     });
// }, { scope: helloWorld });


      useGSAP(() => {

       gsap.set(aboutText.current, {x: 400})
       gsap.set(summaryText.current, {opacity: 0, y: 20})

        gsap.from(".about .half-str", {
              scrollTrigger: {
                trigger: aboutText.current,
                start: "top 50%",
                end: "top 80%",
              },
              y:100,
             opacity:0,
             duration:1,
             stagger:0.20,
             onComplete: () => {
              gsap.to(aboutText.current, {
              x: 0,
              duration: 2,
              ease: "back.out(1.5)",
              onComplete: () => {
                gsap.to(summaryText.current, {
                  y: 5,
                  opacity: 1,
                  duration: 1,
                  ease: "linear"
                })
              }
      });
    }
        })

       gsap.from(".about .sec-str", {
        scrollTrigger: {
           trigger: aboutText.current,
                start: "top 50%",
                end: "top 80%",
        },
              y:100,
             opacity:0,
             duration:1,
             stagger:-0.20,
             
        })
    

      }, {scope: aboutText})

  return (
    <section className="bg-[url(https://assets-global.website-files.com/61defec4a021d8fe954c11bd/61defec4a021d83ede4c11f8_stars.gif)] rounded-t-3xl flex flex-col items-center justify-center">
      <div className="flex justify-center m-10 items-center gap-[10vw] tracking-normal h-[80vh] " ref={aboutDiv}>
        <h2 className="text-[6vw] w-[25vw] text-white about" ref={aboutText}>
          {
            aboutStr.map((char, index) => (
              index < 4 ? 
                <span key={index} className="half-str inline-block">{char === " " ? "\u00A0" : char}</span> : 
                <span key={index} className="sec-str inline-block">{char === " " ? "\u00A0" : char}</span>
            ))
          }
          </h2>
        <p className="text-2xl w-[45vw] text-white leading-11 tracking-wide" ref={summaryText}>
          Bazan (He/Him) is a passionate Web Developer with a strong foundation in
          front-end and back-end technologies. From crafting responsive,
          user-centric interfaces to integrating powerful backend logic, he brings
          ideas to life with clean, efficient code. His deep understanding of
          modern JavaScript frameworks, DOM manipulation, and web animations
          reflects his drive for interactive, high-performance web experiences.
          Curious about his skillset?
        </p>
      </div>

      <div className="text-white bg-linear-to-r from-[#8279D9] to-indigo-900 w-screen h-[75vh] flex flex-col items-center justify-center gap-8">
        <h3 className="text-[6vw] font-bold tracking-wide" ref={helloWorld}>
          {animationCharacters.map((char, index) => (
            <span key={index} className="char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h3>
        <p className="text-[2vw] w-[30vw]">
          I fell in Love with Web Development, when I wrote these magical words
        </p>
      </div>
    </section>
  );
};

export default About;