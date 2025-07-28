import { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";


const Footer = () => {

  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const updateTime = () => {
      setLocalTime(new Date().toLocaleTimeString());
    };

    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  })

    return (
      <footer id="contact" className="w-screen h-[90vh] bg-black flex flex-col text-white ">
        <div className="w-screen h-[50vh] flex justify-center items-center ">
            <h2 className="text-center text-[10vw] rounded-lg border-2 border-white footer-border">LET'S CONNECT</h2>
        </div>
    

        <div className="w-screen flex margin-top margin-x">

        <div className=" flex flex-col  justify-self-start items-center w-[50vw]">

            <div className="flex  items-center  ">
                <p className="text-2xl">Made with Love and{"\u00A0"}</p>
                <img src="/images/react-logo.png" alt="react-logo" className="w-16"/>
                <span className="text-2xl">{"\u00A0"}+{"\u00A0"}</span>
                <img src="/images/gsap-logo.png" alt="" className="w-16"/>
                <p className="text-2xl">in Bahawalpur, Pakistan</p>
            </div>
            <p className="text-2xl ">
            <span className="text-zinc-400 text-3xl">Local Time - </span>{localTime}
            </p>
        
        </div>

       <div className="flex justify-center items-center w-[50vw]">
         <div className="w-[35vw] flex flex-wrap text-[1.8vw]  gap-5" >

          <div className="flex items-center justify-evenly gap-5 border-2 w-[15vw] border-white padding rounded-lg transition duration-500 ease-in-out hover:bg-amber-50 hover:text-black">
          <a href="https://www.linkedin.com/in/bazan-iqbal-dev/">Linkedin</a>
          <IoIosArrowRoundForward className="rotate-320 size-[2.3vw]"/>
          </div>

          <div className="flex items-center justify-evenly gap-5 border-2 w-[15vw] border-white padding rounded-lg transition duration-500 ease-in-out hover:bg-amber-50 hover:text-black">
          <a href="mailto:bazaniqbal@gmail.com">Email</a>
          <IoIosArrowRoundForward className="rotate-320 size-[2.3vw]"/>
          </div>
        
          <div className="flex items-center justify-evenly gap-5 border-2 w-[15vw] border-white padding rounded-lg transition duration-500 ease-in-out hover:bg-amber-50 hover:text-black">
          <a href="https://github.com/DevBazz?tab=repositories" target="_blank" >GitHub</a>
          <IoIosArrowRoundForward className="rotate-320 size-[2.3vw]"/>
          </div>


          <div className="flex items-center justify-evenly gap-5 border-2 w-[15vw] border-white padding rounded-lg transition duration-500 ease-in-out hover:bg-amber-50 hover:text-black">
          <a href="/BAZAN-IQBAL-RESUME.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <IoIosArrowRoundForward className="rotate-320 size-[2.3vw]"/>
          </div>
         </div>
       </div>

        </div>
      </footer>
    )
}

export default Footer;