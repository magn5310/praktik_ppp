import { motion } from "framer-motion"
import { ParticleConstellation } from "./ParticleConstellation"
import { TextScramble } from "./TextScramble"
import { useLanguage } from "@/i18n/LanguageContext"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <ParticleConstellation />

      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="text-accent text-sm md:text-base tracking-[0.3em] uppercase font-medium">
            <TextScramble text={t("hero.title")} delay={200} duration={800} />
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TextScramble text="Magnus" delay={400} duration={1000} className="block" />
          <TextScramble text="Robert" delay={600} duration={1000} className="block text-gradient" />
          <TextScramble text="Madsen" delay={800} duration={1000} className="block" />
        </motion.h1>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-6 items-start pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#kontakt"
            className="px-8 py-4 bg-accent text-background font-medium hover:bg-accent-hover transition-colors"
          >
            {t("hero.contactMe")}
          </a>
          <a
            href="#projekter"
            className="px-8 py-4 border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            {t("hero.viewProjects")}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
