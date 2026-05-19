import { 
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiSvelte, 
  SiJavascript, SiHtml5, SiPython, SiFastapi, 
  SiSpringboot, SiOpenjdk, SiNodedotjs, SiExpress, SiRedis, 
  SiHibernate, SiApachemaven, SiPostgresql, SiMysql, SiMongodb, 
  SiSqlite, SiDocker, SiKubernetes, SiGit, SiGithub, 
  SiGithubactions, SiPostman, SiJenkins, SiGraphql 
} from "react-icons/si";

const FRONTEND = [
  { name: "React", Icon: SiReact, color: "group-hover:text-[#61DAFB]" },
  { name: "TypeScript", Icon: SiTypescript, color: "group-hover:text-[#3178C6]" },
  { name: "Next.js", Icon: SiNextdotjs, color: "dark:group-hover:text-white group-hover:text-black" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
  { name: "Svelte", Icon: SiSvelte, color: "group-hover:text-[#FF3E00]" },
  { name: "JavaScript", Icon: SiJavascript, color: "group-hover:text-[#F7DF1E]" },
  { name: "HTML5", Icon: SiHtml5, color: "group-hover:text-[#E34F26]" },
  { name: "React Native", Icon: SiReact, color: "group-hover:text-[#61DAFB]" }
];

const BACKEND = [
  { name: "Python", Icon: SiPython, color: "group-hover:text-[#3776AB]" },
  { name: "FastAPI", Icon: SiFastapi, color: "group-hover:text-[#009688]" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "group-hover:text-[#6DB33F]" },
  { name: "Java", Icon: SiOpenjdk, color: "group-hover:text-[#007396]" },
  { name: "Node.js", Icon: SiNodedotjs, color: "group-hover:text-[#339933]" },
  { name: "Express", Icon: SiExpress, color: "dark:group-hover:text-white group-hover:text-black" },
  { name: "Redis", Icon: SiRedis, color: "group-hover:text-[#DC382D]" },
  { name: "Hibernate", Icon: SiHibernate, color: "group-hover:text-[#B5B5B5]" },
  { name: "Maven", Icon: SiApachemaven, color: "group-hover:text-[#C71A36]" }
];

const DATABASE = [
  { name: "PostgreSQL", Icon: SiPostgresql, color: "group-hover:text-[#4169E1]" },
  { name: "MySQL", Icon: SiMysql, color: "group-hover:text-[#4479A1]" },
  { name: "MongoDB", Icon: SiMongodb, color: "group-hover:text-[#47A248]" },
  { name: "SQLite", Icon: SiSqlite, color: "group-hover:text-[#003B57]" },
  { name: "GraphQL", Icon: SiGraphql, color: "group-hover:text-[#E10098]" }
];

const TOOLS = [
  { name: "Docker", Icon: SiDocker, color: "group-hover:text-[#2496ED]" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "group-hover:text-[#326CE5]" },
  { name: "Git", Icon: SiGit, color: "group-hover:text-[#F05032]" },
  { name: "GitHub", Icon: SiGithub, color: "dark:group-hover:text-white group-hover:text-black" },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "group-hover:text-[#2088FF]" },
  { name: "Postman", Icon: SiPostman, color: "group-hover:text-[#FF6C37]" },
  { name: "Jenkins", Icon: SiJenkins, color: "group-hover:text-[#D24939]" }
];

interface TechItem {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const TechGroup = ({ title, items }: { title: string; items: TechItem[] }) => (
  <div className="space-y-4 p-6 rounded-2xl border border-slate-200/60 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-800/10 backdrop-blur-sm shadow-sm dark:shadow-none">
    <h4 className="text-sm font-sans font-semibold text-slate-800 dark:text-zinc-200 tracking-tight">
      {title}
    </h4>
    <div className="flex flex-wrap gap-2.5">
      {items.map(({ name, Icon, color }) => (
        <div 
          key={name}
          className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100/60 dark:bg-zinc-800/30 border border-slate-200/40 dark:border-zinc-800/40 transition-all duration-300 hover:border-slate-300 dark:hover:border-zinc-700 hover:scale-[1.02] hover:bg-white dark:hover:bg-zinc-800/80"
        >
          <Icon 
            className={`h-4 w-4 text-slate-400 transition-all duration-300 group-hover:scale-110 ${color}`} 
          />
          <span className="font-mono text-xs text-slate-500 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-zinc-200 transition-colors">
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function TechStack() {
  return (
    <section className="space-y-10 animate-fade-in">
      <div className="space-y-1.5">
        <h3 className="text-xs font-mono tracking-widest uppercase text-slate-400 dark:text-zinc-500">
          Tech Stack & Tools
        </h3>
        <p className="text-sm text-slate-500 dark:text-zinc-400">
          Technical ecosystem focused on scalability, performance, and automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TechGroup title="Frontend Architecture" items={FRONTEND} />
        <TechGroup title="Backend Ecosystem" items={BACKEND} />
        <TechGroup title="Databases & Storage" items={DATABASE} />
        <TechGroup title="DevOps, Cloud & Tools" items={TOOLS} />
      </div>
    </section>
  );
}