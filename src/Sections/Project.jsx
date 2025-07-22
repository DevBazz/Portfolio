import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Pin section while scrolling
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
      });

      // Animate cards stacking
      gsap.to(cardsRef.current, {
        y: 200,
        opacity: 0,
        stagger: .8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-[#8279D9] to-indigo-900 w-screen h-screen flex justify-center items-center relative"
    >
      <div className="relative flex flex-col  justify-center items-center">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`cards w-[50vw] h-[60vh] rounded-3xl absolute ${
              i === 0
                ? "bg-amber-300 z-10"
                : i === 1
                ? "bg-cyan-500 z-20 translate-y-[30vh]"
                : i === 2
                ? "bg-emerald-800 z-30 translate-y-20"
                : "bg-fuchsia-800 z-40 -translate-y-28"
            }`}
          />
        ))}
        
      </div>
    </section>
  );
};

export default Project;
