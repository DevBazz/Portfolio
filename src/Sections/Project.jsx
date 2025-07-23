import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsCard from "../Components/ProjectsCard";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]); 

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
      });

      // Animate cards with stagger
      gsap.from(cardsRef.current, {
        y: 300,
        opacity: 0,
        duration: 1,
        stagger: 1,
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

const projectCards = [
    { name: "Project 1", bgColor: "bg-red-700", translateY: "translate-y-0", headingBG: "bg-emerald-900" },
    { name: "Project 2", bgColor: "bg-cyan-800", translateY: "translate-y-4", headingBG: " bg-neutral-700"},
    { name: "Project 3", bgColor: "bg-indigo-800", translateY: "translate-y-8", headingBG: "bg-lime-700" },
    { name: "Project 4", bgColor: "bg-blue-800", translateY: "translate-y-12" },
  ];


  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-r from-[#8279D9]  to-indigo-900 w-screen h-[110vh]"
    >
      <div className="flex flex-col justify-center items-center relative gap-[30vh]">
        <h2 className="margin-class shadow-xl shadow-indigo-600 text-center text-white text-[5vw] font-bold bg-black w-[60vw] h-[15vh] rounded-xl">
          What I Have Created
        </h2>

        <div className="relative flex flex-col justify-center items-center gap-10">
          {projectCards.map((card, index) => (
            <ProjectsCard
              key={index}
              name={card.name}
              bgColor={card.bgColor}
              translateY={card.translateY}
              headingBG={card.headingBG}
              ref={(el) => (cardsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
