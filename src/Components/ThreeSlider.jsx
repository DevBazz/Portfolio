
const quantity = 10;

const ThreeSlider = () => {
    return (
        <section className="bg-black w-screen h-[145vh]">
            <div className="banner ">
              <div className="slider" 
              style={{ "--quantity": quantity }}>

                 <img
                  src="/images/html-icon-neon-blue-yellow-1.png"
                  alt=""
                  className="absolute left-1/2 top-1/2 w-[300px] h-[300px] object-cover rounded-full z-10"
                  style={{
                    transform: "translate(-50%, -50%)",
                  }}
                />

                <div className="item " style={{"--position": 1}}>
                  <img src="/images/html-logo.png" alt="" className=""/>
                </div>
                <div className="item " style={{"--position": 2}}>
                  <img src="/images/css-logo.png" alt="" className="r"/>
                </div>
                <div className="item " style={{"--position": 3}}>
                  <img src="/images/js-logo.png" alt="" className=""/>
                </div>
                <div className="item " style={{"--position": 4}}>
                  <img src="/images/react-logo.png" alt="" className=""/>
                </div>
                <div className="item " style={{"--position": 5}}>
                  <img src="/images/vue-logo.png" alt="" className=""/>
                </div>
                <div className="item " style={{"--position": 6}}>
                  <img src="/images/node-logo.png" alt="" className=""/>
                </div>
                <div className="item " style={{"--position": 7}}>
                  <img src="/images/express-logo.png" alt="" className="r"/>
                </div>
                <div className="item " style={{"--position": 8}}>
                  <img src="/images/mongodb-logo.png" alt="" className=""/>
                </div>
                <div className="item " style={{"--position": 9}}>
                  <img src="/images/motion-logo.png" alt="" className=""/>
                </div>
                <div className="item " style={{"--position": 10}}>
                  <img src="/images/gsap-logo.png" alt="" className=""/>
                </div>
              </div>
            </div>
        </section>
    )
}

export default ThreeSlider;