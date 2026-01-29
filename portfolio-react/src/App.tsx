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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      <main>
        <Hero />

        <IntroSection
          imageSrc="/images/IMG_9610.jpg"
          imageAlt="Magnus Robert Madsen"
        />

        <TextBlock
          label="Jobsøgende"
          title="Hvad søger jeg?"
        >
          <p>
            Jeg er nyuddannet bachelor i webudvikling med hands-on erfaring fra
            praktik hos ZeroNorth og et års studiejob hos Accelerace. Nu søger
            jeg et job, hvor jeg kan bruge min erfaring og fortsætte med at vokse
            som udvikler.
          </p>
          <p>
            Det vigtigste for mig er et sted med godt kollegaskab, hvor jeg kan
            fordybe mig og dygtiggøre mig. Jeg er åben for både frontend- og
            fullstack-roller og motiveret for at lære nyt hver dag.
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
            Hos ZeroNorth arbejdede jeg som frontend-udvikler i React, hvor jeg
            blandt andet erstattede styled components med Tailwind CSS og byggede
            moduler til dataeksport. Samarbejdet i et professionelt udviklerteam
            gav mig værdifuld erfaring med CI, tests og design meetings.
          </p>
          <p>
            Hos Accelerace arbejdede jeg i over et år med fullstack-udvikling i
            Laravel, Vue og MySQL. Her løste jeg alt fra bugs og mindre features
            til opgaver med databasekald og databehandling, og jeg skrev tests
            for at sikre systemets stabilitet.
          </p>
          <p>
            På min bachelor har jeg desuden arbejdet med Flask, Python, cybersecurity
            og udviklingsmiljøer med fokus på kodekvalitet og automatisering.
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
