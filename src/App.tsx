import {Navbar} from './components/navbar'


function App() {
  return (
    <>
      <Navbar />
        <main className="mx-auto max-w-3xl px-6">
          {/* Hero (coming next) */}
          <section className="py-32">
            <h1 className="font-serif text-6xl">Your Name</h1>
            <p className="mt-4 text-muted">Hero goes here</p>
          </section>

          <section id="experience" className="scroll-mt-24 py-16">
            <h2 className="font-serif text-3xl">Experience</h2>
            <div className="h-96" />
          </section>

          <section id="projects" className="scroll-mt-24 py-16">
            <h2 className="font-serif text-3xl">Projects</h2>
            <div className="h-96" />
          </section>

          <section id="competitions" className="scroll-mt-24 py-16">
            <h2 className="font-serif text-3xl">Competitions</h2>
            <div className="h-96" />
          </section>
        </main>

    </>
  )
}


export default App
