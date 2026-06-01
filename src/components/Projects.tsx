import { useState } from "react";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SiApachekafka, SiApachemaven, SiSpringboot, SiReact, SiTypescript, SiTailwindcss, SiDocker, SiTrpc, SiPrisma, SiVercel, SiPostgresql, SiClerk } from "react-icons/si";
import { FaStripe, FaJava  } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";

const PROJECTS_DATA = [
  {
    title: "E-Commerce Microservices",
    description: "Architected and deployed a highly scalable, event-driven e-commerce platform using Spring Boot and Spring Cloud. Designed to support high-concurrency traffic, the system utilizes Kafka for asynchronous messaging, ensuring loose coupling and resilience across distributed services. The architecture prioritizes clean code practices, robust data consistency, and seamless deployment cycles within a cloud-native environment.",
    images: ["/images/ecommerce.png", "/images/ecommerce1.png"],
    liveUrl: "https://github.com/erickrallado12-ai/ecommerce-microservices",
    githubUrl: "https://github.com  /erickrallado12-ai/ecommerce-microservices",
    techStack: [
      { name: "Java", Icon: FaJava , color: "hover:text-[#ED8B00]" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "hover:text-[#6DB33F]" },
      { name: "Maven", Icon: SiApachemaven, color: "hover:text-[#C71A36]" },
      { name: "Kafka", Icon: SiApachekafka, color: "hover:text-[#231F20]" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "hover:text-[#4169E1]" },
      { name: "Docker", Icon: SiDocker, color: "hover:text-[#2496ED]" },
    ]
  },
  {
    title: "Lura",
    description: "Lura is a high-performance, open-source AI text-to-speech and voice-cloning platform built with React and Next.js for a minimalist, seamless user experience. Designed as a scalable ElevenLabs alternative, it leverages Modal for serverless hosting to efficiently deploy and scale open-source voice models. The result is a sleek, developer-friendly architecture engineered for rapid, high-fidelity digital audio generation.",
    images: ["/images/lura.png", "/images/lura2.png", "/images/lura3.png"],
    liveUrl: "https://lura-rosy.vercel.app/",
    githubUrl: "https://github.com/erickrallado12-ai/lura",
    techStack: [
      { name: "NextJS", Icon: RiNextjsFill, color: "hover:text-[#007396]" },
      { name: "React", Icon: SiReact, color: "hover:text-[#6DB33F]" },
      { name: "Tailwindcss", Icon: SiTailwindcss, color: "hover:text-[#F3702A]" },
      { name: "Typescript", Icon: SiTypescript, color: "hover:text-[#00B1EA]" },
      { name: "Docker", Icon: SiDocker, color: "hover:text-[#2496ED]" },
      { name: "TRPC", Icon: SiTrpc, color: "hover:text-[#2496ED]" },
      { name: "Prisma", Icon: SiPrisma, color: "hover:text-[#2496ED]" },
      { name: "Vercel", Icon: SiVercel, color: "dark:hover:text-white hover:text-black" },
    ]
  },
  {
    title: "Ticketr",
    description: "Ticketr is a high-performance Ticketmaster clone built with Next.js and Convex for seamless event ticket buying and selling. Leveraging Convex's real-time backend, it ensures instant inventory updates to prevent double-booking during live checkouts. The platform features a clean, responsive interface powered by Next.js for lightning-fast event discovery and smooth navigation. It offers a secure, modern marketplace for users to browse, purchase, and manage event tickets effortlessly.",
    images: [
      "/images/ticketr.png",
      "/images/ticketr1.png",
      "/images/ticketr2.png",
      "/images/ticketr3.png",
      "/images/ticketr4.png",
      "/images/ticketr5.png"
    ],
    liveUrl: "https://ticketr-build.vercel.app/",
    githubUrl: "https://github.com/ereyesc/ticketr-build",
    techStack: [
      { name: "NextJS", Icon: RiNextjsFill, color: "hover:text-[#007396]" },
      { name: "React", Icon: SiReact, color: "hover:text-[#6DB33F]" },
      { name: "Tailwindcss", Icon: SiTailwindcss, color: "hover:text-[#F3702A]" },
      { name: "Typescript", Icon: SiTypescript, color: "hover:text-[#00B1EA]" },
      { name: "Docker", Icon: SiDocker, color: "hover:text-[#2496ED]" },
      { name: "Stripe", Icon: FaStripe, color: "hover:text-[#2496ED]" },
      { name: "Postgress", Icon: SiPostgresql, color: "hover:text-[#2496ED]" },
      { name: "Clerk", Icon: SiClerk, color: "hover:text-[#6DB33F]" },
      { name: "Vercel", Icon: SiVercel, color: "dark:hover:text-white hover:text-black" },
    ]
  },
  {
    title: "Legacy Portfolio",
    description: "Built as my previous professional hub, this project was designed to experiment with immersive motion design, cinematic layouts, and high-fidelity interactions using React, Tailwind CSS, and Aceternity UI components. It stands as a dedicated archive highlighting my implementation of advanced frontend animations and creative engineering before transitioning to my current minimal architecture.",
    images: ["/images/portfolio.png"],
    liveUrl: "https://erick-portfolio-blush.vercel.app/",
    githubUrl: "https://github.com/ereyesc/erick-portfolio",
    techStack: [
      { name: "NextJS", Icon: RiNextjsFill, color: "hover:text-[#007396]" },
      { name: "React", Icon: SiReact, color: "hover:text-[#6DB33F]" },
      { name: "Tailwindcss", Icon: SiTailwindcss, color: "hover:text-[#F3702A]" },
      { name: "Typescript", Icon: SiTypescript, color: "hover:text-[#00B1EA]" },
    ]
  }
];

