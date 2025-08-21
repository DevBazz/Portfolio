import { useEffect } from "react";
import gsap from "gsap";

const Marque = () => {
  useEffect(() => {
    const handleWheel = (dets) => {
      if (dets.deltaY > 0) {
        gsap.to(".marque", {
          x: "-200%",
          duration: 4,
          repeat: -1,
          ease: "none",
        });

        gsap.to(".marque img", {
          rotate: 180,
        });
      } else {
        gsap.to(".marque", {
          x: "0%",
          duration: 4,
          repeat: -1,
          ease: "none",
        });

        gsap.to(".marque img", {
          rotate: 0,
        });
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Reusable items
  const items = new Array(6).fill("Code. Create. Conquer.");

  return (
    <div className="flex h-[8vh] sm:h-[10vh] mt-10 md:h-[6vw] overflow-x-hidden bg-indigo-500 my-4">
      {items.map((text, i) => (
        <div
          key={i}
          className="marque flex items-center gap-2 sm:gap-4 md:gap-[1vw] px-2 sm:px-4 shrink-0"
        >
          <p className="text-base sm:text-lg md:text-[2vw] font-semibold text-white whitespace-nowrap">
            {text}
          </p>
          <img
            className="h-6 sm:h-8 md:h-[5vh]"
            src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
            alt="arrow"
          />
        </div>
      ))}
    </div>
  );
};

export default Marque;
