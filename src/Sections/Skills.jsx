import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNodejsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMongoose } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import ReactFibre from "../Components/ReactFibre.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const frontendDiv = useRef(null);
  const backendDiv = useRef(null);
  const marque = useRef(null);
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

    window.addEventListener("wheel", function (dets) {
      if (dets.deltaY > 0) {
        gsap.to(".marque", {
          transform: "translateX(-200%)",
          duration: 4,
          repeat: -1,
          ease: "none",
        });

        gsap.to(".marque img", {
          rotate: 180,
        });
      } else {
        gsap.to(".marque", {
          transform: "translateX(0%)",
          duration: 4,
          repeat: -1,
          ease: "none",
        });

        gsap.to(".marque img", {
          rotate: 0,
        });
      }
    });
  });

  return (
    <>
      <section id="skills" className=" w-full h-[155vh] bg-repeat-round">
        <div className="flex h-[6vw] overflow-x-hidden bg-indigo-500 margin-top-bottom">
          <div className="marque flex items-center gap-[1vw] padding-marque shrink-0">
            <p className="text-[2vw] marque-h1">Code. Create. Conquer.</p>
            <img
              className="h-[5vh]"
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque flex items-center gap-[1vw] padding-marque shrink-0">
            <p className="text-[2vw] marque-h1">Code. Create. Conquer.</p>
            <img
              className="h-[5vh]"
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque flex items-center gap-[1vw] padding-marque shrink-0">
            <p className="text-[2vw] marque-h1">Code. Create. Conquer.</p>
            <img
              className="h-[5vh]"
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque flex items-center gap-[1vw] padding-marque shrink-0">
            <p className="text-[2vw] marque-h1">Code. Create. Conquer.</p>
            <img
              className="h-[5vh]"
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque flex items-center gap-[1vw] padding-marque shrink-0">
            <p className="text-[2vw] marque-h1">Code. Create. Conquer.</p>
            <img
              className="h-[5vh]"
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
          <div className="marque flex items-center gap-[1vw] padding-marque shrink-0">
            <p className="text-[2vw] marque-h1">Code. Create. Conquer.</p>
            <img
              className="h-[5vh]"
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <h2 className="margin-class shadow-xl shadow-indigo-600 text-center text-white text-[5vw] font-bold w-[60vw] h-[15vh] rounded-xl">
            What{" "}
            <span className="bg-gradient-to-r from-[#8279D9] to-indigo-900 bg-clip-text text-transparent">
              I Know
            </span>
          </h2>

          <div className="flex flex-col">
            <div
              className="w-[18vw] h-[48vh] rounded-[30px]
             bg-white/5 border border-indigo-400/40 overflow-hidden
             backdrop-blur-md"
              ref={frontendDiv}
            >
              <div
                className="w-[10.5vw] h-[6vh] text-center text-2xl font-semibold text-white rounded-t-
                border border-indigo-300/30 bg-indigo-700/40
                shadow-[0_0_15px_rgba(99,102,241,0.4)] "
              >
                <h3 className="mt-1 ml-1.5">FRONTEND</h3>
              </div>

              <div className="flex flow-row flex-wrap justify-center items-center gap-10 margin-top">
                <FaHtml5 className="text-[50px] text-orange-500" />
                <FaCss3Alt className="text-[50px] text-blue-500" />
                <FaJsSquare className="text-[50px] text-yellow-500" />
                <RiTailwindCssFill className="text-[50px] text-sky-400" />
                <FaReact className="text-[50px] text-sky-400" />
                <FaVuejs className="text-[50px] text-green-500" />
                <img
                  src="/images/gsap-logo.png"
                  alt="gsap-icon"
                  className="w-[50px]"
                />
                <TbBrandFramerMotion className="text-[50px] text-purple-600" />
              </div>
            </div>

            <div
              className="w-0.5 h-15 bg-zinc-400 center "
              ref={circleDiv}
            ></div>

            <div
  className="w-[18vw] h-[48vh] rounded-[30px]
  bg-white/5 border border-indigo-400/40 overflow-hidden
  backdrop-blur-md "
  ref={backendDiv}
>
  <div className="w-[10vw] h-[6vh] text-center text-2xl font-semibold text-white rounded
    border border-indigo-300/30 bg-indigo-700/40
    shadow-[0_0_15px_rgba(99,102,241,0.4)]">
    <h3 className="mt-1 ml-1">BACKEND</h3>
  </div>

  <div className="flex flow-row flex-wrap justify-center items-center gap-10 margin-top">
    <RiNodejsLine className="text-[50px] text-green-600" />
    <SiExpress className="text-[50px] text-white" />
    <SiMongodb className="text-[50px] text-[#71AF4E]" />
    <SiMongoose className="text-[50px] text-[#B92323]" />
    <img src="/images/ejs-logo.png" alt="ejs-icon" className="w-[50px]" />
  </div>
</div>

          </div>
        </div>
      </section>
      <div className="w-screen h-[100vh] bg-black">
        <ReactFibre />
      </div>
    </>
  );
};

export default Skills;
