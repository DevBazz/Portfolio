import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";


const Header = () => {
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.to(navRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "bottom top",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <header
      ref={heroRef}
      className="w-full h-screen bg-transparent absolute top-0 left-0"
    >
      {/* Desktop Nav */}
      <nav
        ref={navRef}
        className="hidden w-[27vw] h-14 md:flex fixed top-2 left-1/2 transform -translate-x-1/2 bg-[#7C7D7E] rounded-2xl px-6 py-3 items-center gap-6 shadow-lg z-50 opacity-0 -translate-y-full"
      >
        <a href="#hero">
          <img
            src="images/portfolio logo.jpeg"
            alt="Logo"
            className="w-12 h-10 object-contain rounded bg-black p-1"
          />
        </a>
        <a
          href="#about"
          className="text-white font-medium hover:text-indigo-400 transition"
        >
          About
        </a>
        <a
          href="#skills"
          className="text-white font-medium hover:text-indigo-400 transition"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="text-white font-medium hover:text-indigo-400 transition"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-white font-medium hover:text-indigo-400 transition"
        >
          Contact
        </a>
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white bg-[#7C7D7E] p-2 rounded-lg shadow-md"
        >
          {menuOpen ? <IoIosCloseCircle size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/90 flex flex-col items-center justify-center gap-8 z-40">
          <a
            href="#hero"
            className="text-white text-2xl font-semibold hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-2xl font-semibold hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white text-2xl font-semibold hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white text-2xl font-semibold hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white text-2xl font-semibold hover:text-indigo-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
