import About from "./Sections/About"
import Hero from "./Sections/Hero"
import Skills from "./Sections/Skills"
import Project from "./Sections/Project"
import Footer from "./Components/Footer"
import LiquidGlass from "./Components/LiquidGlass"
import Header from "./Components/Header"

function App() {
  

  return (
    <>
    
    <div className="bg-black">
      <Header />
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
