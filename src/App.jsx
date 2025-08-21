import About from "./Sections/About"
import Hero from "./Sections/Hero"
import Skills from "./Sections/Skills"
import Project from "./Sections/Project"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Cursor from "./Components/Cursor"

function App() {
  

  return (
    <>
    
    <div className="bg-black">
      <Cursor />
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
