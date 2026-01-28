import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
     

      {/* Gradient orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="text-accent text-sm md:text-base tracking-[0.3em] uppercase font-medium">
            Webudvikler
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">Magnus</span>
          <span className="block text-gradient">Robert</span>
          <span className="block">Madsen</span>
        </motion.h1>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-6 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#kontakt"
            className="px-8 py-4 bg-accent text-background font-medium hover:bg-accent-hover transition-colors"
          >
            Kontakt mig
          </a>
          <a
            href="#projekter"
            className="px-8 py-4 border border-border text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            Se projekter
          </a>
        </motion.div>

       
      </div>
    </section>
  )
}
