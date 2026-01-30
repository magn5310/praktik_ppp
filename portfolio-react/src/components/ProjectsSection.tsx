import { motion } from "framer-motion"
import { toast } from "sonner"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { ArrowUpRight } from "lucide-react"

interface Project {
  title: string
  description: string
  url: string
  image: string
  tags: string[]
  outOfOrder?: boolean
}

const projects: Project[] = [
  {
    title: "Foofest",
    description: "Festival booking platform med React og Next.js",
    url: "https://foofest-forbedringer.vercel.app/",
    image: "/images/foofest.png",
    tags: ["React", "Next.js", "Superbase", "API"],
  },
  {
    title: "Cehofski",
    description: "Interaktivt website med moderne design",
    url: "https://beamish-moonbeam-46fcdc.netlify.app/",
    image: "/images/cehofski.png",
    tags: ["JavaScript", "CSS", "Animation"],
  },
  {
    title: "Omada Wine & Deli",
    description: "Restaurant website med booking system",
    url: "https://team12-omada.netlify.app/",
    image: "/images/omada.png",
    tags: ["Astro", "Tailwind", "Supabase"],
  },
  {
    title: "Sakura Festival",
    description: "Event website med japansk æstetik",
    url: "https://loquacious-squirrel-76a1bd.netlify.app/",
    image: "/images/sakura.png",
    tags: ["Astro", "CSS", "JavaScript"],
  },
  {
    title: "Web Eksamen",
    description: "Fullstack webapplikation med Flask og MySQL",
    url: "https://magnus00.pythonanywhere.com/",
    image: "/images/wolt-eksamen.png",
    tags: ["Python", "Flask", "MySQL"],
    outOfOrder: true,
  },
]

export function ProjectsSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="py-24 md:py-32 border-t border-border" id="projekter">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
            Udvalgte projekter
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const MotionTag = project.outOfOrder ? motion.div : motion.a

            return (
              <MotionTag
                key={project.title}
                {...(!project.outOfOrder && {
                  href: project.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                onClick={
                  project.outOfOrder
                    ? () =>
                        toast.error(
                          "This project is currently out of order and cannot be accessed.",
                        )
                    : undefined
                }
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group block ${project.outOfOrder ? "cursor-default" : ""}`}
              >
                <div className="relative overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-500">

                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />

                    {project.outOfOrder && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="bg-accent text-white font-bold text-lg px-8 py-2 -rotate-12 shadow-lg uppercase tracking-wider">
                          Out of Order
                        </span>
                      </div>
                    )}

                    {!project.outOfOrder && (
                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <span className="flex items-center gap-2 text-foreground font-medium">
                          Se projekt <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                    </div>
                    <p className="text-muted text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 border border-border text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionTag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
