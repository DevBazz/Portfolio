import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Cousin James",
    title: "Restaurant Landing Page",
    description:
      "A modern restaurant landing page built with smooth scroll animations, an elegant menu showcase, and a fully responsive layout that delivers a premium dining experience online.",
    image: "/images/Cousin James Mockup.png",
    tech: "React · GSAP · Tailwind",
    url: "https://cousin-james.netlify.app/",
  },
  {
    name: "Full Stop Home",
    title: "Real Estate Listings Platform",
    description:
      "A real estate platform featuring property listings, interactive filters, and a clean professional UI that helps buyers and sellers connect effortlessly.",
    image: "/images/Full Stop Home Mockup.png",
    tech: "React · Node.js · MongoDB",
    url: "https://homefullstop.netlify.app/",
  },
  {
    name: "Notezy",
    title: "Full-Stack Note-Taking App",
    description:
      "A full-stack note-taking app with Clerk authentication, real-time WebSocket sync, Prisma ORM with PostgreSQL, and a clean dark/light theme UI built on Next.js 16.",
    image: "/images/Notezy Mockup.png",
    tech: "Next.js · Prisma · PostgreSQL · Clerk · Tailwind",
    url: "https://notezy-psi.vercel.app/",
  },
  {
    name: "Socially",
    title: "Full-Stack Social Media App",
    description:
      "A full-stack social media app with Clerk auth, image uploads via UploadThing, follow/post/comment features, and a responsive dark/light UI powered by Next.js and PostgreSQL.",
    image: "/images/Socially Mockup.png",
    tech: "Next.js · Prisma · PostgreSQL · Clerk · UploadThing",
    url: "https://socially-pro.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((i) => (i + 1) % projects.length);
  const handlePrev = () => setCurrent((i) => (i - 1 + projects.length) % projects.length);

  const project = projects[current];

  return (
    <section id="projects" className="w-full min-h-screen px-4 sm:px-8 py-12 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-12 w-full max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="shadow-xl shadow-indigo-600 text-center text-white font-bold bg-black w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] rounded-xl px-4 py-6 text-[clamp(1.5rem,4vw,3rem)]">
          What I Have{" "}
          <span className="bg-gradient-to-r from-[#8279D9] to-indigo-900 bg-clip-text text-transparent">
            Created
          </span>
        </h2>

        {/* Desktop layout */}
        <div className="hidden md:flex relative items-center w-full">
          <div className="w-[420px] h-[520px] rounded-3xl overflow-hidden bg-black flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={project.image}
                src={project.image}
                alt={project.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full object-contain"
                draggable={false}
              />
            </AnimatePresence>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-8 ml-[-60px] z-10 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col gap-5"
              >
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{project.name}</h2>
                  <p className="text-sm font-medium text-white/50">{project.title}</p>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>
                <p className="text-xs text-indigo-400 font-mono">{project.tech}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-sm font-semibold"
                >
                  Visit Project <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden w-full max-w-sm mx-auto flex flex-col gap-6">
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={project.image}
                src={project.image}
                alt={project.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full object-contain"
                draggable={false}
              />
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={project.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col gap-3 text-center"
            >
              <h2 className="text-xl font-bold text-white">{project.name}</h2>
              <p className="text-sm text-white/50">{project.title}</p>
              <p className="text-sm text-white/80 leading-relaxed">{project.description}</p>
              <p className="text-xs text-indigo-400 font-mono">{project.tech}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-fit mx-auto px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-sm font-semibold"
              >
                Visit Project <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-md flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? "w-6 bg-white" : "w-2.5 bg-white/30"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 shadow-md flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
