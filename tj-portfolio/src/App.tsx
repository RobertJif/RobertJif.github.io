import './App.css'
import portfolio from './data/portfolio.json'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Nav name={portfolio.name} />
      <main>
        <Hero
          name={portfolio.name}
          title={portfolio.title}
          location={portfolio.location}
          yearsExperience={portfolio.yearsExperience}
          contact={portfolio.contact}
          cvUrl={portfolio.cvUrl}
        />
        <About about={portfolio.about} />
        <Experience
          experience={portfolio.experience}
          totalExperienceNote={portfolio.totalExperienceNote}
        />
        <Skills skills={portfolio.skills} />
        <Projects projects={portfolio.projects} />
        <Contact
          name={portfolio.name}
          contact={portfolio.contact}
          cvUrl={portfolio.cvUrl}
        />
      </main>
    </>
  )
}

export default App
