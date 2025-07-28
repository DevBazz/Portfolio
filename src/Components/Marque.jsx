import gsap from "gsap";


const Marque = () => {

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

    return (
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
    )
}

export default Marque