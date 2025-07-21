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
      <footer className="w-screen h-screen bg-black flex flex-col text-white ">
        <div className="w-screen h-[50vh] flex justify-center items-center ">
            <h2 className="text-center text-[10vw] rounded-lg border-2 border-white footer-border">LET'S CONNECT</h2>
        </div>
    

        <div className="w-screen flex margin-top margin-x">

        <div className=" flex flex-col justify-center items-center w-[50vw]">

            <div className="flex items-center  ">
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

          <div className="flex items-center justify-between border-2 w-[15vw] border-white padding rounded-lg transition-all smooth hover:justify-around hover:bg-amber-50 hover:text-black ">
          <a href="">Linkedin</a>
          <IoIosArrowRoundForward className="rotate-320 size-[2vw]"/>
          </div>

          <div className="flex items-center gap-10 border-2 w-[15vw] border-white padding rounded-lg">
          <a href="">Email</a>
          <IoIosArrowRoundForward className="rotate-320"/>
          </div>
        
          <div className="flex items-center gap-10 border-2 w-[15vw] border-white padding rounded-lg">
          <a href="">GitHub</a>
          <IoIosArrowRoundForward className="rotate-320"/>
          </div>


          <div className="flex items-center gap-10 border-2 w-[15vw] border-white padding rounded-lg">
          <a href="">Resume</a>
          <IoIosArrowRoundForward className="rotate-320"/>
          </div>
         </div>
       </div>

        </div>
      </footer>
    )
}

export default Footer;