import { Sun, Moon, Mail, Download } from "lucide-react"
import { Button } from "./components/ui/button"
import { useTheme } from "./components/theme-provider"
import TechStack from "./components/TechStack"
import Projects from "./components/Projects"
import "./App.css"

function App() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen w-full transition-colors duration-300 bg-neutral-50 dark:bg-zinc-900 text-slate-900 dark:text-zinc-100 selection:bg-lime-300/30">
      <header className="max-w-2xl mx-auto pt-24 pb-16 px-6 relative animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <span className="font-mono text-sm tracking-wider text-slate-400 dark:text-zinc-500">
            @erick_reyes
          </span>

          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-slate-200/50 dark:hover:bg-zinc-800/50 text-slate-700 dark:text-zinc-300"
          >
            {theme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
            )}
            <span className="sr-only">Cambiar tema</span>
          </Button>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl text-center md:text-6xl font-sans tracking-tight font-bold text-slate-800 dark:text-zinc-50">
            Erick Reyes
          </h1>
          <h2 className="text-xl text-center md:text-2xl font-sans text-slate-600 dark:text-zinc-300 font-medium">
            Senior Full-Stack Engineer
          </h2>
        </div>

        <div className="relative flex w-full items-center justify-between py-6 mt-12">
          <div className="flex flex-1 justify-start">
            <a
              href="mailto:erick.erc.10@hotmail.com"
              className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-slate-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/50 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800/50 transition-all"
              title="Contact me"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-1 justify-center max-w-xs sm:max-w-md w-full">
            <a
              href="/ErickReyesCV.pdf"
              download="ErickReyesCV.pdf"
              className="
              inline-flex
              align-middle
              items-center
              justify-between
              h-auto
              w-[1/3]
              max-w-md
              rounded-full
              border
              border-zinc-700
              bg-transparent
              px-6
              py-4
              text-base
              font-normal
              text-slate-600
              transition-colors
              dark:hover:bg-zinc-800
              hover:bg-slate-100
              hover:text-black
              dark:text-white
              dark:hover:text-zinc-300
              focus-visible:ring-2
              focus-visible:ring-zinc-500
              focus-visible:outline-none
            "
            >
              <span className="text-sm mr-2">Download Resume</span>
              <Download className="h-5 w-5 stroke-[1.5]" />
            </a>
          </div>
          
          <div className="hidden flex-1 sm:flex justify-end pointer-events-none" aria-hidden="true">
            <div className="w-12 h-12" />
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6">
        <hr className="border-slate-200 dark:border-zinc-800" />
      </div>

      <main className="max-w-2xl mx-auto py-16 px-6 space-y-20">
        <section className="space-y-6">
          <h3 className="text-sm font-mono tracking-widest uppercase text-slate-400 dark:text-zinc-500">
            About me
          </h3>
          <p className="text-lg md:text-xl font-sans leading-relaxed text-slate-600 dark:text-zinc-300 font-normal max-w-2xl">
            I'm a Fullstack developer with over a decade of experience engineering high-performance
            web architectures and scalable solutions. I specialize in translating complex logic into
            fluid user interfaces and robust backend systems, backed by Microsoft Azure
            certifications that verify my cloud infrastructure expertise. My core stack focuses on
            building powerful RESTful APIs using Java, Python, and Node.js, seamlessly paired with
            React on the client side for advanced state management and responsive user experiences.
            Driven by rigorous engineering practices, I excel at optimizing data pipelines,
            automating infrastructure, and architecting maintainable, data-driven applications from
            the ground up.
          </p>
        </section>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800/50 max-w-2xl">
          <section className="space-y-6">
            <h3 className="text-sm font-mono tracking-widest uppercase text-slate-400 dark:text-zinc-500">
              Certifications
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-100/50 dark:bg-zinc-800/30 border border-slate-200/40 dark:border-zinc-800/80">
              <div className="flex items-center gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
                  alt="Microsoft"
                  className="h-8 w-8"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-zinc-100">
                    Microsoft Certified: Azure AZ-900
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-zinc-500 font-mono mt-0.5">
                    Credential ID:{" "}
                    <span className="text-slate-600 dark:text-zinc-400">5DEAB76F9AB983D2</span>
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="h-8 text-xs font-mono border-slate-200 dark:border-zinc-800 hover:bg-slate-200/50 dark:hover:bg-zinc-800/50 dark:text-zinc-300"
              >
                <a
                  href="https://learn.microsoft.com/api/credentials/share/en-us/ErickReyes-2617/5DEAB76F9AB983D2?sharingId=B5DFFD39337F6614"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify
                </a>
              </Button>
            </div>
          </section>
        </div>

        <section className="space-y-6">
          <h3 className="text-sm font-mono tracking-widest uppercase text-slate-400 dark:text-zinc-500">
            Projects
          </h3>
          <Projects />
        </section>

        <section className="space-y-10">
          <TechStack />
        </section>
      </main>

      <footer className="max-w-2xl mx-auto px-6 pt-12 pb-24 text-center md:text-left">
        <hr className="border-slate-200 dark:border-zinc-800 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-serif text-sm text-slate-400 dark:text-zinc-500">
          <p>By @erick_reyes</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
