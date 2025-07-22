import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill, RiNodejsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMongoose  } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import  ReactFibre from "../Components/ReactFibre.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {

   const frontendDiv = useRef(null)
   const backendDiv = useRef(null)
   const circle = useRef(null) 
   const circleDiv = useRef(null)

useGSAP(() =>{
 
    gsap.set(circle.current, {
        opacity: 0
    })

    gsap.to(frontendDiv.current, {
        scrollTrigger: {
            trigger: frontendDiv.current,
            start: "top 20%",
            end: "top 60%"
        },
        boxShadow: "0 25px 50px 3px #4f46e5",
        duration: 1   
    })

   gsap.to(circle.current, {
    scrollTrigger: {
        trigger: circleDiv.current,
         start: "top 55%",
            end: "top 40%",
            scrub: true
    },
    y: 60,
    opacity: 1,
    onComplete: () => {
       gsap.to(backendDiv.current, {
        boxShadow: "0 25px 50px 3px #4f46e5",
        duration: 1 
       })
    }
   }) 
} )

    return(
        <>
        <section className="bg-[url(https://us.123rf.com/450wm/vectora/vectora2203/vectora220308576/183508806-graph-plotting-coordinate-and-millimeter-paper-blueprint-seamlessly-repetable-grid-mesh.jpg?ver=6)] 
            w-full h-[145vh] bg-repeat-round">
            <div className="flex flex-col justify-center items-center " >
                <h2 className="margin-class shadow-xl shadow-indigo-600 text-center text-white text-[5vw] font-bold bg-[#6667bd] w-[60vw] h-[15vh] rounded-xl">What I Know</h2>

            <div className="flex flex-col">
            <div className="w-[18vw] h-[48vh] rounded bg-white/10 backdrop-blur-md border border-white/30 " ref={frontendDiv}>
             <h3 className="w-[10vw] h-[6vh] text-center text-2xl text-white rounded border border-white/30 bg-[#116D9D]">FRONTEND</h3>

             <div className="flex flow-row flex-wrap justify-center items-center gap-10 margin-top">
                <FaHtml5 className="text-[50px] text-orange-500" />
                <FaCss3Alt className="text-[50px] text-blue-500" />
                <FaJsSquare className="text-[50px] text-yellow-500" />
                <RiTailwindCssFill className="text-[50px] text-sky-400" />
                <FaReact className="text-[50px] text-sky-400" />
                <FaVuejs className="text-[50px] text-green-500" />
                <img src="/images/gsap-logo.png" alt="gsap-icon" className="w-[50px]"/>
                <TbBrandFramerMotion  className="text-[50px] text-purple-600"/>
             </div>
            </div>

            <div className="w-0.5 h-15 bg-zinc-400 center " ref={circleDiv}>
                <div className="w-2.5 h-2.5 bg-indigo-600 rounded-[50%] center-circle" ref={circle}></div>
            </div>

            <div className="w-[18vw] h-[48vh] rounded bg-white/10 backdrop-blur-md border border-white/30 " ref={backendDiv}>

            <h3 className="w-[10vw] h-[6vh] text-center text-2xl text-white rounded border border-white/30 bg-[#116D9D]">BACKEND</h3>

             <div className="flex flow-row flex-wrap justify-center items-center gap-10 margin-top">
                <RiNodejsLine className="text-[50px] text-green-600" />
                <SiExpress className="text-[50px] text-white" />
                <SiMongodb  className="text-[50px] text-[#71AF4E]" />
                <SiMongoose className="text-[50px] text-[#B92323]" />
                <img src="/images/ejs-logo.png" alt="gsap-icon" className="w-[50px]"/>
             </div>
            </div>

            </div>
            </div>
        </section>
         <div className="w-screen h-[100vh] bg-black" >
            <ReactFibre />
         </div>
        </>
    )
}

export default Skills;

