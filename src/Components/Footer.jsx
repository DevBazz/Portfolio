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
  }, []);

  return (
    <footer
      id="contact"
      className="w-full min-h-[90vh] bg-black flex flex-col text-white px-4 sm:px-8"
    >
      {/* Top Heading */}
      <div className="flex justify-center items-center h-[40vh]">
        <h2 className="text-center text-[12vw] sm:text-[8vw] lg:text-[6vw] rounded-lg border-2 border-white footer-border px-4 py-2">
          LET&apos;S CONNECT
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 mt-10 w-full">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center lg:text-left gap-5 w-full lg:w-1/2">
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
            <p className="text-lg sm:text-2xl">Made with Love and&nbsp;</p>
            <img
              src="/images/react-logo.png"
              alt="react-logo"
              className="w-10 sm:w-12"
            />
            <span className="text-lg sm:text-2xl">&nbsp;+&nbsp;</span>
            <img
              src="/images/gsap-logo.png"
              alt="gsap-logo"
              className="w-10 sm:w-12"
            />
            <p className="text-lg sm:text-2xl">in Bahawalpur, Pakistan</p>
          </div>
          <p className="text-lg sm:text-2xl">
            <span className="text-zinc-400 text-xl sm:text-2xl">
              Local Time -{" "}
            </span>
            {localTime}
          </p>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 w-full max-w-lg">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/bazan-iqbal-dev/",
              },
              { label: "Email", href: "mailto:bazaniqbal@gmail.com" },
              {
                label: "GitHub",
                href: "https://github.com/DevBazz?tab=repositories",
              },
              {
                label: "Resume",
                href: "/BAZAN-IQBAL-RESUME.pdf",
                target: "_blank",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between  border-2 border-white px-3 py-2 rounded-lg text-base sm:text-xl transition duration-500 ease-in-out hover:bg-amber-50 hover:text-black"
              >
                <a
                  href={item.href}
                  target={item.target || "_self"}
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
                <IoIosArrowRoundForward className="size-6 sm:size-7" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