interface Project {
  title: string;
  description: string;
  images: string[];
  liveUrl: string;
  githubUrl: string;
  techStack: { name: string; Icon: any; color: string }[];
}

function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = project.images.length;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <article className="group grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-2xl border border-slate-200/60 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-800/10 backdrop-blur-sm shadow-sm dark:shadow-none transition-all duration-300 hover:border-slate-300 dark:hover:border-zinc-700/80">
      <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3.5">
            <h3 className="text-xl font-sans font-semibold text-slate-800 dark:text-zinc-200">
              {project.title}
            </h3>
            <div className="flex items-center gap-2.5 text-slate-400 dark:text-zinc-500">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-900 dark:hover:text-zinc-100">
                <FiExternalLink className="h-4 w-4" />
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-900 dark:hover:text-zinc-100">
                <FiGithub className="h-4 w-4" />
              </a>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-500 dark:text-zinc-400 font-sans">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.techStack.map(({ name, Icon, color }) => (
            <div key={name} className="group/icon relative flex items-center justify-center" title={name}>
              <Icon className={`h-5 w-5 text-slate-400 transition-all duration-200 ${color} transform group-hover/icon:scale-110`} />
              <span className="pointer-events-none absolute -top-8 flex scale-0 rounded-md bg-slate-900 dark:bg-zinc-800 px-2 py-1 text-[10px] font-mono text-white transition-all group-hover/icon:scale-100 shadow-md">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5 flex items-center justify-center">
        <Dialog onOpenChange={(open) => { if (!open) setCurrentImageIndex(0); }}>
          <DialogTrigger>
            <button 
              className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-200/50 dark:border-zinc-700/30 bg-slate-100 dark:bg-zinc-900 group-hover:border-slate-300 dark:group-hover:border-zinc-600 transition-all duration-300 cursor-zoom-in group/img"
              aria-label={`Abrir galería de imágenes de ${project.title}`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-300 z-10 flex items-center justify-center">
                <span className="text-white text-xs font-mono tracking-wider opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-xs">
                  Gallery ({totalImages})
                </span>
              </div>
              <img 
                src={project.images[0]} 
                alt={`Portada de ${project.title}`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-[95vw] md:max-w-5xl lg:max-w-7xl w-full border-none bg-zinc-950/95 p-0 overflow-hidden backdrop-blur-md shadow-2xl rounded-2xl flex flex-col justify-center text-white">
            <DialogTitle className="sr-only">Galería de {project.title}</DialogTitle>
            
            <div className="relative aspect-video w-full flex items-center justify-center bg-black/40 select-none">
              <img 
                src={project.images[currentImageIndex]} 
                alt={`Captura ${currentImageIndex + 1} de ${project.title}`}
                className="max-h-[75vh] w-full object-contain object-center animate-fade-in"
              />

              {totalImages > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 p-2 rounded-full bg-white/10 dark:bg-zinc-900/40 text-white/80 hover:text-white hover:bg-white/20 dark:hover:bg-zinc-800/60 backdrop-blur-md transition-all z-20 border border-white/5"
                  >
                    <FiChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 p-2 rounded-full bg-white/10 dark:bg-zinc-900/40 text-white/80 hover:text-white hover:bg-white/20 dark:hover:bg-zinc-800/60 backdrop-blur-md transition-all z-20 border border-white/5"
                  >
                    <FiChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-xs border border-white/10 text-white/90 font-mono text-[11px] px-3 py-1 rounded-full z-20">
                {currentImageIndex + 1} / {totalImages}
              </div>
            </div>

            {totalImages > 1 && (
              <div className="bg-slate-900/40 p-4 border-t border-white/5 flex justify-center gap-2.5 overflow-x-auto">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative h-12 aspect-video rounded-md overflow-hidden border transition-all ${
                      idx === currentImageIndex 
                        ? "border-blue-500 scale-105 ring-2 ring-blue-500/20" 
                        : "border-white/10 opacity-40 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="Miniatura" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="animate-fade-in py-8">
      <div className="space-y-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}