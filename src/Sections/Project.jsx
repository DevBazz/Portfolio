const projects = [
  {
    image: "/images/Cousin James Mockup.png",
    name: "Cousin James",
    desc: "A modern restaurant landing page built with smooth scroll animations, a responsive layout, and an elegant menu showcase.",
    tech: "React · GSAP · Tailwind",
  },
  {
    image: "/images/Full Stop Home Mockup.png",
    name: "Full Stop Home",
    desc: "A real estate platform featuring property listings, interactive filters, and a clean, professional UI.",
    tech: "React · Node.js · MongoDB",
  },
  {
    image: "/images/Notezy Mockup.png",
    name: "Notezy",
    desc: "A full-stack note-taking app with Clerk authentication, real-time WebSocket sync, and a clean dark/light theme UI.",
    tech: "Next.js · Prisma · PostgreSQL · Clerk · Tailwind",
  },
  {
    image: "/images/Socially Mockup.png",
    name: "Socially",
    desc: "A full-stack social media app with Clerk auth, image uploads via UploadThing, follow/post/comment features, and a responsive dark/light UI.",
    tech: "Next.js · Prisma · PostgreSQL · Clerk · UploadThing · Tailwind",
  },
];

const ProjectCard = ({ image, name, desc, tech }) => (
  <div className="group w-full h-[380px]" style={{ perspective: "1000px" }}>
    <div
      className="relative w-full h-full transition-transform duration-700 ease-in-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Front */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border border-white/20"
        style={{ backfaceVisibility: "hidden" }}
      >
        <img src={image} alt={name} className="w-full h-full object-contain bg-black" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white font-semibold text-lg">{name}</p>
        </div>
      </div>

      {/* Back */}
      <div
        className="absolute inset-0 rounded-2xl flex flex-col justify-center items-center gap-4 p-6 bg-[#0f0f1a] border border-white/10 shadow-xl"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        <h3 className="text-white font-bold text-xl text-center">{name}</h3>
        <p className="text-white/70 text-sm text-center leading-relaxed">{desc}</p>
        <span className="text-xs text-indigo-400 font-mono tracking-wide">{tech}</span>
      </div>

      {/* Flip on hover via inline style override */}
      <style>{`
        .group:hover > div { transform: rotateY(180deg); }
      `}</style>
    </div>
  </div>
);

const ProjectsSection = () => (
  <section id="projects" className="w-full min-h-screen px-4 sm:px-8 py-12">
    <div className="flex flex-col items-center gap-12 max-w-6xl mx-auto">
      <h2
        className="shadow-xl shadow-indigo-600 text-center text-white font-bold bg-black
        w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]
        rounded-xl px-4 py-6 text-[clamp(1.5rem,4vw,3rem)]"
      >
        What I Have{" "}
        <span className="bg-gradient-to-r from-[#8279D9] to-indigo-900 bg-clip-text text-transparent">
          Created
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
