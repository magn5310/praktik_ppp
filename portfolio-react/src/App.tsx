import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { IntroSection, TextBlock, SkillsBlock } from "./components/AboutSection"
import { ProjectsSection } from "./components/ProjectsSection"
import { ContactSection } from "./components/ContactSection"

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
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />

        <IntroSection
          imageSrc="/images/IMG_9610.jpg"
          imageAlt="Magnus Robert Madsen"
        />

        <TextBlock
          label="Praktik"
          title="Hvad søger jeg?"
        >
          <p>
            I min kommende praktik søger jeg muligheden for at koble skolebænken
            sammen med den virkelige verden. Jeg glæder mig til at opleve hvordan
            en hverdag og et arbejdsliv kan se ud.
          </p>
          <p>
            Det vigtigeste for mig er at lære en hel masse, få mulighed for fordybelse
            og dygtiggøre mig. Om det er nye eller velkendte ting, er knap så vigtigt,
            det afgørende er, at jeg får en masse erfaring.
          </p>
        </TextBlock>

        <SkillsBlock
          label="Teknologier"
          title="Værktøjer jeg arbejder med"
          skills={skills}
        />

        <TextBlock
          label="Erfaring"
          title="Hvad har jeg lavet?"
        >
          <p>
            Jeg har, samtidig med studiet, arbejdet hos Accelerace i lidt over et år.
            Her har jeg prøvet kræfter med Vue, Laravel og Inertia i et professionelt
            udviklingsmiljø.
          </p>
          <p>
            På webudvikling har jeg arbejdet med Flask i Python samt MySQL, med
            tilkoblet teori om NoSQL og graph databaser. Derudover har jeg valgt
            Cybersecurity for Web developers som valgfag samt Development Environments
            hvor kode kvalitet og automatisering er i fokus.
          </p>
          <p>
            Jeg er en teamplayer, der kan lide at samarbejde, men jeg trives også
            glimrende med selvstændige opgaver. Der findes læring i alle opgaver,
            store som små.
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
            Designet & udviklet med React + Tailwind
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
