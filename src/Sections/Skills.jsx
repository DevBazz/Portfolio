import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNodejsLine, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMongoose } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import ReactFibre from "../Components/ReactFibre.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Marque from "../Components/Marque.jsx";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const frontendDiv = useRef(null);
  const backendDiv = useRef(null);
  const circleDiv = useRef(null);

  useGSAP(() => {
    gsap.to(frontendDiv.current, {
      scrollTrigger: {
        trigger: frontendDiv.current,
        start: "top 40%",
        end: "top 10%",
        scrub: true,
      },
      boxShadow: "0 15px 30px 3px #4f46e5",
      duration: 1,
    });

    gsap.to(backendDiv.current, {
      scrollTrigger: {
        trigger: circleDiv.current,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
      },
      boxShadow: "0 15px 30px 3px #4f46e5",
      duration: 1,
    });
  });

  return (
    <>
      <section id="skills" className="w-full min-h-screen bg-repeat-round">
        {/* Marquee */}
        <Marque />

        {/* Skills Section */}
        <div className="flex flex-col justify-center items-center py-12 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-10 shadow-xl shadow-indigo-600 px-4 py-3 rounded-xl">
            What I{" "}
            <span className="bg-gradient-to-r from-[#8279D9] to-indigo-900 bg-clip-text text-transparent">
              Know
            </span>
          </h2>

          <div className="flex flex-col lg:mt-6 lg:flex-row items-center justify-center gap-12 lg:gap-24">
            {/* Frontend */}
            <div
              className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[22vw] min-h-[250px] lg:min-h-[350px] rounded-[30px]
              bg-white/5 border border-indigo-400/40 overflow-hidden backdrop-blur-md"
              ref={frontendDiv}
            >
              <h2 className="w-full h-12 flex items-center justify-center text-lg md:text-xl font-semibold text-white border-b border-indigo-300/30 bg-indigo-700/40 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                FRONTEND
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-6 p-6">
                <FaHtml5 className="text-[40px] sm:text-[50px] text-orange-500" />
                <FaCss3Alt className="text-[40px] sm:text-[50px] text-blue-500" />
                <FaJsSquare className="text-[40px] sm:text-[50px] text-yellow-500" />
                <RiTailwindCssFill className="text-[40px] sm:text-[50px] text-sky-400" />
                <FaReact className="text-[40px] sm:text-[50px] text-sky-400" />
                <RiNextjsFill className="text-[40px] sm:text-[50px] text-green-500" />
                <img
                  src="/images/gsap-logo.png"
                  alt="gsap-icon"
                  className="w-[40px] sm:w-[50px]"
                />
                <TbBrandFramerMotion className="text-[40px] sm:text-[50px] text-purple-600" />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-0.5 h-16 bg-zinc-400" ref={circleDiv}></div>

            {/* Backend */}
            <div
              className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[22vw] min-h-[250px] lg:min-h-[350px] rounded-[30px]
              bg-white/5 border border-indigo-400/40 overflow-hidden backdrop-blur-md"
              ref={backendDiv}
            >
              <h2 className="w-full h-12 flex items-center justify-center text-lg md:text-xl font-semibold text-white border-b border-indigo-300/30 bg-indigo-700/40 shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                BACKEND
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-6 p-6">
                <RiNodejsLine className="text-[40px] sm:text-[50px] text-green-600" />
                <SiExpress className="text-[40px] sm:text-[50px] text-white" />
                <SiMongodb className="text-[40px] sm:text-[50px] text-[#71AF4E]" />
                <SiMongoose className="text-[40px] sm:text-[50px] text-[#B92323]" />
                <img
                  src="/images/ejs-logo.png"
                  alt="ejs-icon"
                  className="w-[40px] sm:w-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* React 3D Section */}
      <div className="w-screen min-h-[30vh] md:h-[100vh] bg-black">
        <ReactFibre />
      </div>
    </>
  );
};

export default Skills;
