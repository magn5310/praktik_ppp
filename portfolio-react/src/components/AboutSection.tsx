import { type IconType } from "react-icons"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiAstro,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiGit,
  SiFigma,
} from "react-icons/si"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useLanguage } from "@/i18n/LanguageContext"

const skillIcons: Record<string, IconType> = {
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Vue": SiVuedotjs,
  "Astro": SiAstro,
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  "Tailwind CSS": SiTailwindcss,
  "Python": SiPython,
  "Flask": SiFlask,
  "Laravel": SiLaravel,
  "MySQL": SiMysql,
  "Node.js": SiNodedotjs,
  "Git": SiGit,
  "Figma": SiFigma,
}

interface IntroSectionProps {
  imageSrc: string
  imageAlt: string
}

export function IntroSection({ imageSrc, imageAlt }: IntroSectionProps) {
  const { ref, isInView } = useScrollAnimation()
  const { t } = useLanguage()

  return (
    <section ref={ref} className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            className="relative order-2 lg:order-1 pb-4 pr-4"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full relative aspect-3/4 object-cover grayscale hover:grayscale-0 transition-all duration-700 z-20"
              />

              <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent z-10" />
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
              {t("about.label")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              {t("about.title")}
            </h2>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                {t("about.paragraph1")}
              </p>
              <p>
                {t("about.paragraph2")}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">1+</div>
                <div className="text-sm text-muted mt-1">{t("about.yearsExperience")}</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">6+</div>
                <div className="text-sm text-muted mt-1">{t("about.projects")}</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted mt-1">{t("about.technologies")}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface TextBlockProps {
  label: string
  title: string
  children: React.ReactNode
  align?: "left" | "center"
}

export function TextBlock({ label, title, children, align = "left" }: TextBlockProps) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            {title}
          </h2>
          <div className="text-muted text-lg leading-relaxed space-y-6">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface SkillsBlockProps {
  label: string
  title: string
  skills: string[]
}

export function SkillsBlock({ label, title, skills }: SkillsBlockProps) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background-light border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 leading-tight max-w-3xl">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="p-6 border border-border hover:border-accent transition-colors group flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {skillIcons[skill] && (
                <span className="opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 text-accent">
                  {(() => { const Icon = skillIcons[skill]; return <Icon className="w-5 h-5" />; })()}
                </span>
              )}
              <span className="text-foreground group-hover:text-accent transition-colors font-medium">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
