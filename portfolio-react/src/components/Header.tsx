import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-foreground font-medium tracking-wide hover:text-accent transition-colors">
            MRM
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#projekter" className="text-sm text-muted hover:text-foreground transition-colors">
              Projekter
            </a>
            <a href="#kontakt" className="text-sm text-muted hover:text-foreground transition-colors">
              Kontakt
            </a>
          </div>

          <a
            href="#kontakt"
            className="text-sm text-accent hover:text-accent-hover transition-colors"
          >
            Ledig til praktik
          </a>
        </div>
      </nav>
    </motion.header>
  )
}
