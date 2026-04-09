import { Toaster } from "sonner"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { IntroSection, TextBlock, SkillsBlock } from "./components/AboutSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { ContactSection } from "./components/ContactSection"
import { AdminDashboard } from "./components/admin/AdminDashboard"
import { useLanguage } from "./i18n/LanguageContext"
import { useHashRoute } from "./hooks/useHashRoute"
import { useVisitTracker } from "./hooks/useVisitTracker"

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Vue",
  "Astro",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Python",
  "Flask",
  "Laravel",
  "MySQL",
  "Node.js",
  "Git",
  "Figma",
]

function App() {
  const { t } = useLanguage()
  const route = useHashRoute()
  useVisitTracker()

  if (route === "/admin") {
    return (
      <>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#151515",
              color: "#C9A227",
              border: "1px solid #222222",
            },
          }}
        />
        <AdminDashboard />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#151515",
            color: "#C9A227",
            border: "1px solid #222222",
          },
        }}
      />
      <Header />

      <main>
        <Hero />

        <IntroSection
          imageSrc="/images/IMG_9610.jpg"
          imageAlt="Magnus Robert Madsen"
        />

        <TextBlock
          label={t("jobSeeking.label")}
          title={t("jobSeeking.title")}
        >
          <p>
            {t("jobSeeking.paragraph1")}
          </p>
          <p>
            {t("jobSeeking.paragraph2")}
          </p>
        </TextBlock>

        <SkillsBlock
          label={t("skills.label")}
          title={t("skills.title")}
          skills={skills}
        />

        <TextBlock
          label={t("experience.label")}
          title={t("experience.title")}
        >
          <p>
            {t("experience.paragraph1")}
          </p>
          <p>
            {t("experience.paragraph2")}
          </p>
          <p>
            {t("experience.paragraph3")}
          </p>
        </TextBlock>

        <ProjectsSection />

        <ContactSection />
      </main>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Magnus Robert Madsen
          </span>
          <span className="text-sm text-muted">
            {t("footer.designedWith")}
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
