import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/i18n/LanguageContext"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "da" ? "en" : "da")
  }

  return (
    <motion.header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""}`} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
      <nav className="container mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-foreground font-medium tracking-wide hover:text-accent transition-colors">
            MRM
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#projekter" className="text-sm text-muted hover:text-foreground transition-colors">
              {t("header.projects")}
            </a>
            <a href="#kontakt" className="text-sm text-muted hover:text-foreground transition-colors">
              {t("header.contact")}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#kontakt" className="text-sm uppercase text-accent hover:text-accent-hover transition-colors">
              <span className="bg-accent rounded-full h-2 w-2 inline-block animate-pulse mr-1"></span>
              {t("header.lookingForWork")}
            </a>
            <button onClick={toggleLanguage} className="text-md cursor-pointer p-1 hover:text-accent transition-colors font-bold">
              {language === "da" ? "DA" : "EN"}
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
