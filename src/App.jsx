import About from "./Sections/About"
import Hero from "./Sections/Hero"
import Skills from "./Sections/Skills"
import Project from "./Sections/Project"
import Footer from "./Components/Footer"
import LiquidGlass from "./Components/LiquidGlass"

function App() {
  

  return (
    <>
    <LiquidGlass />
    <div className="bg-black">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
    </>
  )
}

export default App
