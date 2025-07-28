import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Header = () => {
  const navRef = useRef(null);
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.to(navRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'bottom top', // Show when Hero's bottom hits viewport top
        end: 'bottom bottom',
        toggleActions: 'play none none reverse', // Appear on scroll down, hide on scroll up
      },
    });
  });

  return (
    <header
      ref={heroRef}
      className="w-full h-screen bg-transparent absolute top-0 left-0"
    >
      <nav
        ref={navRef}
        className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-[#7C7D7E] rounded-2xl px-8 py-3 flex items-center gap-8 shadow-lg z-50 opacity-0 -translate-y-full"
      >
        <a href="#hero"><img src="images/portfolio logo.jpeg" alt="Logo" className="h-8 w-12 object-cover rounded bg-black p-1" /></a>
        <a href="#about" className="text-white font-semibold hover:text-indigo-400 transition">About</a>
        <a href="#skills" className="text-white font-semibold hover:text-indigo-400 transition">Skills</a>
        <a href="#projects" className="text-white font-semibold hover:text-indigo-400 transition">Projects</a>
        <a href="#contact" className="text-white font-semibold hover:text-indigo-400 transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;