import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Building clean,
          <br /> modern web experiences.
        </h1>
        <p className="text-lg opacity-70 max-w-xl mb-6">
          Frontend developer focused on performance, simplicity, and great user experience.
        </p>
        <a href="/resume.pdf" className="px-5 py-3 border rounded-xl inline-block hover:scale-105 transition">
          Download Resume
        </a>
      </section>

            {/* Skills */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {['Next.js', 'React', 'TypeScript', 'Tailwind'].map(skill => (
            <span key={skill} className="px-4 py-2 border rounded-xl text-sm hover:scale-105 transition">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Selected Work</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard title="Project One" desc="A polished application you built" />
          <ProjectCard title="Project Two" desc="Another clean project" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="opacity-70">your@email.com</p>
      </section>
    </main>
  )
}