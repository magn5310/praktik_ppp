import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="py-32 md:py-48 border-t border-border" id="kontakt">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase mb-6 block">
            Lad os tale sammen
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Klar til at starte
            <br />
            <span className="text-gradient">et samarbejde?</span>
          </h2>

          <p className="text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Jeg søger job som webudvikler og er klar til at bidrage med engagement,
            nysgerrighed og teknisk kunnen.
          </p>

          <motion.a
            href="mailto:magnusmadsen2000@hotmail.com"
            className="inline-flex items-center gap-3 text-sm xs:text-base sm:text-2xl md:text-3xl font-bold text-foreground hover:text-accent transition-colors group whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            magnusmadsen2000@hotmail.com
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 pt-16 border-t border-border"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="tel:+4522786847"
              className="text-muted hover:text-foreground transition-colors"
            >
              +45 22 78 68 47
            </a>
            <span className="hidden sm:block w-1 h-1 bg-border rounded-full" />
            <a
              href="https://www.linkedin.com/in/magnus-madsen-3156a8289/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <span className="hidden sm:block w-1 h-1 bg-border rounded-full" />
            <a
              href="https://github.com/magn5310"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
